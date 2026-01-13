// priority: 1
const IoHelper = {
  arrayValuesKey: 'arrayValuesKey',
  writeObj(fileDir, writeObj) {
    if (Array.isArray(writeObj)) {
      let newWriteObj = {}
      newWriteObj[this.arrayValuesKey] = writeObj
      JsonIO.write(fileDir, newWriteObj)
    } else {
      JsonIO.write(writeObj)
    }
  },
  readObj(fileDir) {
    let loadedObj = JsonIO.read(fileDir)
    if (Object.keys(loadedObj).includes(this.arrayValuesKey)) {
      return loadedObj[this.arrayValuesKey]
    } else {
      return loadedObj
    }
  }
}