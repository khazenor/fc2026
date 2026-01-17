// priority: 1
const NpcPamela = {
  name: 'Pamela',
  get offerDefs () {
    return [
      { villagerItems: RandHelper.randomMineDayRandFromArr(
        PamelaItems.dishes, 2
      ), playerNum: 4 },
      { villagerItems: RandHelper.randomMineDayRandFromArr(
        PamelaItems.kitchen, 2
      ), playerNum: 8 },
      { villagerItems: [
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
      ], villagerNum: 8 }
    ]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPamela, false)
}])
