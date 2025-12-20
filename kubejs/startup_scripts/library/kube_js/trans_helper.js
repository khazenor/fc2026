const TransHelper = {
  defaultTransKey: (itemId, idx) => {
    return `item.${itemId.replace(':', '.')}.tooltip${idx}`
  },
  itemName (itemId) {
    return Text.translate(Item.of(itemId).getDescriptionId())
  },
  entityName (entityId) {
    return Text.translate('entity.' + entityId.replace(':', '.'))
  }
}