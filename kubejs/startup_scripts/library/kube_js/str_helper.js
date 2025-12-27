// priority 1
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
  }
}