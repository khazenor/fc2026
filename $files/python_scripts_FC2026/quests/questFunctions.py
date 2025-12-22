from quests import collectionQuestsInput
from lib import mcfunction
from lib import commands
from lib import stringCleaning
from lib import fcTrans

functionParentName = 'fc_collection'
initScoreFilename = 'init_all_scores'
transKeyPrefix = 'questFunctions'
def genQuestFunctions():
	fcTrans.setDefaultTranslationParent(transKeyPrefix)
	commandsTransParent = commands.transKeyParent
	commands.transKeyParent = transKeyPrefix

	genQuestFunctionFiles()

	commands.transKeyParent = commandsTransParent

def genQuestFunctionFiles():
	initFunctionContent = ''
	mcfunction.clearFunctionFiles(functionParentName)

	checkScoreContent = ''

	for questline in collectionQuestsInput.questlines:
		totalCollectibles = totalTasksForQuestline(questline)
		questlineObjName = stringCleaning.cleanedNameStr(questline[collectionQuestsInput.nameKey])
		questlineName = questline[collectionQuestsInput.nameKey]
		initFunctionContent += commands.initScoreBoard(questlineObjName, questlineName)

		checkScoreContent += commands.collectionNotification(
			questlineName,
			questlineObjName,
			totalCollectibles
		)
		for questGroup in questline[collectionQuestsInput.questGroupsKey]:
			subGroupName = questGroup[collectionQuestsInput.nameKey]
			totalSubCollectibles = len(questGroup[collectionQuestsInput.tasksKey])
			subGroupNameCleaned = stringCleaning.cleanedNameStr(subGroupName)
			fullCollectionNotification = (
				questline[collectionQuestsInput.collectionNotificationKey] + " " +
				questlineName
			)

			subGroupObjName = f'{questlineObjName}_{subGroupNameCleaned}'
			groupFunctionContent = (
				commands.collectionTally(questlineObjName) +
				commands.collectionNotification(
					fullCollectionNotification,
					questlineObjName,
					totalCollectibles
				)
			)
			mcfunction.writeFunction(
				functionParentName,
				questlineObjName,
				groupFunctionContent
			)

			subGroupFunctionContent = (
				commands.collectionTally(subGroupObjName) +
				commands.collectionNotification(
					subGroupName,
					subGroupObjName,
					totalSubCollectibles
				) +
				commands.tellRaw([])
			)
			mcfunction.writeFunction(
				functionParentName,
				subGroupObjName,
				subGroupFunctionContent
			)
			initFunctionContent += commands.initScoreBoard(subGroupObjName, subGroupName)

		questlineName = questline[collectionQuestsInput.nameKey]
		mcfunction.writeFunction(functionParentName, initScoreFilename, initFunctionContent)
		mcfunction.writeFunction(functionParentName, 'check_collection_scores', checkScoreContent)

def totalTasksForQuestline(questline):
	totalNumTasks = 0
	for questGroup in questline[collectionQuestsInput.questGroupsKey]:
		totalNumTasks += len(questGroup[collectionQuestsInput.tasksKey])
	return totalNumTasks
