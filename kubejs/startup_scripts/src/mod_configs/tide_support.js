const TideSupport = {
  get fishingRodNames () {
    return [
      'stone_fishing_rod',
      'iron_fishing_rod',
      'golden_fishing_rod',
      'crystal_fishing_rod',
      'diamond_fishing_rod',
      'netherite_fishing_rod'
    ]
  },
  get fishingRodIds () {
    return this.fishingRodNames.map(name => `tide:${name}`)
  },
  get rodUpgradeItemNames () {
    return this.fishingRodNames.map(name => `${name}_upgrade_kit`)
  },
  get rodUpgradeItemIds () {
    return this.rodUpgradeItemNames.map(name => `kubejs:${name}`)
  },
  get smithingDefs () {
    let defs = []
    for (let i = 0; i < this.fishingRodNames.length; i++) {
      let output = this.fishingRodIds[i]
      let upgradeMaterial = this.rodUpgradeItemIds[i]
      for (let j = 0; j <= i; j++) {
        if (i === j) {
          defs.push([output, 'minecraft:fishing_rod', upgradeMaterial, 'minecraft:stick'])
        } else {
          let itemToUpgrade = this.fishingRodIds[j]
          defs.push([output, itemToUpgrade, upgradeMaterial, 'minecraft:stick'])
        }
      }
    }
    return defs
  }
}

RequestHandler.recipes.remove.byItemId(TideSupport.fishingRodIds)

RequestHandler.items.create.simple(TideSupport.rodUpgradeItemNames)

RequestHandler.recipes.add.smithingMult(TideSupport.smithingDefs)

RequestHandler.tooltips.addSingular(
  TideSupport.rodUpgradeItemIds, Text.translate('tooltip.canGetFromQuests')
)