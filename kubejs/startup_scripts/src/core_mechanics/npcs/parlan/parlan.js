// priority: 1
const NpcParlan = {
  name: 'Parlan',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: .1,
  numListCategories: 1,
  numListEntries: 1,
  simpleCollections: ParlanItems.simpleCollections,
  listCollections: ParlanItems.listCollections,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcParlan, false)
}])

RequestHandler.recipes.remove.byItemId(NpcParlan.tradeItemIds)