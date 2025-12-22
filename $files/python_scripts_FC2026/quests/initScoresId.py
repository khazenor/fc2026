from quests import const as qConst
from lib import ftbQuest
import const
import os

def replaceInitScoresId():
	questFile = os.path.join(const.ftbChapters(), 'welcome_to_farming_crossing.snbt')
	newQuestFileContent = ''
	keyLineSubstring = 'command: "/function fc_collection:init_all_scores"'
	replaceLine = '					id: "xxidxx"'
	with open(questFile, 'r') as f:
		oldQuestFileContent = f.read()
	lookForIdLine = False
	for line in oldQuestFileContent.split('\n'):
		if keyLineSubstring in line:
			lookForIdLine = True
		if lookForIdLine and 'id:' in line:
			newQuestFileContent += replaceLine.replace('xxidxx', ftbQuest.randomId(qConst.rewardSeedStarter))
			lookForIdLine = False
		else:
			newQuestFileContent += line
		newQuestFileContent += '\n'
	with open(questFile, 'w') as f:
		f.write(newQuestFileContent)


