const SellingFood = {
  debugDeleteItemId: 'kubejs:debug_clear_player_food_collected',
  debugTrigger: 'kubejs:debug_trigger', // temp code
  menuId: 'kubejs:menu',
  get itemIds () {
    return [this.debugDeleteItemId, this.debugTrigger, this.menuId]
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
  let mainHandItemId = EventHelpers.mainHandItemId(event)
  let isPlayerShifting = EventHelpers.isPlayerShifting(event)
  if (
    mainHandItemId === SellingFood.debugDeleteItemId && isPlayerShifting
  ) {
    PlayerFoodCollectedLogger.clearFoods(event)
    EventHelpers.tellPlayer(event, Text.translate('sellingFood.foodCollectedClearedMsg'))
  }

  if (mainHandItemId === SellingFood.menuId && isPlayerShifting) {
    if (PlayerTimingJs.checkAreYouSureLike(
      EventHelpers.playerName(event), 'ClearOrderAreYouSure', 5
    )) {
      PlayerOrderLogger.clearAllOrders(event)
      EventHelpers.tellPlayer(event, Text.translatable('sellingFood.clearOrderConfirm'))
    } else {
      EventHelpers.tellPlayer(event, Text.translate('sellingFood.clearOrderAreYouSure'))
    }
  }

  // temp code
  if (mainHandItemId === SellingFood.debugTrigger) {
    PlayerOrderLogger.logDish(event, 'Bob', 'minecraft:stick')
    console.log('allOrders', PlayerOrderLogger.allOrders(event))
  }
}])

RequestHandler.tooltips.add([
  [SellingFood.menuId, [Text.translate('sellingFood.tooltip.menu.shiftClickToClear')]]
])