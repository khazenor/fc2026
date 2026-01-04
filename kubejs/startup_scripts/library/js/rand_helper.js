// priority: 990

// requires:
//  - PlayerTimingJs
const RandHelper = {
  cachedRandNums: [],
  numCacheRandNums: 1000,
  mineDayRandNum (idx) {
    if (PlayerTimingJs.lastActivityMoreThan('randHelper', 'mineDayRandNum', 1200)) {
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
    while (values.length < numToPick) {
      let pickNumber = this.randMineDayInt(arr.length, idx)
      if (!pickedNumbers.includes(pickNumber)) {
        values.push(arr[pickNumber])
        pickedNumbers.push(pickNumber)
      }
      idx ++
    }
    return values
  }
}