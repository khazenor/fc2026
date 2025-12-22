const NpcHelper = {
  isTargetHumanoid (event) {
    return EventHelpers.targetEntityType(event) === 'easy_npc:humanoid'
  }
}