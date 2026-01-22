from lib import fcTrans
from lib import util
import const
import json
import os

dialogFileDir = 'dialog/dialogs.txt'
def generateTrans():
	dialogsByCharacter = readDialogs()
	transKeys = {}
	for i, (charactor, dialogs) in enumerate(dialogsByCharacter.items()):
		for idx, dialog in enumerate(dialogs):
			transKey = f'npc.dialogs.{charactor}_{idx}'
			fcTrans.addTranslationsToJson(transKey, dialog)
			util.addToDictList(transKeys, charactor, transKey)
	json.dump(transKeys, open(
		os.path.join(const.kubejs(), 'startup_scripts', 'src', 'core_mechanics', 'npcs', 'dialogs', 'dialog_keys.json'), 'w'
	), indent=2)

def readDialogs():
	dialogs = {}
	currentCharactor = ''
	with open(dialogFileDir, 'r', encoding="utf-8") as f:
		for line in f.read().split('\n'):
			cleanLine = line.strip()
			if len(cleanLine) > 0:
				if isNameLine(cleanLine):
					currentCharactor = cleanLine
				else:
					util.addToDictList(dialogs, currentCharactor, dialogFromLine(cleanLine))
	return dialogs

def isNameLine(line):
	return '-' not in line

def dialogFromLine(line):
	cleanedDialog = line.replace('- ', '')
	return f'<%s> {cleanedDialog}'
