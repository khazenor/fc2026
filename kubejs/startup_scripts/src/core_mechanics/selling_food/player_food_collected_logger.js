const PlayerFoodCollectedLogger = {
  playerDataKey: 'PlayerFoodCollectedLogger',
  logFood (event, foodId) {
    PlayerCollectionLogger.logCollectible(event, foodId, this.playerDataKey)
  },
  foodCollected (event) {
    return PlayerCollectionLogger.collectiblesInCollection(
      event, SellingFoodList.foods, this.playerDataKey
    )
  },
  clearFoods (event) {
    PlayerCollectionLogger.clearCollection(event, this.playerDataKey)
  }
}