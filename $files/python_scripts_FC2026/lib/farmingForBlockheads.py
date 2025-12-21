from input import marketShop
from src import const
import os
import json
from lib import fcTrans
from lib import util
from lib import datapacks
from lib import stringCleaning
import shutil

defaultPrice = 1
defaultPriceItem = 'kubejs:miles_ticket'
defaultProductNum = 1

datapackName = 'Farming For Blockheads Market Integration'
packFolder = datapacks.packFolder(const.notesGeneratedFolder(), datapackName)
dataFolder = datapacks.dataFolder(const.notesGeneratedFolder(), datapackName)
categoryFolder = f'{dataFolder}\\farmingforblockheads\\market_categories'
entriesFolder = f'{dataFolder}\\farmingforblockheads\\recipe\\market\\farming_crossing'
presetRoot = 'farming_crossing'
presetsFolder = f'{dataFolder}\\{presetRoot}\\market_presets'
transKeyParent = 'farmingForBlockheads.market'

def remakeDataPack():
	datapacks.remakeDataPack(const.notesGeneratedFolder(), datapackName)
def genMarket(categoriesData):
	util.makeFolders([ categoryFolder, entriesFolder, presetsFolder])
	fcTrans.removeTranslationsFromJson(transKeyParent)
	genCategoryStores(categoriesData)

def packMarketZip():
	packdir = os.path.join(const.fcDataPacksFolder(), 'farmingForBlockheadsMarket')
	shutil.make_archive(
		packdir,
		'zip',
		packFolder
	)

def genCategoryStores(categoriesData):
	for i in range(len(categoriesData.keys())):
		categoryKey = list(categoriesData.keys())[i]
		categoryData = categoriesData[categoryKey]
		writeCategoryStore(
			categoryKey,
			categoryData[marketShop.nameKey],
			categoryData[marketShop.iconKey],
			categoryData[marketShop.entryGroupsKey],
			i
		)

def writeCategoryStore(categoryKey, name, icon, entryGroups, sortIdx):
	writeCategoryFile(name, icon, categoryKey, sortIdx)
	writeEntryGroupsEntries(entryGroups, categoryKey)

def writeCategoryFile(name, icon, categoryKey, sortIdx):
	transKey = fcTrans.tKey(transKeyParent, name)
	fcTrans.addTranslationsToJson(transKey, name)

	json.dump(
		{
			"tooltip": {
				"translate": transKey
			},
			"icon": {
				"id": icon
			},
			"sortIndex": sortIdx
		},
		open(os.path.join(categoryFolder, f"{categoryKey}.json"), 'w'),
		indent=2
	)

def writeEntryGroupsEntries(entryGroups, categoryKey):
	for entryGroup in entryGroups:
		writeEntryGroupToEntries(entryGroup, categoryKey)

def writeEntryGroupToEntries(entryGroup, categoryKey):
	for productId in entryGroup[marketShop.itemsKey]:
		priceKey = marketShop.priceKey
		productNumKey = marketShop.productNumKey
		priceItemKey = marketShop.priceItemKey
		componentsKey = marketShop.componentsKey
		if priceKey in entryGroup:
			price = entryGroup[priceKey]
		else:
			price = defaultPrice
		if priceItemKey in entryGroup:
			priceItem = entryGroup[priceItemKey]
		else:
			priceItem = defaultPriceItem
		if productNumKey in entryGroup:
			productNum = entryGroup[productNumKey]
		else:
			productNum = defaultProductNum

		if componentsKey in entryGroup:
			component = entryGroup[componentsKey]
		else:
			component = None
		writeEntry(
			productId,
			productNum,
			priceItem,
			price,
			categoryKey,
			component=component
		)

def writeEntry(item, itemCount, payment, paymentCount, category, component=None):
	writePreset(payment, paymentCount)
	writeMarketRecipe(category, presetName(payment, paymentCount), item, itemCount,component=component)

def writePreset(paymentId, paymentCount):
	presetFile = os.path.join(presetsFolder, presetName(paymentId, paymentCount))+'.json'
	if not os.path.exists(presetFile):
		json.dump(
			{
				"enabled": True,
				"payment": {
					"ingredient": {
						"item": paymentId
					},
					"count": paymentCount
				}
			},
			open(presetFile, 'w'),
			indent=2
		)

def writeMarketRecipe(category, presetName, item, itemCount, component=None):
	result = {
		"count": itemCount,
		"item": item
	}
	if component is not None:
		result["components"] = component
	json.dump(
		{
			"type": "farmingforblockheads:market",
			"category": f"farmingforblockheads:{category}",
			"preset": f"{presetRoot}:{presetName}",
			"result": result
		},
		open(util.indexFileIfFileAlreadyExists(
			os.path.join(entriesFolder, cleanedDomainName(category, item)),
			'.json'
		), 'w'),
		indent=2
	)


def presetName(paymentId, paymentCount):
	return cleanedDomainName(paymentId, paymentCount)

def cleanedDomainName(domain, name):
	return f"{stringCleaning.cleanedNameStr(domain)}_{stringCleaning.cleanedNameStr(name)}"
def entrycomponent(item, itemCount, payment, paymentCount, category, itemcomponent):
	return {
		"output": { "item": item, "count": itemCount, 'component': itemcomponent},
		"payment": { "item": payment, "count": paymentCount },
		"category": category
	}