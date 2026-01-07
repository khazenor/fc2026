const ObjectHelper = {
  strifyKeys (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[StrHelper.cleanStr(key)] = obj[key]
    }
    return newObj
  },
  strifyValues (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[key] = StrHelper.cleanStr(obj[key])
    }
    return newObj
  },
  strifyKeyVals (obj) {
    let newObj = this.strifyKeys(obj)
    return this.strifyValues(newObj)
  },
  numberifyValues (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[key] = StrHelper.minecraftObjToNumber(obj[key])
    }
    return newObj
  },
  toInt (obj) {
    if (typeof obj === 'number') {
      return number
    } else {
      return StrHelper.minecraftObjToNumber(obj)
    }
  }
}