from lib import kubejs
from lib import fcTrans
import const
from quests import questCollectionReader
import os

craftOutputNumber = 8
paymentItem = "minecraft:bone_meal"
floraDenyCategoryNames = [
		'Modded Foods Completion', 
		'Vanilla Foods Completion',
		'Modded Saplings',
		'Vanilla Sapling Completion'
	]
transParent = 'floraDuplicationTooltips'

def generateDuplicationRecipes():
	shapelessRecipeContent = ""
	craftedFlora = []

	for flora in questCollectionReader.collectionQuestLineItems('flora_compendium', floraDenyCategoryNames):
		craftedFlora.append(flora)
		shapelessRecipeContent += kubejs.shapeless(flora, [flora, paymentItem], craftOutputNumber)

	with open(os.path.join(const.serverScripts(), 'flora_duplication_crafting.js'), 'w') as f:
		f.write(kubejs.recipeFileContent(shapelessRecipeContent))

	fcTrans.setDefaultTranslationParent(transParent)
	with open(os.path.join(const.clientScripts(), 'flora_duplication_tooltips.js'), 'w') as tooltipFile:
		tooltipFile.write(kubejs.tooltipFileContent(kubejs.eventAddTranslatedTooltips(craftedFlora, [
			"You can craft more of this flora with bone meal"
		])))
	fcTrans.resetDefaultTranslationParent()
