const CacheHelper = {
  cacheFileDir (filename) {
    return `kubejs/modpack_caches/${filename}.json`
  },
  cacheObject (filename, object) {
    IoHelper.writeObj(
      this.cacheFileDir(filename),
      object
    )
  },
  loadCache (filename) {
    return IoHelper.readObj(this.cacheFileDir(filename))
  }
}