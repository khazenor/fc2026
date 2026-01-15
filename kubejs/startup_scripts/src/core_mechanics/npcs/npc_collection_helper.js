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
  randomEntries (collectionsObj, numCollections, numEntries) {
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
  }
}