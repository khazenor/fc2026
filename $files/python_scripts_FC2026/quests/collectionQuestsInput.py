filenameKey = 'filename'
iconKey = 'icon'
nameKey = 'name'
dependencyIdKey = 'dependencyId'
increaseRateKey = 'increaseRate'

collectionNotificationKey = 'collectionNotification'

typeKey = 'type'
itemQuestTypeConst = 'itemQuestType'
observationQuestTypeConst = 'observationQuestType'

questGroupsKey = 'questGroups'
tasksKey = 'tasks'
observeKey = 'observe'
additionalRewardsKey = 'additionalRewards'
questStartAtCenterKey = 'questStartAtCenter'

questlineGroupId = '2AF27285BDAE0A0D'

itemSeedStrs = {
}

questlines = [
  { # Aquarium
    filenameKey: 'aquarium',
    nameKey: 'Aquarium',
    iconKey: 'tide:bluegill',
    collectionNotificationKey: 'New fish caught!',
    increaseRateKey: 0.03,
    typeKey: itemQuestTypeConst,
    questGroupsKey: [
      { # Vanilla
        nameKey: 'Vanilla Completion',
        iconKey: 'minecraft:grass_block',
        dependencyIdKey: '1B6B73275C612510', # Catching Fishes
        tasksKey: [
          "minecraft:cod",
          "minecraft:tropical_fish",
          "minecraft:salmon",
          "minecraft:pufferfish"
        ]
      },
      { # Freshwater
        nameKey: 'Freshwater Completion',
        iconKey: 'minecraft:water_bucket',
        dependencyIdKey: '1B6B73275C612510', # Catching Fishes
        tasksKey: [
          "tide:bass",
          "tide:bluegill",
          "tide:catfish",
          "tide:clayfish",
          "tide:guppy",
          "tide:mint_carp",
          "tide:pike",
          "tide:yellow_perch"
        ]
      },
      { # Saltwater
        nameKey: 'Saltwater Completion',
        iconKey: 'minecraft:blue_ice',
        dependencyIdKey: '1B6B73275C612510', # Catching Fishes
        tasksKey: [
          "tide:angelfish",
          "tide:barracuda",
          "tide:mackerel",
          "tide:ocean_perch",
          "tide:sailfish",
          "tide:trout",
          "tide:tuna"
        ]
      },
      { # Alternative locales
        nameKey: 'Alternative Locales Completion',
        iconKey: 'minecraft:stone',
        dependencyIdKey: "1B6B73275C612510",
        tasksKey: [
          "tide:deep_grouper",
          "tide:shadow_snapper",
          "tide:luminescent_jellyfish",
          "tide:abyss_angler",
          "tide:lapis_lanternfish",
          "tide:crystalline_carp",
          "tide:bedrock_tetra",
          "tide:ember_koi",
          "tide:inferno_guppy",
          "tide:obsidian_pike",
          "tide:volcano_tuna",
          "tide:cave_eel",
          "tide:cave_crawler",
          "tide:glowfish",
          "tide:anglerfish",
          "tide:iron_tetra",
          "tide:crystal_shrimp",
          "tide:gilded_minnow"
        ]
      },
      { # Special Fishes
        nameKey: 'Special Completion',
        iconKey: 'minecraft:nether_star',
        dependencyIdKey: "1B6B73275C612510",
        tasksKey: [
          "tide:blossom_bass",
          "tide:echofin_snapper",
          "tide:dripstone_darter",
          "tide:fluttergill",
          "tide:sunspike_goby",
          "tide:birch_trout",
          "tide:mirage_catfish",
          "tide:slimefin_snapper",
          "tide:sporestalker",
          "tide:leafback",
          "tide:pine_perch",
          "tide:sandskipper",
          "tide:stonefish",
          "tide:frostbite_flounder",
          "tide:oakfish",
          "tide:prarie_pike"
        ]
      }
    ]
  },
  { # Flora collection
    filenameKey: 'flora_compendium',
    nameKey: 'Flora Compendium',
    iconKey: "minecraft:red_tulip",
    collectionNotificationKey: 'New flora collected!',
    increaseRateKey: 0.02,
    typeKey: itemQuestTypeConst,
    questGroupsKey: [
      { # Vanilla Foods
        nameKey: 'Vanilla Foods Completion',
        iconKey: 'minecraft:apple',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "minecraft:bamboo",
          "minecraft:beetroot_seeds",
          "minecraft:brown_mushroom",
          "minecraft:cactus",
          "minecraft:carrot",
          "minecraft:cocoa_beans",
          "minecraft:glow_berries",
          "minecraft:kelp",
          "minecraft:potato",
          "minecraft:red_mushroom",
          "minecraft:sugar_cane",
          "minecraft:sweet_berries",
          "minecraft:wheat_seeds"
        ]
      },
      { # Vanilla Flower
        nameKey: 'Vanilla Flower Completion',
        iconKey: 'minecraft:red_tulip',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "minecraft:allium",
          "minecraft:azure_bluet",
          "minecraft:blue_orchid",
          "minecraft:cornflower",
          "minecraft:dandelion",
          "minecraft:lilac",
          "minecraft:lily_of_the_valley",
          "minecraft:orange_tulip",
          "minecraft:oxeye_daisy",
          "minecraft:peony",
          "minecraft:pink_tulip",
          "minecraft:poppy",
          "minecraft:red_tulip",
          "minecraft:rose_bush",
          "minecraft:sunflower",
          "minecraft:white_tulip",
          "minecraft:wither_rose",
          "minecraft:torchflower_seeds"
        ]
      },
      { # Vanilla Sapling
        nameKey: 'Vanilla Sapling Completion',
        iconKey: 'minecraft:oak_sapling',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "minecraft:acacia_sapling",
          "minecraft:azalea",
          "minecraft:birch_sapling",
          "minecraft:cherry_sapling",
          "minecraft:dark_oak_sapling",
          "minecraft:jungle_sapling",
          "minecraft:oak_sapling",
          "minecraft:spruce_sapling",
          "minecraft:mangrove_propagule"
        ]
      },
      { # Vanilla Flora
        nameKey: 'Vanilla Flora Completion',
        iconKey: 'minecraft:pink_petals',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "minecraft:flowering_azalea",
          "minecraft:moss_block",
          "minecraft:moss_carpet",
          "minecraft:pink_petals",
          "minecraft:spore_blossom",
          "minecraft:big_dripleaf",
          "minecraft:sea_pickle",
          "minecraft:lily_pad"
        ]
      }, {
        nameKey: 'Biome Foods',
        iconKey: 'biomeswevegone:aloe_vera',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:aloe_vera",
          "biomeswevegone:horseweed",
          "biomeswevegone:oddion_bulb",
          "biomeswevegone:pale_pumpkin"
        ]
      }, {
        nameKey: 'Biome Saplings',
        iconKey: 'biomeswevegone:araucaria_sapling',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:araucaria_sapling",
          "biomeswevegone:aspen_sapling",
          "biomeswevegone:baobab_sapling",
          "biomeswevegone:blue_enchanted_sapling",
          "biomeswevegone:blue_spruce_sapling",
          "biomeswevegone:brown_birch_sapling",
          "biomeswevegone:brown_oak_sapling",
          "biomeswevegone:cika_sapling",
          "biomeswevegone:cypress_sapling",
          "biomeswevegone:ebony_sapling",
          "biomeswevegone:holly_sapling",
          "biomeswevegone:ironwood_sapling",
          "biomeswevegone:jacaranda_sapling",
          "biomeswevegone:maple_sapling",
          "biomeswevegone:orange_birch_sapling",
          "biomeswevegone:orange_spruce_sapling",
          "biomeswevegone:orchard_sapling",
          "biomeswevegone:palo_verde_sapling",
          "biomeswevegone:pine_sapling",
          "biomeswevegone:red_maple_sapling",
          "biomeswevegone:red_oak_sapling",
          "biomeswevegone:red_spruce_sapling",
          "biomeswevegone:redwood_sapling",
          "biomeswevegone:silver_maple_sapling",
          "biomeswevegone:skyris_sapling",
          "biomeswevegone:spirit_sapling",
          "biomeswevegone:white_mangrove_sapling",
          "biomeswevegone:white_sakura_sapling",
          "biomeswevegone:witch_hazel_sapling",
          "biomeswevegone:yellow_birch_sapling",
          "biomeswevegone:yellow_sakura_sapling",
          "biomeswevegone:yucca_sapling",
          "biomeswevegone:zelkova_sapling"
        ]
      }, {
        nameKey: 'Biome Bushes',
        iconKey: 'biomeswevegone:allium_flower_bush',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:jacaranda_bush",
          "biomeswevegone:blue_rose_bush",
          "biomeswevegone:hydrangea_bush",
          "biomeswevegone:firecracker_flower_bush"
        ]
      }, {
        nameKey: 'Biome Ground Covers',
        iconKey: 'biomeswevegone:clover_patch',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:clover_patch",
          "biomeswevegone:flower_patch",
          "biomeswevegone:leaf_pile",
          "biomeswevegone:water_silk",
          "biomeswevegone:white_sakura_petals",
          "biomeswevegone:yellow_sakura_petals"
        ]
      }, {
        nameKey: 'Biome Flowers',
        iconKey: 'biomeswevegone:amaranth',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:alpine_bellflower",
          "biomeswevegone:amaranth",
          "biomeswevegone:angelica",
          "biomeswevegone:bistort",
          "biomeswevegone:black_rose",
          "biomeswevegone:california_poppy",
          "biomeswevegone:crocus",
          "biomeswevegone:cyan_amaranth",
          "biomeswevegone:cyan_rose",
          "biomeswevegone:delphinium",
          "biomeswevegone:fairy_slipper",
          "biomeswevegone:foxglove",
          "biomeswevegone:iris",
          "biomeswevegone:japanese_orchid",
          "biomeswevegone:kovan_flower",
          "biomeswevegone:lazarus_bellflower",
          "biomeswevegone:lollipop_flower",
          "biomeswevegone:magenta_amaranth",
          "biomeswevegone:orange_amaranth",
          "biomeswevegone:orange_daisy",
          "biomeswevegone:peach_leather_flower",
          "biomeswevegone:pink_anemone",
          "biomeswevegone:pink_daffodil",
          "biomeswevegone:protea_flower",
          "biomeswevegone:purple_amaranth",
          "biomeswevegone:rose",
          "biomeswevegone:snowdrops",
          "biomeswevegone:winter_cyclamen",
          "biomeswevegone:winter_rose",
          "biomeswevegone:winter_scilla",
          "biomeswevegone:winter_succulent",
          "biomeswevegone:yellow_daffodil"
        ]
      }, {
        nameKey: 'Biome Allium and Tulips',
        iconKey: 'biomeswevegone:allium_flower_bush',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:pink_allium",
          "biomeswevegone:white_allium",

          "biomeswevegone:tall_allium",
          "biomeswevegone:tall_pink_allium",
          "biomeswevegone:tall_white_allium",

          "biomeswevegone:allium_flower_bush",
          "biomeswevegone:pink_allium_flower_bush",
          "biomeswevegone:white_allium_flower_bush",

          "biomeswevegone:cyan_tulip",
          "biomeswevegone:green_tulip",
          "biomeswevegone:magenta_tulip",
          "biomeswevegone:purple_tulip",
          "biomeswevegone:yellow_tulip"
        ]
      }, {
        nameKey: 'Biome Misc',
        iconKey: 'biomeswevegone:beach_grass',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:beach_grass",
          "biomeswevegone:cattail_sprout",
          "biomeswevegone:fluorescent_cattail_sprout",
          "biomeswevegone:green_mushroom",
          "biomeswevegone:prairie_grass",
          "biomeswevegone:shrub",
          "biomeswevegone:white_puffball_spores"
        ]
      }
    ]
  },
]