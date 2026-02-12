import os
import shutil
import zipfile

modsFolder = os.path.join('..', '..', 'mods')
extractsFolder = os.path.join('modpack_analysis', 'extracts')
zipExt = '.zip'

def extractAllMods():
	_removeExtractedModFolders()
	modZipList = _getModZipList()
	for modZipName in modZipList:
		zipfile.ZipFile.extractall()


def _removeExtractedModFolders():
	modZipList = _getModZipList()
	for folderName in os.listdir(extractsFolder):
		modZipName = folderName + zipExt
		if modZipName not in modZipList:
			shutil.rmtree(os.path.join(extractsFolder, folderName))

def _getModZipList():
	filenames = os.listdir(modsFolder)
	modlist = []
	for filename in filenames:
		if zipExt in filename:
			modlist.append(filename)
	return modlist
