from lib import kubejs
from lib import util
from src import const
import os

def tooltip(fishPrice, numToSell, name, plural):
	return [
		f'You can sell {numToSell} of these {name}{plural}',
		f'for {fishPrice} tickets'
	]

def generateSellingRecipe(itemPrices, numberToSell, name):
	recipeContent = ""
	for itemId in itemPrices:
		recipeContent += kubejs.shapeless(
			const.priceItem,
			kubejs.multipleArray(itemId, numberToSell),
			itemPrices[itemId]
		)
	util.makeFolders([const.serverScripts()])
	with open(os.path.join(const.serverScripts(), f'{name}_selling_recipes.js'), 'w') as sellingFile:
		sellingFile.write(kubejs.recipeFileContent(recipeContent))

def generateTooltips(itemPrices, numberToSell, name, plural):
	fishByPrice = util.invertDict(itemPrices)
	tooltipContent = ""
	for fishPrice in fishByPrice:
		tooltipContent += kubejs.eventAddTranslatedTooltips(
			fishByPrice[fishPrice],
			tooltip(fishPrice, numberToSell, name, plural)
		)
	with open(os.path.join(const.clientScripts(), f'{name}_selling_tooltips.js'), 'w') as f:
		f.write(kubejs.tooltipFileContent(tooltipContent))

def generateCraftingSellRecipes(itemPrices, numberToSell, name, plural):
	generateSellingRecipe(itemPrices, numberToSell, name)
	generateTooltips(itemPrices, numberToSell, name, plural)
