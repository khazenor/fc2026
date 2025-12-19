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
      compostableCache: []
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
      entityInteractedCache: []
    }
  }
}