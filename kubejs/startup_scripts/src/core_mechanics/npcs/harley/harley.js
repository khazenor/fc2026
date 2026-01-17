// priority: 1
const NpcHarley = {
  name: 'Harley',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: 0,
  numListCategories: 0,
  numListEntries: 0,
  simpleCollections: HarleyItems.simpleCollections,
  listCollections: HarleyItems.listCollections,
  startingRandIdx: 30,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcHarley, false)
}])

RequestHandler.recipes.remove.byItemId(NpcHarley.tradeItemIds)