// priority: 1000
const RequestHandler = {
  jei: {
    infoForItem (itemId, infoList) {
      this.infoForItemCache.push([itemId, infoList])
    },
    infoForItemCache: [],
  },
  tooltips: {
    add (tooltips) {
      this.addCache = this.addCache.concat(tooltips)
    },
    addSingular (itemId, tooltip) {
      this.addCache.push([itemId, tooltip])
    },
    addCache: []
  },
  tags: {
    item: {
      add (tagDefs) {
        this.addCache = this.addCache.concat(tagDefs)
      },
      addCache: [],
      removeAll (items) {
        this.removeAllCache
          = this.removeAllCache.concat(items)
      },
      removeAllCache: []
    },
    biome: {
      add (tagDefs) {
        this.addCache = this.addCache.concat(tagDefs)
      },
      addCache: [],
    }
  },
  recipes: {
    add: {
      shapeless (defs) {
        this.shapelessCache = this.shapelessCache.concat(defs)
      },
      shapelessCache: [],
      shaped (defs) {
        this.shapedCache = this.shapedCache.concat(defs)
      },
      shapedCache: [],
      custom(defs) {
        this.customCache = this.customCache.concat(defs)
      },
      customCache: [],
      allFoodCooking (defs) {
        this.allFoodCookingCache = this.allFoodCookingCache.concat(defs)
      },
      allFoodCookingCache: [],
      compostable (defs) {
        this.compostableCache = this.compostableCache.concat(defs)
      },
      compostableDefault (ids) {
        this.compostable(ids.map(id => [id]))
      },
      compostableCache: [],
      stonecutting (defs) {
        this.stonecuttingCache = this.stonecuttingCache.concat(defs)
      },
      stonecuttingCache: [],
      stonecuttingWithArrayOutput (defs) {
        let updatedDefs = []
        for (let def of defs) {
          let outputIds = def[0]
          let inputId = def[1]
          for (let outputId of outputIds) {
            updatedDefs.push([outputId, inputId])
          }
        }
        this.stonecuttingCache = this.stonecuttingCache.concat(updatedDefs)
      },
      stonecuttingWithOutputTags (defs) {
        this.stonecuttingWithTagsCache = this.stonecuttingWithTagsCache.concat(defs)
      },
      stonecuttingWithTagsCache: [],
      smithing (output, itemToUpgrade, upgradeMaterial1, upgradeMaterial2) {
        this.smithingCache.push([output, itemToUpgrade, upgradeMaterial1, upgradeMaterial2])
      },
      smithingMult (defs) {
        this.smithingCache = this.smithingCache.concat(defs)
      },
      smithingCache: [],
      smeltingSingle (outputId, inputId) {
        this.smeltingCache.push([outputId, inputId])
      },
      smeltingMult (defs) {
        defs.forEach(def => {
          this.smeltingSingle(def[0], def[1])
        })
      },
      smeltingCache: []
    },
    remove: {
      byRecipeId (ids) {
        this.byRecipeIdCache = this.byRecipeIdCache.concat(ids)
      },
      byRecipeIdCache: [],
      byItemId (ids) {
        this.byItemIdCache = this.byItemIdCache.concat(ids)
      },
      byItemIdCache: [],
      byMod (mods) {
        this.byModCache = this.byModCache.concat(mods)
      },
      byModCache: []
    }
  },
  items: {
    create: {
      simple (ids) {
        this.simpleCache = this.simpleCache.concat(ids)
      },
      simpleCache: [],
      simpleFood (defs) {
        this.simpleFoodCache = this.simpleFoodCache.concat(defs)
      },
      simpleFoodCache: []
    }
  },
  callbacks: {
    itemEvents: {
      rightClicked (callbacks) {
        this.rightClickedCache = this.rightClickedCache.concat(callbacks)
      },
      rightClickedCache: [],
      entityInteracted (callbacks) {
        this.entityInteractedCache = this.entityInteractedCache.concat(callbacks)
      },
      entityInteractedCache: [],
      modifyTooltips (callbacks) {
        this.modifyTooltipsCache = this.modifyTooltipsCache.concat(callbacks)
      },
      modifyTooltipsCache: []
    },
    playerEvents: {
      inventoryChanged (callbacks) {
        this.inventoryChangedCache = this.inventoryChangedCache.concat(callbacks)
      },
      inventoryChangedCache: []
    },
    serverEvents: {
      loaded (callbacks) {
        this.loadedCache = this.loadedCache.concat(callbacks)
      },
      loadedCache: [],
      beforeServerEventsRecipes (callbacks) {
        this.beforeServerEventsRecipesCache = this.beforeServerEventsRecipesCache.concat(callbacks)
      },
      beforeServerEventsRecipesCache: []
    },
    beforeClientLoaded (callbacks) {
      this.beforeClientLoadedCache = this.beforeClientLoadedCache.concat(callbacks)
    },
    beforeClientLoadedCache: [],
    beforeServerHooks (callbacks) {
      this.beforeServerHooksCache = this.beforeServerHooksCache.concat(callbacks)
    },
    beforeServerHooksCache: [],
    blockEventsBrokenSingle (eventCallback) {
      this.blockEventsBrokenCache.push(eventCallback)
    },
    blockEventsBrokenCache: []
  }
}

const RequestHelper = {
  stonecuttingAllToAll (itemIds, tagName) {
    itemIds.forEach(itemId => {
      RequestHandler.recipes.add.stonecutting([
        [itemId, `#${tagName}`]
      ])
    })

    RequestHandler.tags.item.add([
      [tagName, itemIds]
    ])
  }
}