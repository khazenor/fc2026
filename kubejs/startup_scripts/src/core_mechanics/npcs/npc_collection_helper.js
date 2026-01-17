// priority: 4

const NpcCollectionHelper = {
  tradeItemIdsForShopNpc (npcObj) {
    let simpleCollections = npcObj.simpleCollections
    let listCollections = npcObj.listCollections
  
    return NpcCollectionHelper._collectionsObjThings(
      simpleCollections
    ).concat(NpcCollectionHelper._collectionsObjThings(
      listCollections
    ))
  },
  offerDefsForShopNpc (npcObj) {
    let minPrice = npcObj.minPrice
    let maxPrice = npcObj.maxPrice
    let numBasicCategories = npcObj.numBasicCategories
    let numBasicEntries = npcObj.numBasicEntries
    let showCollectionListsChance = npcObj.showCollectionListsChance
    let numListCategories = npcObj.numListCategories
    let numListEntries = npcObj.numListEntries
    let simpleCollections = npcObj.simpleCollections
    let listCollections = npcObj.listCollections
    let startingRandIdx = npcObj.startingRandIdx

    let includeCollectionSets = RandHelper.randWeightedSuccess(showCollectionListsChance, 1)
    let updatedNumCategories = includeCollectionSets ? numBasicCategories - 1 : numBasicCategories
    this._tempRandomIdx = startingRandIdx
    let offerDefs = NpcCollectionHelper._collectionObjOfferDefs(
      simpleCollections,
      updatedNumCategories,
      numBasicEntries,
      minPrice,
      maxPrice
    )
    if (includeCollectionSets) {
      offerDefs = offerDefs.concat(
        NpcCollectionHelper._collectionObjOfferDefs(
          listCollections,
          numListCategories, numListEntries, minPrice, maxPrice
        )
      )
    }
    return offerDefs
  },
  _collectionsObjThings (collectionsObj) {
    if (!collectionsObj) {
      return []
    }

    let things = []
    for (let collectionKey in collectionsObj) {
      let collection = collectionsObj[collectionKey]
      for (let collectionThing of collection) {
        ArrayJs.addElementOrArrayValuesToArray(things, collectionThing)
      }
    }
    return things
  },
  _collectionObjOfferDefs(collectionsObj, numCollections, numEntries, minPrice, maxPrice) {
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