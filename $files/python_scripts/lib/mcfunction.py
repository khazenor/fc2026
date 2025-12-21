import os
import shutil
from src import const
from lib import stringCleaning

def writeFunction(parent, name, content):
	folderDir = functionFolder(parent)
	if not os.path.exists(folderDir):
		os.makedirs(folderDir)
	with open(os.path.join(folderDir, f"{stringCleaning.cleanedNameStr(name)}.mcfunction"), 'w', encoding='utf-8') as f:
		f.write(content)

def clearFunctionFiles(parent):
	folderDir = functionFolder(parent)
	if os.path.exists(folderDir):
		shutil.rmtree(os.path.join(folderDir))

def functionFolder(parent):
	return os.path.join(const.data(), parent, 'function')

def functionFileUrl(parent, functionName):
	return os.path.join(functionFolder(parent), functionName+".mcfunction")
