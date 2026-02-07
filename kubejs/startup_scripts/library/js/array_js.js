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
  javaArrToArr (javaArr) {
    if (typeof javaArr === 'string') {
      return [javaArr]
    }
    let arr = []
    for (let i = 0; i<javaArr.length; i++) {
      arr.push(javaArr[`${i}`])
    }
    return arr
  },
  arrayDiff (parentArray, subtractArray) {
    let arrayDiff = []
    for (let parentVal of parentArray) {
      if (!subtractArray.includes(parentVal)) {
        arrayDiff.push(parentVal)
      }
    }
    return arrayDiff
  },
  getRandomArrayElement (arr) {
    return arr[Math.floor(Math.random()*arr.length)]
  },
  reduce(array, base, workingValElementCallback) {
    let workingVal = base
    for (let element of array) {
      workingVal = workingValElementCallback(workingVal, element)
    }
    return workingVal
  },
  max(array) {
    return this.reduce(array, array[0], (workingVal, element) => Math.max(workingVal, element))
  },
  min(array) {
    return this.reduce(array, array[0], (workingVal, element) => Math.min(workingVal, element))
  },
  chunk(array, chunkSize) {
    let chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, chunkSize))
    }
    return chunks
  },
  addElementOrArrayValuesToArray(arr, thing) {
    if (Array.isArray(thing)) {
      thing.forEach(elem => {
        arr.push(elem)
      })
    } else {
      arr.push(thing)
    }
  },
  removeDuplicates(arr) {
    let noDupeArr = []
    for (let elm of arr) {
      if (!noDupeArr.includes(elm)) {
        noDupeArr.push(elm)
      }
    }
    return noDupeArr
  }
}