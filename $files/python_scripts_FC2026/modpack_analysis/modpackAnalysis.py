import os
import zipfile
import json

modsFolder = os.path.join('..', '..', 'mods')
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
			with zipfile.ZipFile(os.path.join(modsFolder, modFilename)) as modZip:
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
	for filename in os.listdir(modsFolder):
		print(f"reading {filename}...")
		if filename in cache.keys():
			lookedUpPaths[filename] = cache[filename]
		else:
			if jarExt in filename:
				path = zipfile.Path(os.path.join(modsFolder, filename))

				# main folders
				for mainFolderPath in path.iterdir():
					mainFolderName = mainFolderPath.name
					if mainFolderName == mainFolder:
						for modIdPath in mainFolderPath.iterdir():
							lookedUpPaths.setdefault(filename, []).append(
								[mainFolderName, modIdPath.name]
							)
	json.dump(lookedUpPaths, open(cacheFilePath, 'w'), indent=2)
	return lookedUpPaths
