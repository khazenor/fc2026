from lib import util
from lib import translationApi

cacheFileDir = 'cache\\translationCache.json'

def hasCachedTrans(engText, transCode):
	langCache = loadLangCache()
	if engText not in langCache:
		return False

	return transCode in langCache[engText]

def getCachedTrans(engText, transCode):
	return loadLangCache()[engText][transCode]

def addToLangCache(engText, transText, transCode):
	langCache = loadLangCache()
	if engText != transText and translationApi.shouldTranslate(engText):
		if engText not in langCache:
			langCache[engText] = {}
			dumpLangCache(langCache)
		if transCode not in langCache[engText] or langCache[engText][transCode] != transText:
			langCache[engText][transCode] = transText
			dumpLangCache(langCache)


def loadLangCache():
	return util.loadJson(cacheFileDir)

def dumpLangCache(langCache):
	util.dumpJson(langCache, cacheFileDir)