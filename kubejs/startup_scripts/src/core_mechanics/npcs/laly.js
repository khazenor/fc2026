// priority: 1
const NpcLaly = {
  name: 'Laly',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcLaly, false)
}])
