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
  }
}