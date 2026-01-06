const NpcYukkie = {
  name: 'Yukkie',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (NpcHelper.isEventInteractingWithNpc(NpcYukkie.name, event)) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcYukkie.name, NpcYukkie.offerDefs)
  }
}])

NpcHelper.registerItems(NpcYukkie.name)