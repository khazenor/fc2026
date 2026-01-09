const SophisticatedBackPackSupport = {
  backpackUpgradeId (tier) {
    return `kubejs:backpack_upgrade_${tier}`
  },
  get backpackUpgradeIds () {
    return SophisticatedBackPacks.upgradedTiers.map(tier => this.backpackUpgradeId(tier))
  },
  get upgradeRecipes () {
    let recipeDefs = []
    for (let i = 1; i < SophisticatedBackPacks.tierOrder.length; i++) {
      let prevTier = SophisticatedBackPacks.tierOrder[i-1]
      let nextTier = SophisticatedBackPacks.tierOrder[i]
      recipeDefs.push(
      this.upgradeRecipeDef(
        SophisticatedBackPacks.backpackId(nextTier),
        SophisticatedBackPacks.backpackId(prevTier),
        this.backpackUpgradeId(nextTier)
      ))
    }
    return recipeDefs
  },
  upgradeRecipeDef (outputId, inputId, upgradeId) {
    return SophisticatedBackPacks.upgradeRecipe(
      outputId,
      {B: {item: inputId}, U: {item: upgradeId}},
      ['U', 'B']
    )
  }
}

RequestHandler.items.create.simple(SophisticatedBackPackSupport.backpackUpgradeIds)

RequestHandler.recipes.add.custom(SophisticatedBackPackSupport.upgradeRecipes)