// Requires
// - miles_tickets.js
// - material_list.js

const MaterialDupeReqs = {
  buildingMaterialDupeNum: 64,
  get shaplessDefs () {
    let shapelessDefs = []
    for (let buildingMaterial of MaterialList) {
      shapelessDefs.push([
        StrHelper.itemStackStr(buildingMaterial, this.buildingMaterialDupeNum),
        [buildingMaterial, MilesTickets.ticketId],
      ])
    }
    return shapelessDefs
  }
}

RequestHandler.tooltips.add([
  [MaterialList, [
    Text.translate('building_material_duplication.tooltip')
  ]]
])

RequestHandler.recipes.add.shapeless(MaterialDupeReqs.shaplessDefs)

RequestHandler.tags.item.add([
  ['c:building_materials', MaterialList]
])
