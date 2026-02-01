const EverythingIsCopperInteg = {
  nuggetId: 'everythingcopper:copper_nugget'
}

RequestHandler.recipes.remove.byItemId([
  EverythingIsCopperInteg.nuggetId
])

RequestHandler.recipes.add.shapeless([
  ['create:copper_nugget', [ EverythingIsCopperInteg.nuggetId ]]
])

RequestHandler.tags.item.removeAll([
  EverythingIsCopperInteg.nuggetId
])

RequestHandler.recipes.add.shaped([
  [
    '9x everythingcopper:copper_lantern', [
      'III',
      'ITI',
      'III'
    ], {
      I: 'minecraft:copper_ingot',
      T: 'minecraft:torch'
    }
  ], [
    'everythingcopper:copper_hopper', [
      'ILI',
      'ILI',
      ' I '
    ], {
      I: 'minecraft:copper_ingot',
      L: '#minecraft:logs'
    }
  ]
])