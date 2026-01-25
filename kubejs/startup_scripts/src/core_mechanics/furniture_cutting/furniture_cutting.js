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
      }
    }
  },
  generateWoodcutting () {
    this.populateConvertableIds()
    let cuttables = []
    let furniture = []
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      let tagName = `c:${StrHelper.replaceAll(woodDef.names[0], ' ', '_')}_cutting`
      let cuttingItems = woodDef.convertableIds.concat(woodDef.ids)
      RequestHelper.stonecuttingAllToAll(cuttingItems, tagName)
      
      cuttables = cuttables.concat(cuttingItems)
      furniture.concat(woodDef.convertableIds)
    }
    this.cuttablesCache = cuttables
    CacheHelper.cacheObject(this.woodCacheName, cuttables)

    RequestHandler.tags.item.add([['c:cuttable_furniture', furniture]])
  },
  woodCacheName: 'all_cuttables_wood',
  hasStonecuttingRecipesBeenAdded: false,
  hasTooltipsBeenAdded: false
}
RequestHandler.callbacks.beforeServerHooks([() => {
  if (!FurnitureCutting.hasStonecuttingRecipesBeenAdded) {
    FurnitureCutting.generateWoodcutting()
    FurnitureCutting.hasStonecuttingRecipesBeenAdded = true
  }
}])

RequestHandler.callbacks.beforeClientLoaded([() => {
  if (!FurnitureCutting.hasTooltipsBeenAdded) {
    RequestHandler.tooltips.addSingular(
      CacheHelper.loadCache(FurnitureCutting.woodCacheName),
      [Text.translate('furnitureCutting.youCanCutThis')]
    )
    FurnitureCutting.hasTooltipsBeenAdded = true
  }
}])
