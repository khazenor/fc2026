const npcCommonBehavior = (event, npcObj, callbacksWithTruthTermination) => {
  if (NpcHelper.isEventInteractingWithNpc(npcObj.name, event)) {
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

    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, npcObj.name, npcObj.offerDefs)
  }
}

RequestHandler.callbacks.beforeClientLoaded(() => {
  NpcHelper.npcObjs.forEach(npcObj => {
    if (npcObj.tradeItemIds) {
      RequestHandler.tooltips.add([
        [npcObj.tradeItemIds, [Text.translate('npcs.tooltip.youCanBuy', npcObj.name)]]
      ])
    } else if (npcObj.offerDefs) {
      for (let offerDef of npcObj.offerDefs) {
        RequestHandler.tooltips.add([[
          offerDef.villagerItems, [Text.translate('npcs.tooltip.youCanBuy', npcObj.name)]
        ]])
      }
    }
  })
})

NpcHelper.npcObjs.forEach(npcObj => {
  NpcHelper.registerItems(npcObj.name)
})