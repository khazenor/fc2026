// priority: 1
const NpcSkye = {
  name: 'Skye',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: 0,
  numListCategories: 0,
  numListEntries: 0,
  simpleCollections: SkyeItems.simpleCollections,
  listCollections: SkyeItems.listCollections,
  startingRandIdx: 70,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcSkye, false)
}])

RequestHandler.recipes.remove.byItemId(NpcSkye.tradeItemIds)