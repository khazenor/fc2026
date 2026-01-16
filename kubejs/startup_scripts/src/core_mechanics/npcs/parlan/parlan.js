// priority: 1
const NpcParlan = {
  name: 'Parlan',
  showCollectionSetsChance: .1,
  minPrice: 4,
  maxPrice: 16,
  numCategories: 4,
  numEntries: 4,
  get offerDefs () {
    let includeCollectionSets = RandHelper.randWeightedSuccess(this.showCollectionSetsChance, 1)
    let updatedNumCategories = includeCollectionSets ? this.numCategories - 1 : this.numCategories
    NpcCollectionHelper.resetRandIdx()
    let offerDefs = NpcCollectionHelper.collectionObjOfferDefs(
      ParlanItems.simpleCollections,
      updatedNumCategories,
      this.numEntries,
      this.minPrice,
      this.maxPrice
    )
    if (includeCollectionSets) {
      offerDefs = offerDefs.concat(
        NpcCollectionHelper.collectionObjOfferDefs(
          ParlanItems.listCollections,
          1, 1, this.minPrice, this.maxPrice
        )
      )
    }
    return offerDefs
  },
  get tradeItemIds () {
    return NpcCollectionHelper.collectionsObjThings(
      ParlanItems.simpleCollections
    ).concat(NpcCollectionHelper.collectionsObjThings(
      ParlanItems.listCollections
    ))
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcParlan, false)
}])

RequestHandler.recipes.remove.byItemId(NpcParlan.tradeItemIds)