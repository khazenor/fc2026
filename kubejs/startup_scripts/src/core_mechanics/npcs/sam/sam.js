// Requires 
// - core_mechanics\miles_tickets.js
// - core_mechanics\npcs\npc_helper.js
// - core_mechanics\npcs\sam\fish_info.js

const NpcSam = {
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ],
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
    console.log(fishPrices)
    return fishPrices
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (
    NpcHelper.isTargetHumanoid(event) &&
    EventHelpers.targetEntityName(event) === NpcSam.name
  ) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcSam.name, NpcSam.offerDefs)
  }
}])

RequestHandler.callbacks.itemEvents.modifyTooltips([(event) => {
  NpcHelper.tooltipsForSellingToNpc(NpcSam.name, NpcSam.fishSellDefs)
}])