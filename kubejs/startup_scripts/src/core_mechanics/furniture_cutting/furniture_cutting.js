const FurnitureCutting = {
  allCuttablesWoodCacheName: 'all_cuttables_wood',
  itemsByMaterialCacheName: 'furniture_items_by_material',
  getWoodDefForItemId (itemId) {
    let itemName = StrHelper.cleanStr(TransHelper.itemNameEngStr(itemId)).toLowerCase()
    for (let i = 0; i < WoodTypeInfo.woodTypeChecklist.length; i++) {
      let woodDef = WoodTypeInfo.woodTypeChecklist[i]
      for (let name of woodDef.names) {
        if (itemName.includes(name) && !woodDef.convertableIds.includes(itemId)) {
          return woodDef
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
  generateWoodcutting () {
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
        
        cuttables = cuttables.concat(cuttingItems)
        furniture.concat(woodDef.convertableIds)
      }
      this.cuttablesCache = cuttables
      CacheHelper.cacheObject(this.allCuttablesWoodCacheName, cuttables)

      RequestHandler.tags.item.add([['c:cuttable_furniture', furniture]])
    }
  }
}
FurnitureCutting.generateWoodcutting()
RequestHandler.tooltips.addSingular(
  CacheHelper.loadCache(FurnitureCutting.allCuttablesWoodCacheName),
  [Text.translate('furnitureCutting.youCanCutThis')]
)

RequestHandler.callbacks.serverEvents.loaded([() => {
  FurnitureCutting.generateItemByMaterialCache()
}])
