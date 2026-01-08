const MenuGui = {
  openMenuGui (event) {
    let title = Text.translate('sellingFood.gui.title')
    let matrix = ChestGuiHelper.blankMatrix(3)
    MenuHeaderHelper.writeHeaderToMatrix(event, matrix)
    MenuActiveOrdersHelper.writeActiveOrdersToMatrix(event, matrix)
    ChestGuiHelper.simpleGui(event, matrix, title)
  }
}
