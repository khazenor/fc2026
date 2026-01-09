const SophisticatedBackPacks = {
  tiers: {
    normal: 'normal',
    copper: 'copper',
    iron: 'iron',
    gold: 'gold',
    diamond: 'diamond',
    netherite: 'netherite'
  },
  get upgradedTiers () {
    return [
      this.tiers.copper,
      this.tiers.iron,
      this.tiers.gold,
      this.tiers.diamond,
      this.tiers.netherite
    ]
  },
  get tierOrder () {
    return [
      this.tiers.normal,
      this.tiers.copper,
      this.tiers.iron,
      this.tiers.gold,
      this.tiers.diamond,
      this.tiers.netherite
    ]
  },
  backpackId(tier) {
    if (tier === this.tiers.normal) {
      return 'sophisticatedbackpacks:backpack'
    } else {
      return `sophisticatedbackpacks:${tier}_backpack`
    }
  },
  upgradeRecipe (resultId, keysObj, patternMatrix) {
    return {
      "neoforge:conditions": [
        {
          "type": "sophisticatedcore:item_enabled",
          "itemRegistryName": resultId
        }
      ],
      "type": "sophisticatedbackpacks:backpack_upgrade",
      "category": "misc",
      "key": keysObj,
      "pattern": patternMatrix,
      "result": {
        "count": 1,
        "id": resultId
      }
    }
  }
}