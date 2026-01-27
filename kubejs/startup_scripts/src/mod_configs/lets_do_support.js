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
