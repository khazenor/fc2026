const NpcAndre = {
  name: 'Andre',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (NpcHelper.isEventInteractingWithNpc(NpcAndre.name, event)) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcAndre.name, NpcAndre.offerDefs)
  }
}])

NpcHelper.registerItems(NpcAndre.name)