import json
import os
registryFolder = '..\\..\\local\\kubejs\\export\\registries'
outFolder = 'modpack_info'
filenames= [
	'item',
	'block',
	'entity_type',
	'enchantment'
]

if __name__ == '__main__':
	for filename in filenames:
		info = json.load(open(os.path.join(registryFolder, filename+".json"), 'r'))
		sortedKeys = list(info.keys())
		sortedKeys.sort()
		with open(os.path.join(outFolder, filename+'.txt'), 'w') as f:
			for sortedKey in sortedKeys:
				f.write(sortedKey+'\n')
