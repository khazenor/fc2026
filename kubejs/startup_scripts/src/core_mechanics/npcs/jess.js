const NpcJess = {
  name: 'Jess',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcJess, false)
}])

NpcHelper.registerItems(NpcJess.name)