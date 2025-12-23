const TransHelper = {
  defaultTransKey: (itemId, idx) => {
    return `item.${itemId.replace(':', '.')}.tooltip${idx}`
  },
  itemName (itemId) {
    return Text.translate(Item.of(itemId).getDescriptionId())
  },
  itemNameWithPlural (itemId, count) {
    let itemName = this.itemName(itemId)
    let itemNameWithPlural = count > 1
      ? Text.translate('translation.pluralizeNoun', itemName)
      : itemName
    return Text.translate('translation.spaceBetween', StrHelper.cleanFloor(count), itemNameWithPlural)
  },
  entityName (entityId) {
    return Text.translate('entity.' + entityId.replace(':', '.'))
  }
}