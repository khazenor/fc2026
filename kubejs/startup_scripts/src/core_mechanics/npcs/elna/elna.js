// priority: 1
const NpcElna = {
  name: 'Elna',
  numOutfitsWithParts: 1,
  numOutfitsFromSets: 1,
  numOtherOutfits: 2,
  outfitMinPrice: 4,
  outfitMaxPrice: 16,
  get offerDefs () {
    let offerDefs = []
    let outfits = this._outfitsForSell
    for (let outfitIdx = 0; outfitIdx < outfits.length; outfitIdx++) {
      let outfit = outfits[outfitIdx]
      offerDefs.push({
        villagerItems: outfit,
        playerNum: RandHelper.randSellPrice(
          this.outfitMinPrice,
          this.outfitMaxPrice,
          outfitIdx
        )
      })
    }
    return offerDefs
  },
  get tradeItemIds () {
    let itemIds = []
    for (let outfitWithPartsKey in OutfitInfo.outfitsWithParts) {
      for (let partsKey in OutfitInfo.outfitsWithParts[outfitWithPartsKey]) {
        itemIds = itemIds.concat(
          OutfitInfo.outfitsWithParts[outfitWithPartsKey][partsKey]
        )
      }
    }

    for (let outfitSetKey in OutfitInfo.outfitSets) {
      let outfitSet = OutfitInfo.outfitSets[outfitSetKey]
      for (let outfit of outfitSet) {
        itemIds = itemIds.concat(
          outfit
        )
      }
    }

    for (let outfit of OutfitInfo.otherOutfits) {
      itemIds = itemIds.concat(outfit)
    }

    return itemIds
  },
  get _outfitsForSell () {
    return this._randomOtherOutfits.concat(
      this._randomOutfitsFromSets,
      this._randomOutfitsWithParts
    )
  },
  get _randomOutfitsWithParts () {
    let outfitsWithParts = RandHelper.randomMineDayValuesFromObj(
      OutfitInfo.outfitsWithParts, this.numOutfitsWithParts
    )
    return outfitsWithParts.map(
      outfitWithParts => this._getRandomOutfitWithParts(outfitWithParts)
    )
  },
  get _randomOutfitsFromSets () {
    let outfitSets = RandHelper.randomMineDayValuesFromObj(
      OutfitInfo.outfitSets, this.numOutfitsFromSets
    )
    return outfitSets.map(
      outfitSet => RandHelper.randomMineDayRandFromArr(outfitSet, 1)[0]
    )
  },
  get _randomOtherOutfits () {
    return RandHelper.randomMineDayRandFromArr(
      OutfitInfo.otherOutfits, this.numOtherOutfits
    )
  },
  _getRandomOutfitWithParts (outfitWithParts) {
    let outfit = []
    let parts = [
      outfitWithParts.helmets, outfitWithParts.chestplates,
      outfitWithParts.leggings, outfitWithParts.boots
    ]
    parts.forEach(ids => {
      if (ids) {
        outfit.push(RandHelper.randomMineDayRandFromArr(ids, 1)[0])
      }
    })
    return outfit
  }
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcElna, false)
}])

RequestHandler.recipes.remove.byItemId(NpcElna.tradeItemIds)