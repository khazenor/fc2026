const MenuActiveOrdersHelper = {
  writeActiveOrdersToMatrix (event, matrix) {
    let orderStartRow = 1
    let activeOrders = PlayerOrderLogger.allOrders(event)
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow, 0, 0, 1, this.customerHeadMatrixSlots(activeOrders)
    )
    ChestGuiHelper.writeArrToMatrix(
      matrix, orderStartRow + 1, 0, 0, 1, this.foodRequestsMatrixSlots(activeOrders)
    )
  },
  customerHeadMatrixSlots (activeOrders) {
    let customerNames = Object.keys(activeOrders)
    return customerNames.map(name => this.customerHeadId(name))
  },
  foodRequestsMatrixSlots (activeOrders) {
    return Object.values(activeOrders)
  },
  customerHeadId (customerName) {
    return `kubejs:${customerName.toLowerCase()}`
  }
}