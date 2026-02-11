const PlankCutting = {
  plankInfoCacheFilename: 'plank_info',
  allConvertibleFilename: 'plank_cutting_ids',
  cuttableNames: [
    'fence', 'trapdoor', 'roof', 'stair', 'pressure plate', 'sign', 'window', 'blind',
    'door', 'bridge'
  ],
  registerStonecuttingRecipes () {
    let plankInfo = CacheHelper.loadCache(this.plankInfoCacheFilename)
    if (plankInfo) {
      for (let plankInfoEntry of plankInfo) {
        let cuttableIds = plankInfoEntry.cuttableIds.concat(plankInfoEntry.plankIds)
        let tagName = `c:${StrHelper.replaceAll(plankInfoEntry.name, ' ', '_')}_plank_cuttables`
        RequestHelper.stonecuttingAllToAll(cuttableIds, tagName)
      }
    }
  },
  generatePlanInfoCache () {
    let plankInfo = this._getPlankIds()
    let allConvertibleIds = this._populateConvertibleIds(plankInfo)
    CacheHelper.cacheObject(this.plankInfoCacheFilename, plankInfo)
    CacheHelper.cacheObject(this.allConvertibleFilename, allConvertibleIds)
  },
  _populateConvertibleIds (plankInfo) {
    let allConvertibleIds = []
    for (let itemId of planksCuttingList) {
      let itemName = TransHelper.itemNameEngStr(itemId).toLowerCase()
      for (let plankInfoEntry of plankInfo) {
        if (itemName.includes(plankInfoEntry.name)) {
          if (this._nameContainsCuttables(itemName)) {
            allConvertibleIds.push(itemId)
            if (
              plankInfoEntry.cuttableIds &&
              !plankInfoEntry.cuttableIds.includes(itemId)
            ) {
              plankInfoEntry.cuttableIds.push(itemId)
            } else {
              plankInfoEntry.cuttableIds = [itemId]
            }
            break
          }
        }
      }
    }
    return allConvertibleIds
  },
  _addItemIdToPlankInfo (itemId, plankInfo) {

  },
  _nameContainsCuttables (itemName) {
    for (let cuttableName of this.cuttableNames) {
      if (itemName.includes(cuttableName)) {
        return true
      }
    }
    return false
  },
  _getPlankIds() {
    let plankInfo = []
    for (let plankId of planksList) {
      let woodName = TransHelper.itemNameEngStr(plankId).replace('Planks', '').trim().toLowerCase()
      this._addPlankIdToPlankInfo(woodName, plankId, plankInfo)
    }
    return plankInfo
  },
  _addPlankIdToPlankInfo(name, plankId, plankInfo) {
    for (let plankInfoEntry of plankInfo) {
      if (plankInfoEntry.name === name) {
        plankInfoEntry.plankIds.push(plankId)
        return
      }
    }
    plankInfo.push({ name: name, plankIds: [plankId] })
  }
}
RequestHandler.callbacks.serverEvents.loaded([event => {
  if (isDev) {
    PlankCutting.generatePlanInfoCache()
  }
}])

RequestHandler.tooltips.addSingular(
  CacheHelper.loadCache(PlankCutting.allConvertibleFilename),
  Text.translate('planksCutting.youCanCutThis')
)

RequestHandler.tooltips.addSingular(
  planksList,
  Text.translate('planksCutting.youCanCutThis')
)

PlankCutting.registerStonecuttingRecipes()
