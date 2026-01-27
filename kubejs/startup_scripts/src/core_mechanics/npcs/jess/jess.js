// priority: 1
const NpcJess = {
  name: 'Jess',
  upgradeOfferDefTemplates: [{
    playerNum: 4
  }, {
    playerNum: 8
  }, {
    playerNum: 16
  }, {
    playerNum: 32
  }, {
    playerGive: MilesTickets.bookletId,
    playerNum: 2
  }, {
    playerGive: MilesTickets.bookletId,
    playerNum: 4
  }, {
    playerGive: MilesTickets.bookletId,
    playerNum: 6
  }],
  get offerDefs()  {
    let soph = SophisticatedBackPacks
    let sophSup = SophisticatedBackPackSupport
    return [{
      villagerItems: RandHelper.randomMineDayRandFromArr(JessItems.backpackUpgradesMisc, 1),
      playerNum: RandHelper.randSellPrice(16, 64, 0)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(JessItems.storageUpgrades, 1),
      playerNum: RandHelper.randSellPrice(16, 64, 1)
    }, {
      villagerItems: RandHelper.randomMineDayRandFromArr(JessItems.drawerUpgrades, 1),
      playerNum: RandHelper.randSellPrice(16, 64, 2)
    }, {
      villagerItems: [soph.backpackId(soph.tiers.normal)],
      playerNum: 8
    }, {
      villagerItems: [sophSup.backpackUpgradeId(soph.tiers.copper)],
      playerNum: 4
    }, {
      villagerItems: [sophSup.backpackUpgradeId(soph.tiers.iron)],
      playerNum: 16
    }, {
      villagerItems: [sophSup.backpackUpgradeId(soph.tiers.gold)],
      playerNum: 32
    }, {
      villagerItems: [sophSup.backpackUpgradeId(soph.tiers.diamond)],
      playerGive: MilesTickets.bookletId,
      playerNum: 2
    }, {
      villagerItems: [sophSup.backpackUpgradeId(soph.tiers.netherite)],
      playerGive: MilesTickets.bookletId,
      playerNum: 4
    }, {
      villagerItems: ['sophisticatedstorage:basic_tier_upgrade']
    }, {
      villagerItems: ['sophisticatedstorage:basic_to_copper_tier_upgrade'],
      playerNum: 4,
    }, {
      villagerItems: ['sophisticatedstorage:copper_to_iron_tier_upgrade'],
      playerNum: 16,
    }, {
      villagerItems: ['sophisticatedstorage:iron_to_gold_tier_upgrade'],
      playerNum: 32,
    }, {
      villagerItems: ['sophisticatedstorage:gold_to_diamond_tier_upgrade'],
      playerGive: MilesTickets.bookletId,
      playerNum: 2,
    }, {
      villagerItems: ['sophisticatedstorage:diamond_to_netherite_tier_upgrade'],
      playerGive: MilesTickets.bookletId,
      playerNum: 4,
    }, {
      villagerItems: ['storagedrawers:obsidian_storage_upgrade'],
      playerNum: 2,
    }, {
      villagerItems: ['storagedrawers:copper_storage_upgrade'],
      playerNum: 4,
    }, {
      villagerItems: ['storagedrawers:iron_storage_upgrade'],
      playerNum: 8,
    }, {
      villagerItems: ['storagedrawers:gold_storage_upgrade'],
      playerNum: 16,
    }, {
      villagerItems: ['storagedrawers:emerald_storage_upgrade'],
      playerNum: 64,
    }, {
      villagerItems: ['storagedrawers:diamond_storage_upgrade'],
      playerGive: MilesTickets.bookletId,
      playerNum: 4,
    }, {
      villagerItems: ['storagedrawers:netherite_storage_upgrade'],
      playerGive: MilesTickets.bookletId,
      playerNum: 32,
    }]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcJess, false)
}])

RequestHandler.recipes.remove.byItemId([
  'storagedrawers:obsidian_storage_upgrade',
  'storagedrawers:copper_storage_upgrade',
  'storagedrawers:iron_storage_upgrade',
  'storagedrawers:gold_storage_upgrade',
  'storagedrawers:emerald_storage_upgrade',
  'storagedrawers:diamond_storage_upgrade',
  'storagedrawers:netherite_storage_upgrade'
])