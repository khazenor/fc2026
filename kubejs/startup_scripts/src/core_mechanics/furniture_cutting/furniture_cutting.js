const FurnitureCutting = {
  allCuttablesCacheKey: 'all_cuttables',
  populateConvertableIds () {
    for (let itemId of FurnitureList) {
      let itemName = StrHelper.cleanStr(TransHelper.itemNameEngStr(itemId)).toLowerCase()

      for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
        if (itemName.includes(woodDef.name) && !woodDef.convertableIds.includes(itemId)) {
          woodDef.convertableIds.push(itemId)
        }
      }
    }
  },
  generateCuttableInfo () {
    this.populateConvertableIds()
    let allCuttables = []
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      let stonecuttingDef = woodDef.convertableIds.concat(woodDef.id)
      this.stonecuttingDefsCache.push(stonecuttingDef)
      allCuttables = allCuttables.concat(stonecuttingDef)
    }
    CacheHelper.cacheObject('all_cuttables', allCuttables)
  },
  stonecuttingDefsCache: [],
  get stonecuttingDefs () {
    if (this.stonecuttingDefsCache.length == 0) {
      this.generateCuttableInfo()
    }
    return this.stonecuttingDefsCache
  },
  get allCuttables () {
    return CacheHelper.loadCache(this.allCuttablesCacheKey)
  }
}
RequestHandler.callbacks.beforeServerHooks([() => {
  RequestHandler.recipes.add.stonecuttingArrInAndOutput(FurnitureCutting.stonecuttingDefs)
}])

RequestHandler.callbacks.beforeClientLoaded([() => {
  RequestHandler.tooltips.addSingular(
    FurnitureCutting.allCuttables, [Text.translate('furnitureCutting.youCanCutThis')]
  )
}])
