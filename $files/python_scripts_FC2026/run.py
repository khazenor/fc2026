from generate_npc_commands import customVillagers
from botany_pots import botanyPotSeedSupport
from flora_dupe import floraDuplication
if __name__ == "__main__":
  customVillagers.deployFunctions()
  botanyPotSeedSupport.genBotanySeedSupport()
  floraDuplication.generateDuplicationRecipes()
