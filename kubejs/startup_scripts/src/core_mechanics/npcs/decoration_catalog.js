const decorationCatalog = {
  catalogId: 'kubejs:decoration_catalog',
  catalogItemCost: 24,
  catalogOfferDef (event, npcObj) {
    if (EventHelpers.mainHandItemId(event) === this.catalogId) {
      let inventoryItemIds = EventHelpers.playerInventoryItemIds(event)
      let saleItems = npcObj.tradeItemIds
      let duplicatedItemsToSell = []
      for (let inventoryItemId of inventoryItemIds) {
        if (
          saleItems.includes(inventoryItemId) &&
          !duplicatedItemsToSell.includes(inventoryItemId)
        ) {
          duplicatedItemsToSell.push(inventoryItemId)
        }
      }
      if (duplicatedItemsToSell.length > 0) {
        return [{ villagerItems: duplicatedItemsToSell, playerNum:this.catalogItemCost }]
      }
    }
    return false
  }
}

RequestHandler.items.create.simple([decorationCatalog.catalogId])

RequestHandler.tooltips.add([
  [decorationCatalog.catalogId, [
    Text.translate('tooltips.decoration_catalog1'),
    Text.translate('tooltips.decoration_catalog2')
  ]]
])
