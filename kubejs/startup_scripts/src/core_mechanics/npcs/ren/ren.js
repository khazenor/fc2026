const NpcRen = {
  name: 'Ren',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (NpcHelper.isEventInteractingWithNpc(NpcRen.name, event)) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcRen.name, NpcRen.offerDefs)
  }
}])

NpcHelper.registerItems(NpcRen.name)