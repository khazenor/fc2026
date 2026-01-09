const MonsterAsh = {
  ashId: 'kubejs:ash',
  packedAshId: 'kubejs:packed_ash',
  monsterParts: [
    "minecraft:string",
    "minecraft:slime_ball",
    "minecraft:rotten_flesh",
    "minecraft:bone",
    "minecraft:spider_eye",
    "minecraft:gunpowder",
    "minecraft:prismarine_shard",
    "minecraft:prismarine_crystals",
    "minecraft:glow_ink_sac",
    "minecraft:ender_pearl",
    "minecraft:blaze_rod",
    "minecraft:ghast_tear",
    "minecraft:phantom_membrane"
  ]
}

RequestHandler.items.create.simple([
  MonsterAsh.ashId, MonsterAsh.packedAshId
])

RequestHandler.recipes.add.shapeless([
  [MonsterAsh.packedAshId, [`4x ${MonsterAsh.ashId}`]]
])

RequestHandler.recipes.add.allFoodCooking([
  [MonsterAsh.ashId, '#c:grains']
])

RequestHandler.recipes.add.stonecuttingWithArrayOutput([
  [MonsterAsh.monsterParts, MonsterAsh.packedAshId]
])

RequestHandler.tooltips.add([
  [MonsterAsh.packedAshId, [Text.translate('tooltip.monsterAsh.packedAsh')]],
  [MonsterAsh.monsterParts, [Text.translate('tooltip.monsterAsh.monsterParts')]]
])