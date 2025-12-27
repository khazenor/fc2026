const GiveItemLogger = {
  putItemStack (event, itemId, count) {
    PlayerDataHelper.addToPlayerCountObj(
      event,
      this._key,
      itemId,
      count
    )
  },
  getItemStack (event) {
    let countObj = PlayerDataHelper.getPlayerCountObj(event, this._key)
    let keys = Object.keys(countObj)
    if (keys.length > 0) {
      let itemId = keys[0]
      let itemStack = {}
      itemStack[itemId] = countObj[itemId]
      delete countObj[itemId]
      PlayerDataHelper.setPlayerData(event, this._key, countObj)
      return itemStack
    } else {
      return null
    }
  },
  getAllItemStacks (event) {
    return PlayerDataHelper.getPlayerCountObj(event, this._key)
  },
  setAllItemStacks (event, allItemStacks) {
    PlayerDataHelper.setPlayerData(event, this._key, allItemStacks)
  },
  _key: GiveItemConst.loggerKey
}