const SellingFood = {
  debugDeleteItemId: 'kubejs:debug_clear_player_food_collected',
  get itemIds () {
    return [this.debugDeleteItemId]
  }
}
RequestHandler.callbacks.playerEvents.inventoryChanged([event => {
  let itemId = event.item.id
  if (SellingFoodList.foods.includes(itemId)) {
    PlayerFoodCollectedLogger.logFood(event, itemId)

    EventHelpers.tellPlayer(event, PlayerFoodCollectedLogger.foodCollected(event)) // temp code
    console.log('foodCollected', PlayerFoodCollectedLogger.foodCollected(event))
  }
}])

RequestHandler.items.create.simple(SellingFood.itemIds)

RequestHandler.callbacks.itemEvents.rightClicked([event => {
  if (
    EventHelpers.mainHandItemId(event) === SellingFood.debugDeleteItemId &&
    EventHelpers.isPlayerShifting(event)
  ) {
    PlayerFoodCollectedLogger.clearFoods(event)
    EventHelpers.tellPlayer(event, Text.translate('sellingFood.foodCollectedClearedMsg'))
  }
}])