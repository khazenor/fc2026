// priority: 1
const NpcJess = {
  name: 'Jess',
  get offerDefs()  {
    let soph = SophisticatedBackPacks
    let sophSup = SophisticatedBackPackSupport
    return [{
      villagerItems: ['simplemagnets:basicmagnet'],
      playerNum: 8
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
    }]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcJess, false)
}])
