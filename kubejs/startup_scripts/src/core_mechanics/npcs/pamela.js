const NpcPamela = {
  name: 'Pamela',
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPamela, false)
}])

NpcHelper.registerItems(NpcPamela.name)