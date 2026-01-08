const MenuHeaderHelper = {
  writeHeaderToMatrix(event, matrix) {
    let numFoodCollected = PlayerFoodCollectedLogger.foodCollected(event).length
    let foodCost = FoodTicketCost.foodCost(numFoodCollected)
    ChestGuiHelper.writeArrToMatrix(matrix, 0, 0, 0, 1, this.mealCollectedMatrixSlots(numFoodCollected))
    ChestGuiHelper.writeArrToMatrix(matrix, 0, 5, 0, 1, this.mealCostMatrixSlots(foodCost))
  },
  numberId (num) {
    return `kubejs:number${StrHelper.cleanFloor(num)}`
  },
  get numberIds () {
    let ids = []
    for (let i = 0; i < 10; i++) {
      ids.push(this.numberId(i))
    }
    return ids
  },
  numberMatrixSlot (num, nameNum) {
    return { itemId: this.numberId(num), customName: StrHelper.cleanFloor(nameNum) }
  },
  numberInMatrixSlots (num) {
    let ones = num % 10
    let tens = Math.floor((num % 100) / 10)
    let hundreds = Math.floor((num % 1000) / 100)
    let ids = []
    if (num >= 100) {
      ids.push(this.numberMatrixSlot(hundreds, num))
    }
    if (num >= 10) {
      ids.push(this.numberMatrixSlot(tens, num))
    }
    ids.push(this.numberMatrixSlot(ones, num))
    return ids
  },
  mealCollectedMatrixSlots (numMealsCollected) {
    let header = {
      itemId: 'farm_and_charm:stuffed_chicken',
      customName: Text.translate('sellingFood.gui.mealsCollected')
    }
    return [header].concat(this.numberInMatrixSlots(numMealsCollected))
  },
  mealCostMatrixSlots (mealCost) {
    let header = {
      itemId: MilesTickets.ticketId,
      customName: Text.translate('sellingFood.gui.mealsCost')
    }
    return [header].concat(this.numberInMatrixSlots(mealCost))
  }
}

RequestHandler.items.create.simple(MenuHeaderHelper.numberIds)