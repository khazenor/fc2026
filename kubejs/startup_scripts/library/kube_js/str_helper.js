// priority 100
const StrHelper = {
  cleanFloor: (number) => {
    let decimal = '.'
    let stringVal = `${number}`
    if (stringVal.includes(decimal)) {
      return stringVal.split(decimal)[0]
    } else {
      return stringVal
    }
  },
  replaceAll (parentStr, findStr, replaceStr) {
    let workingStr = parentStr
    while (workingStr.includes(findStr)) {
      workingStr = workingStr.replace(findStr,replaceStr)
    }
    return workingStr
  },
  cleanStr (str) {
    return this.replaceAll(`${str}`, '"', '')
  },
  minecraftObjToNumber (str) {
    return parseFloat( 
      this.replaceAll(this.cleanStr(str), 'd', '')
    )
  },
  itemStackStr(itemId, count) {
    return `${count}x ${itemId}`
  },
  idCountToFilename(itemId, count) {
    return `${this.replaceAll(itemId, ':', '')}_${this.cleanFloor(count)}`
  }
}