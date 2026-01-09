// priority: 1
const NpcYukkie = {
  name: 'Yukkie',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcYukkie, false)
}])
