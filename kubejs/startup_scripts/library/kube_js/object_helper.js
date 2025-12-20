const ObjectHelper = {
  strifyKeys (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[`${key}`] = obj[key]
    }
    return newObj
  }
}