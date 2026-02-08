// priority: 1
const NpcBernina = {
  name: 'Bernina',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: .1,
  numListCategories: 1,
  numListEntries: 1,
  simpleCollections: BerninaItems.simpleCollections,
  listCollections: BerninaItems.listCollections,
  startingRandIdx: 10,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcBernina, false)
}])

RequestHandler.recipes.remove.byItemId(NpcBernina.tradeItemIds)