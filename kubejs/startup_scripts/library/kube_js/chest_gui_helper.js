const ChestGuiHelper = {
  chestRowLength: 9,
  // each row should have size 9
  // matrix must have 3-6 rows
  simpleGui (event, itemMatrix, title) {
    event.player.openChestGUI(title, itemMatrix.length, gui => {
      for (let rowIdx = 0; rowIdx < itemMatrix.length; rowIdx++) {
        let itemRow = itemMatrix[rowIdx]
        for (let colIdx = 0; colIdx < itemRow.length; colIdx++) {
          let itemId = itemRow[colIdx]
          if (itemId) {
            gui.slot(col, row, slot => {
              slot.item = Item.of(itemId)
            })
          }
        }
      }
    })
  },
  blankMatrix (numRows) {
    let matrix = []
    for (let i = 0; i < numRows; i++) {
      let row = []
      for (let j = 0; j < this.chestRowLength; j++) {
        row.push(null)
      }
      matrix.push(row)
    }
    return matrix
  }
}