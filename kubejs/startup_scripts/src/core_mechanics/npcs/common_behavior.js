const npcCommonBehavior = (event, npcObj, callbacksWithTruthTermination) => {
  if (NpcHelper.isEventInteractingWithNpc(npcObj.name, event)) {
    if (PlayerTimingJs.trueIfNotSpam(event)) {
      if (callbacksWithTruthTermination) {
        for (let callbacks of callbacksWithTruthTermination) {
          let shouldTerminate = callbacks()
          if (shouldTerminate) {
            event.cancel()
            return
          }
        }
      }
      if (SellingFood.isOrderingFood(event)) {
        SellingFood.orderFood(event, npcObj.name)
        event.cancel()
        return
      }

      if (SellingFood.isDeliveringFood(event, npcObj.name)) {
        SellingFood.deliverFood(event, npcObj.name)
        event.cancel()
        return
      }

      NpcHelper.npcTalkToPlayerAndUpdateTrades(event, npcObj)
    } else {
      event.cancel()
      return
    }
  }
}

RequestHandler.callbacks.beforeClientLoaded(() => {
  NpcHelper.npcObjs.forEach(npcObj => {
    let npcItems = []

    if (npcObj.tradeItemIds) {
      npcItems = ArrayJs.removeDuplicates(npcItems.concat(npcObj.tradeItemIds))
    }
    if (npcObj.offerDefs) {
      for (let offerDef of npcObj.offerDefs) {
        npcItems = ArrayJs.removeDuplicates(npcItems.concat(offerDef.villagerItems))
      }
    }
    
    if (npcItems.length > 0) {
      RequestHandler.tooltips.add([
        [npcItems, [Text.translate('npcs.tooltip.youCanBuy', npcObj.name)]]
      ])
    }
  })
})

NpcHelper.npcObjs.forEach(npcObj => {
  NpcHelper.registerItems(npcObj.name)
})
