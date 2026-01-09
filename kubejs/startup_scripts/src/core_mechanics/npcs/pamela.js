// priority: 1
const NpcPamela = {
  name: 'Pamela',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPamela, false)
}])
