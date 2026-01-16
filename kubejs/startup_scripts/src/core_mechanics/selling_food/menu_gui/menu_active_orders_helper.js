const MenuActiveOrdersHelper = {
  writeActiveOrdersToMatrix (event, matrix) {
    let orderStartRow = 1
    let activeOrders = PlayerOrderLogger.allOrders(event)
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow, 0, 0, 1, this.customerHeadMatrixSlots(activeOrders, 1)
    )
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow + 1, 0, 0, 1, this.foodRequestsMatrixSlots(activeOrders, 1)
    )
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow + 2, 0, 0, 1, this.customerHeadMatrixSlots(activeOrders, 2)
    )
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow + 3, 0, 0, 1, this.foodRequestsMatrixSlots(activeOrders, 2)
    )
  },
  customerHeadMatrixSlots (activeOrders, rowNum) {
    let customerNames = rowNum === 1
      ? Object.keys(activeOrders).slice(0, 9)
      : Object.keys(activeOrders).slice(9, 18)
    return customerNames.map(name => this.customerHeadId(name))
  },
  foodRequestsMatrixSlots (activeOrders, rowNum) {
    return rowNum === 1
      ? Object.values(activeOrders).slice(0, 9)
      : Object.values(activeOrders).slice(9, 18)
  },
  customerHeadId (customerName) {
    return `kubejs:${customerName.toLowerCase()}`
  }
}