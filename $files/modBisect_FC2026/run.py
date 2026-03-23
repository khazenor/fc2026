from src import modBisect
from src import config
import os
import shutil

backupStr = '_backup'

if __name__ == "__main__":
	print('backing up config folders...')
	for backupFolder in config.backupFolders:
		if not os.path.exists(backupFolder + backupStr):
			os.rename(backupFolder, backupFolder+backupStr)

	modBisect.modBisect(['oculusparticlefix', 'oculus'])

	print('restore config folders...')
	for backupFolder in config.backupFolders:
		if os.path.exists(backupFolder+backupStr):
			if os.path.exists(backupFolder):
				shutil.rmtree(backupFolder)
			os.rename(backupFolder+backupStr, backupFolder)
	input("press enter to continue... ")