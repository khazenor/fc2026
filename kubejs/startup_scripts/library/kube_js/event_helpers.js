// priority: 1000
const EventHelpers = {
  numItemsInPlayer: (event, itemId) => {
    let count = 0
    for (let itemStack of event.player.inventory.allItems) {
      if (itemStack.id === itemId) {
        count += itemStack.count
      }
    }
    return count
  },
  removeItemsFromPlayer: (event, itemId, numToRemove) => {
    let player = event.player
    let numLeftToRemove = numToRemove
    for (let itemStack of player.inventory.allItems) {
      if (itemStack.id === itemId) {
        if (itemStack.count <= numLeftToRemove) {
          numLeftToRemove -= itemStack.count
          itemStack.count = 0
        } else {
          itemStack.count -= numLeftToRemove
          numLeftToRemove = 0
        }
        if (numLeftToRemove <= 0) {
          break
        }
      }
    }
  },
  giveItems: (event, itemId, count) => {
    event.player.give(`${count}x ${itemId}`)
  }
}
