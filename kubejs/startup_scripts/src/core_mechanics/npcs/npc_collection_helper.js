// priority: 4

const NpcCollectionHelper = {
  collectionsObjThings (collectionsObj) {
    let things = []
    for (let collectionKey in collectionsObj) {
      let collection = collectionsObj[collectionKey]
      for (let collectionThing of collection) {
        ArrayJs.addElementOrArrayValuesToArray(things, collectionThing)
      }
    }
    return things
  },
  collectionObjOfferDefs(collectionsObj, numCollections, numEntries, minPrice, maxPrice) {
    let offerDefs = []
    let entries = this._randomEntries(
      collectionsObj, numCollections, numEntries
    )
    for (let entry of entries) {
      if (Array.isArray(entry[0])) {
        for (let subEntry of entry) {
          this._appendingOfferDef(offerDefs, subEntry, minPrice, maxPrice)
        }
      } else {
        this._appendingOfferDef(offerDefs, entry, minPrice, maxPrice)
      }
    }
    return offerDefs
  },
  resetRandIdx () {
    this._tempRandomIdx = 0
  },
  _randomEntries (collectionsObj, numCollections, numEntries) {
    let entries = []
    let collections = RandHelper.randomMineDayValuesFromObj(collectionsObj, numCollections)
    for (let collection of collections) {
      let collectionEntries
      if (numEntries < collection.length) {
        collectionEntries = RandHelper.randomMineDayRandFromArr(collection, numEntries)
      } else {
        collectionEntries = collection
      }
        entries.push(collectionEntries)
    }
    return entries
  },
  _appendingOfferDef(offerDefs, villagerItems, minPrice, maxPrice) {
    let price = RandHelper.randSellPrice(minPrice, maxPrice, this._tempRandomIdx)
    this._tempRandomIdx ++
    offerDefs.push({
      villagerItems: villagerItems,
      playerNum: price
    })
  },
  _tempRandomIdx: 0
}