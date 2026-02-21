// priority 10
const MilesTickets = {
  ticketId: 'kubejs:miles_ticket',
  bookletId: 'kubejs:miles_booklet',
  bundleCount: 64,
  numStacksToBundle: 1,
  bundleItems(event, singleId, bundleId, bundleCount, numStacksToBundle) {
    let thresholdForBundling = bundleCount * numStacksToBundle

    while (
      EventHelpers.numItemsInPlayer(event, singleId)
        >= thresholdForBundling
    ) {
      EventHelpers.removeItemsFromPlayer(
        event, singleId, bundleCount
      )
      EventHelpers.giveItems(event, bundleId, 1)
    }
  },
  unBundleItems(event, singleId, bundleCount) {
    let player = event.player
    player.mainHandItem.count --
    let singleItem = Item.of(singleId)
    singleItem.count = bundleCount
    player.give(singleItem)
  },
  get jeiDescription () {
    let startIdx = 0
    let endIdx = 11
    let descriptionList = []
    for (let i = startIdx; i <= endIdx; i++) {
      descriptionList.push(Text.translate(`description.milesTicket.${i}`))
    }
    return descriptionList
  }
}

RequestHandler.jei.infoForItem(
  MilesTickets.ticketId, MilesTickets.jeiDescription
)

RequestHandler.items.create.simple([
  MilesTickets.ticketId,
  MilesTickets.bookletId
])

RequestHandler.recipes.add.shapeless([
  [StrHelper.itemStackStr(MilesTickets.ticketId, MilesTickets.bundleCount), [MilesTickets.bookletId]]
])

RequestHandler.callbacks.itemEvents.rightClicked([
  event => {
    if (event.player.shiftKeyDown && event.item === MilesTickets.bookletId) {
      MilesTickets.unBundleItems(event,
        MilesTickets.ticketId,
        MilesTickets.bundleCount
      )
    }
  },
  event => {
    if (event.player.shiftKeyDown && event.item === MilesTickets.ticketId) {
      MilesTickets.bundleItems(event, 
        MilesTickets.ticketId,
        MilesTickets.bookletId,
        MilesTickets.bundleCount,
        MilesTickets.numStacksToBundle
      )
    }
  }
])

RequestHandler.tooltips.add([
  [MilesTickets.ticketId, [Text.translate('ticketBundling.shiftToBundle')]],
  [MilesTickets.bookletId, [
    Text.translate('ticketBundling.bookletWorth', StrHelper.cleanFloor(MilesTickets.bundleCount)),
    Text.translate('ticketBundling.bookletShift')
  ]]
])
