const PlayerCollectionLogger = {
  playerDataKey: 'PlayerCollectionLogger',
  logCollectible (event, collectibleId, collectionKey) {
    let playerCollectedList = PlayerDataHelper.getPlayerList(event, collectionKey)
    if (!playerCollectedList.includes(collectibleId)) {
      PlayerDataHelper.addToPlayerList(event, collectionKey, collectibleId)
    }
  },
  collectiblesInCollection (event, collectionList, collectionKey) {
    let playerCollectedList = PlayerDataHelper.getPlayerList(event, collectionKey)
    let collectiblesInCollection = []
    for (let playerCollectedId of playerCollectedList) {
      if (collectionList.includes(playerCollectedId)) {
        collectiblesInCollection.push(playerCollectedId)
      }
    }
    return collectiblesInCollection
  },
  clearCollection (event, collectionKey) {
    PlayerDataHelper.clearKey(event, collectionKey)
  }
}