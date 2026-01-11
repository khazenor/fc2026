// priority: 1
// Requires 
// - core_mechanics\miles_tickets.js
// - core_mechanics\npcs\npc_helper.js
// - core_mechanics\npcs\sam\fish_info.js
// - library\js\rand_helper.js

const NpcSam = {
  name: 'Sam',
  get fishSellDefs () {
    let maxFishSell = 16
    let minFishSell = 1
    let weights = Object.values(FishInfo.weights)
    let minWeight = ArrayJs.min(weights)
    let maxWeight = ArrayJs.max(weights)
    let ticketOverWeight = (maxFishSell - minFishSell) / (maxWeight - minWeight)
    let fishPrices = {}
    for (let fishId in FishInfo.weights) {
      let weight = FishInfo.weights[fishId]
      let weightInverse = maxWeight - weight
      let sell = Math.floor((weightInverse * ticketOverWeight) + .5) + 1
      fishPrices[fishId] = { id: MilesTickets.ticketId, count: sell }
    }
    return fishPrices
  },
  get sellableFishes () {
    return Object.keys(this.fishSellDefs)
  },
  get offerDefs () {
    return [{
      villagerItems: this.offer.hooks,
      playerNum: 8
    }, {
      villagerItems: this.offer.lines,
      playerNum: 8
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(this.offer.colorBobbers, 2),
      playerNum: 4
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(this.offer.specialBobbers, 1),
      playerNum: 16
    } ]
  },
  get tradeItemIds () {
    return this.offer.colorBobbers.concat(
      this.offer.specialBobbers,
      this.offer.hooks,
      this.offer.lines
    )
  },
  offer: {
    colorBobbers: [
      'tide:purple_fishing_bobber',
      'tide:red_fishing_bobber',
      'tide:orange_fishing_bobber',
      'tide:yellow_fishing_bobber',
      'tide:lime_fishing_bobber',
      'tide:green_fishing_bobber',
      'tide:cyan_fishing_bobber',
      'tide:light_blue_fishing_bobber',
      'tide:blue_fishing_bobber',
      'tide:purple_fishing_bobber',
      'tide:magenta_fishing_bobber',
      'tide:pink_fishing_bobber',
      'tide:white_fishing_bobber',
      'tide:light_gray_fishing_bobber',
      'tide:gray_fishing_bobber',
      'tide:black_fishing_bobber',
      'tide:brown_fishing_bobber'
    ],
    specialBobbers: [
      'tide:apple_fishing_bobber',
      'tide:golden_apple_fishing_bobber',
      'tide:enchanted_golden_apple_fishing_bobber',
      'tide:iron_fishing_bobber',
      'tide:golden_fishing_bobber',
      'tide:diamond_fishing_bobber',
      'tide:netherite_fishing_bobber',
      'tide:amethyst_fishing_bobber',
      'tide:echo_fishing_bobber',
      'tide:chorus_fishing_bobber',
      'tide:feather_fishing_bobber',
      'tide:lichen_fishing_bobber',
      'tide:nautilus_fishing_bobber',
      'tide:pearl_fishing_bobber',
      'tide:heart_fishing_bobber',
      'tide:grassy_fishing_bobber'
    ],
    hooks: [
      'tide:fishing_hook',
      'tide:iron_fishing_hook',
      'tide:lavaproof_fishing_hook'
    ],
    lines: [
      'tide:fishing_line',
      'tide:braided_line',
      'tide:fortune_line',
      'tide:reinforced_line',
    ]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcSam, [() => {
    let mainHandItem = EventHelpers.mainHandItem(event).id
    if (NpcSam.sellableFishes.includes(mainHandItem)) {
      NpcHelper.handleSellingItemToNpc(
        event,
        NpcSam.fishSellDefs[mainHandItem].id,
        NpcSam.fishSellDefs[mainHandItem].count
      )
      return true
    } else {
      return false
    }
  }])
}])

RequestHandler.callbacks.itemEvents.modifyTooltips([(event) => {
  NpcHelper.tooltipsForSellingToNpc(NpcSam.name, NpcSam.fishSellDefs)
}])
