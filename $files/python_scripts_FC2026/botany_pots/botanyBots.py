import const
import os
import json
from lib import stringCleaning

cropFolder = os.path.join(const.kubejs(), 'data', 'botanypots', 'recipe', 'farming_crossing', 'crop')
lootFolder = os.path.join(const.kubejs(), 'data', 'botanypots', 'loot_table', 'blocks')

def fileAndLootName(seedId):
	return stringCleaning.cleanedNameStr(seedId)
def writeSeedJson(seedId, cropId, blockId, soilTypeTag="botanypots:soil/dirt"):
	filename = fileAndLootName(seedId)
	if not os.path.exists(cropFolder):
		os.makedirs(cropFolder)
	json.dump(
		defaultSeedDict(seedId, blockId, soilTypeTag),
		open(os.path.join(cropFolder, filename + ".json"), 'w'),
		indent=2
	)
	if not os.path.exists(lootFolder):
		os.makedirs(lootFolder)
	json.dump(
		defaultCropDict(cropId),
		open(os.path.join(lootFolder, filename + ".json"), 'w'),
		indent=2
	)

def defaultSeedDict(seedId, blockId, soilTypeTag):
	return {
  "bookshelf:load_conditions": [
    {
      "type": "bookshelf:block_exists",
      "values": [
        blockId
      ]
    }
  ],
  "type": "botanypots:block_derived_crop",
  "block": blockId,
  "soil": {
    "tag": soilTypeTag
  },
  "input": {
    "item": seedId
  },
  "drops": [
    {
      "type": "botanypots:loot_table",
      "table_id": f"botanypots:blocks/{fileAndLootName(seedId)}"
    }
  ]
}

def defaultCropDict(cropId):
	return {
		"type": "minecraft:block",
		"functions": [
			{
				"function": "minecraft:explosion_decay"
			}
		],
		"pools": [
			{
				"bonus_rolls": 0.0,
				"entries": [
					{
						"type": "minecraft:alternatives",
						"children": [
							{
								"type": "minecraft:item",
								"name": cropId
							}
						]
					}
				],
				"rolls": 1.0
			}
		]
	}
