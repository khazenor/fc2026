const GiveItemHelper = {
  numItemsPlayerCanReceive (event, itemId, count) {
    let stackSize = ItemHelpers.stackSize(itemId)
    let numSlotsNeeded = Math.ceil(count / stackSize)
    let emptySlotsAvailable = EventHelpers.numSlotsLeftOverInPlayer(event)
    if (emptySlotsAvailable >= numSlotsNeeded) {
      return count
    }
    let numItems = 0
    if (emptySlotsAvailable > 0) {
      numItems += emptySlotsAvailable * stackSize
    }
    let numItemsInPlayer = EventHelpers.numItemsInPlayer(event, itemId)
    let numStacksInPlayer = EventHelpers.numStacksOfItemInPlayer(event, itemId)
    let incompleteStackAmt = numStacksInPlayer * stackSize - numItemsInPlayer
    if (incompleteStackAmt > 0) {
      numItems += incompleteStackAmt
    }
    return numItems
  },
  numToGive(numItemsPlayerCanReceive, count) {
    if (numItemsPlayerCanReceive > count) {
      return count
    } else {
      return numItemsPlayerCanReceive
    }
  },
  numLeftOver(numItemsPlayerCanReceive, count) {
    if (numItemsPlayerCanReceive >= count) {
      return 0
    } else {
      return count - numItemsPlayerCanReceive
    }
  }
}