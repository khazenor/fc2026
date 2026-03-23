from src import modGroupings
from src import dependencies

def getFileGroupings():
	allModInfo = dependencies.getDependenciesWithConfigs()
	modGroups = modGroupings.getModGroupings()
	fileGroups = []
	for modGroup in modGroups:
		fileGroup = []
		for modId in modGroup:
			if modId in allModInfo:
				fileGroup.append(allModInfo[modId][dependencies.modFilenameKey])
		fileGroups.append(fileGroup)
	return fileGroups
