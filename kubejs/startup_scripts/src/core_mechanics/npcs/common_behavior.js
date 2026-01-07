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
    } else {
      NpcHelper.npcTalkToPlayerAndUpdateTrades(event, npcObj.name, NpcSam.offerDefs)
    }
  }
}