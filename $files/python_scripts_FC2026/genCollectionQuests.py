from quests import questFunctions
from quests import collectionQuests
from quests import achievementQuestGen
from quests import collectionTooltips
from quests import collectionTags
from quests import initScoresId

if __name__ == "__main__":
	initScoresId.replaceInitScoresId()
	questFunctions.genQuestFunctions()
	questIdsByFilename = collectionQuests.genQuestLines()
	achievementQuestGen.genMileageRewardProgramQuests(questIdsByFilename)
	collectionTooltips.genCollectionTooltips()
	collectionTags.genTags()
