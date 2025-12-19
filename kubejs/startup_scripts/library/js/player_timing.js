// priority: 999

// Requires:
// - helper.js

const PlayerTimingJs = {
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
  lastActivityMoreThan (playerName, activityId, time) {
    let timeSince = this._timeSinceLastActivity(playerName, activityId)
    if (timeSince === -1) {
      return true // returns true for first time
    }

    return timeSince >= time
  },

  _lastActivityLessThan (playerName, activityId, time) {
    let timeSince = this._timeSinceLastActivity(playerName, activityId)
    return timeSince > 0 && timeSince <= time
  },
  _timeSinceLastActivity (playerName, activityId) {
    let curTime = HelperJs.curTimeSecs
    if (_hasLastActivity(playerName, activityId)) {
      let lastTime = this._getLastActivityTime(playerName, activityId)
      this._logActivity(playerName, activityId)
      return curTime - lastTime
    } else {
      this._logActivity(playerName, activityId)
      return -1
    }
  },
  _getLastActivityTime (playerName, activityId) {
    return this._timeLogByPlayer[playerName][activityId]
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
  _logActivity (playerName, activityId) {
    this._setActivity(playerName, activityId, HelperJs.curTimeSecs)
  },
  _clearActivity (playerName, activityId) {
    this._setActivity(playerName, activityId, null)
  },
  _setActivity (playerName, activityId, value) {
    if (!(playerName in this._timeLogByPlayer)) {
      let addObj = {}
      addObj[activityId] = value
      this._timeLogByPlayer[playerName] = addObj
    } else {
      this._timeLogByPlayer[playerName][activityId] = value
    }
  },
  _timeLogByPlayer: {}  
}