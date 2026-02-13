import os
import shutil
import zipfile
import json

modpackModsFolder = os.path.join('..', '..', 'mods')
additionModsFolder = os.path.join('modpack_analysis', 'additional_mods')
fetchedModsFolder = os.path.join('modpack_analysis', 'fetched_mods')

extractsFolder = os.path.join('modpack_analysis', 'extracts')
jarExt = '.jar'
cacheFolder = os.path.join('modpack_analysis', 'cache')

def getNames(modPaths, morePaths):
	returnNames = []
	for mainFolderPath in modPaths:
		name = ''
		for modPath in mainFolderPath + morePaths:
			if len(name) > 0:
				name += '/'
			name += modPath
		returnNames.append(name)
	return returnNames

def getMergedLangFile():
	paths = getPaths('assets')
	mergedLangObj = {}
	for modFilename in paths.keys():
		cacheDir = os.path.join(cacheFolder, 'lang', modFilename.replace('.jar', '.json'))

		if os.path.exists(cacheDir):
			cache = json.load(open(cacheDir, 'r'))
			mergedLangObj.update(cache)
		else:
			modPaths = paths[modFilename]
			modLang = {}
			with zipfile.ZipFile(os.path.join(modpackModsFolder, modFilename)) as modZip:
				for name in getNames(modPaths, ['lang', 'en_us.json']):
					if name in modZip.namelist():
						fileOpen = modZip.open(name, 'r')
						fileRead = fileOpen.read().decode('utf-8')
						fileOpen.close()

						langObj = json.decoder.JSONDecoder(strict=False).decode(fileRead)
						modLang.update(langObj)
			json.dump(modLang, open(cacheDir, 'w', encoding='utf-8'), indent=2)
			mergedLangObj.update(modLang)
	return mergedLangObj

def getPaths(mainFolder):
	cacheFilePath = os.path.join(cacheFolder, mainFolder+'.json')
	if os.path.exists(cacheFilePath):
		cache = json.load(open(cacheFilePath, 'r'))
	else:
		cache = {}
	lookedUpPaths = {}
	modFiles = os.listdir(modpackModsFolder)
	for filename in modFiles:
		if filename in cache.keys():
			lookedUpPaths[filename] = cache[filename]
		else:
			if jarExt in filename:
				print(f"reading {filename}...")
				modPath = zipfile.Path(os.path.join(modpackModsFolder, filename))

				# main folders
				for mainFolderPath in modPath.iterdir():
					mainFolderName = mainFolderPath.name
					if mainFolderName == mainFolder:
						for modIdPath in mainFolderPath.iterdir():
							lookedUpPaths.setdefault(filename, []).append(
								[mainFolderName, modIdPath.name]
							)

	json.dump(lookedUpPaths, open(cacheFilePath, 'w'), indent=2)
	return lookedUpPaths

def fetchMods():
	_removeOldFetchedMods()
	for modsFolder in [modpackModsFolder, additionModsFolder]:
		for modFilename in os.listdir(modsFolder):
			if modFilename not in os.listdir(fetchedModsFolder):
				shutil.copy(os.path.join(modsFolder, modFilename), fetchedModsFolder)


def _removeOldFetchedMods():
	allModFilenames = _getAllModFilenames()
	for modFilename in os.listdir(fetchedModsFolder):
		if modFilename not in allModFilenames:
			shutil.rmtree(os.path.join(fetchedModsFolder, modFilename))

def _getAllModFilenames():
	modFilenames = []
	for modsFolder in [modpackModsFolder, additionModsFolder]:
		for modFilename in os.listdir(modsFolder):
			modFilenames.append(modFilename)
	return modFilenames
