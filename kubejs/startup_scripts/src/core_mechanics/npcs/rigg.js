const npcRigg = {
  name: 'Rigg'
}

RequestHandler.items.create.simple(['kubejs:rigg'])

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, npcRigg, false)
}])
