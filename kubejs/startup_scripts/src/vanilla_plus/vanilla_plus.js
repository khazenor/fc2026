RequestHandler.recipes.remove.byRecipeId([
  "minecraft:campfire",
  "minecraft:melon"
])

RequestHandler.recipes.add.shapeless([
  [
    "minecraft:campfire",
    [
      "#minecraft:logs", "#minecraft:logs",
      "minecraft:stick", "minecraft:stick"
    ]
  ],
  [
    "minecraft:campfire",
    [ "minecraft:charcoal", "minecraft:charcoal" ]
  ],
  [
    "minecraft:melon",
    [
      "minecraft:melon_slice", "minecraft:melon_slice",
      "minecraft:melon_slice","minecraft:melon_slice"
    ]
  ],
  ["4x minecraft:melon_slice", ["minecraft:melon"]],
  ['4x minecraft:clay_ball', ['minecraft:clay']],
  ["minecraft:feather", ["#c:eggs","#c:eggs","#c:eggs","#c:eggs"]],

  // concrete conversion
  ['minecraft:black_concrete', ['minecraft:black_concrete_powder']],
  ['minecraft:blue_concrete', ['minecraft:blue_concrete_powder']],
  ['minecraft:brown_concrete', ['minecraft:brown_concrete_powder']],
  ['minecraft:cyan_concrete', ['minecraft:cyan_concrete_powder']],
  ['minecraft:gray_concrete', ['minecraft:gray_concrete_powder']],
  ['minecraft:green_concrete', ['minecraft:green_concrete_powder']],
  ['minecraft:light_blue_concrete', ['minecraft:light_blue_concrete_powder']],
  ['minecraft:light_gray_concrete', ['minecraft:light_gray_concrete_powder']],
  ['minecraft:lime_concrete', ['minecraft:lime_concrete_powder']],
  ['minecraft:magenta_concrete', ['minecraft:magenta_concrete_powder']],
  ['minecraft:orange_concrete', ['minecraft:orange_concrete_powder']],
  ['minecraft:pink_concrete', ['minecraft:pink_concrete_powder']],
  ['minecraft:purple_concrete', ['minecraft:purple_concrete_powder']],
  ['minecraft:red_concrete', ['minecraft:red_concrete_powder']],
  ['minecraft:white_concrete', ['minecraft:white_concrete_powder']],
  ['minecraft:yellow_concrete', ['minecraft:yellow_concrete_powder']],

  ['4x minecraft:nether_wart', ['minecraft:nether_wart_block']],
  ['minecraft:cobblestone', ['minecraft:cobbled_deepslate']],
  ['minecraft:bone', [
    'minecraft:stick', 'minecraft:bone_meal',
    'minecraft:bone_meal', 'minecraft:bone_meal'
  ]]
])

RequestHandler.recipes.add.shaped([
  [
    '4x minecraft:chest',
    [
      'AAA',
      'A A',
      'AAA'
    ],
    { A: '#minecraft:logs' }
  ],
  [
    '16x minecraft:stick',
    [
      'A',
      'A'
    ],
    { A: '#minecraft:logs' }
  ],
  [
    'minecraft:bell',
    [
      'LLL',
      'FGF',
      'F F'
    ],
    {
      L: '#minecraft:logs',
      F: '#minecraft:fences',
      G: 'minecraft:gold_block'
    }
  ]
])
