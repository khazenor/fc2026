const FurnitureCutting = {
  allCuttablesWoodCacheName: 'all_cuttables_wood',
  itemsByMaterialCacheName: 'furniture_items_by_material',
  getWoodDefForItemId (itemId) {
    let itemName = StrHelper.cleanStr(TransHelper.itemNameEngStr(itemId)).toLowerCase()
    for (let i = 0; i < WoodTypeInfo.woodTypeChecklist.length; i++) {
      let woodDef = WoodTypeInfo.woodTypeChecklist[i]
      for (let name of woodDef.names) {
        if (itemName.includes(name)) {
          if (woodDef.convertableIds.includes(itemId)) {
            return null
          } else {
            return woodDef
          }
        }
      }
    }
    return null
  },
  generateItemByMaterialCache () {
    for (let itemId of FurnitureList) {
      let woodDef = this.getWoodDefForItemId(itemId)
      if (woodDef) {
        woodDef.convertableIds.push(itemId)
      }
    }
    CacheHelper.cacheObject(this.itemsByMaterialCacheName, WoodTypeInfo)
  },
  generateRecipes () {
    let itemsByMaterial = CacheHelper.loadCache(this.itemsByMaterialCacheName)
    let cuttables = []
    let furniture = []
    if (itemsByMaterial) {
      for (let woodDef of ArrayJs.javaArrToArr(itemsByMaterial.woodTypeChecklist)) {
        let tagName = `c:${StrHelper.replaceAll(woodDef.names[0], ' ', '_')}_cutting`
        let convertableIds = ArrayJs.javaArrToArr(woodDef.convertableIds)
        let ids = ArrayJs.javaArrToArr(woodDef.ids)
        let cuttingItems = convertableIds.concat(ids)

        RequestHelper.stonecuttingAllToAll(cuttingItems, tagName)
        RequestHandler.recipes.add.shapeless(
          convertableIds.map(convertableId => [
            ids[0],
            [convertableId]
          ])
        )
        
        cuttables = cuttables.concat(cuttingItems)
        furniture = furniture.concat(convertableIds)
      }
      this.cuttablesCache = cuttables
      CacheHelper.cacheObject(this.allCuttablesWoodCacheName, cuttables)
      RequestHandler.tags.item.add([['c:cuttable_furniture', furniture]])
    }
  }
}
FurnitureCutting.generateRecipes()
RequestHandler.tooltips.addSingular(
  CacheHelper.loadCache(FurnitureCutting.allCuttablesWoodCacheName),
  [Text.translate('furnitureCutting.youCanCutThis')]
)

RequestHandler.callbacks.serverEvents.loaded([() => {
  if (isDev) {
    FurnitureCutting.generateItemByMaterialCache()
  }
}])
