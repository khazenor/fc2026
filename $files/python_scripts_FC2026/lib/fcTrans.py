from lib import stringCleaning
import const
import os
from lib import util

defaultTranslationParent = 'defaultTranslationParent'
defaultTranslationParentCopy = defaultTranslationParent

def setDefaultTranslationParent(newParent):
	global defaultTranslationParent
	defaultTranslationParent = newParent
	removeTranslationsFromJson(newParent)

def resetDefaultTranslationParent():
	global defaultTranslationParent
	global defaultTranslationParentCopy
	defaultTranslationParent = defaultTranslationParentCopy

# returns transKey
def addDefaultTransToJson(text, langCode=const.engLangCode):
	transKey = tKey(defaultTranslationParent, text, langCode)
	addTranslationsToJson(transKey, text, langCode)
	return transKey

def addTranslationsToJson(transKey, text, langCode=const.engLangCode):
	transDict = loadTransDict(langCode)
	transDict[transKey] = text
	dumpTransDict(transDict, langCode)

def removeTranslationsFromJson(translationKeyParent, langCode=const.engLangCode):
	transDict = loadTransDict(langCode)
	while dictHasTrans(transDict, translationKeyParent):
		removeATransFromDict(transDict, translationKeyParent)
	dumpTransDict(transDict, langCode)

def transExists(transKey, langCode=const.engLangCode):
	return dictHasTrans(loadTransDict(langCode), transKey)

def dumpTransDict(transDict, langCode=const.engLangCode):
	util.dumpJson(transDict, const.fcTransFileDir(langCode))

def loadTransDict(langCode=const.engLangCode):
	return util.loadJson(const.fcTransFileDir(langCode))

def removeATransFromDict(transDict, translationKeyParent):
	for transKey in transDict:
		if translationKeyParent in transKey:
			del transDict[transKey]
			return

def dictHasTrans(transDict, translationKeyParent):
	for transKey in transDict:
		if translationKeyParent in transKey:
			return True
	return False

def tKey(parentKey, text, langCode=const.engLangCode):
	transDict = loadTransDict(langCode)
	if text in transDict.values():
		for transKey in transDict:
			if transDict[transKey] == text and parentKey in transKey:
				return transKey

	childKey = stringCleaning.cleanedNameStr(text)
	childKey = stringCleaning.toLowerCamelCaseIfSnake(childKey)
	transKey = f"{parentKey}.{childKey}"
	if transKey in transDict:
		i = 0
		while f"{transKey}{i}" in transDict:
			i += 1
		transKey = f"{transKey}{i}"
	return transKey
