const NpcPamela = {
  name: 'Pamela',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (NpcHelper.isEventInteractingWithNpc(NpcPamela.name, event)) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcPamela.name, NpcPamela.offerDefs)
  }
}])

NpcHelper.registerItems(NpcPamela.name)