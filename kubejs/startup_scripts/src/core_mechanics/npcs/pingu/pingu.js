// priority: 1
const NpcPingu = {
  name: 'Pingu',
  get offerDefs () {
    return [{
      villagerItems: PinguItems.musicPlayers,
      playerNum: RandHelper.randSellPrice(8, 32, 0)
    }, {
      villagerItems: PinguItems.musicUpgrades,
      playerNum: RandHelper.randSellPrice(8, 32, 4)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(PinguItems.skyPenguinDiscs, 1),
      playerNum: RandHelper.randSellPrice(8, 32, 5)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(PinguItems.onaulDiscs, 4),
      playerNum: RandHelper.randSellPrice(8, 32, 1)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(PinguItems.minecraftDiscs, 2),
      playerNum: RandHelper.randSellPrice(8, 16, 2)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(PinguItems.otherDiscs, 2),
      playerNum: RandHelper.randSellPrice(8, 32, 3)
    }]
  },
  get tradeItemIds () {
    return PinguItems.allItems
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcPingu, false)
}])
