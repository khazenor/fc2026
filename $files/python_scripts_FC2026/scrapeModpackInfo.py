import json
import os
outFolder = 'modpack_info'
foldersAndFilenames = {
	'..\\..\\local\\kubejs\\export\\registries': [
		'item',
		'block',
		'entity_type',
		'enchantment'
	],
	'..\\..\\local\\kubejs\\export\\registries\\worldgen': [
		'biome'
	]
}

if __name__ == '__main__':
	for folder in foldersAndFilenames.keys():
		for filename in foldersAndFilenames[folder]:
			info = json.load(open(os.path.join(folder, filename+".json"), 'r'))
			sortedKeys = list(info.keys())
			sortedKeys.sort()
			with open(os.path.join(outFolder, filename+'.txt'), 'w') as f:
				for sortedKey in sortedKeys:
					f.write(sortedKey+'\n')
