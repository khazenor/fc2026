from lib import ftbQuest
from lib import stringCleaning
from lib import util
from quests import collectionQuestsInput
from quests import questFunctions
import math

numQuestPerRow = 5
def genQuestLines():
	questIdsByFilename = {}
	for questlineIdx, questline in enumerate(collectionQuestsInput.questlines):
		questsContent = ''
		questIds = []
		questLineName = questline[collectionQuestsInput.nameKey]
		y_positive = 0
		y_negative = 0
		for questGroup in questline[collectionQuestsInput.questGroupsKey]:

			taskIds = questGroup[collectionQuestsInput.tasksKey]
			questGroupName = questGroup[collectionQuestsInput.nameKey]
			dependencyId = questGroup[collectionQuestsInput.dependencyIdKey]
			subQuestDependencies = []
			doStartAtCenter = util.defaultDict(questline, collectionQuestsInput.questStartAtCenterKey, False)
			# init positions
			x = -1
			if y_positive > abs(y_negative) and doStartAtCenter:
				y_negative -=  math.ceil(len(taskIds) / (numQuestPerRow + 1)) + 0.5
				initY = y_negative
				y = initY
			else:
				initY = y_positive
				y = initY
				y_positive += math.ceil(len(taskIds) / (numQuestPerRow + 1)) + 0.5

			for taskId in taskIds:
				x += 1
				if x > numQuestPerRow:
					x = 0
					y += 1
				questType = questline[collectionQuestsInput.typeKey]
				groupCommandName = stringCleaning.cleanedNameStr(f'{questLineName}')
				subGroupCommandName = stringCleaning.cleanedNameStr(f'{questLineName} {questGroupName}')
				commands = [
					f"function {questFunctions.functionParentName}:{groupCommandName}",
					f"function {questFunctions.functionParentName}:{subGroupCommandName}"
				]
				if questType == collectionQuestsInput.itemQuestTypeConst:
					if taskId in collectionQuestsInput.itemSeedStrs:
						seedStr = collectionQuestsInput.itemSeedStrs[taskId]
					else:
						seedStr = taskId
					questId = ftbQuest.randomId(seedStr)
					questsContent += ftbQuest.collectionQuestContent(
						questId,
						taskId,
						commands,
						dependencyId,
						x=x,
						y=y,
						seedStr=seedStr
					)
				else: # questType == collectionQuestsInput.observationQuestTypeConst
					icon = taskId[collectionQuestsInput.iconKey]
					name = taskId[collectionQuestsInput.nameKey]
					observe = taskId[collectionQuestsInput.observeKey]
					questId = ftbQuest.randomId(observe)
					questsContent += ftbQuest.observationQuestContent(
						questId,
						icon,
						name,
						observe,
						commands,
						dependencyId,
						x=x,
						y=y,
						seedStr=observe
					)
				subQuestDependencies.append(questId)

			questIds += subQuestDependencies

			# create sub quest
			if collectionQuestsInput.additionalRewardsKey in questGroup:
				additionalRewards = questGroup[collectionQuestsInput.additionalRewardsKey]
			else:
				additionalRewards = []
			if collectionQuestsInput.increaseRateKey in questGroup:
				rewardsIncreaseRate = questGroup[collectionQuestsInput.increaseRateKey]
			else:
				rewardsIncreaseRate = questline[collectionQuestsInput.increaseRateKey]
			subQuestY = (y + initY) / 2
			questId = ftbQuest.randomId(f'{questLineName}{questGroupName}')
			questsContent += ftbQuest.collectionSubQuestContent(
				questId,
				subQuestDependencies,
				questGroup[collectionQuestsInput.nameKey],
				questGroup[collectionQuestsInput.iconKey],
				subQuestRewardNum(len(subQuestDependencies), rewardsIncreaseRate),
				additionalRewards=additionalRewards,
				x=-1,
				y=subQuestY
			)
			y += 1.5

		questFilename = questline[collectionQuestsInput.filenameKey]
		questIdsByFilename[questFilename] = questIds
		ftbQuest.writeQuestChapter(
			questFilename,
			ftbQuest.questFileContent(
				questline[collectionQuestsInput.iconKey],
				questline[collectionQuestsInput.filenameKey],
				questLineName,
				questsContent,
				orderIndex=questlineIdx,
				questGroupId=collectionQuestsInput.questlineGroupId
			)
		)
	return questIdsByFilename

def subQuestRewardNum(numTasks, increaseRate):
	return int(numTasks * (1 + increaseRate * numTasks))