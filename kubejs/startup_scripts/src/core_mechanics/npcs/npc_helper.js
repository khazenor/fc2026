// priority: 2
const NpcHelper = {
  humanoidEntityType: 'easy_npc:humanoid',
  humanoidSlimEntityType: 'easy_npc:humanoid_slim',
  isEventInteractingWithNpc(npcName, event) {
    return (
      EventHelpers.hasTargetEntity(event) &&
      (EventHelpers.targetEntityType(event) === this.humanoidEntityType ||
      EventHelpers.targetEntityType(event) === this.humanoidSlimEntityType) &&
      EventHelpers.targetEntityName(event) === npcName &&
      PlayerTimingJs.trueIfNotSpam(event)
    )
  },
  npcTalkToPlayerAndUpdateTrades (event, name, offerDefs) {
    let player = event.player
    let target = event.target
    let npcName = target.name.getString()
    if ((target.type === this.humanoidEntityType ||
      target.type === this.humanoidSlimEntityType) &&
      !PlayerTimingJs.checkAreYouSureLike(player, 'talkToNPC', 5)
    ) {
      let playerName = player.name.getString()
      if (npcDialogDefs(npcName, playerName)[npcName]) {
        let dialog = ArrayJs.getRandomArrayElement(
          npcDialogDefs(npcName, playerName)[npcName].dialogs
        )
        player.tell(dialog)
      } else {
        player.tell('updating trades')
      }
      if (offerDefs) {
        let playerName = EventHelpers.playerName(event)
        event.server.runCommandSilent(EasyNpcHelper.updateNpcCommand(playerName, name, offerDefs, target.type))
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
  },
  handleSellingItemToNpc (event, npcGiveId, npcGiveCount) {
    let player = event.player
    let target = event.target
    let handItemId = EventHelpers.mainHandItemId(event)
    let itemName = TransHelper.itemName(handItemId)

    if (PlayerTimingJs.checkAreYouSureLike(player, 'sellingToNpc', 10)) {
      player.tell(Text.translatable(
        'npcs.sellItem.thankYou',
        target.name.getString(),
        TransHelper.itemNameWithIsArePlural(npcGiveId, npcGiveCount)
      ))
      player.mainHandItem.count --
      GiveItem.giveItemsSmart(event, npcGiveId, npcGiveCount)
    } else {
      player.tell(Text.translatable('npcs.sellItem.areYouSureSell', itemName))
    }
    event.cancel()
  },
  registerItems (npcName) {
    let lowerName = npcName.toLowerCase()
    RequestHandler.items.create.simple([`${lowerName}`])
  },
  get npcObjs () {
    return [
      NpcAndre, NpcJess, NpcPamela, NpcRen, NpcSam, NpcYukkie, NpcLaly,
      NpcElna, NpcBernina, NpcParlan, NpcFenny
    ]
  }
}
