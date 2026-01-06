from lib import farmingForBlockheads
from lib import util
from lib import kubejs
from market_gen import marketShop
from lib import fcTrans
from market_gen import marketShopEnchantmentGen
import const

transParentKey = 'marketTooltips'

def generateMarketShops():
	fcTrans.setDefaultTranslationParent(transParentKey)
	farmingForBlockheads.remakeDataPack()
	farmingForBlockheads.genMarket(marketShop.categories)
	generateMarketTooltips(marketShop.categories)
	marketShopEnchantmentGen.generateEnchantmentMarket()
	fcTrans.resetDefaultTranslationParent()
	farmingForBlockheads.packMarketZip()

def generateMarketTooltips(categories):
	itemsByPrice = {}
	for categoryKey in categories:
		category = categories[categoryKey]
		for entryGroup in category[marketShop.entryGroupsKey]:
			price = util.defaultDict(entryGroup, marketShop.priceKey, 1)
			priceItem = util.defaultDict(entryGroup, marketShop.priceItemKey, const.priceItem)
			for itemId in entryGroup[marketShop.itemsKey]:
				if priceItem == const.priceItem:
					util.addToDictList(itemsByPrice, price, itemId)
				elif priceItem == const.priceBundleItem:
					util.addToDictList(itemsByPrice, price * 64, itemId)

	tooltipContent = ""
	for price in itemsByPrice:
		items = itemsByPrice[price]
		if price > 1:
			plural = 's'
		else:
			plural = ''
		tooltip = f"Obtainable for {price} ticket{plural} in the market"
		tooltipContent += kubejs.eventAddTranslatedTooltips(items, [tooltip])
		kubejs.writeClientFile(
			kubejs.tooltipFileContent(tooltipContent),
			'market_tooltips'
		)
