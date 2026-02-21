const MonsterAsh = {
  ashId: 'kubejs:ash',
  monsterParts: [
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
    "minecraft:phantom_membrane",
    'quark:crab_shell'
  ]
}

RequestHandler.items.create.simple([
  MonsterAsh.ashId
])

RequestHandler.recipes.add.shapeless(MonsterAsh.monsterParts.map(monsterPart => 
  [`2x ${monsterPart}`, [monsterPart, MonsterAsh.ashId]]
))

RequestHandler.recipes.add.allFoodCooking([
  [MonsterAsh.ashId, '#c:grains']
])
