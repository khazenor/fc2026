// priority: 1
const NpcLangley = {
  name: 'Langley',
  minPrice: 4,
  maxPrice: 16,
  numBasicCategories: 4,
  numBasicEntries: 4,
  showCollectionListsChance: 0,
  numListCategories: 0,
  numListEntries: 0,
  simpleCollections: LangleyItems.simpleCollections,
  listCollections: LangleyItems.listCollections,
  get offerDefs () {
    return NpcCollectionHelper.offerDefsForShopNpc(this)
  },
  get tradeItemIds () {
    return NpcCollectionHelper.tradeItemIdsForShopNpc(this)
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcLangley, false)
}])

RequestHandler.recipes.remove.byItemId(NpcLangley.tradeItemIds)