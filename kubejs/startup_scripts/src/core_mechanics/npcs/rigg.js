const npcRigg = {
  name: 'Rigg',
  marketId: 'farmingforblockheads:market'
}

RequestHandler.items.create.simple(['kubejs:rigg'])

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, npcRigg, false)
}])

RequestHandler.recipes.remove.byItemId([npcRigg.marketId])
RequestHandler.recipes.add.shapeless([
  [npcRigg.marketId, StrHelper.itemStackStr(MilesTickets.ticketId, 4)]
])