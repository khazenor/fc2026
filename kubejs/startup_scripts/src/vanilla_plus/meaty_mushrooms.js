// TODO: remove legacy item registration when migrating to new modpack

const MeatyMushrooms = {
  pattyId: 'kubejs:mushroom_patty',
  cookedPattyId: 'kubejs:cooked_mushroom_patty',
  brownMushId: "minecraft:brown_mushroom",
  redMushId: "minecraft:red_mushroom",
  get tagDefs () {
    let tagEntries = [
      {
        tags: [
          'c:raw_materials',
          'c:foods/raw_bacon',
          'c:foods/raw_beef',
          'c:foods/raw_calamari',
          'c:foods/raw_chicken',
          'c:foods/raw_cod',
          'c:foods/raw_duck',
          'c:foods/raw_fish',
          'c:foods/raw_meat',
          'c:foods/raw_mutton',
          'c:foods/raw_pork',
          'c:foods/raw_salmon',
          'c:foods/raw_squid',
          'c:foods/safe_raw_fish'
        ],
        items: [ this.pattyId ]
      }, {
        tags: [
          'c:foods/cooked_bacon',
          'c:foods/cooked_beef',
          'c:foods/cooked_chicken',
          'c:foods/cooked_cod',
          'c:foods/cooked_duck',
          'c:foods/cooked_fish',
          'c:foods/cooked_meat',
          'c:foods/cooked_mutton',
          'c:foods/cooked_pork',
          'c:foods/cooked_salmon'
        ],
        items: [ this.cookedPattyId ]
      }
    ]

    let tagDefs = []
    for (let tagEntry of tagEntries) {
      for (let rawTag of tagEntry.tags) {
        tagDefs.push([rawTag, tagEntry.items])
      }
    }
    return tagDefs
  },
  rawMeats: [
    'minecraft:beef',
    'minecraft:porkchop',
    'minecraft:mutton',
    'minecraft:chicken',
    'minecraft:rabbit',
    'beachparty:raw_mussel_meat',
    'meadow:raw_buffalo_meat',
    'wildernature:bison_meat',
    'wildernature:venison',
    'wildernature:cassowary_meat',
    'quark:crab_leg'
  ],
  cookedMeats: [
    'minecraft:cooked_porkchop',
    'minecraft:cooked_mutton',
    'minecraft:cooked_chicken',
    'minecraft:cooked_rabbit',
    'meadow:cooked_buffalo_meat',
    'wildernature:cooked_bison_meat',
    'wildernature:cooked_venison',
    'wildernature:cooked_cassowary_meat',
    'wildernature:cooked_pelican_meat',
    'quark:cooked_crab_leg'
  ],
  get shapelessDefs () {
    let defs = []

    let ingTypes = [
      MeatyMushrooms.brownMushId,
      MeatyMushrooms.redMushId
    ]

    for (let ingType of ingTypes) {
      defs.push(
        [MeatyMushrooms.pattyId, `4x ${ingType}`]
      )
    }
    return defs
  }
}

RequestHandler.items.create.simpleFood([
  // current items
	[MeatyMushrooms.pattyId, 2, 1],
	[MeatyMushrooms.cookedPattyId, 4, 1]
])

RequestHandler.tooltips.add([
  [[
    MeatyMushrooms.pattyId,
    MeatyMushrooms.cookedPattyId
  ], [
    Text.translate('tooltip.kubejs.meaty_mushroom1'),
    Text.translate('tooltip.kubejs.meaty_mushroom2')
  ]]
])

RequestHandler.tags.item.add(MeatyMushrooms.tagDefs)

RequestHandler.recipes.add.allFoodCooking([
  [MeatyMushrooms.cookedPattyId, MeatyMushrooms.pattyId]
])

RequestHandler.recipes.add.shapeless(MeatyMushrooms.shapelessDefs)

RequestHandler.recipes.add.stonecuttingWithArrayOutput([
  [MeatyMushrooms.rawMeats, MeatyMushrooms.pattyId],
  [MeatyMushrooms.cookedMeats, MeatyMushrooms.cookedPattyId]
])