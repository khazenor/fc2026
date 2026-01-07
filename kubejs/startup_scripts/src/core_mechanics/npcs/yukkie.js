const NpcYukkie = {
  name: 'Yukkie',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcYukkie, false)
}])

NpcHelper.registerItems(NpcYukkie.name)