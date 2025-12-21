const IoHelper = {
  writeObj(fileDir, writeObj) {
    JsonIO.write(fileDir, writeObj)
  },
  readObj(fileDir) {
    return JsonIO.read(fileDir)
  }
}