const SophisticatedBackPackSupport = {
  tiers: {
    copper: 'copper',
    iron: 'iron',
    gold: 'gold',
    diamond: 'diamond',
    netherite: 'netherite'
  },
  get tierOrder () {
    return [
      null,
      this.tiers.copper,
      this.tiers.iron,
      this.tiers.gold,
      this.tiers.diamond,
      this.tiers.netherite
    ]
  } ,
  backpackId(tier) {
    if (tier) {
      return `sophisticatedbackpacks:${tier}_backpack`
    } else {
      return 'sophisticatedbackpacks:backpack'
    }
  },
  backpackUpgradeId (tier) {
    return `kubejs:backpack_upgrade_${tier}`
  },
  get backpackUpgradeIds () {
    return Object.values(this.tiers).map(tier => this.backpackUpgradeId(tier))
  },
  get upgradeRecipes () {
    let recipeDefs = []
    for (let i = 1; i < this.tierOrder.length; i++) {
      let prevTier = this.tierOrder[i-1]
      let nextTier = this.tierOrder[i]
      recipeDefs.push(
      this.upgradeRecipeDef(
        this.backpackId(nextTier),
        this.backpackId(prevTier),
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