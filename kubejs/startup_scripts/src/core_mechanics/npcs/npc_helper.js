const NpcHelper = {
  isTargetHumanoid (event) {
    return EventHelpers.targetEntityType(event) === 'easy_npc:humanoid'
  },
  npcTalkToPlayerAndUpdateTrades (event, name, offerDefs) {
    let player = event.player
    let target = event.target
    let npcName = target.name.getString()
    if (target.type === 'easy_npc:humanoid' &&
      PlayerTimingJs.lastActivityMoreThan(player, 'talkToNPC', 5)
    ) {
      let playerName = player.name.getString()
      let dialog = ArrayJs.getRandomArrayElement(npcDialogDefs(npcName, playerName)[npcName].dialogs)
      player.tell(dialog)
      if (offerDefs) {
        let playerName = EventHelpers.playerName(event)
        console.log(EasyNpcHelper.updateNpcCommand(playerName, name, offerDefs))
        event.server.runCommandSilent(EasyNpcHelper.updateNpcCommand(playerName, name, offerDefs))
      }
      event.cancel()
    }
  },
  tooltipsForSellingToNpc (npcName, sellDefs) {
    for (let sellId in sellDefs) {
      let costId = sellDefs[sellId].id
      let costCount = sellDefs[sellId].count
      RequestHandler.tooltips.add([[sellId, Text.translate(
        "npcs.sellTooltip",
        npcName,
        TransHelper.itemNameWithPlural(costId, costCount)
      )]])
    }
  }
}