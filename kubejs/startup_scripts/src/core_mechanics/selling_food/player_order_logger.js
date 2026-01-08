const PlayerOrderLogger = {
  playerDataKey: 'PlayerOrderLogger',
  logDish (event, customerName, dishId) {
    let playerOrderObj = PlayerDataHelper.getPlayerObjWStringKeyVals(event, this.playerDataKey)
    let currentlyServingCustomers = Object.keys(playerOrderObj)

    if (currentlyServingCustomers.includes(customerName)) {
      const waitingOnDishId = `${playerOrderObj[customerName]}`
      EventHelpers.tellPlayer(event, Text.translate(
        'sellingFood.customerWaitingForOrder', customerName, TransHelper.itemName(waitingOnDishId)
      ))
    } else {
      playerOrderObj[customerName] = dishId
      PlayerDataHelper.setPlayerData(event, this.playerDataKey, playerOrderObj)
      EventHelpers.tellPlayer(event, Text.translate(
        'sellingFood.customerRequest', customerName, TransHelper.itemName(dishId)
      ))
    }
  },
  allOrders (event) {
    return PlayerDataHelper.getPlayerObjWStringKeyVals(event, this.playerDataKey)
  },
  clearAllOrders (event) {
    PlayerDataHelper.clearKey(event, this.playerDataKey)
  },
  fillOrder (event, customerName) {
    let playerOrderObj = PlayerDataHelper.getPlayerObjWStringKeyVals(event, this.playerDataKey)
    delete playerOrderObj[customerName]
    PlayerDataHelper.setPlayerData(event, this.playerDataKey, playerOrderObj)
  }
}