import os
import const
from lib import util
from lib import fcTrans

def writeClientFile(content, filename):
	util.makeFolders([const.clientScripts()])
	with open(os.path.join(const.clientScripts(), f'{filename}.js'), 'w') as clientFile:
		clientFile.write(content)

def writeServerFile(content, filename):
	util.makeFolders([const.serverScripts()])
	with(open(os.path.join(const.serverScripts(), f'{filename}.js'), "w")) as f:
		f.write(content)

def tradeStr(output, payment, paymentNum, level=1):
	return f"  event.addTrade({level}, ['{paymentNum}x {payment}'], '{output}')\n"


def shapeless(output, ingedients, outputNum = 1):
	outStr = "  event.shapeless(\n"
	outStr += f"    Item.of('{output}', {outputNum}),\n"
	outStr += f"    {arrayToString(ingedients)})\n"
	return outStr

def removeRecipeOutput(output):
	return f"  event.remove({{ output: '{output}' }})\n"

def eventAdd(items, tooltips, doQuoteOutput=True):
	return f"  event.add(\n{arrayToString(items, indent=4)},\n{arrayToString(tooltips, indent=4, doQuote=doQuoteOutput)})\n"

def eventAddTranslatedTooltips(items, tooltips):
	transStrs = []
	for tooltip in tooltips:
		transKey = fcTrans.addDefaultTransToJson(tooltip)
		transStrs.append(transStr(transKey))
	return eventAdd(items, transStrs, doQuoteOutput=False)

def transStr(transKey):
	return f"Text.translate('{transKey}')"
def eventAddItemToList(item, itemList):
	return f"  event.add(\n\t\t'{item}',\n{arrayToString(itemList, indent=4)})\n"

def eventStonecutting(outputMat, inputMat):
	return f"  event.stonecutting('{outputMat}', '{inputMat}')\n"

def eventAddSimple(item1, item2):
	return f"  event.add('{item1}', '{item2}')\n"

def woodcutting(tagInput, outputItem, outputNumber):
	outstr = ""
	outstr += "  event.custom({\n"
	outstr += '    type: "corail_woodcutter:woodcutting",\n'
	outstr += f'    ingredient:{{"tag":"{tagInput}"}},\n'
	outstr += f'    result: {{ "id": "{outputItem}",'
	outstr += f'    count:{outputNumber} }}\n'
	outstr += '  })\n'
	return outstr

def villagerTradeWithDefaultSales(
	villagerItems,
	villagerNum,
	playerItems,
	playerNum,
	profession,
	level,
	decreasePlayerNum=False,
	increaseVillagerNum=False
):
	# number of price: price ratio
	villagerKey = 'vilalgerKey'
	playerKey = 'playerKey'
	priceRatio = {
		8: {
			villagerKey: 1,
			playerKey: 1
		},
		2: {
			villagerKey: 1.5,
			playerKey: 0.75
		},
		1: {
			villagerKey: 2.0,
			playerKey: 0.5
		}
	}
	tradeContent = ''
	for priceOccur in priceRatio:
		for i in range(priceOccur):
			if decreasePlayerNum:
				updatedVillagerNum = villagerNum
				updatedPlayerNum = int(playerNum * priceRatio[priceOccur][playerKey])
			elif increaseVillagerNum:
				updatedVillagerNum = int(villagerNum * priceRatio[priceOccur][villagerKey])
				updatedPlayerNum = playerNum
			else:
				updatedVillagerNum = villagerNum
				updatedPlayerNum = playerNum

			tradeContent += villagerTradeWithDefaults(
				villagerItems,
				updatedVillagerNum,
				playerItems,
				updatedPlayerNum,
				profession,
				level
			)
	return tradeContent

def villagerTradeWithDefaults(villagerItems, villagerNum, playerItems, playerNum, profession, level):
	tradeExperience = 25
	priceMultiplier = 0.035
	return villagerTradeWCallback(
		f'{playerNum}x {playerItems}',
		f'{villagerNum}x {villagerItems}',
		profession,
		level,
		tradeExperience,
		priceMultiplier
	)

def villagerTradeWCallback(item, paymentItem, profession, level, experince, priceMultiplier):
	outStr = f"  event.addCustomTrade('{profession}', {level}, (offer, entity, random) => {{\n"
	outStr += f"    offer.setFirstInput('{item}')\n"
	# outStr += "    offer.setSecondInput(item)"
	outStr += f"    offer.setOutput('{paymentItem}')\n"
	# outStr += "    offer.setMaxUses(number)"
	outStr += f"    offer.setVillagerExperience({experince})\n"
	outStr += f"    offer.setPriceMultiplier({priceMultiplier})\n"
	outStr += "  })\n"
	return outStr

def removeTradesForProfession(profession):
	outStr = ""
	for i in range(5):
		outStr += f'  event.removeModdedTrades(["{profession}"], {i + 1})\n'
		outStr += f'  event.removeVanillaTrades(["{profession}"], {i + 1})\n'
	return outStr

def createSimple(objectId):
	return f'  event.create("{objectId}")\n'

def createMusicDisc(itemId, songName, itemPath, displayName):
	outStr = ""
	outStr += f'  event.create("{itemId}")\n'
	outStr += f'    .jukeboxPlayable("kubejs:{songName}", true)\n'
	outStr += f'    .texture("{itemPath}")\n'
	outStr += f'    .displayName("{displayName}")\n'
	outStr += f'    .maxStackSize(64)\n'
	return outStr

def createSong(songName, soundId, durationSecs):
	return f'  event.create("{songName}").song("{soundId}", {durationSecs})\n'

# FILE CONTENT
def wanderingTradeFileContent(tradeStr):
	return f"MoreJSEvents.wandererTrades((event) => {{\n{tradeStr}\n}})"

def recipeFileContent(content):
	return f"ServerEvents.recipes(event => {{\n{content}\n}})"

def tooltipFileContent(content):
	return f"ItemEvents.modifyTooltips(event => {{\n{content}\n}})"

def villagerTradesContent(content):
	return f"MoreJSEvents.villagerTrades((event) => {{\n{content}\n}})"

def registryFileContent(registryType, content):
	return f"StartupEvents.registry('{registryType}', event => {{\n{content}}})"

def specifiedEvent(eventParent, eventType, specifiedCase, content):
	return f"{eventParent}.{eventType}('{specifiedCase}', event => {{\n{content}}})"

def tagsContent(content, tagType='item'):
	return f"ServerEvents.tags('{tagType}', event => {{\n{content}\n}})"

def generateSimpleTags(itemIds, tag, filename):
	writeServerFile(
		tagsContent(
			eventAddItemToList(tag, itemIds)
		),
		filename
	)

# HELPERS

def arrayToString(array, indent=-1, doQuote=True):
	indentStr = ''
	if indent > -1:
		for i in range(indent):
			indentStr += ' '

	outStr = f"{indentStr}["
	if indent > -1:
		outStr += "\n"
	for i in range(len(array)):
		elem = array[i]
		if indent > -1:
			outStr += f"{indentStr}  "
		if doQuote:
			outStr += f"'{elem}'"
		else:
			outStr += f"{elem}"
		if i < len(array) - 1:
			outStr += ', '
		if indent > -1:
			outStr += '\n'
	outStr += f'{indentStr}]'
	return outStr

def multipleArray(elem, num):
	outArr = []
	for i in range(num):
		outArr.append(elem)
	return outArr