// priority: 1
const NpcLaly = {
  name: 'Laly',
  offerDefs: [{
      villagerItems: ['minecraft:copper_ingot'],
      villagerNum: 64,
      playerGive: 'minecraft:cobblestone',
      playerNum: 64,
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
      villagerItems: ['create:zinc_ingot'],
      villagerNum: 4,
      playerGive: 'minecraft:iron_ingot',
      playerNum: 2,
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
    }, {
      villagerItems: ['create:brass_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:gold_ingot',
      playerNum: 1,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 8
    }, {
      villagerItems: ['createaddition:electrum_ingot'],
      villagerNum: 1,
      playerGive: 'minecraft:gold_ingot',
      playerNum: 1,
      playerGive2: MilesTickets.ticketId,
      playerNum2: 2
    }
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcLaly, false)
}])
