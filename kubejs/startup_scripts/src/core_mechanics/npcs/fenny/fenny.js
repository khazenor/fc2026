// priority: 1
const NpcFenny = {
  name: 'Fenny',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: 0,
  numListCategories: 0,
  numListEntries: 0,
  simpleCollections: FennyItems.simpleCollections,
  listCollections: FennyItems.listCollections,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcFenny, false)
}])

RequestHandler.recipes.remove.byItemId(NpcFenny.tradeItemIds)