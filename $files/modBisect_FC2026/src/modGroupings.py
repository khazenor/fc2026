from src import dependencies
import os
import json

modGroupingCacheFilename = 'modGroupings.json'
def getModGroupings():
	if os.path.exists(modGroupingCacheFilename):
		modGroupingListPrev = json.load(open(modGroupingCacheFilename))
		modGroupingList = updateModGroupingList(modGroupingListPrev)
	else:
		modGroupingList = newModGroupings()

	json.dump(modGroupingList, open(modGroupingCacheFilename, 'w'), indent=2)
	return modGroupingList

def updateModGroupingList(modGroupingList):
	curMods = dependencies.getDependenciesWithConfigs()
	updatedModGroupings = modGroupingList.copy()
	for modId in curMods:
		if not modIdInGroupingList(modId, modGroupingList):
			groupToAdd = [modId] + curMods[modId][dependencies.dependenciesKey]
			updatedModGroupings.append(groupToAdd)
	updatedModGroupingsClean = removeSubSets(updatedModGroupings)
	return updatedModGroupingsClean

def modIdInGroupingList(modId, modGroupingList):
	for modGrouping in modGroupingList:
		if modId in modGrouping:
			return True
	return False

def newModGroupings():
	groupsWithSubsets = modGroupingsWithSubSets()

	modGroupsing = removeSubSets(groupsWithSubsets)

	return modGroupsing

def removeSubSets(groupsWithSubsetsInput):
	groupsWithSubsets = groupsWithSubsetsInput.copy()
	while haveSubSet(groupsWithSubsets):
		subset = findSubSet(groupsWithSubsets)
		groupsWithSubsets.remove(subset)

	return groupsWithSubsets


def haveSubSet(modnameGroups):
	return findSubSet(modnameGroups) != -1

def findSubSet(modnameGroups):
	for modnameGroup1 in modnameGroups:
		if len(modnameGroup1) == 0:
			return modnameGroup1
		for modnameGroup2 in modnameGroups:
			if isSubSet(modnameGroup1, modnameGroup2):
				return modnameGroup2
	return -1

def isSubSet(targetList, checkList):
	if targetList == checkList:
		return False
	for checkMod in checkList:
		if checkMod not in targetList:
			return False
	return True

def modGroupingsWithSubSets():
	allModDict = dependencies.getDependenciesWithConfigs()

	modNames = []
	for modId in allModDict:
		modNames.append(modWithDependencies(modId, allModDict))

	modnames = []
	for modnameGroup in modNames:
		modnames.append(modnameGroup)
	return modnames
def modWithDependencies(modId, allModsDict):
	if modId in allModsDict:
		modDepends = allModsDict[modId][dependencies.dependenciesKey]
		if len(modDepends) == 0:
			return [modId]
		else:
			otherDepends = []
			for dependId in modDepends:
				otherDepends += modWithDependencies(dependId, allModsDict)
			return [modId] + otherDepends
	else:
		return []
