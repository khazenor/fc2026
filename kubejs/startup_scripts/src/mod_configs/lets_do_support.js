RequestHandler.recipes.add.shapeless([['vinery:dark_cherry_sapling', [
  '#minecraft:saplings', '3x vinery:cherry'
]], ['vinery:apple_tree_sapling', [
  '#minecraft:saplings', '3x minecraft:apple'
]]])

RequestHandler.recipes.add.shaped([
  ['vinery:grapevine_stem', [' L ', ' L ', ' L '], {L: "#minecraft:logs"}]
])

RequestHandler.recipes.remove.byItemId([
  'farm_and_charm:chicken_coop', // disable until it doesn't crash the game
  'vinery:grapevine_stem'
])

RequestHandler.recipes.remove.byRecipeId([
  'meadow:cooking_pot/baked_potato'
])

RequestHandler.tooltips.add([
  ['farm_and_charm:water_sprinkler', [Text.translate('letsDo.tooltip.sprinkler')]],
  ['farm_and_charm:cattlegrid', [Text.translate('letsDo.tooltip.cattleGrid')]]
])

// support fish tank
RequestHandler.callbacks.blockEventsBrokenSingle(event => {
  if (['furniture:copper_fish_tank', 'furniture:iron_fish_tank'].includes(event.block.id)) {
    let properties = event.block.getProperties()
    let facing = properties.facing
    let part = properties.part
    let connectedBlock
    let hasSalmon = properties.has_salmon === 'true'
    let hasCod = properties.has_cod === 'true'
    let hasPufferfish = properties.has_pufferfish === 'true'
    let hasFish = hasCod || hasPufferfish || hasSalmon

    switch (facing) {
      case 'north':
        connectedBlock = part === 'head'
          ? event.block.getNorth()
          : event.block.getSouth()
        break
      case 'south':
        connectedBlock = part === 'head'
          ? event.block.getSouth()
          : event.block.getNorth()
        break
      case 'east':
        connectedBlock = part === 'head'
          ? event.block.getWest()
          : event.block.getEast()
        break
      case 'west':
        connectedBlock = part === 'head'
          ? event.block.getEast()
          : event.block.getWest()
        break
    }
    event.block.popItemFromFace(Item.of(event.block.id), "up")
    if (hasFish) {
      event.block.set('minecraft:water')
      connectedBlock.set('minecraft:water')
      if (hasCod) {
        event.block.createEntity('minecraft:cod').spawn()
      }
      if (hasSalmon) {
        event.block.createEntity('minecraft:salmon').spawn()
      }
      if (hasPufferfish) {
        event.block.createEntity('minecraft:pufferfish').spawn()
      }
    } else {
      event.block.set('minecraft:air')
      connectedBlock.set('minecraft:air')
    }
    
    event.cancel()
  }
})