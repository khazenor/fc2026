from quests import collectionQuestsInput as cqin
from lib import kubejs
from quests import questCollectionReader

def genTags():
	pass
	kubejs.generateSimpleTags(
		questCollectionReader.collectionQuestLineItems('flora_compendium'),
		'fc:flora_quest_items',
		'fauna_quest_tag'
	)
	kubejs.generateSimpleTags(
		questCollectionReader.collectionQuestLineItems('mineral_museum'),
		'fc:minerals',
		'mineral_quest_tag'
	)
	genEntityTags()

def genEntityTags():
	entities = []
	for questline in cqin.questlines:
		if questline[cqin.filenameKey] == 'animal_watching':
			for questionGroup in questline[cqin.questGroupsKey]:
				for task in questionGroup[cqin.tasksKey]:
					entities.append(task[cqin.observeKey])
	entities.sort()
	kubejs.writeServerFile(
		kubejs.tagsContent(
			kubejs.eventAddItemToList(
				'kubejs:all_animals', entities
			),
			tagType='entity_type'
		),
		'entity_tags'
	)
