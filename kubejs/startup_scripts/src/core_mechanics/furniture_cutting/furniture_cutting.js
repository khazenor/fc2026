const FurnitureCutting = {
  getWoodDefForItemId (itemId) {
    let itemName = StrHelper.cleanStr(TransHelper.itemNameEngStr(itemId)).toLowerCase()
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      for (let name of woodDef.names) {
        if (itemName.includes(name) && !woodDef.convertableIds.includes(itemId)) {
          return woodDef
        }
      }
    }
    return null
  },
  populateConvertableIds () {
    for (let itemId of FurnitureList) {
      let woodDef = this.getWoodDefForItemId(itemId)
      if (woodDef) {
        woodDef.convertableIds.push(itemId)
        this.furnitureCache.push(itemId)
      }
    }
  },
  generateCuttableInfo () {
    this.populateConvertableIds()
    let cuttables = []
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      let tagName = `c:${StrHelper.replaceAll(woodDef.names[0], ' ', '_')}_cutting`
      let cuttingItems = woodDef.convertableIds.concat(woodDef.id)
      this.tagsDefs.push([tagName, cuttingItems])
      let stoneCuttingDefs = cuttingItems.map(cuttingItem => [cuttingItem, `#${tagName}`])
      this.stonecuttingDefsCache = this.stonecuttingDefsCache.concat(
        stoneCuttingDefs
      )
      cuttables = cuttables.concat(cuttingItems)
    }
    this.cuttablesCache = cuttables
    CacheHelper.cacheObject('all_cuttables', cuttables)
  },
  tagsDefs: [],
  stonecuttingDefsCache: [],
  get stonecuttingDefs () {
    if (this.stonecuttingDefsCache.length == 0) {
      this.generateCuttableInfo()
    }
    return this.stonecuttingDefsCache
  },
  cuttablesCache: [],
  get cuttables () {
    if (this.cuttablesCache.length > 0) {
      return this.cuttablesCache
    } else {
      return CacheHelper.loadCache('all_cuttables')
    }
  },
  furnitureCache: [],
  get furniture () {
    if (this.furnitureCache.length === 0) {
      this.generateCuttableInfo()
    }
    return this.furnitureCache
  },
  hasStonecuttingRecipesBeenAdded: false,
  hasTooltipsBeenAdded: false
}
RequestHandler.callbacks.beforeServerHooks([() => {
  if (!FurnitureCutting.hasStonecuttingRecipesBeenAdded) {
    RequestHandler.recipes.add.stonecutting(FurnitureCutting.stonecuttingDefs)
    RequestHandler.tags.item.add([['c:cuttable_furniture', FurnitureCutting.furniture]])
    RequestHandler.tags.item.add(FurnitureCutting.tagsDefs)
    FurnitureCutting.hasStonecuttingRecipesBeenAdded = true
  }
}])

RequestHandler.callbacks.beforeClientLoaded([() => {
  if (!FurnitureCutting.hasTooltipsBeenAdded) {
    RequestHandler.tooltips.addSingular(
      FurnitureCutting.cuttables, [Text.translate('furnitureCutting.youCanCutThis')]
    )
    FurnitureCutting.hasTooltipsBeenAdded = true
  }
}])
