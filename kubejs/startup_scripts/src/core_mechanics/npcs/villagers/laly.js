// priority: 1
const NpcLaly = {
  name: 'Laly',
  offerDefs: [{
      villagerItems: ['minecraft:copper_ingot'],
      playerGive: 'kubejs:construction_ticket'
    }, {
      villagerItems: ['create:zinc_ingot'],
      playerGive: 'minecraft:copper_ingot',
      playerNum: 1,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 1
    }, {
      villagerItems: ['minecraft:iron_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:copper_ingot',
      playerNum: 4,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 1
    }, {
      villagerItems: ['minecraft:gold_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:iron_ingot',
      playerNum: 2,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 2
    }, {
      villagerItems: ['create:brass_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:copper_ingot',
      playerNum: 1,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 2
    }, {
      villagerItems: ['createaddition:electrum_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:gold_ingot',
      playerNum: 1,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 1
    }, {
      villagerItems: ['minecraft:diamond'],
      villagerNum: 1,
      playerGive: 'minecraft:gold_ingot',
      playerNum: 2,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 16
    }, {
      villagerItems: ['minecraft:netherite_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:diamond',
      playerNum: 4,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 64
    }
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcLaly, false)
}])
