import os
import math
import re
import shutil
import json
from lib import ffprobe
from lib import kubejs
from lib import stringCleaning
import const
from pathlib import Path


diskAndArtLocation = os.path.join('music_discs', 'records')
categoryName = 'farming_crossing_records'

categoryFolder = os.path.join(const.assets(), categoryName)
soundFolder = os.path.join(categoryFolder, 'sounds', 'records')
textureFolder = os.path.join(categoryFolder, 'textures', 'item')

def deployMusicDiscs():
	musicDiscTagItems = []
	soundRegistryContent = ""
	itemRegistryContent = ""
	songRegistryContent = ""
	soundJsonDict = {}
	langJsonDict = {}

	for filename in os.listdir(diskAndArtLocation):
		if ".ogg" in filename:
			copyFiles(filename)
			addJsonDictEntry(filename, soundJsonDict)
			soundRegistryContent += kubejs.createSimple(soundId(filename))
			itemRegistryContent += itemRegistry(filename)
			musicLength = math.ceil(
				ffprobe.getLength(os.path.join(diskAndArtLocation, filename))
			)
			songRegistryContent += kubejs.createSong(
				songName(filename),
				soundId(filename),
				musicLength
			)
			musicDiscTagItems.append(itemId(filename))
			langJsonDict[f"item.kubejs.{cleanedFilename(filename)}.desc"] = noExt(filename)

		with open(os.path.join(const.startupScripts(), 'music_disc_registry.js'), 'w', encoding='utf-8') as f:
			f.write(
				kubejs.registryFileContent('sound_event', soundRegistryContent) + "\n\n" +
				kubejs.registryFileContent('item', itemRegistryContent)
			)
		with open(os.path.join(const.serverScripts(), 'music_disc_song_registry.js'), 'w', encoding="utf-8") as f:
			f.write(
				kubejs.specifiedEvent(
					"ServerEvents",
					'registry',
					'jukebox_song',
					songRegistryContent
				)
			)
		smartDump(soundJsonDict, os.path.join(categoryFolder, 'sounds.json'))
		smartDump(langJsonDict, os.path.join(categoryFolder, 'lang', 'en_us.json'))
		kubejs.generateSimpleTags(musicDiscTagItems, 'minecraft:music_discs', 'music_disc_tags')


def smartDump(jsonDict, fileDir):
	os.makedirs(Path(fileDir).parent, exist_ok=True)
	json.dump(jsonDict, open(fileDir, 'w'), indent=2)


def copyFiles(filename):
	textureFilename = filename.replace('.ogg', '.png')
	copyFile(diskAndArtLocation, textureFolder, textureFilename, f"{cleanedFilename(filename)}.png")
	copyFile(diskAndArtLocation, soundFolder, filename, f"{cleanedFilename(filename)}.ogg")

def copyFile(fromFolder, toFolder, fromFile, toFile):
	toFileDir = os.path.join(toFolder, toFile)
	if not os.path.exists(toFileDir):
		os.makedirs(toFolder, exist_ok=True)
		shutil.copy2(os.path.join(fromFolder, fromFile), toFileDir)

def addJsonDictEntry(filename, jsonDict):
	jsonDict[cleanedFilename(filename)] = {
		"category": "record",
		"sounds": [{
			"name": soundPath(filename),
			"stream": True
		}]
	}

def itemRegistry(filename):
	itemTitle = itemName(filename)

	return kubejs.createMusicDisc(itemId(filename), songName(filename), itemPath(filename), itemTitle)

def itemName(filename):
	return f"Music Disc: {noExt(filename)}"

def itemId(filename):
	return f"kubejs:{songName(filename)}"

def soundId(filename):
	return f"{categoryName}:{songName(filename)}"

def songName(filename):
	return cleanedFilename(filename)

def soundPath(filename):
	return f"{categoryName}:records/{songName(filename)}"

def itemPath(filename):
	return f"{categoryName}:item/{songName(filename)}"

def cleanedFilename(filename):
	return stringCleaning.cleanedNameStr(noExt(filename))

def noExt(fileStr):
	return fileStr.split('.')[0]