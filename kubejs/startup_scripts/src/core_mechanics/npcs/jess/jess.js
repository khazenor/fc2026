const NpcJess = {
  name: 'Jess',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (NpcHelper.isEventInteractingWithNpc(NpcJess.name, event)) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcJess.name, NpcJess.offerDefs)
  }
}])

NpcHelper.registerItems(NpcJess.name)