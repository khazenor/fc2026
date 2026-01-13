const TransHelper = {
  defaultTransKey: (itemId, idx) => {
    return `item.${itemId.replace(':', '.')}.tooltip${idx}`
  },
  itemName (itemId) {
    return Text.translate(Item.of(itemId).getDescriptionId())
  },
  itemNameEngStr (itemId) {
    return this.itemName(itemId).getString()
  },
  itemNameWithPlural (itemId, count) {
    let itemName = this.itemName(itemId)
    let itemNameWithPlural = count > 1
      ? Text.translate('translation.pluralizeNoun', itemName)
      : itemName
    return Text.translate('translation.spaceBetween', StrHelper.cleanFloor(count), itemNameWithPlural)
  },
  itemNameWithIsArePlural (itemId, count) {
    let itemNameWithPlural = this.itemNameWithPlural(itemId, count)
    if (count > 1) {
      return Text.translate('translation.are', itemNameWithPlural)
    } else {
      return Text.translate('translation.is', itemNameWithPlural)
    }
  },
  entityName (entityId) {
    return Text.translate('entity.' + entityId.replace(':', '.'))
  }
}