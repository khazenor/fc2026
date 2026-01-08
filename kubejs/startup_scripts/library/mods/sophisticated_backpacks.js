const SophisticatedBackPacks = {
  // {
  //   "neoforge:conditions": [
  //     {
  //       "type": "sophisticatedcore:item_enabled",
  //       "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
  //     }
  //   ],
  //   "type": "sophisticatedbackpacks:backpack_upgrade",
  //   "category": "misc",
  //   "key": {
  //     "B": {
  //       "item": "sophisticatedbackpacks:gold_backpack"
  //     },
  //     "D": {
  //       "tag": "c:gems/diamond"
  //     }
  //   },
  //   "pattern": [
  //     "DDD",
  //     "DBD",
  //     "DDD"
  //   ],
  //   "result": {
  //     "count": 1,
  //     "id": "sophisticatedbackpacks:diamond_backpack"
  //   }
  // }
  upgradeRecipe (resultId, keysObj, patternMatrix) {
    return {
      "neoforge:conditions": [
        {
          "type": "sophisticatedcore:item_enabled",
          "itemRegistryName": resultId
        }
      ],
      "type": "sophisticatedbackpacks:backpack_upgrade",
      "category": "misc",
      "key": keysObj,
      "pattern": patternMatrix,
      "result": {
        "count": 1,
        "id": resultId
      }
    }
  }
}