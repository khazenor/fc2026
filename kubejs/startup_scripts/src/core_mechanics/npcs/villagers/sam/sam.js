// priority: 1
// Requires 
// - core_mechanics\miles_tickets.js
// - core_mechanics\npcs\npc_helper.js
// - core_mechanics\npcs\sam\fish_info.js
// - library\js\rand_helper.js

const NpcSam = {
  name: 'Sam',
  typicalHighRatio: .5,
  recordHighRatio: 1,
  getFishPrice (fishId, fishSize) {
    let fishInfo = FishInfo[fishId]
    let basePrice = fishInfo['basePrice']
    let sizeInfo = fishInfo['size']
    let recordHigh = sizeInfo['record_high_cm']
    let typicalHigh = sizeInfo['typical_high_cm']
    let typicalLow = sizeInfo['typical_low_cm']
    let preRoundPrice

    if (fishSize < typicalHigh) {
      preRoundPrice = (fishSize / typicalHigh * this.typicalHighRatio + 1) * basePrice
    } else {
      let ratioAfterTypicalHigh = (fishSize - typicalHigh) / (recordHigh - typicalHigh) * (this.recordHighRatio - this.typicalHighRatio)
      let priceRatio = ratioAfterTypicalHigh + 1 + this.typicalHighRatio
      preRoundPrice = priceRatio * basePrice
    }

    return Math.round(preRoundPrice)
  },
  get sellableFishes () {
    return Object.keys(FishInfo)
  },
  get fishTooltips () {
    let tooltipDefs = []
    for (let fishId in FishInfo) {
      let basePrice = FishInfo[fishId]['basePrice']
      let maxPrice = basePrice * (this.recordHighRatio + 1)
      tooltipDefs.push([fishId,
        Text.translate('npcs.sam.sellTooltip',
          StrHelper.cleanFloor(basePrice + .5),
          StrHelper.cleanFloor(maxPrice + .5)
        )
      ])
    }
    return tooltipDefs
  },
  getFishSizeFromItem (item) {
    for (let component of item.components) {
      if (component.type() == 'tide:fish_length') {
        return Number(component.value())
      }
    }
    return null
  },
  get offerDefs () {
    return [{
      villagerItems: RandHelper.randomMineDayRandFromArr(this.offer.colorBobbers, 2),
      playerNum: 4
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(this.offer.specialBobbers, 1),
      playerNum: 16
    }, {
      villagerItems: ['moa_cookery:sushi'],
      playerNum: RandHelper.randSellPrice(2, 8, 1)
    }, {
      villagerItems: ['tide:fish_display'],
      villagerNum: 4
    }, {
      villagerItems: ['tide:bait', 'tide:lucky_bait'],
      villagerNum: 4
    }, {
      villagerItems: ['tide:magnetic_bait'],
      villagerNum: 2
    }, {
      villagerItems: ['tide:fishing_hook'],
      playerNum: 1,
    }, {
      villagerItems: ['tide:iron_fishing_hook'],
      playerNum: 8,
    }, {
      villagerItems: ['tide:lavaproof_fishing_hook'],
      playerNum: 16,
    }, {
      villagerItems: ['tide:void_fishing_hook'],
      playerNum: 32,
    }, {
      villagerItems: this.offer.lines,
      playerNum: 8
    }, {
      villagerItems: this.offer.infoItems,
      playerNum: 6
    },]
  },
  get tradeItemIds () {
    return this.offer.colorBobbers.concat(
      this.offer.specialBobbers,
      this.offer.hooks,
      this.offer.lines,
      this.offer.infoItems,
      ['moa_cookery:sushi']
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
      'tide:amethyst_fishing_bobber',
      'tide:apple_fishing_bobber',
      'tide:chorus_fishing_bobber',
      'tide:diamond_fishing_bobber',
      'tide:duck_fishing_bobber',
      'tide:echo_fishing_bobber',
      'tide:enchanted_golden_apple_fishing_bobber',
      'tide:feather_fishing_bobber',
      'tide:golden_apple_fishing_bobber',
      'tide:golden_fishing_bobber',
      'tide:grassy_fishing_bobber',
      'tide:heart_fishing_bobber',
      'tide:iron_fishing_bobber',
      'tide:lichen_fishing_bobber',
      'tide:nautilus_fishing_bobber',
      'tide:netherite_fishing_bobber',
      'tide:pearl_fishing_bobber',
    ],
    hooks: [
      'tide:fishing_hook',
      'tide:iron_fishing_hook',
      'tide:lavaproof_fishing_hook',
      'tide:void_fishing_hook'
    ],
    lines: [
      'tide:fishing_line',
      'tide:braided_line',
      'tide:golden_line',
      'tide:reinforced_line',
    ],
    infoItems: [
      'naturescompass:naturescompass',
      'explorerscompass:explorerscompass',
      'tide:pocket_watch',
      'tide:lunar_calendar',
      'tide:climate_gauge',
      'tide:depth_meter',
      'tide:weather_radio',
    ]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcSam, [() => {
    let mainHandItem = EventHelpers.mainHandItem(event)
    let itemId = mainHandItem.id
    if (NpcSam.sellableFishes.includes(itemId)) {
      let fishSize = NpcSam.getFishSizeFromItem(mainHandItem)
      let itemCount = EventHelpers.mainHandItem(event).count
      let fishPrice = NpcSam.getFishPrice(itemId, fishSize)
      NpcHelper.handleSellingItemToNpc(
        event,
        MilesTickets.ticketId,
        fishPrice * itemCount,
        itemCount
      )
      return true
    } else {
      return false
    }
  }])
}])

RequestHandler.tooltips.add(NpcSam.fishTooltips)
