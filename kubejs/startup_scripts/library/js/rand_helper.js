// priority: 990

// requires:
//  - PlayerTimingJs
const RandHelper = {
  cachedRandNums: [],
  numCacheRandNums: 1000,
  mineDayRandNum (idx) {
    if (
      this.cachedRandNums.length === 0 ||
      PlayerTimingJs.hasItBeen('randHelper', 'mineDayRandNum', 10)
    ) {
      this.cachedRandNums = []
      for (let i = 0; i < this.numCacheRandNums; i++) {
        this.cachedRandNums.push(Math.random())
      }
    }
    return this.cachedRandNums[idx]
  },
  randMineDayInt (upperBound, idx) {
    return Math.floor(this.mineDayRandNum(idx) * upperBound)
  },
  randomMineDayRandFromArr(arr, numToPick) {
    let values = []
    let pickedNumbers = []
    let idx = 0
    for (let idx = 0; idx < this.numCacheRandNums; idx++) {
      let pickNumber = this.randMineDayInt(arr.length, idx)
      if (!pickedNumbers.includes(pickNumber)) {
        values.push(arr[pickNumber])
        pickedNumbers.push(pickNumber)

        if (values.length === numToPick) {
          return values
        }
      }
    }
    return values
  }
}