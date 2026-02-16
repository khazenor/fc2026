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
      { # Freshwater
        nameKey: 'Freshwater Completion',
        iconKey: 'minecraft:water_bucket',
        dependencyIdKey: '1B6B73275C612510', # Catching Fishes
        tasksKey: [
          "tide:arapaima",
          "tide:black_crappie",
          "tide:blossom_bass",
          "tide:bluegill",
          "tide:brook_trout",
          "tide:bull_shark",
          "tide:carp",
          "tide:catfish",
          "tide:frostbite_flounder",
          "tide:guppy",
          "tide:largemouth_bass",
          "tide:mirage_catfish",
          "tide:mooneye",
          "tide:pike",
          "tide:rainbow_trout",
          "tide:sand_tiger_shark",
          "tide:slimy_salmon",
          "tide:smallmouth_bass",
          "tide:sturgeon",
          "tide:walleye",
          "tide:white_crappie",
          "tide:yellow_perch",
          "minecraft:salmon"
        ]
      },
      { # Saltwater
        nameKey: 'Saltwater Completion',
        iconKey: 'minecraft:blue_ice',
        dependencyIdKey: '1B6B73275C612510', # Catching Fishes
        tasksKey: [
          "tide:anchovy",
          "tide:angelfish",
          "tide:aquathorn",
          "tide:coelacanth",
          "tide:flounder",
          "tide:great_white_shark",
          "tide:mackerel",
          "tide:mahi_mahi",
          "tide:manta_ray",
          "tide:marstilus",
          "tide:neptune_koi",
          "tide:ocean_perch",
          "tide:pluto_snail",
          "tide:red_snapper",
          "tide:sailfish",
          "tide:saturn_cuttlefish",
          "tide:shooting_starfish",
          "tide:snook",
          "tide:spore_stalker",
          "tide:sun_emblem",
          "tide:swordfish",
          "tide:tuna",
          "tide:uranias_pisces",
          "minecraft:cod",
          "minecraft:pufferfish",
          "minecraft:tropical_fish"
        ]
      },
      { # Underground
        nameKey: 'Underground Completion',
        iconKey: 'minecraft:stone',
        dependencyIdKey: "1B6B73275C612510",
        tasksKey: [
          "tide:abyss_angler",
          "tide:anglerfish",
          "tide:bedrock_tetra",
          "tide:cave_crawler",
          "tide:cave_eel",
          "tide:chasm_eel",
          "tide:crystalline_carp",
          "tide:crystal_shrimp",
          "tide:deep_grouper",
          "tide:devils_hole_pupfish",
          "tide:dripstone_darter",
          "tide:echo_snapper",
          "tide:gilded_minnow",
          "tide:glowfish",
          "tide:iron_tetra",
          "tide:lapis_lanternfish",
          "tide:luminescent_jellyfish",
          "tide:midas_fish",
          "tide:shadow_snapper",
          "tide:windbass"
        ]
      },
      { # Void
        nameKey: 'Void Completion',
        iconKey: 'minecraft:ender_pearl',
        dependencyIdKey: "1B6B73275C612510",
        tasksKey: [
          "tide:alpha_fish",
          "tide:bedrock_bug",
          "tide:blue_neonfish",
          "tide:darkness_eater",
          "tide:deep_blue",
          "tide:incandescent_larva",
          "tide:judgment_fish",
          "tide:nephrosilu",
          "tide:pentapus",
          "tide:shadow_shark",
          "tide:sleepy_carp",
          "tide:vengeance"
        ]
      },
      { # Special
        nameKey: 'Special Completion',
        iconKey: 'minecraft:nether_star',
        dependencyIdKey: "1B6B73275C612510",
        tasksKey: [
          "tide:ash_perch",
          "tide:ember_koi",
          "tide:inferno_guppy",
          "tide:magma_mackerel",
          "tide:obsidian_pike",
          "tide:volcano_tuna"
        ]
      }
    ]
  },
  { # Animals
    filenameKey: 'animal_watching',
    nameKey: 'Animal Watching',
    iconKey: 'minecraft:spyglass',
    collectionNotificationKey: 'New animal observed!',
    increaseRateKey: 0.02,
    typeKey: observationQuestTypeConst,
    questGroupsKey: [
      { # General Water
        nameKey: 'General Water Completion',
        iconKey: 'minecraft:water_bucket',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:squid_spawn_egg",
            nameKey: "Spot a squid",
            observeKey: "minecraft:squid"
          },
          {
            iconKey: "minecraft:dolphin_spawn_egg",
            nameKey: "Spot a dolphin",
            observeKey: "minecraft:dolphin"
          },
					{
						observeKey: 'biomeswevegone:man_o_war',
						iconKey: 'biomeswevegone:man_o_war_spawn_egg',
						nameKey: 'Spot a man_o_war'
					}
        ]
      },
      { # Beaches
        nameKey: 'Beaches Completion',
        iconKey: 'beachparty:beach_parasol',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:turtle_spawn_egg",
            nameKey: "Spot a turtle",
            observeKey: "minecraft:turtle"
          },
					{
						observeKey: 'wildernature:flamingo',
						iconKey: 'wildernature:flamingo_spawn_egg',
						nameKey: 'Spot a flamingo'
					},
					{
						observeKey: 'wildernature:pelican',
						iconKey: 'wildernature:pelican_spawn_egg',
						nameKey: 'Spot a pelican'
					}
        ]
      },
      { # Desert
        nameKey: 'Desert Completion',
        iconKey: 'minecraft:dead_bush',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:camel_spawn_egg",
            nameKey: "Spot a camel",
            observeKey: "minecraft:camel"
          },
          {
            iconKey: "minecraft:sniffer_spawn_egg",
            nameKey: "Spot a sniffer",
            observeKey: "minecraft:sniffer"
          }
        ]
      },
      { # Forest
        nameKey: 'Forest Completion',
        iconKey: 'minecraft:oak_sapling',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:wolf_spawn_egg",
            nameKey: "Spot a wolf",
            observeKey: "minecraft:wolf"
          },
					{
						observeKey: 'wildernature:deer',
						iconKey: 'wildernature:deer_spawn_egg',
						nameKey: 'Spot a deer'
					},
					{
						observeKey: 'wildernature:hedgehog',
						iconKey: 'wildernature:hedgehog_spawn_egg',
						nameKey: 'Spot a hedgehog'
					},
					{
						observeKey: 'wildernature:owl',
						iconKey: 'wildernature:owl_spawn_egg',
						nameKey: 'Spot a owl'
					},
					{
						observeKey: 'wildernature:turkey',
						iconKey: 'wildernature:turkey_spawn_egg',
						nameKey: 'Spot a turkey'
					},
					{
						observeKey: 'wildernature:red_wolf',
						iconKey: 'wildernature:red_wolf_spawn_egg',
						nameKey: 'Spot a red_wolf'
					}
        ]
      },
      { # Jungle
        nameKey: 'Jungle Completion',
        iconKey: 'minecraft:jungle_sapling',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:panda_spawn_egg",
            nameKey: "Spot a panda",
            observeKey: "minecraft:panda"
          },
          {
            iconKey: "minecraft:parrot_spawn_egg",
            nameKey: "Spot a parrot",
            observeKey: "minecraft:parrot"
          }
        ]
      },
      { # Mountain
        nameKey: 'Mountain Completion',
        iconKey: 'minecraft:goat_horn',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:goat_spawn_egg",
            nameKey: "Spot a Goat",
            observeKey: "minecraft:goat"
          },
					{
						observeKey: 'wildernature:minisheep',
						iconKey: 'wildernature:minisheep_spawn_egg',
						nameKey: 'Spot a minisheep'
					}
        ]
      },
      { # Special
        nameKey: 'Special Completion',
        iconKey: 'minecraft:nether_star',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:bee_spawn_egg",
            nameKey: "Spot a bee",
            observeKey: "minecraft:bee"
          },
          {
            iconKey: "minecraft:allay_spawn_egg",
            nameKey: "Spot an allay",
            observeKey: "minecraft:allay"
          },
          {
            iconKey: "minecraft:cat_spawn_egg",
            nameKey: "Spot a cat",
            observeKey: "minecraft:cat"
          },
					{
						observeKey: 'wildernature:raccoon',
						iconKey: 'wildernature:raccoon_spawn_egg',
						nameKey: 'Spot a raccoon'
					},
					{
						observeKey: 'biomeswevegone:pumpkin_warden',
						iconKey: 'biomeswevegone:pumpkin_warden_spawn_egg',
						nameKey: 'Spot a pumpkin warden'
					}
        ]
      },
      { # Savanna
        nameKey: 'Savanna Completion',
        iconKey: 'minecraft:acacia_sapling',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:llama_spawn_egg",
            nameKey: "Spot a llama",
            observeKey: "minecraft:llama"
          },
          {
            iconKey: "minecraft:armadillo_spawn_egg",
            nameKey: "Spot a armadillo",
            observeKey: "minecraft:armadillo"
          },
          {
						observeKey: 'wildernature:bison',
						iconKey: 'wildernature:bison_spawn_egg',
						nameKey: 'Spot a bison'
					},
					{
						observeKey: 'wildernature:boar',
						iconKey: 'wildernature:boar_spawn_egg',
						nameKey: 'Spot a boar'
					}
        ]
      },
      { # Plains
        nameKey: 'Plains Completion',
        iconKey: 'minecraft:poppy',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:horse_spawn_egg",
            nameKey: "Spot a horse",
            observeKey: "minecraft:horse"
          },
          {
            iconKey: "minecraft:donkey_spawn_egg",
            nameKey: "Spot a donkey",
            observeKey: "minecraft:donkey"
          },
					{
						observeKey: 'wildernature:dog',
						iconKey: 'wildernature:dog_spawn_egg',
						nameKey: 'Spot a dog'
					},
					{
						observeKey: 'wildernature:squirrel',
						iconKey: 'wildernature:squirrel_spawn_egg',
						nameKey: 'Spot a squirrel'
					},
          {
            observeKey: 'meadow:water_buffalo',
            iconKey: 'meadow:water_buffalo_spawn_egg',
            nameKey: 'Spot a water buffalo'
          },
          {
            observeKey: 'meadow:wooly_cow',
            iconKey: 'meadow:highland_wooly_cow_spawn_egg',
            nameKey: 'Spot a highland cattle'
          },
					{
						observeKey: 'biomeswevegone:oddion',
						iconKey: 'biomeswevegone:oddion_spawn_egg',
						nameKey: 'Spot a oddion'
					}
        ]
      },
      { # Grass
        nameKey: 'Grass Completion',
        iconKey: 'minecraft:grass_block',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:pig_spawn_egg",
            nameKey: "Spot a pig",
            observeKey: "minecraft:pig"
          },
          {
            iconKey: "minecraft:chicken_spawn_egg",
            nameKey: "Spot a chicken",
            observeKey: "minecraft:chicken"
          },
          {
            iconKey: "minecraft:rabbit_spawn_egg",
            nameKey: "Spot a rabbit",
            observeKey: "minecraft:rabbit"
          },
          {
            iconKey: "minecraft:sheep_spawn_egg",
            nameKey: "Spot a sheep",
            observeKey: "minecraft:sheep"
          },
          {
            iconKey: "minecraft:cow_spawn_egg",
            nameKey: "Spot a cow",
            observeKey: "minecraft:cow"
          }
        ]
      },
      { # Caves
        nameKey: 'Caves Completion',
        iconKey: 'minecraft:stone',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:bat_spawn_egg",
            nameKey: "Spot a bat",
            observeKey: "minecraft:bat"
          },
          {
            iconKey: "minecraft:glow_squid_spawn_egg",
            nameKey: "Spot a glow squid",
            observeKey: "minecraft:glow_squid"
          },
          {
            iconKey: "minecraft:axolotl_spawn_egg",
            nameKey: "Spot an axolotl",
            observeKey: "minecraft:axolotl"
          },
          {
            observeKey: 'yungscavebiomes:sand_snapper',
            iconKey: 'yungscavebiomes:sand_snapper_spawn_egg',
            nameKey: 'Spot a sand snapper'
          }
        ]
      },
      { # Snowy
        nameKey: 'Snowy Completion',
        iconKey: 'minecraft:snowball',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:polar_bear_spawn_egg",
            nameKey: "Spot a polar bear",
            observeKey: "minecraft:polar_bear"
          },
          {
            iconKey: "minecraft:fox_spawn_egg",
            nameKey: "Spot a fox",
            observeKey: "minecraft:fox"
          },
					{
						observeKey: 'wildernature:penguin',
						iconKey: 'wildernature:penguin_spawn_egg',
						nameKey: 'Spot a penguin'
					}
        ]
      },
      { # Swamp
        nameKey: 'Swamp Completion',
        iconKey: 'minecraft:mangrove_propagule',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:frog_spawn_egg",
            nameKey: "Spot a frog",
            observeKey: "minecraft:frog"
          },
          {
            iconKey: "minecraft:tadpole_spawn_egg",
            nameKey: "Spot a tadpole",
            observeKey: "minecraft:tadpole"
          }
        ]
      },
      { # Mushroom
        nameKey: 'Mushroom Completion',
        iconKey: 'minecraft:red_mushroom',
        dependencyIdKey: '5BB57D9BEC8038FB', # first animal observation
        tasksKey: [
          {
            iconKey: "minecraft:mooshroom_spawn_egg",
            nameKey: "Spot a mooshroom",
            observeKey: "minecraft:mooshroom"
          }
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
          "minecraft:wheat_seeds",
          "minecraft:melon_slice",
          "minecraft:pumpkin",
          "minecraft:apple"
        ]
      },
      { # Modded Foods
        nameKey: 'Modded Foods Completion',
        iconKey: 'farm_and_charm:corn',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          'farm_and_charm:corn',
          'farm_and_charm:oat',
          'farm_and_charm:barley',
          'farm_and_charm:lettuce',
          'farm_and_charm:onion',
          'farm_and_charm:tomato',
          'farm_and_charm:strawberry',
          'farm_and_charm:wild_nettle',
          'farm_and_charm:wild_ribwort',
          'herbalbrews:yerba_mate_leaf',
          'herbalbrews:rooibos_leaf',
          'herbalbrews:coffee_beans',
          'vinery:red_grape',
          'vinery:white_grape',
          'vinery:savanna_grapes_red',
          'vinery:savanna_grapes_white',
          'vinery:taiga_grapes_red',
          'vinery:taiga_grapes_white',
          'vinery:jungle_grapes_red',
          'vinery:jungle_grapes_white',
          'vinery:cherry',
          'biomeswevegone:blueberries',
          'biomeswevegone:green_apple',
          'yungscavebiomes:prickly_peach',
          "biomeswevegone:aloe_vera",
          "biomeswevegone:horseweed",
          "biomeswevegone:oddion_bulb",
          "biomeswevegone:pale_pumpkin",
          'wildernature:hazelnut',
          'beachparty:coconut'
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
          "minecraft:lily_pad",
          "minecraft:vine",
          "minecraft:glow_lichen"
        ]
      },
      { # mod saps
        nameKey: 'Modded Saplings',
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
          "biomeswevegone:palm_sapling",
          "biomeswevegone:palo_verde_sapling",
          "biomeswevegone:pine_sapling",
          "meadow:pine_sapling",
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
          "biomeswevegone:zelkova_sapling",
          "vinery:dark_cherry_sapling",
          'beachparty:palm_sprout'
        ]
      },
      { # bushes
        nameKey: 'Biome Bushes',
        iconKey: 'biomeswevegone:allium_flower_bush',
        dependencyIdKey: '4F114B795F9ABFD0', # collect first flora
        tasksKey: [
          "biomeswevegone:jacaranda_bush",
          "biomeswevegone:flowering_jacaranda_bush",
          "biomeswevegone:indigo_jacaranda_bush",
          "biomeswevegone:flowering_indigo_jacaranda_bush",
          "biomeswevegone:blue_rose_bush",
          "biomeswevegone:hydrangea_bush",
          "biomeswevegone:firecracker_flower_bush",
        ]
      },
      { # ground covers
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
      },
      { # biome flowers
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
          "biomeswevegone:yellow_daffodil",
          "meadow:alpine_poppy",
          "meadow:delphinium",
          "meadow:saxifrage",
          "meadow:enzian",
          "meadow:fire_lily",
          "meadow:eriophorum",
          "meadow:eriophorum_tall",
          "candlelight:rose",
          'herbalbrews:lavender',
          'herbalbrews:hibiscus',
        ]
      },
      { # allium and tulips
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
      },
      { # misc
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
          "biomeswevegone:white_puffball_spores",
          "meadow:small_fir",
          "yungscavebiomes:prickly_peach_cactus",
          "yungscavebiomes:prickly_vines",
          "yungscavebiomes:frost_lily",
          "biomeswevegone:green_mushroom",
          "biomeswevegone:shelf_fungi",
          "biomeswevegone:weeping_milkcap",
          "biomeswevegone:wood_blewit",
          "beachparty:seashell",
        ]
      }
    ]
  },
  { # Mineral Museum
    filenameKey: 'mineral_museum',
    nameKey: 'Mineral Museum',
    iconKey: 'minecraft:raw_gold',
    collectionNotificationKey: 'New mineral mined!',
    increaseRateKey: 0.03,
    typeKey: itemQuestTypeConst,
    questGroupsKey: [
      { # Vanilla Blocks
        nameKey: 'Vanilla Blocks Completion',
        iconKey: 'minecraft:andesite',
        dependencyIdKey: '2C1B93F1A534E681', # collect first mineral
        increaseRateKey: 0.01,
        tasksKey: [
          "minecraft:cobblestone",
          "minecraft:mossy_cobblestone",
          "minecraft:cobbled_deepslate",
          "minecraft:diorite",
          "minecraft:granite",
          "minecraft:andesite",
          "minecraft:sandstone",
          "minecraft:red_sandstone",
          "minecraft:calcite",
          "minecraft:dripstone_block",
          "minecraft:pointed_dripstone",
          "minecraft:smooth_basalt",
          "minecraft:basalt",
          "minecraft:tuff",
          "minecraft:obsidian"
        ]
      },
      { # Ore
        nameKey: 'Ore Completion',
        iconKey: 'minecraft:raw_iron',
        dependencyIdKey: '2C1B93F1A534E681', # collect first mineral
        increaseRateKey: 0.03,
        tasksKey: [
          "minecraft:raw_copper",
          "minecraft:raw_iron",
          "create:raw_zinc",
          "minecraft:raw_gold",
          "minecraft:coal",
          "minecraft:redstone"
        ]
      },
      { # gems
        nameKey: 'Gems Completion',
        iconKey: 'minecraft:amethyst_shard',
        dependencyIdKey: '2C1B93F1A534E681', # collect first mineral
        increaseRateKey: 0.04,
        tasksKey: [
          "minecraft:lapis_lazuli",
          "minecraft:amethyst_shard",
          "minecraft:diamond",
          'irons_jewelry:ruby',
          'irons_jewelry:sapphire',
          'irons_jewelry:topaz',
          'irons_jewelry:moonstone',
          'irons_jewelry:peridot',
          'irons_jewelry:onyx',
          'irons_jewelry:garnet'
        ]
      },
      { # modded
        nameKey: 'Modded Completion',
        iconKey: 'biomeswevegone:blue_sandstone',
        dependencyIdKey: '2C1B93F1A534E681', # collect first mineral
        increaseRateKey: 0.03,
        tasksKey: [
          "biomeswevegone:blue_sandstone",
          "biomeswevegone:borealis_ice",
          "biomeswevegone:cracked_red_sand",
          "biomeswevegone:dacite",
          "biomeswevegone:florus_stem",
          "biomeswevegone:lush_grass_block",
          "biomeswevegone:mossy_stone",
          "biomeswevegone:overgrown_stone",
          "biomeswevegone:pale_mud",
          "biomeswevegone:red_rock",
          "biomeswevegone:rocky_stone",
          "biomeswevegone:white_dacite",
          "biomeswevegone:windswept_sand",
          "biomeswevegone:windswept_sandstone",
          'meadow:limestone',
          'yungscavebiomes:icicle',
          'yungscavebiomes:rare_ice',
          'yungscavebiomes:ancient_sand',
          'yungscavebiomes:ancient_sandstone',
        ]
      },
      { # create
        nameKey: 'Create Completion',
        iconKey: 'create:cogwheel',
        dependencyIdKey: '2C1B93F1A534E681', # collect first mineral
        increaseRateKey: 0.03,
        tasksKey: [
          'create:crimsite',
          'create:asurine',
          'create:limestone',
          'create:ochrum',
          'create:scoria',
          'create:scorchia',
          'create:veridium'
        ]
      }
    ]
  },
  { # Cooking collection
    filenameKey: 'cooking_collection',
    nameKey: 'Cooking Collection',
    iconKey: 'bakery:strawberry_cupcake',
    collectionNotificationKey: 'New dish cooked!',
    increaseRateKey: 0.04,
    typeKey: itemQuestTypeConst,
    questStartAtCenterKey: True,
    questGroupsKey: [
      ## Lets Do Foods
      { # Oven
        nameKey: 'Cooking Pot Completion',
        iconKey: 'farm_and_charm:cooking_pot',
        dependencyIdKey: '2C42B4AF446B4BD9', # Cooking with a Pot
        tasksKey: [
          "bakery:apple_jam",
          "bakery:chocolate_jam",
          "bakery:glowberry_jam",
          "bakery:strawberry_jam",
          "bakery:sweetberry_jam",
          "bakery:chocolate_truffle",
          "bakery:pudding",
          "candlelight:chicken_teriyaki",
          "candlelight:chocolate_mousse",
          "candlelight:khinkali",
          "candlelight:mushroom_soup",
          "candlelight:pasta_with_mozzarella",
          "candlelight:salmon_on_white_wine",
          "candlelight:tomato_soup",
          "farm_and_charm:barley_soup",
          "farm_and_charm:corn_grits",
          "farm_and_charm:goulash",
          "farm_and_charm:nettle_tea",
          "farm_and_charm:onion_soup",
          "farm_and_charm:potato_soup",
          "farm_and_charm:ribwort_tea",
          "farm_and_charm:simple_tomato_soup",
          "farm_and_charm:strawberry_tea",
          "brewery:dumplings",
          "brewery:sausage"
        ]
      },
      {
        nameKey: 'Mincer Completion',
        iconKey: 'farm_and_charm:mincer',
        dependencyIdKey: '1A6015D93785C5F8', # Mincing Wheat
        tasksKey: [
          "brewery:half_chicken",
          "brewery:mashed_potatoes",
          "farm_and_charm:lamb_ham"
        ]
      },
      {
        nameKey: 'Crafting Bowl Completion',
        iconKey: 'farm_and_charm:crafting_bowl',
        dependencyIdKey: '2C347959EBCF675E', # Bowl Mixing
        tasksKey: [
          "brewery:potato_salad",
          "candlelight:beef_tartare",
          "candlelight:beetroot_salad",
          "candlelight:fresh_garden_salad",
          "candlelight:harvest_plate",
          "candlelight:mozzarella",
          "candlelight:salad",
          "candlelight:tomato_mozzarella_salad",
          "farm_and_charm:farmer_salad",
          "farm_and_charm:oatmeal_with_strawberries"
        ]
      },
      {
        nameKey: 'Stove Completion',
        dependencyIdKey: '49BBEA6293EEAE79', # Stove Baking
        iconKey:'farm_and_charm:stove',
        tasksKey: [
          "bakery:apple_pie",
          "bakery:baguette",
          "bakery:braided_bread",
          "bakery:bread",
          "bakery:bun",
          "bakery:bundt_cake",
          "bakery:chocolate_tart",
          "bakery:cornet",
          "bakery:croissant",
          "bakery:crusty_bread",
          "bakery:glowberry_tart",
          "bakery:grilled_bacon_sandwich",
          "bakery:grilled_salmon_sandwich",
          "bakery:jam_roll",
          "bakery:linzer_tart",
          "bakery:misslilitu_biscuit",
          "bakery:toast",
          "bakery:waffle",
          "brewery:gingerbread",
          "brewery:pork_knuckle",
          "brewery:pretzel",
          "candlelight:beef_wellington",
          "candlelight:chicken_alfredo",
          "candlelight:chicken_with_vegetables",
          "candlelight:lasagne",
          "candlelight:pork_ribs",
          "candlelight:roastbeef_with_glazed_carrots",
          "candlelight:tropical_fish_supreme",
          "farm_and_charm:baked_lamb_ham",
          "farm_and_charm:farmers_bread",
          "farm_and_charm:grandmothers_strawberry_cake",
          "farm_and_charm:pasta_with_onion_sauce",
          "farm_and_charm:potato_with_roast_meat",
          "farm_and_charm:roasted_chicken",
          "farm_and_charm:roasted_corn",
          "farm_and_charm:stuffed_chicken",
          "farm_and_charm:stuffed_rabbit"
        ]
      },
      {
        nameKey: 'Caking Completion',
        dependencyIdKey: '5B2855A053DE0501', # Caking Station
        iconKey:'bakery:baker_station',
        tasksKey: [
          "bakery:sweetberry_glazed_cookie",
          "bakery:strawberry_glazed_cookie",
          "bakery:chocolate_glazed_cookie",

          "bakery:sweetberry_cupcake",
          "bakery:strawberry_cupcake",
          "bakery:apple_cupcake",

          "bakery:sweetberry_cake",
          "bakery:strawberry_cake",
          "bakery:chocolate_cake",
          "bakery:chocolate_gateau"
        ]
      },
      {
        nameKey: 'Cheese Form Completion',
        dependencyIdKey: '0630CE07E50C1851', # Forming Cheese
        iconKey:'meadow:cheese_form',
        tasksKey: [
          "meadow:cheese_block",
          "meadow:sheep_cheese_block",
          "meadow:goat_cheese_block",
          "meadow:buffalo_cheese_block",
          "meadow:grain_cheese_block"
        ]
      },
      {
        nameKey: 'Cooking Caldron Completion',
        dependencyIdKey: '59449FD43D19FE6B', # Using the Cooking Caldron
        iconKey: 'meadow:cooking_cauldron',
        tasksKey:[
          "meadow:cooked_buffalo_meat",
          "meadow:sausage_with_cheese",
          "meadow:roasted_ham"
        ]
      },
      {
        nameKey: 'Roaster Completion',
        dependencyIdKey: '4A69082167D41264', # Roaster Roasting
        iconKey:'farm_and_charm:roaster',
        tasksKey: [
          "brewery:fried_chicken",
          "candlelight:beef_with_mushroom_in_wine_and_potatoes",
          "candlelight:bolognese",
          "candlelight:fillet_steak",
          "candlelight:omelet",
          "candlelight:pasta_with_lettuce",
          "candlelight:pasta_with_bolognese",
          "candlelight:roasted_lamb_with_lettuce",
          "farm_and_charm:bacon_with_eggs",
          "farm_and_charm:barley_patties_with_potatoes",
          "farm_and_charm:beef_patty_with_vegetables",
          "farm_and_charm:chicken_wrapped_in_bacon",
          "farm_and_charm:cooked_cod",
          "farm_and_charm:cooked_salmon",
          "farm_and_charm:lamb_with_corn",
          "farm_and_charm:oat_pancake",
          "farm_and_charm:sausage_with_oat_patty"
        ]
      },
      {
        nameKey: 'Palm Bar Completion',
        dependencyIdKey: '4CEB9362A3403CA6', # Making Cocktails
        iconKey:'beachparty:palm_bar',
        tasksKey: [
          "beachparty:cocoa_cocktail",
          "beachparty:coconut_cocktail",
          "beachparty:honey_cocktail",
          "beachparty:melon_cocktail",
          "beachparty:pumpkin_cocktail",
          "beachparty:sweetberries_cocktail"
        ]
      },
      {
        nameKey: 'Tea Brewing Completion',
        dependencyIdKey: '21BA88188D23BF4E', # Brewing Tea
        iconKey:'herbalbrews:tea_kettle',
        tasksKey: [
          "herbalbrews:green_tea",
          "herbalbrews:black_tea",
          "herbalbrews:oolong_tea",
          "herbalbrews:hibiscus_tea",
          "herbalbrews:lavender_tea",
          "herbalbrews:rooibos_tea",
          "herbalbrews:coffee",
          "herbalbrews:milk_coffee",
          "herbalbrews:yerba_mate_tea"
        ]
      },
      {
        nameKey: 'Juicing Completion',
        dependencyIdKey: '49A24AD6CB0927FB', # Mashing Grape Juice
        iconKey:'vinery:apple_press',
        tasksKey: [
          'vinery:red_grapejuice',
          'vinery:white_grapejuice',
          'vinery:red_taiga_grapejuice',
          'vinery:white_taiga_grapejuice',
          'vinery:red_jungle_grapejuice',
          'vinery:white_jungle_grapejuice',
          'vinery:red_savanna_grapejuice',
          'vinery:white_savanna_grapejuice',
          'vinery:apple_juice'
        ]
      },
      {
        nameKey: 'Barrel Brewing Completion',
        dependencyIdKey: '74D876358D8D89DB', # Barrel Brewing
        iconKey:'vinery:fermentation_barrel',
        tasksKey: [
          "vinery:aegis_wine",
          "vinery:apple_cider",
          "vinery:apple_wine",
          "vinery:bolvar_wine",
          "vinery:bottle_mojang_noir",
          "vinery:chenet_wine",
          "vinery:cherry_wine",
          "vinery:chorus_wine",
          "vinery:clark_wine",
          "vinery:creepers_crush",
          "vinery:cristel_wine",
          "vinery:eiswein",
          "vinery:glowing_wine",
          "vinery:jellie_wine",
          "vinery:jo_special_mixture",
          "vinery:kelp_cider",
          "vinery:lilitu_wine",
          "vinery:magnetic_wine",
          "vinery:mead",
          "vinery:mellohi_wine",
          "vinery:noir_wine",
          "vinery:red_wine",
          "vinery:solaris_wine",
          "vinery:stal_wine",
          "vinery:strad_wine",
          "vinery:villagers_fright"
        ]
      },
      { # Wood Brewing
        nameKey: 'Beer Brewing Completion',
        dependencyIdKey: '144B3D6C8E09A63D', # Beer Brewing
        iconKey:'brewery:wooden_brewingstation',
        tasksKey: [
          "brewery:beer_barley",
          "brewery:beer_haley",
          "brewery:beer_hops",
          "brewery:beer_nettle",
          "brewery:beer_oat",
          "brewery:beer_wheat"
        ]
      },
      { # Copper Brewing
        nameKey: 'Copper Brewing Completion',
        dependencyIdKey: '19624CB79AFCA70A', # Copper Brewing
        iconKey:'brewery:copper_brewingstation',
        tasksKey: [
          "brewery:whiskey_ak",
          "brewery:whiskey_cristelwalker",
          "brewery:whiskey_carrasconlabel",
          "brewery:whiskey_highland_hearth",
          "brewery:whiskey_jojannik",
          "brewery:whiskey_lilitusinglemalt",
          "brewery:whiskey_maggoallan"
        ]
      },
      { # Netherite Brewing
        nameKey: 'Netherite Brewing Completion',
        dependencyIdKey: '520B83F3DCC1C5B9', # Netherite Brewing
        iconKey:'brewery:netherite_brewingstation',
        tasksKey: [
          "brewery:dark_brew",
          "brewery:whiskey_jamesons_malt",
          "brewery:whiskey_smokey_reverie"
        ]
      }
    ]
  }
]