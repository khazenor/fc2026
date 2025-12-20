// priority: 1000
const ArrayJs = {
  safeAccess (array, index, defaultVal) {
    if (index >= array.length) {
      if (defaultVal) {
        return defaultVal
      } else {
        return null
      }
    }
    return array[index]
  },
  repeatArr (val, times) {
    let arr = []
    for (let i = 0; i < times; i++) {
      arr.push(val)
    }
    return arr
  },
  toStrArray (objArray) {
    let list = []
    for (let val of objArray) {
      list.push(StrHelper.cleanStr(val))
    }
    return list
  },
  addToObjectArray (objArray, key, value) {
    if (objArray[key]) {
      objArray[key].push(value)
    } else {
      objArray[key] = [value]
    }
  },
  arrayDiff (parentArray, subtractArray) {
    let arrayDiff = []
    for (let parentVal of parentArray) {
      if (!subtractArray.includes(parentVal)) {
        arrayDiff.push(parentVal)
      }
    }
    return arrayDiff
  }
}