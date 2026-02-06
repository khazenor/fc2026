RequestHandler.callbacks.itemEvents.rightClicked([event => {
  let itemId = EventHelpers.mainHandItemId(event)
  let isFish = Object.keys(FishInfo).includes(itemId)
  let isShifting = EventHelpers.isPlayerShifting(event)
  if (isFish && isShifting) {
    if (PlayerTimingJs.checkAreYouSureLike(event.player, 'resetFishWeight', 10)) {
      event.player.mainHandItem.count --
      GiveItem.giveItemsSmart(event, itemId, 1)
    } else {
      event.player.tell(Text.translate('tideSupport.resetWeight.areYouSure'))
    }
  }
}])

RequestHandler.tooltips.addSingular(Object.keys(FishInfo), [
  Text.translate('tideSupport.resetWeight.tooltip1'),
  Text.translate('tideSupport.resetWeight.tooltip2')
])