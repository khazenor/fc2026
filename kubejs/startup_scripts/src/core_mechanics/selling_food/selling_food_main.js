const SellingFood = {
  debugDeleteItemId: 'kubejs:debug_clear_player_food_collected',
  menuId: 'kubejs:menu',
  get itemIds () {
    return [this.debugDeleteItemId, this.debugTrigger, this.menuId]
  },
  orderFood (event, customerName) {
    let playerCollectedFoodIds = PlayerFoodCollectedLogger.foodCollected(event)
    let dishOrderedId = RandHelper.randomItemFromArr(playerCollectedFoodIds)
    if (Object.keys(SellingFoodList.foodWithDifferentOutputs).includes(dishOrderedId)) {
      dishOrderedId = SellingFoodList.foodWithDifferentOutputs[dishOrderedId]
    }
    PlayerOrderLogger.logDish(event, customerName, dishOrderedId)
  },
  isOrderingFood (event) {
    let mainHandItemId = EventHelpers.mainHandItemId(event)
    return mainHandItemId === SellingFood.menuId
  }
}

// log food
RequestHandler.callbacks.playerEvents.inventoryChanged([event => {
  let itemId = event.item.id
  if (SellingFoodList.foods.includes(itemId)) {
    PlayerFoodCollectedLogger.logFood(event, itemId)
  }
}])

RequestHandler.callbacks.itemEvents.rightClicked([event => {
  let mainHandItemId = EventHelpers.mainHandItemId(event)
  let isPlayerShifting = EventHelpers.isPlayerShifting(event)

  // clear food collected
  if (
    mainHandItemId === SellingFood.debugDeleteItemId && isPlayerShifting
  ) {
    PlayerFoodCollectedLogger.clearFoods(event)
    EventHelpers.tellPlayer(event, Text.translate('sellingFood.foodCollectedClearedMsg'))
  }

  if (mainHandItemId === SellingFood.menuId) {
    if (isPlayerShifting) {
      if (PlayerTimingJs.checkAreYouSureLike(
        EventHelpers.playerName(event), 'ClearOrderAreYouSure', 5
      )) {
        PlayerOrderLogger.clearAllOrders(event)
        EventHelpers.tellPlayer(event, Text.translatable('sellingFood.clearOrderConfirm'))
      } else {
        EventHelpers.tellPlayer(event, Text.translate('sellingFood.clearOrderAreYouSure'))
      }
    } else if (!EventHelpers.hasTargetEntity(event)) {
      MenuGui.openMenuGui(event)
    }
  }
}])

RequestHandler.items.create.simple(SellingFood.itemIds)
RequestHandler.tooltips.add([
  [SellingFood.menuId, [Text.translate('sellingFood.tooltip.menu.shiftClickToClear')]]
])