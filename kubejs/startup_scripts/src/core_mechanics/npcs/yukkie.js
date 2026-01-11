// priority: 1
const NpcYukkie = {
  name: 'Yukkie',
  get offerDefs () {
    let offerDefs = []
    let numMonsterParts = MonsterAsh.monsterParts.length
    let fruits = RandHelper.randomMineDayRandFromArr(this.fruits, numMonsterParts)
    for (let i = 0; i < numMonsterParts; i++) {
      let monsterPart = MonsterAsh.monsterParts[i]
      let fruit = fruits[i]
      let randomNum = RandHelper.cachedRandNums[i]
      let villagerNum
      if (randomNum < .5) {
        villagerNum = 1
      } else if (randomNum < .7) {
        villagerNum = 2
      } else if (randomNum < .8) {
        villagerNum = 4
      } else if (randomNum < .9) {
        villagerNum = 8
      } else {
        villagerNum = 16
      }

      offerDefs.push({
        villagerItems: [monsterPart], villagerNum: villagerNum, playerGive: fruit
      })
    }
    return offerDefs
  },
  fruits: [
    'minecraft:glow_berries',
    'minecraft:sweet_berries',
    'minecraft:apple',
    'vinery:red_grape',
    'vinery:white_grape',
    'vinery:savanna_grapes_red',
    'vinery:savanna_grapes_white',
    'vinery:taiga_grapes_red',
    'vinery:taiga_grapes_white',
    'vinery:jungle_grapes_red',
    'vinery:jungle_grapes_white',
    'biomeswevegone:green_apple',
    'biomeswevegone:blueberries'
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcYukkie, false)
}])
