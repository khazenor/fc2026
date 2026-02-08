// priority: 1
const NpcAndre = {
  name: 'Andre',
  get offerDefs () {
    return [
      { villagerItems: RandHelper.randomMineDayRandFromArr(
        this.produceItems, 4
      ), playerNum: 6 }, {
        villagerItems: [
          "minecraft:beehive",
          "minecraft:bee_spawn_egg"
        ], playerNum: 8
      }, {
        villagerItems: [
          'minecraft:lead',
          'mobcapturingtool:mob_capturing_tool',
          'farm_and_charm:chicken_coop',
          'farmingforblockheads:chicken_nest',
          'farmingforblockheads:feeding_trough',
          'farm_and_charm:water_sprinkler',
          'farm_and_charm:cattlegrid',
          'farm_and_charm:iron_divider',
          'farm_and_charm:chicken_fence'
      ], playerNum: 4 }
    ]
  },
  produceItems: [
    'moa_cookery:barrica',
    'moa_cookery:barril',
    'moa_cookery:barril_abierto',
    'moa_cookery:barril_acostado',
    'moa_cookery:barril_betabeles',
    'moa_cookery:barril_manzanas',
    'moa_cookery:barril_manzanas_doradas',
    'moa_cookery:barril_papas',
    'moa_cookery:barril_zanahorias',
    'moa_cookery:barril_zanahorias_doradas',
    'moa_cookery:calabaza',
    'moa_cookery:bolsa_semillas',
    'moa_cookery:caja_leche',
    'moa_cookery:frasco_azucar',
    'moa_cookery:frasco_cafe',
    'moa_cookery:frasco_galletas',
    'moa_cookery:frasco_semillas',
    'moa_cookery:frasco',
    'moa_cookery:botellas_leche',
    'moa_cookery:betabel',
    'moa_cookery:betabel_cortado',
    'moa_cookery:bandeja_galletas',
    'moa_cookery:manzana',
    'moa_cookery:manzana_cortada',
    'moa_cookery:manzana_dorada',
    'moa_cookery:manzana_dorada_cortada',
    'moa_cookery:queso',
    'moa_cookery:zanahoria',
    'moa_cookery:zanahoria_cortada',
    'moa_cookery:zanahoria_dorada',
    'moa_cookery:zanahoria_dorada_cortada',
  ]
}

RequestHandler.callbacks.itemEvents.entityInteracted([(event) => {
  npcCommonBehavior(event, NpcAndre, false)
}])
