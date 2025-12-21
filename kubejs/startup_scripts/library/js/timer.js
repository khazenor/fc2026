const Timer = {
  checkAreYouSure (playerName) {
    return this.checkAreYouSureLike(playerName, 'checkAreYouSure', 10)
  },
  checkAreYouSureLike (playerName, activityId, timeLimit) {
    if (this._lastActivityLessThan(playerName, activityId, timeLimit)) {
      this._clearActivity(playerName, activityId)
      return true
    } else {
      return false
    }
  },
  lastActivityLessThan (playerName, activityId, time) {
    let timeSince = this._timeSinceLastActivity(playerName, activityId)
    return timeSince > 0 && timeSince <= time
  },
  lastActivityMoreThan (playerName, activityId, time) {
    let timeSince = this._timeSinceLastActivity(playerName, activityId)
    if (timeSince === -1) {
      return true // returns true for first time
    }
    return timeSince >= time
  },
  timeSinceLastActivity (playerName, activityId) {
    let curTime = this._curTime
    if (this._hasLastActivity(playerName, activityId)) {
      let lastTime = this._getLastActivityTime(playerName, activityId)
      this._logActivity(playerName, activityId)
      return curTime - lastTime
    } else {
      this._logActivity(playerName, activityId)
      return -1
    }
  },
  _logActivity (playerName, activityId) {
    this._setActivity(playerName, activityId, this._curTime)
  },
  _clearActivity (playerName, activityId) {
    this._setActivity(playerName, activityId, null)
  },
  _setActivity (playerName, activityId, value) {
    if (!(playerName in timeLogByPlayer)) {
      let addObj = {}
      addObj[activityId] = value
      timeLogByPlayer[playerName] = addObj
    } else {
      timeLogByPlayer[playerName][activityId] = value
    }
  },
  _getLastActivityTime (playerName, activityId) {
    return timeLogByPlayer[playerName][activityId]
  },
  _hasLastActivity (playerName, activityId) {
    if (!this._timeLogByPlayer[playerName]) {
      return false
    } else if (!this._timeLogByPlayer[playerName][activityId]) {
      return false
    } else {
      return true
    }
  },
  get _curTime () {
    return Number(new Date().getTime() / 1000)
  },
  _timeLogByPlayer: {}
}

