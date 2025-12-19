// priority: 999

// requires:
// - request_handler.js

const FarmersDelightRequests = {
  addStripping (defs) {
    RequestHandler.recipes.add.custom(defs.map(def => this._stripRecipe(def)))
  },
  _stripRecipe(def) {
    let log = def[0]
    let strippedLog = def[1]
    return {
      type: "farmersdelight:cutting",
      ingredients: [{ item: log }],
      result: [
        {item: {
          count: 1,
          id: strippedLog
        }},
        {item: {
          count: 1,
          id: "farmersdelight:tree_bark"
        }}
      ],
      sound: {
        sound_id: "minecraft:item.axe.strip"
      },
      tool: {
        type: "farmersdelight:item_ability",
        action: "axe_strip"
      }
    }
  }
}