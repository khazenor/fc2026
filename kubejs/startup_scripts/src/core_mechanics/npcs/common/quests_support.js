const QuestSupport = {
  checkCollectionProgressId: 'kubejs:check_collection_progress',
  fullSettlementCertificateId: 'kubejs:full_settlement_certificate'
}

RequestHandler.items.create.simple([
  'kubejs:village_capacity_permit',
  QuestSupport.checkCollectionProgressId,
  QuestSupport.fullSettlementCertificateId
])

RequestHandler.callbacks.itemEvents.rightClicked(event => {
  let mainHandItemId = EventHelpers.mainHandItemId(event)
  if (mainHandItemId === QuestSupport.checkCollectionProgressId) {
    event.server.runCommandSilent(
      `execute at @p[name=${event.player.username}] run function fc_collection:check_collection_scores`
    )
  }
})

RequestHandler.tooltips.add([
  [QuestSupport.checkCollectionProgressId, [Text.translate('tooltips.checkCollectionProgress')]],
  [QuestSupport.fullSettlementCertificateId, [
    Text.translate('tooltip.fullSettlementCertificate1'),
    Text.translate('tooltip.fullSettlementCertificate2')
  ]]
])
