// priority: -1000
StartupEvents.registry('item', event => {
  RequestHandler.items.create.simpleCache.forEach(itemId => {
    event.create(itemId)
  })

  RequestHandler.items.create.simpleFoodCache.forEach(foodDef => {
    let itemId = foodDef[0]
    let nutrition = foodDef[1]
    let saturation = foodDef[2]
    event.create(itemId).food(food => {
      food
        .nutrition(nutrition)
        .saturation(saturation)
    })
  })
})