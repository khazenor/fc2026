from lib import commands

villagerItemsKey = 'villagerItemsKey'
villagerQtyKey = 'villagerQtyKey'
playerGiveKey = 'playerGiveKey'
playerQtyKey = 'playerQtyKey'
playerGiveKey2 = 'playerGiveKey2'
playerQtyKey2 = 'playerQtyKey2'

def summonNpcCommand(skinUUID, name, offers, entityType='easy_npc:humanoid'):
	with open('generate_npc_commands\\villagerTemplate.txt', 'r') as f:
		entityData = f.read()
		entityData = entityData.replace('<<<<customName>>>>', f'"{name}"')
		entityData = entityData.replace('<<<<offerString>>>>', offerString(offers))
		entityData = entityData.replace('<<<<skinUuid>>>>', skinUUID)
		entityData = entityData.replace('  ', '')
		entityData = entityData.replace('\n', '')
		entityData = entityData.replace(',', ', ')
	return commands.summonEntity(entityType, entityData=entityData)

def updateNpcCommand(name, offers):
	command = f'data modify entity {nameSelector(name)} Offers set value {offerString(offers)}\n'
	return command

def highlightNpcCommand(name, entityType='easy_npc:humanoid'):
	command = 'execute at @p'
	command += f' if entity {nameSelector(name, entityType)}'
	command += f' run effect give {nameSelector(name)}'
	command += ' minecraft:glowing 30 1 true'
	command += '\n'
	return command

def nameSelector(name, entityType='easy_npc:humanoid'):
	return f'@e[type={entityType}, name={name}, sort=nearest, limit=1]'

def offerString(offers):
	return f"{{Recipes: [{offerRecipeString(offers)}]}}"

# offer: {villagerItems, villagerQty, playerGive, playerQty, playerGive2, playerQty2}
def offerRecipeString(offers):
	offerRecipeStringOut = ""
	for i, offer in enumerate(offers):
		offerRecipeStringOut += '{'
		offerRecipeStringOut += f'buy: {{id: "{offer[playerGiveKey]}", count: {offer[playerQtyKey]}}}'
		if playerQtyKey2 in offer and offer[playerQtyKey2] > 0:
			offerRecipeStringOut += f', buyB: {{id: "{offer[playerGiveKey2]}", count: {offer[playerQtyKey2]}}}'

		offerRecipeStringOut += f', sell: {{id: "{offer[villagerItemsKey]}", count: {offer[villagerQtyKey]}}}'
		offerRecipeStringOut += ', maxUses: 2147483647, xp: 0, uses: 0, priceMultiplier: 0.0, specialPrice: 0'
		offerRecipeStringOut += ', demand: 0, rewardExp: 0'
		offerRecipeStringOut += '}'
		if i < len(offers) - 1:
			offerRecipeStringOut += ', '
	return offerRecipeStringOut
