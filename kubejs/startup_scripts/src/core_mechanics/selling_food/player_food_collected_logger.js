const PlayerFoodCollectedLogger = {
  playerDataKey: 'PlayerFoodCollectedLogger',
  logFood (event, foodId) {
    PlayerCollectionLogger.logCollectible(event, foodId, this.playerDataKey)
  },
  foodCollected (event) {
    let storedItems = PlayerCollectionLogger.collectiblesInCollection(
      event, SellingFoodList.foods, this.playerDataKey
    )
    let foodCollected = []
    for (let item of storedItems) {
      if (SellingFoodList.foods.includes(item)) {
        foodCollected.push(item)
      }
    }
    return foodCollected
  },
  clearFoods (event) {
    PlayerCollectionLogger.clearCollection(event, this.playerDataKey)
  }
}