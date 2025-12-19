ItemEvents.entityInteracted(event => {
  global.ItemEventsEntityInteracted(event)
})

ItemEvents.rightClicked(event => {
  global.ItemEventsRightClicked(event)
})

RecipeViewerEvents.addInformation('item', event => {
  global.RecipeViewerEventsAddInformationItem(event)
})

ServerEvents.compostableRecipes(event => {
  global.compostable.ServerEventsCompostableRecipes(event)
})

ServerEvents.generateData('before_mods', (event) => {
  global.compostable.ServerEventsGenerateDataBeforeMods(event)
})

ServerEvents.tags('item', event => {
  global.ServerEventsTagsItem(event)
})

ServerEvents.tags('worldgen/biome', event => {
  global.ServerEventsTagsWorldgenBiome(event)
})

ServerEvents.recipes(event => {
  global.ServerEventsRecipes(event)
})