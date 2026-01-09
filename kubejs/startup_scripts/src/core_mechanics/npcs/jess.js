const NpcJess = {
  name: 'Jess',
  get offerDefs()  {
    let soph = SophisticatedBackPacks
    let sophSup = SophisticatedBackPackSupport
    return [{
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
    }]
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcJess, false)
}])

NpcHelper.registerItems(NpcJess.name)