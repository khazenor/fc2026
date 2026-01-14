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
      let stonecuttingDef = woodDef.convertableIds.concat(woodDef.id)
      this.stonecuttingDefsCache.push(stonecuttingDef)
      cuttables = cuttables.concat(stonecuttingDef)
    }
    this.cuttablesCache = cuttables
    CacheHelper.cacheObject('all_cuttables', cuttables)
  },
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
  }
}
RequestHandler.callbacks.beforeServerHooks([() => {
  RequestHandler.recipes.add.stonecuttingArrInAndOutput(FurnitureCutting.stonecuttingDefs)
  RequestHandler.tags.item.add([['c:cuttable_furniture', FurnitureCutting.furniture]])
}])

RequestHandler.callbacks.beforeClientLoaded([() => {
  RequestHandler.tooltips.addSingular(
    FurnitureCutting.cuttables, [Text.translate('furnitureCutting.youCanCutThis')]
  )
}])
