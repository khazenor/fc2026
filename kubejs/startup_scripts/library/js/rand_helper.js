// priority: 990

// requires:
//  - PlayerTimingJs
const RandHelper = {
  cachedRandNums: [],
  numCacheRandNums: 1000,
  mineDayRandNum (idx) {
    if (
      this.cachedRandNums.length === 0 ||
      PlayerTimingJs.hasItBeen('randHelper', 'mineDayRandNum', 600)
    ) {
      this.cachedRandNums = []
      for (let i = 0; i < this.numCacheRandNums; i++) {
        this.cachedRandNums.push(Math.random())
      }
    }
    return this.cachedRandNums[idx]
  },
  randMineDayIntFromRange (lowerValue, upperValue, idx) {
    return this.randMineDayInt(upperValue - lowerValue + 1, idx) + lowerValue
  },
  randMineDayInt (upperBound, idx) {
    return Math.floor(this.mineDayRandNum(idx) * upperBound)
  },
  randWeightedSuccess (chance, idx) {
    return this.mineDayRandNum(idx) <= chance
  },
  randSellPrice (lowerBound, upperBound, idx) {
    let randNum = this.mineDayRandNum(idx)
    let middle = Math.floor((lowerBound + upperBound) / 2 + .5)
    let upperMiddle = Math.floor((middle + upperBound) / 2 + .5)
    let lowerMiddle = Math.floor((middle + lowerBound) / 2 + .5)
    if (randNum < .1) { return lowerBound }
    if (randNum > .9) { return upperBound }
    if (randNum < .3) { return lowerMiddle }
    if (randNum > .7) { return upperMiddle }
    return middle
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
  },
  randomItemFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  },
  randomMineDayKeysFromObj(obj, numToPick) {
    return this.randomMineDayRandFromArr(Object.keys(obj), numToPick)
  },
  randomMineDayValuesFromObj(obj, numToPick) {
    return this.randomMineDayKeysFromObj(obj, numToPick).map(key => obj[key])
  }
}