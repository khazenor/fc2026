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
      stonecuttingWithTags (defs) {
        this.stonecuttingWithTagsCache = this.stonecuttingWithTagsCache.concat(defs)
      },
      stonecuttingWithTagsCache: [],
      smithing (defs) {
        this.smithingCache = this.smithingCache.concat(defs)
      },
      smithingCache: []
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
    },
    stage: {
      addStageDef (stageName, itemId, recipeType) {
        this.stageDefs.push({
          defId: stageName,
          stageName: stageName,
          itemId: itemId,
          recipeType: recipeType
        })
      },
      crafting (stageName, itemId) {
        this.addStageDef(stageName, itemId, 'crafting')
      },
      craftingMultiple (defs) {
        for (let def of defs) {
          let stageName = def[0]
          let itemId = def[1]
          this.crafting(stageName, itemId)
        }
      },
      smithing (stageName, itemId) {
        this.addStageDef(stageName, itemId, 'smithing')
      },
      smithingMultiple (defs) {
        for (let def of defs) {
          let stageName = def[0]
          let itemId = def[1]
          this.smithing(stageName, itemId)
        }
      },
      stageDefs: []
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
    }
  }
}