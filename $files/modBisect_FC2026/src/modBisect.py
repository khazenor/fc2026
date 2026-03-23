from src import fileGroupings
from src import config
import random
import json
import os

disabledStr = '.disabled'
fileGroupingCacheFilename = 'fileGroupings.json'
badGroupOnesCacheFilename = 'badGroupOnes.json'

def modBisect(alwaysEnabledModIdList=[]):
	allFileGroups = fileGroupings.getFileGroupings()

	enabledGroups = fileGroupsWithSubstrings(alwaysEnabledModIdList, allFileGroups)
	if len(enabledGroups) > 0:
		print('always enabled groups:', enabledGroups)
	mysteryGroups = listSubtract(allFileGroups, enabledGroups)
	test([], mysteryGroups, .5)
	enableGroups(allFileGroups)

def test(goodGroups, mysteryGroups, splitRatio):
	if len(mysteryGroups) > 1:
		badGroupOnes = []
		if os.path.exists(badGroupOnesCacheFilename):
			badGroupOnes = json.load(open(badGroupOnesCacheFilename, 'r'))
		group1, group2 = splitListRandom(mysteryGroups, splitRatio)
		while group1 in badGroupOnes:
			group1, group2 = splitListRandom(mysteryGroups, splitRatio)
		# test group 1
		print(f"Group1: ")
		disableAndEnableMods(group2, goodGroups, group1)

		firstHalfResponse = ''
		while firstHalfResponse != 'yes' and firstHalfResponse != 'no':
			firstHalfResponse = askIfFeatureIsWorking()
			if firstHalfResponse == 'quit':
				return
			if firstHalfResponse == 'bad':
				badGroupOnes.append(group1)
				json.dump(badGroupOnes, open(badGroupOnesCacheFilename, 'w'), indent=2)
				test(goodGroups, mysteryGroups, .5)

			if firstHalfResponse == 'reroll':
				test(goodGroups, mysteryGroups, .5)

		if firstHalfResponse == 'yes':
			# goodGroups += group1
			# test group 2
			print("Group2:")
			disableAndEnableMods(group1, goodGroups, group2)
			secondHalfResponse = ''
			while secondHalfResponse != 'yes' and secondHalfResponse != 'no':
				secondHalfResponse = askIfFeatureIsWorking()
				if secondHalfResponse == 'quit':
					return
				if secondHalfResponse == 'reroll':
					print('cannot resole on group 2')
					secondHalfResponse = askIfFeatureIsWorking()

			if secondHalfResponse == 'yes':
				print("Can't find issue, both split parts are issue free, trying again with different split")
				test(goodGroups, mysteryGroups, splitRatio + .1)
			else:
				test(goodGroups, group2, .5)
		else:
			# first halp response is no
			# goodGroups += group1
			# test group 2
			print("Group2: (first half fail)")
			disableAndEnableMods(group1, goodGroups, group2)
			secondHalfResponse = ''
			while secondHalfResponse != 'yes' and secondHalfResponse != 'no':
				secondHalfResponse = askIfFeatureIsWorking()
				if secondHalfResponse == 'quit':
					return
				if secondHalfResponse == 'reroll':
					print('cannot resole on group 2')
					secondHalfResponse = askIfFeatureIsWorking()

			if secondHalfResponse == 'no':
				print("Both split parts have issues, trying again with different split")
				test(goodGroups, mysteryGroups, splitRatio - .1)
			else:
				test(goodGroups, group1, .5)
	else:
		print(f"Found Problem Mod Group: {mysteryGroups[0]}")

def disableAndEnableMods(disable, good, testing):
	print(f"Disable({len(disable)}): {disable}")
	disableGroups(disable)
	print(f"Good({len(good)}): {good}")
	# enableGroups(good)
	disableGroups(good)
	print(f"Testing({len(testing)}): {testing}")
	enableGroups(testing)
def askIfFeatureIsWorking():
	response = input("Is the feature working? ")
	if haveSubstrings(['stop', 'quit'], response):
		return 'quit'
	elif haveSubstrings(['reroll', 'roll'], response):
		return 'reroll'
	elif haveSubstrings(['bad'], response):
		return 'bad'
	elif haveSubstrings(['yes'], response):
		return 'yes'
	elif haveSubstrings(['no'], response):
		return 'no'
	else:
		return 'error'

def haveSubstrings(subStrings, targetString):
	for subString in subStrings:
		if subString in targetString.lower().strip():
			return True
	return False

def disableGroups(fileGroups):
	for fileGroup in fileGroups:
		disableMods(fileGroup)

def enableGroups(filegroups):
	for fileGroup in filegroups:
		enableMods(fileGroup)

def disableMods(filenames):
	for filename in filenames:
		modDir = os.path.join(config.modFolder, filename)
		modDirNoDisable = modDir.replace(disabledStr, "")
		if os.path.exists(modDir) and disabledStr not in modDir:
			os.rename(modDir, modDir+disabledStr)
		elif os.path.exists(modDirNoDisable) and disabledStr not in modDirNoDisable:
			os.rename(modDirNoDisable, modDir)
		else:
			pass

def enableMods(filenames):
	for filename in filenames:
		modDir = os.path.join(config.modFolder, filename)
		if os.path.exists(modDir) or os.path.exists(modDir+disabledStr):
			if os.path.exists(modDir):
				srcDir = modDir
			else:
				srcDir = modDir+disabledStr
			os.rename(srcDir, modDir.replace(disabledStr, ""))

def splitListRandom(targetList, splitRatio):
	group1 = []
	group2 = []

	for group in targetList:
		if int(random.random() * 2):
			group1.append(group)
		else:
			group2.append(group)
	targetGroup1Len = int(len(targetList) * splitRatio)
	while len(group1) > targetGroup1Len:
		group2.append(group1.pop(0))
	while len(group1) < targetGroup1Len:
		group1.append(group2.pop(0))

	if len(group1) == 0 or len(group2) == 0:
		return splitListRandom(targetList)

	return group1, group2

def listSubtract(mainList, subList):
	differenceList = []
	for elm in mainList:
		if elm not in subList:
			differenceList.append(elm)
	return differenceList
def fileGroupsWithSubstrings(modSubstrings, allFileGroups):
	fileGroups = []
	for modSubstring in modSubstrings:
		for fileGroup in allFileGroups:
			for filename in fileGroup:
				if modSubstring.lower() in filename.lower():
					fileGroups.append(fileGroup)
					break
	return fileGroups
