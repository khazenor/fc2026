const LetsDoMods = {
  stoveRecipe (resultStrDef, ingStrDefs) {
    return {
      "type": "farm_and_charm:stove",
      "ingredients": ObjectHelper.stringDefsToIngredientObjs(ingStrDefs),
      "result": ObjectHelper.strItemDefToObjDef(resultStrDef),
      "experience": 0.3,
      "requiresLearning": false
    }
  }
}