from botany_pots import botanyBots
from botany_pots import seedDefs
from botany_pots import keys
from botany_pots import simpleSeedDefs

def genBotanySeedSupport():
	for seedSupport in seedDefs.seedDefs:
		botanyBots.writeSeedJson(
			seedSupport[keys.seed],
			seedSupport[keys.crop],
			seedSupport[keys.block]
		)
	for simpleItem in simpleSeedDefs.simpleSeedDefs:
		botanyBots.writeSeedJson(
			simpleItem, simpleItem, growthTicks=2000
    )
