const ObjectHelper = {
  strifyKeys (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[`${key}`] = obj[key]
    }
    return newObj
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