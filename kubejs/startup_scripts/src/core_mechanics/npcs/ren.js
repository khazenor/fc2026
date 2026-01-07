const NpcRen = {
  name: 'Ren',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcRen, false)
}])

NpcHelper.registerItems(NpcRen.name)