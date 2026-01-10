// priority: 1
const NpcPamela = {
  name: 'Pamela',
  offerDefs: [
    {villagerItems: [
      'minecraft:honey_bottle',
      'minecraft:sugar',
      'meadow:alpine_salt',
      'meadow:rennet',
      'farm_and_charm:butter',
      'farm_and_charm:dough',
      'bakery:cake_dough',
      'bakery:sweet_dough',
      'create_confectionery:gingerdough',
      'create_confectionery:cocoa_butter',
      'create:dough'
    ], villagerNum: 8}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPamela, false)
}])
