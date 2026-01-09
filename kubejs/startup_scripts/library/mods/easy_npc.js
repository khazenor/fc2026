const EasyNpcHelper = {
  defaultPlayerItem: "kubejs:miles_ticket",
  defaultCount: 1,
  updateNpcCommand (playerName, npcName, offerDefs) {
    let command = `execute at @p[name=${playerName}] run `
    command += `data modify entity ${this.nameSelector(npcName)} `
    command += `Offers set value ${this.offersStringFromDefs(offerDefs)}`
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
	  return `{Recipes: [${offerStrings}]}`
  },
  // offer: villagerItems, villagerNum, playerGive, playerNum, playerGive2, playerNum2
  offerString (offerDef) {
  
    let playerGive
    let playerGive2
    if (
      offerDef.playerNum &&
      offerDef.playerNum2 &&
      !offerDef.playerGive &&
      !offerDef.playerGive2
    ) {
      playerGive = MilesTickets.bookletId
      playerGive2 = MilesTickets.ticketId
    } else if (
      offerDef.playerNum &&
      !offerDef.playerGive
    ) {
      playerGive = MilesTickets.ticketId
    } else {
      playerGive = offerDef.playerGive ? offerDef.playerGive: MilesTickets.ticketId
      playerGive2 = offerDef.playerGive2 ? offerDef.playerNum2: null 
    }

    let villagerNum = offerDef.villagerNum ? offerDef.villagerNum : this.defaultCount
    let playerNum = offerDef.playerNum ? offerDef.playerNum : this.defaultCount

    let offerRecipeStringOut = ""
    for (let i = 0; i < offerDef.villagerItems.length; i++) {
      let villagerItem = offerDef.villagerItems[i]
      offerRecipeStringOut += '{'
      offerRecipeStringOut += `buy: {id: "${playerGive}", count: ${playerNum}}`
      if (playerGive2) {
        let playerNum2 = offerDef.playerNum2 ? offerDef.playerNum2 : this.defaultCount
        offerRecipeStringOut += `, buyB: {id: "${offerDef.playerGive2}", count: ${playerNum2}}`
      }
      offerRecipeStringOut += `, sell: {id: "${villagerItem}", count: ${villagerNum}}`
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
	


