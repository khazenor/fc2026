// priority 1
const MilesTickets = {
  ticketId: 'kubejs:miles_ticket',
  bookletId: 'kubejs:miles_booklet',
  bundleCount: 64,
  numStacksToBundle: 1
}

RequestHandler.items.create.simple([
  MilesTickets.ticketId,
  MilesTickets.bookletId
])

RequestHandler.recipes.add.shapeless([
  [MilesTickets.ticketId, [MilesTickets.bookletId], MilesTickets.bundleCount]
])

RequestHandler.callbacks.itemEvents.rightClicked([
  event => {
    let player = event.player
    if (player.shiftKeyDown && event.item === MilesTickets.bookletId) {
      player.mainHandItem.count --
      let ticketItem = Item.of(MilesTickets.ticketId)
      ticketItem.count = MilesTickets.bundleCount
      player.give(ticketItem)
    }
  },
  event => {
    if (event.player.shiftKeyDown && event.item === MilesTickets.ticketId) {
      let ticketThresholdForBundling = MilesTickets.bundleCount
        * MilesTickets.numStacksToBundle

      while (
        EventHelpers.numItemsInPlayer(event, MilesTickets.ticketId)
          >= ticketThresholdForBundling
      ) {
        EventHelpers.removeItemsFromPlayer(
          event, MilesTickets.ticketId, MilesTickets.bundleCount
        )
        EventHelpers.giveItems(event, MilesTickets.bookletId, 1)
      }
    }
  }
])

RequestHandler.tooltips.add([
  [MilesTickets.ticketId, [Text.translate('ticketBundling.shiftToBundle')]],
  [MilesTickets.bookletId, [
    Text.translate('ticketBundling.bookletWorth'),
    Text.translate('ticketBundling.bookletShift')
  ]]
])
