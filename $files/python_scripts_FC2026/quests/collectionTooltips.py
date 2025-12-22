from quests import collectionQuestsInput as cqi
from lib import kubejs
from lib import stringCleaning
from lib import fcTrans
import json
from lib import kubejs

translationKeyParent = 'collectionTooltips'

def genCollectionTooltips():
	fcTrans.setDefaultTranslationParent(translationKeyParent)
	writeTooltips()
	fcTrans.resetDefaultTranslationParent()

def writeTooltips():
	tooltipContent = ''
	for questlineIdx, questline in enumerate(cqi.questlines):
		questLineName = questline[cqi.nameKey]
		if questline[cqi.typeKey] == cqi.itemQuestTypeConst:
			for questGroup in questline[cqi.questGroupsKey]:
				tooltipContent += kubejs.eventAddTranslatedTooltips(
					questGroup[cqi.tasksKey],
					[
						questLineName,
						questGroup[cqi.nameKey]
					]
				)
	kubejs.writeClientFile(
		kubejs.tooltipFileContent(tooltipContent),
		'collection_tooltips'
	)

def transKey(str):
	return f"{translationKeyParent}.{stringCleaning.cleanedNameStr(str)}"