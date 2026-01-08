const ChestGuiHelper = {
  chestRowLength: 9,
  // each row should have size 9
  // matrix must have 3-6 rows
  simpleGui (event, itemMatrix, title) {
    event.player.openChestGUI(title, itemMatrix.length, gui => {
      gui.playerSlots = true

      for (let rowIdx = 0; rowIdx < itemMatrix.length; rowIdx++) {
        let itemRow = itemMatrix[rowIdx]
        for (let colIdx = 0; colIdx < itemRow.length; colIdx++) {
          let item = itemRow[colIdx]
          let slotItem = null
          if (item) {
            if (item.customName) {
              slotItem = Item.of(item.itemId).withCustomName(item.customName)
            } else {
              slotItem = Item.of(item)
            }

            gui.slot(colIdx, rowIdx, slot => {
              slot.item = slotItem
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
  },
  writeArrToMatrix (matrix, startRow, startCol, rowIncr, colIncr, arr) {
    let row = startRow
    let col = startCol
    for (let val of arr) {
      matrix[row][col] = val
      row += rowIncr
      col += colIncr
    }
  }
}