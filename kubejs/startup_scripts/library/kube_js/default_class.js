// priority: 2
function DefaultClass () {
  return this
}

DefaultClass.prototype = {
  override (overrideObj, key, defaultValue) {
    overrideObj = ObjectHelper.strifyKeys(overrideObj)
    if (!overrideObj) {
      return defaultValue
    }
    if (key in overrideObj) {
      return overrideObj[key]
    } else {
      return defaultValue
    }
  }
}