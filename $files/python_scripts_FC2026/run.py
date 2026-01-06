from generate_npc_commands import customVillagers
from botany_pots import botanyPotSeedSupport
from market_gen import marketShopGen
if __name__ == "__main__":
  customVillagers.deployFunctions()
  botanyPotSeedSupport.genBotanySeedSupport()
  marketShopGen.generateMarketShops()
