// priority: 800
const FarmingForBlockheads = {
  recipeLocation: 'kubejs/data/farmingforblockheads/recipe/market/farming_crossing/',
  presetLocation: 'kubejs/data/farming_crossing/market_presets/',
  addEntry(category, paymentId, paymentNum, resultId, resultNum) {
    let presetFilename = this._writePresetFile(paymentId, paymentNum)
    let entryObj = {
      "type": "farmingforblockheads:market",
      "category": `farmingforblockheads:${category}`,
      "preset": `farming_crossing:${presetFilename}`,
      "result": {
        "count": resultNum,
        "item": resultId
      }
    }
    let entryFilename = `${category}_${StrHelper.idCountToFilename(resultId, resultNum)}`
    IoHelper.writeObj(
      this.recipeLocation + entryFilename+'.json', entryObj
    )
  },
  _writePresetFile(paymentId, paymentNum) {
    let presetObj = {
      "enabled": true,
      "payment": {
        "ingredient": {
          "item": paymentId
        },
        "count": paymentNum
      }
    }
    let presetFilename = StrHelper.idCountToFilename(paymentId, paymentNum)
    IoHelper.writeObj(
      this.presetLocation + presetFilename + '.json', presetObj
    )
    return presetFilename
  }
}