// Requires:
// - library/kube_js/default_class
function MenuWrapper (label, overrideObj) {
  this.menu = new MenuType(label)
  this.colLen = this.override(overrideObj, 'colLen', 9)
  this.rowLen = this.override(overrideObj, 'rowLen', 5)

  this.pageStart = this.override(overrideObj, 'pageStart', 0)
  this.rowStart = this.override(overrideObj, 'rowStart', 0)
  this.colStart = this.override(overrideObj, 'colStart', 0)

  this.pageForNextItem = this.pageStart
  this.rowForNextItem = this.rowStart
  this.colForNextItem = this.colStart
}

const MenuWrapperPrototype = {
  addSlot(baseSlotObj, overrideObj) {
    baseSlotObj.page = this.override(overrideObj, 'page', this.pageForNextItem)
    baseSlotObj.y = this.override(overrideObj, 'row', this.rowForNextItem)
    baseSlotObj.x = this.override(overrideObj, 'col', this.colForNextItem)
    if (!overrideObj) {
      this.setNextItemSlot()
    }

    this.menu.addSlot(baseSlotObj)
  },
  setNextItemSlot () {
    if (this.colForNextItem === this.colLen - 1) {
      this.nextRow()
    } else {
      this.colForNextItem ++
    }
  },
  nextRow () {
    if (this.colForNextItem !== this.colStart) {
      if (this.rowForNextItem === this.rowLen - 1) {
        this.rowForNextItem = this.rowStart
        this.pageForNextItem ++
      } else {
        this.rowForNextItem ++
      }
      this.colForNextItem = this.colStart
    }
  }
}

MenuWrapper.prototype = Object.assign(MenuWrapperPrototype, DefaultClass.prototype)
