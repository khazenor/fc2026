const FurnitureCutting = {
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
  get stonecuttingDefs () {
    let defs = []
    this.populateConvertableIds()
    for (let woodDef of WoodTypeInfo.woodTypeChecklist) {
      defs.push(woodDef.convertableIds.concat(woodDef.id))
    }
    return defs
  }
}
RequestHandler.callbacks.beforeServerHooks([() => {
  RequestHandler.recipes.add.stonecuttingArrInAndOutput(FurnitureCutting.stonecuttingDefs)
}])
