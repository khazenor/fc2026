const EasyNpcHelper = {
  defaultPlayerItem: "kubejs:miles_ticket",
  defaultCount: 1,
  updateNpcCommand (name, offerDefs) {
    let command = `data modify entity ${this.nameSelector(name)} `
    command += `Offers set value ${this.offersStringFromDefs(offersDefs)}`
    return command
  },
  nameSelector (name) {
    return `@e[type=easy_npc:humanoid, name=${name}, sort=nearest, limit=1]`
  },
  offersStringFromDefs (offerDefs) {
    let offerStrings = ""
    for (let i = 0; i < offerDefs.length; i++) {
      offerStrings += this.offerString(offerDefs[i])
      if (i <= offerDefs.length - 2) {
        offerStrings += ', '
      }
    }
	  return `{{Recipes: [${this.offerRecipeString(offerStrings)}]}}`
  },
  // offer: villagerItems, villagerQty, playerGive, playerQty, playerGive2, playerQty2
  offerString (offerDef) {
    let playerGive = offerDef.playerGive ? offerDef.playerGive : this.defaultPlayerItem
    let villagerQty = offerDef.villagerQty ? offerDef.villagerQty : this.defaultCount
    let playerQty = offerDef.playerQty ? offerDef.playerQty : this.defaultCount

    let offerRecipeStringOut = ""
    for (let i = 0; i < offerDef.villagerItems.length; i++) {
      let villagerItem = offerDef.villagerItems[i]
      offerRecipeStringOut += '{'
      offerRecipeStringOut += `buy: {{id: "${playerGive}", count: ${playerQty}}}`
      if (offerDef.playerGive2) {
        let playerQty2 = offerDef.playerQty2 ? offerDef.playerQty2 : this.defaultCount
        offerRecipeStringOut += `, buyB: {{id: "${offerDef.playerGive2}", count: ${playerQty2}}}`
      }
      offerRecipeStringOut += `, sell: {{id: "${villagerItem}", count: ${villagerQty}}}`
      offerRecipeStringOut += ', maxUses: 2147483647, xp: 0, uses: 0, priceMultiplier: 0.0'
      offerRecipeStringOut += ', specialPrice: 0, demand: 0, rewardExp: 0'
      offerRecipeStringOut += '}'

      if (i <= offerDef.villagerItems.length - 2) {
        offerRecipeStringOut += ', '
      }
    }
    return offerRecipeStringOut
  }
}
	


