const PlayerDataHelper = {
  addToPlayerList (event, key, val) {
    let playerDataList = EventHelpers.playerData(event)[key]
    if (playerDataList) {
      let jsList = ArrayJs.toStrArray(playerDataList)
      jsList.push(val)
      EventHelpers.playerData(event)[key] = jsList
    } else {
      EventHelpers.playerData(event)[key] = [val]
    }
  },
  getPlayerList (event, key) {
    if (EventHelpers.playerData(event)[key]) {
      return ArrayJs.toStrArray(
        EventHelpers.playerData(event)[key]
      )
    } else {
      return []
    }
  },
  addToPlayerCountObj (event, objKey, key, val) {
    let playerObj = EventHelpers.playerData(event)[objKey]
    let countObj
    if (playerObj) {
      countObj = ObjectHelper.strifyKeys(playerObj)
      countObj = ObjectHelper.numberifyValues(countObj)
      if (countObj[key]) {
        countObj[key] = countObj[key] + val
      } else {
        countObj[key] = val
      }
    } else {
      countObj = {}
      countObj[key] = val
    }
    EventHelpers.playerData(event)[objKey] = countObj
  },
  getPlayerCountObj (event, key) {
    let obj = EventHelpers.playerData(event)[key]
    if (obj) {
      return ObjectHelper.strifyKeys(obj)
    } else {
      return {}
    }
  },
  getPlayerObjWStringKeyVals (event, objKey) {
    let playerObj = EventHelpers.playerData(event)[objKey]
    if (playerObj) {
      return ObjectHelper.strifyKeyVals(playerObj)
    } else {
      return {}
    }
  },
  setPlayerData (event, key, val) {
    EventHelpers.playerData(event)[key] = val
  },
  clearKey (event, key) {
    if (EventHelpers.playerData(event)[key]) {
      delete EventHelpers.playerData(event)[key]
    }
  }
}