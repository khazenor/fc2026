RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (
    NpcHelper.isTargetHumanoid(event) &&
    EventHelpers.targetEntityName(event) === 'Sam'
  ) {
    EventHelpers.tellPlayer(event, 'Hi I\'m Sam!')
  }
}])