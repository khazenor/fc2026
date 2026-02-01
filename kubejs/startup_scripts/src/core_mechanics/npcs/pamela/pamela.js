// priority: 1
const NpcPamela = {
  name: 'Pamela',
  cookingIngs: [
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
  ],
  containers: [
    'minecraft:glass_bottle',
    'bakery:jar',
    'vinery:wine_bottle',
    'brewery:beer_mug',
  ],
  get offerDefs () {
    return [
      { villagerItems: RandHelper.randomMineDayRandFromArr(
        PamelaItems.dishes, 2
      ), playerNum: 4 },
      { villagerItems: RandHelper.randomMineDayRandFromArr(
        PamelaItems.kitchen, 2
      ), playerNum: 8 },
      { villagerItems: this.containers, villagerNum: 8 },
      { villagerItems: this.cookingIngs, villagerNum: 8 }
    ]
  },
  get tradeItemIds () {
    return this.cookingIngs.concat(
      PamelaItems.dishes,
      PamelaItems.kitchen
    )
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPamela, false)
}])
