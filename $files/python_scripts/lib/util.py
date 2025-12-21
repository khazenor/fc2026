import os
import shutil
import json

jsonCache = {}

def loadJson(fileDir):
	if fileDir in jsonCache:
		return jsonCache[fileDir]
	if os.path.exists(fileDir):
		jsonObj = json.load(open(fileDir, 'r', encoding='utf-8'))
		jsonCache[fileDir] = jsonObj
		return jsonObj
	else:
		return {}

def dumpJson(content, fileDir):
	json.dump(
		content,
		open(fileDir, 'w', encoding='utf-8'),
		indent=2,
		sort_keys=True,
		ensure_ascii=False
	)

def invertDict(parentToChild):
	childToParent = {}
	for parent in parentToChild:
		child = parentToChild[parent]
		if isinstance(child, list):
			addItems = child
		else:
			addItems = [child]

		for addItem in addItems:
			if addItem in childToParent.keys():
				childToParent[addItem].append(parent)
			else:
				childToParent[addItem] = [parent]
	return childToParent

def addToDictList(dictList, key, value):
	if key in dictList.keys():
		dictList[key].append(value)
	else:
		dictList[key] = [value]

def addToDictString(dictString, key, strValue):
	strLine = f'{strValue}\n'
	if key in dictString:
		dictString[key] += strLine
	else:
		dictString[key] = strLine

def appendToSetList(setList, item):
	if item not in setList:
		setList.append(item)

def mergeDicts(dict1, dict2):
	mergedDict = dict1.copy()
	mergedDict.update(dict2)
	return mergedDict

def stringHasSubstringFromList(testString, substrings):
	for substring in substrings:
		if substring in testString:
			return True
	return False

def defaultDict(dictVar, tryKey, default):
	if tryKey in dictVar:
		return dictVar[tryKey]
	else:
		return default

def removeFiles(folder):
	if os.path.exists(folder):
		for filename in os.listdir(folder):
			os.remove(os.path.join(folder, filename))

def makeFolders(folderDirs):
	for folderDir in folderDirs:
		if not os.path.exists(folderDir):
			os.makedirs(folderDir)

def deleteFolder(folderDir):
	if os.path.exists(folderDir):
		shutil.rmtree(folderDir)

def indexFileIfFileAlreadyExists(fileRoot, fileExt):
	if os.path.exists(f"{fileRoot}{fileExt}"):
		idx = 1
		while os.path.exists(f"{fileRoot}_{idx}{fileExt}"):
			idx += 1
		return f"{fileRoot}_{idx}{fileExt}"
	else:
		return f"{fileRoot}{fileExt}"

def zipAndReplaceFolder(folderDir):
	shutil.make_archive()