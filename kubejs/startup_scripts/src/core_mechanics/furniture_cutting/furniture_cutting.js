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
  generateCuttableInfo () {
    this.populateConvertableIds()
    let allCuttables = []
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      let stonecuttingDef = woodDef.convertableIds.concat(woodDef.id)
      this.stonecuttingDefsCache.push(stonecuttingDef)
      allCuttables = allCuttables.concat(stonecuttingDef)
    }
    this.allCuttablesCache = allCuttables
    CacheHelper.cacheObject('all_cuttables', allCuttables)
  },
  stonecuttingDefsCache: [],
  get stonecuttingDefs () {
    if (this.stonecuttingDefsCache.length == 0) {
      this.generateCuttableInfo()
    }
    return this.stonecuttingDefsCache
  },
  allCuttablesCache: [],
  get allCuttables () {
    if (this.allCuttablesCache.length > 0) {
      return this.allCuttablesCache
    } else {
      return CacheHelper.loadCache('all_cuttables')
    }
  }
}
RequestHandler.callbacks.beforeServerHooks([() => {
  RequestHandler.recipes.add.stonecuttingArrInAndOutput(FurnitureCutting.stonecuttingDefs)
  RequestHandler.tags.item.add(['c:cuttable_furniture', FurnitureCutting.allCuttables])
}])

RequestHandler.callbacks.beforeClientLoaded([() => {
  RequestHandler.tooltips.addSingular(
    FurnitureCutting.allCuttables, [Text.translate('furnitureCutting.youCanCutThis')]
  )
}])
