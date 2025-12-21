const Lock = {
  isLocked (lockKey) {
    return this._locks[lockKey]
  },
  setLock (lockKey) {
    this._locks[lockKey] = true
  },
  unLock (lockKey) {
    this._locks[lockKey] = false
  },
  _locks: {}
}