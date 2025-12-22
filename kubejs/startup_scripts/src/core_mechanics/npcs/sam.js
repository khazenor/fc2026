const NpcSam = {
  offerDefs: [
    {villagerItems: ['minecraft:stick']}
  ],
  name: 'Sam'
}
RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  if (
    NpcHelper.isTargetHumanoid(event) &&
    EventHelpers.targetEntityName(event) === NpcSam.name
  ) {
    NpcHelper.npcTalkToPlayerAndUpdateTrades(event, NpcSam.name, NpcSam.offerDefs)
  }
}])