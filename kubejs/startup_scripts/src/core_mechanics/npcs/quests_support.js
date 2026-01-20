const QuestSupport = {
  checkCollectionProgressId: 'kubejs:check_collection_progress'
}

RequestHandler.items.create.simple([
  'kubejs:village_capacity_permit',
  QuestSupport.checkCollectionProgressId
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
  ['kubejs:check_collection_progress', [Text.translate('tooltips.checkCollectionProgress')]]
])
