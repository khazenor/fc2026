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
