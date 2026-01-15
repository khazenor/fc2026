// priority: 1
const NpcBernina = {
  name: 'Bernina',
  showCollectionSetsChance: .1,
  minPrice: 4,
  maxPrice: 16,
  numCategories: 4,
  numEntries: 4,
  get offerDefs () {
    let offerDefs = []
    let includeCollectionSets = RandHelper.randWeightedSuccess(this.showCollectionSetsChance, 1)
    let updatedNumCategories = includeCollectionSets ? this.numCategories - 1 : this.numCategories
    let entries = NpcCollectionHelper.randomEntries(
      AccessoriesInfo.collectionsObj, updatedNumCategories, this.numEntries
    )
    for (let [idx, entry] of entries.entries()) {
      let price = RandHelper.randSellPrice(this.minPrice, this.maxPrice, idx)
      offerDefs.push({
        villagerItems: entry,
        playerNum: price
      })
    }

    if (includeCollectionSets) {
      setEntries = NpcCollectionHelper.randomEntries(
        AccessoriesInfo.collectionSetsObj, 1, 1
      )
      offerDefs.push({
        villagerItems: setEntries[0][0],
        playerNum: RandHelper.randMineDayInt(this.minPrice, this.maxPrice, entries.length + 1)
      })
    }
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