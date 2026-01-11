// priority: 1
const NpcAndre = {
  name: 'Andre',
  offerDefs: [
    {villagerItems: [
      'minecraft:lead',
      'mobcapturingtool:mob_capturing_tool',
      'farmingforblockheads:chicken_nest',
      'farmingforblockheads:feeding_trough',
      'farm_and_charm:water_sprinkler',
      'farm_and_charm:cattlegrid',
      'farm_and_charm:iron_divider',
      'farm_and_charm:chicken_fence'
    ], playerNum: 4}
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcAndre, false)
}])
