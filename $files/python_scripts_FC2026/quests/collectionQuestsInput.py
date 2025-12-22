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
  }
]