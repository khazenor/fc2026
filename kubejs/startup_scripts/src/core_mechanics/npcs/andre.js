// priority: 1
const NpcAndre = {
  name: 'Andre',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcAndre, false)
}])

NpcHelper.registerItems(NpcAndre.name)