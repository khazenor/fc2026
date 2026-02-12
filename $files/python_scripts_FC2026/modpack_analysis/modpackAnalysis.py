import os
import zipfile
import json

modsFolder = os.path.join('..', '..', 'mods')
extractsFolder = os.path.join('modpack_analysis', 'extracts')
jarExt = '.jar'
cacheFolder = os.path.join('modpack_analysis', 'cache')

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
