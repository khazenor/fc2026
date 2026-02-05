const ItemHelper = {
  getBundleContents (bundleItem) {
    let returnItems = []
    for (let component of bundleItem.components) {
      if (component.type() == 'minecraft:bundle_contents') {
        let items = component.value().items()
        for (let item of items) {
          returnItems.push(item)
        }
      }
    }
    return returnItems
  }
}