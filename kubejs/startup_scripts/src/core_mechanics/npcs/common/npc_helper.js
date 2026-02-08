// priority: 2
const NpcHelper = {
  humanoidEntityType: 'easy_npc:humanoid',
  humanoidSlimEntityType: 'easy_npc:humanoid_slim',
  ffbMerchantType: 'farmingforblockheads:merchant',
  get customerTypes () {
    return [this.humanoidEntityType, this.humanoidSlimEntityType, this.ffbMerchantType]
  },
  isEventInteractingWithNpc(npcName, event) {
    let entityType = event.target.type
    let entityName = event.target.name.getString()
    return (
      this.customerTypes.includes(entityType) &&
      (entityName === npcName)
    )
  },
  npcTalkToPlayerAndUpdateTrades (event, npcObj) {
    let name = npcObj.name
    let offerDefs = npcObj.offerDefs
    let player = event.player
    let target = event.target
    let npcName = target.name.getString()
    let hasFullSettlementCert = (
      EventHelpers.mainHandItemId(event) === QuestSupport.fullSettlementCertificateId ||
      EventHelpers.offHandItemId(event) === QuestSupport.fullSettlementCertificateId
    )
    if (this.customerTypes.includes(target.type) &&
      !PlayerTimingJs.checkAreYouSureLike(player, 'talkToNPC', 30)
    ) {
      let playerName = player.name.getString()
      console.log('npcDialogDefs(npcName, playerName)[npcName]', npcDialogDefs(npcName, playerName))
      let catalogOfferDef = decorationCatalog.catalogOfferDef(event, npcObj)

      if (catalogOfferDef) {
        EventHelpers.tellPlayer(event, 
          Text.translate('npcs.catalog.catalogDialog', playerName)
        )
      } else if (hasFullSettlementCert && offerDefs) {
        player.tell(Text.translate(
          'npcs.fullSettlement.dialog',
          npcName
        ))
      } else if (npcDialogDefs(npcName, playerName)[npcName]) {
        let dialog = ArrayJs.getRandomArrayElement(
          npcDialogDefs(npcName, playerName)[npcName]
        )
        player.tell(dialog)
      } else if (offerDefs) {
        player.tell('updating trades')
      }
      if (catalogOfferDef) {
        offerDefs = catalogOfferDef
      }

      if (offerDefs) {
        if (hasFullSettlementCert) {
          for (let offerDef of offerDefs) {
            if (offerDef.playerNum && offerDef.playerNum > 1) {
              offerDef.playerNum = Math.round(offerDef.playerNum / 2)
            }
          }
        }

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
  handleSellingItemToNpc (event, npcGiveId, npcGiveCount, playerGiveCount) {
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
      player.mainHandItem.count -= playerGiveCount
      GiveItem.giveItemsSmart(event, npcGiveId, npcGiveCount)
    } else {
      player.tell(Text.translatable('npcs.sellItem.areYouSureSell',
        StrHelper.cleanFloor(playerGiveCount), itemName,
        StrHelper.cleanFloor(npcGiveCount), TransHelper.itemName(npcGiveId)
      ))
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
      NpcElna, NpcBernina, NpcParlan, NpcFenny, NpcHarley, NpcLangley,
      NpcMatan, NpcSkye, NpcPingu, NpcRigg
    ]
  },
  get npcCatalogShops () {
    return [NpcElna, NpcBernina, NpcParlan, NpcFenny, NpcHarley, NpcLangley,
      NpcMatan, NpcSkye, NpcPingu]
  }
}