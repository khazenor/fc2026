from lib import farmingForBlockheads
from market_gen import marketShop
import json

maxLevelCost = 32
currencyId = "kubejs:miles_ticket"
enchantedBookId = 'minecraft:enchanted_book'

def generateEnchantmentMarket():
	categoryKey = 'enchantments'
	farmingForBlockheads.writeCategoryFile(
		"Enchantment Book Store",
		enchantedBookId,
		categoryKey,
		30
	)
	for enchantmentId in marketShop.enchantments:
		maxLevel = marketShop.enchantments[enchantmentId]
		curLevel = maxLevel
		curPrice = maxLevelCost
		while curLevel > 0:
			farmingForBlockheads.writeEntry(
				enchantedBookId,
				1,
				currencyId,
				curPrice,
				categoryKey,
				component=enchantmentComponents(enchantmentId, curLevel)
			)
			curLevel -= 1
			curPrice = int(curPrice / 2)

def enchantmentComponents(enchantmentId, level):
	components = [{ "translate": enchantmentTransFromId(enchantmentId) }]
	if level > 1:
		components.append({ "text": f" {level}"})
	return {
		"minecraft:stored_enchantments": {
			"levels": {enchantmentId: level}
		},
		"minecraft:custom_name": json.dumps(components)
	}

def enchantmentTransFromId(enchantmentId):
	return f"enchantment.{enchantmentId.replace(':', '.')}"

# reference
# {
#   "type": "farmingforblockheads:market",
#   "category": "farmingforblockheads:flora",
#   "preset": "farming_crossing:kubejsmiles_ticket_4",
#   "result": {
#     "item": "minecraft:enchanted_book",
#     "components": {
#       "minecraft:stored_enchantments": {
#         "levels": {"minecraft:wind_burst": 3}
#       },
#       "minecraft:custom_name": "[{\"translate\": \"enchantment.minecraft.wind_burst\"}, {\"text\": \" 3\"}]"
#     }
#   }
# }
