from lib import util
from lib import stringCleaning
import os
import json

def remakeDataPack(rootFolder, packName):
	util.deleteFolder(packFolder(rootFolder, packName))
	createDataPack(rootFolder, packName)

def createDataPackIfNotExist(rootFolder, packName):
	if os.path.exists(packFolder(rootFolder, packName)):
		createDataPack(rootFolder, packName)
def createDataPack(rootFolder, packName):
	util.makeFolders([dataFolder(rootFolder, packName)])
	writePackMcmeta(rootFolder, packName)

def writePackMcmeta(rootFolder, packName):
	json.dump(
		{
			"pack": {
				"pack_format": 50,
				"supported_formats": [50],
				"description": [{"text": packName,"color":"gold"}]
			}
		},
		open(os.path.join(
			packFolder(rootFolder, packName),
			'pack.mcmeta'
		), 'w'),
		indent=2
	)

def packFolder(rootFolder, packName):
	return os.path.join(
		rootFolder,
		stringCleaning.cleanedNameStr(packName)
	)

def dataFolder(rootFolder, packName):
	return os.path.join(
		packFolder(rootFolder, packName),
		'data'
	)