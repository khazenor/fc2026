// priority: 1
const NpcBernina = {
  name: 'Bernina',
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
      AccessoriesInfo.collectionsObj,
      updatedNumCategories,
      this.numEntries,
      this.minPrice,
      this.maxPrice
    )
    offerDefs = offerDefs.concat(
      NpcCollectionHelper.collectionObjOfferDefs(
        AccessoriesInfo.collectionSetsObj,
        1, 1, this.minPrice, this.maxPrice
      )
    )
    return offerDefs
  },
  get tradeItemIds () {
    return NpcCollectionHelper.collectionsObjThings(
      AccessoriesInfo.collectionSetsObj
    ).concat(NpcCollectionHelper.collectionsObjThings(
      AccessoriesInfo.collectionsObj
    ))
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcBernina, false)
}])