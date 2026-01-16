// priority: 1
const NpcMatan = {
  name: 'Matan',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: 0,
  numListCategories: 0,
  numListEntries: 0,
  simpleCollections: MatanItems.simpleCollections,
  listCollections: MatanItems.listCollections,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcMatan, false)
}])

RequestHandler.recipes.remove.byItemId(NpcMatan.tradeItemIds)