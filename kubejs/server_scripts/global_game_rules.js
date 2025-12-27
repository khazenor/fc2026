ServerEvents.loaded(e => {
  e.server.gameRules.set("doInsomnia", false)
  e.server.gameRules.set("doPatrolSpawning", false)
  e.server.gameRules.set("disableRaids", true)
  e.server.gameRules.set("playersSleepingPercentage", 0)
  e.server.gameRules.set("doTraderSpawning", false)
})