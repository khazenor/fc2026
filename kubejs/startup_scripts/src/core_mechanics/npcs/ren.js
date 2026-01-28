// priority: 1
const NpcRen = {
  name: 'Ren',
  diamondIngotId: 'kubejs:diamond_ingot',
  constructionTicketId: 'kubejs:construction_ticket',
  constructionBookletId: 'kubejs:construction_booklet',
  constructionBundleCount: 64,
  get offerDefs () { return [{
    villagerItems: [this.diamondIngotId],
    playerNum: 64
  }, {
    villagerItems: ["minecraft:netherite_upgrade_smithing_template"],
    playerNum: 64
  }, { 
    villagerItems: ["minecraft:netherite_ingot"],
    playerGive: MilesTickets.bookletId,
    playerNum: 4
  }, {
    villagerItems: ["minecraft:nether_star"],
    playerGive: MilesTickets.bookletId,
    playerNum: 8
  }, { 
    villagerItems: ["advancednetherite:netherite_iron_ingot"],
    playerGive: MilesTickets.bookletId,
    playerNum: 16
  }, { 
    villagerItems: ["advancednetherite:netherite_gold_ingot"],
    playerGive: MilesTickets.bookletId,
    playerNum: 24
  }, { 
    villagerItems: ["advancednetherite:netherite_emerald_ingot"],
    playerGive: MilesTickets.bookletId,
    playerNum: 40
  }, { 
    villagerItems: ["advancednetherite:netherite_diamond_ingot"],
    playerGive: MilesTickets.bookletId,
    playerNum: 64
  }]},
  disableRecipesForItemIds: [
  "advancednetherite:netherite_iron_ingot",
  "advancednetherite:netherite_gold_ingot",
  "advancednetherite:netherite_emerald_ingot",
  "advancednetherite:netherite_diamond_ingot"
  ],
  diamondSmithingRecipes: {
    "#minecraft:pickaxes": "minecraft:diamond_pickaxe",
    "#minecraft:shovels": "minecraft:diamond_shovel",
    "#minecraft:axes": "minecraft:diamond_axe",
    "#minecraft:hoes": "minecraft:diamond_hoe",
    "#minecraft:swords": "minecraft:diamond_sword",
    "#minecraft:head_armor": "minecraft:diamond_helmet",
    "#minecraft:chest_armor": "minecraft:diamond_chestplate",
    "#minecraft:leg_armor": "minecraft:diamond_leggings",
    "#minecraft:foot_armor": "minecraft:diamond_boots",
  }
}

RequestHandler.items.create.simple([
  NpcRen.diamondIngotId,
  NpcRen.constructionTicketId,
  NpcRen.constructionBookletId
])
RequestHandler.recipes.remove.byItemId(NpcRen.disableRecipesForItemIds)

for (let base in NpcRen.diamondSmithingRecipes) {
  RequestHandler.recipes.add.smithing(
    NpcRen.diamondSmithingRecipes[base],
    base,
    NpcRen.diamondIngotId,
    'minecraft:flint'
  )
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcRen, [
    () => {
      let mainHandItem = EventHelpers.mainHandItem(event).id
      let mainHandItemCount = EventHelpers.mainHandItem(event).count
      if (MaterialList.includes(mainHandItem) && mainHandItemCount == 64) {
        NpcHelper.handleSellingItemToNpc(event,
          NpcRen.constructionTicketId,
          1,
          64
        )
      }
    }
  ])
}])

MaterialList.forEach(materialId => {
  RequestHandler.recipes.add.shapeless([
    [StrHelper.itemStackStr(materialId, 64), [
      materialId,
      NpcRen.constructionTicketId
    ]]
  ])
})

RequestHandler.callbacks.itemEvents.rightClicked([
  event => {
    if (event.player.shiftKeyDown && event.item === NpcRen.constructionBookletId) {
      MilesTickets.unBundleItems(event,
        NpcRen.constructionTicketId,
        NpcRen.constructionBundleCount
      )
    }
  },
  event => {
    if (event.player.shiftKeyDown && event.item === NpcRen.constructionTicketId) {
      MilesTickets.bundleItems(event, 
        NpcRen.constructionTicketId,
        NpcRen.constructionBookletId,
        NpcRen.constructionBundleCount,
        1
      )
    }
  }
])

RequestHandler.recipes.add.shapeless([
  [StrHelper.itemStackStr(NpcRen.constructionTicketId, NpcRen.constructionBundleCount), [NpcRen.constructionBookletId]]
])

RequestHandler.tooltips.add([
  [NpcRen.constructionTicketId, [Text.translate('ticketBundling.shiftToBundle')]],
  [NpcRen.constructionBookletId, [
    Text.translate('ticketBundling.bookletShift')
  ]]
])