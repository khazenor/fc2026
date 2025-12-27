const GiveItem = {
  giveItemsSmart (event, itemId, count) {
    let numItemsPlayerCanReceive = GiveItemHelper.numItemsPlayerCanReceive(
      event, itemId, count
    )
    if (numItemsPlayerCanReceive > 0) {
      let numToGive = GiveItemHelper.numToGive(numItemsPlayerCanReceive, count)
      EventHelpers.givePlayerItemStack(event, itemId, numToGive)
    }
    let numLeftOver = GiveItemHelper.numLeftOver(numItemsPlayerCanReceive, count)
    if (numLeftOver > 0) {
      GiveItemLogger.putItemStack(event, itemId, numLeftOver)
      EventHelpers.tellPlayer(event, Text.translate('giveItem.message.itemStored', 
        TransHelper.itemName(itemId),
        StrHelper.cleanFloor(numLeftOver)
      ))
    }
  },
  giveAvailableItems(event) {
    let allItemStacks = GiveItemLogger.getAllItemStacks(event)
    let itemIds = Object.keys(allItemStacks)
    if (itemIds.length > 0) {
      let lockKey = `giveAvailableItems${EventHelpers.playerUuid(event)}`
      if (!Lock.isLocked(lockKey)) {
        Lock.setLock(lockKey)

        let leftOverItems = {}
        for (let itemId of itemIds) {
          let count = ObjectHelper.toInt(allItemStacks[itemId])
          let numItemsPlayerCanReceive = GiveItemHelper.numItemsPlayerCanReceive(
            event, itemId, count
          )
          if (numItemsPlayerCanReceive > 0) {
            let numToGive = GiveItemHelper.numToGive(numItemsPlayerCanReceive, count)
            EventHelpers.tellPlayer(event, Text.translate('giveItem.message.itemReceivedFromStash', 
              TransHelper.itemName(itemId),
              StrHelper.cleanFloor(numToGive)
            ))
            EventHelpers.givePlayerItemStack(event, itemId, numToGive)
          }
          let numLeftOver = GiveItemHelper.numLeftOver(numItemsPlayerCanReceive, count)
          if (numLeftOver > 0) {
            leftOverItems[itemId] = numLeftOver
          }
        }
        GiveItemLogger.setAllItemStacks(event, leftOverItems)

        Lock.unLock(lockKey)
      }
    }
  }
}
RequestHandler.callbacks.playerEvents.inventoryChanged([event => {
  GiveItem.giveAvailableItems(event)
}])