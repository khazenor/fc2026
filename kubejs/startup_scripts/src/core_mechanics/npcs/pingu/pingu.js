// priority: 1
const NpcPingu = {
  name: 'Pingu',
  get offerDefs () {
    return [{
      villagerItems: RandHelper.randomMineDayRandFromArr(PinguItems.musicPlayers, 2),
      playerNum: RandHelper.randSellPrice(8, 32, 0)
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
