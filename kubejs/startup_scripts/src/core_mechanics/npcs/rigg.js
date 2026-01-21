// priority: 2
const NpcRigg = {
  name: 'Rigg',
  marketId: 'farmingforblockheads:market'
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcRigg, false)
}])

RequestHandler.recipes.remove.byItemId([NpcRigg.marketId])
RequestHandler.recipes.add.shapeless([
  [NpcRigg.marketId, StrHelper.itemStackStr(MilesTickets.ticketId, 4)]
])