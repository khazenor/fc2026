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
    event.player.give(StrHelper.itemStackStr(itemId, count))
  },
  player: (event) => {
    return event.player
  },
  playerUuid: (event) => {
    return event.player.uuid.toString()
  },
  playerName: (event) => {
    return event.player.username
  },
  isPlayerShifting: (event) => {
    return event.player.shiftKeyDown
  },
  mainHandItem: (event) => {
    return event.player.mainHandItem
  },
  mainHandItemId: (event) => {
    return StrHelper.cleanStr(event.player.mainHandItem.id)
  },
  numStacksOfItemInPlayer: (event, itemId) => {
    let count = 0
    for (let itemStack of event.player.inventory.allItems) {
      if (itemStack.id === itemId) {
        count ++
      }
    }
    return count
  },
  numSlotsLeftOverInPlayer: (event) => {
    let usedSlots = event.player.inventory.allItems.length
    let totalSlots = event.player.inventory.slots
    let craftingSlots = 5
    let leftOverSlots = totalSlots - usedSlots - craftingSlots
    return leftOverSlots
  },
  playerData: (event) => {
    return event.player.persistentData
  },
  tellPlayer: (event, msg) => {
    event.player.tell(msg)
  },
  givePlayerItemStack: (event, itemId, count) => {
    let itemObj = Item.of(itemId)
    itemObj.count = count
    event.player.give(itemObj)
  },
  removeItemsInPlayer: (event, itemId, numToRemove) => {
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
  add: (event, target, data) => {
    event.add(target, data)
  },
  targetEntityType: (event) => {
    return StrHelper.cleanStr(event.target.type)
  },
  targetEntityName: (event) => {
    return event.target.name.getString()
  }
}
