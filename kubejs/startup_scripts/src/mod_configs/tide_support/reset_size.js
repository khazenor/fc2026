RequestHandler.callbacks.itemEvents.rightClicked([event => {
  let itemId = EventHelpers.mainHandItemId(event)
  let isFish = Object.keys(FishInfo).includes(itemId)
  let isShifting = EventHelpers.isPlayerShifting(event)
  if (isFish && isShifting) {
    if (PlayerTimingJs.checkAreYouSureLike(event.player, 'resetFishSize', 10)) {
      event.player.mainHandItem.count --
      GiveItem.giveItemsSmart(event, itemId, 1)
      event.player.tell(Text.translate('tideSupport.resetSize.confirmation'))
    } else {
      event.player.tell(Text.translate('tideSupport.resetSize.areYouSure'))
    }
  }
}])

RequestHandler.tooltips.addSingular(Object.keys(FishInfo), [
  Text.translate('tideSupport.resetSize.tooltip1'),
  Text.translate('tideSupport.resetSize.tooltip2')
])