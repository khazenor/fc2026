import zipfile
import os
import re
from src import config

modConfigDir = "META-INF/mods.toml"

modIdRegexHeader = 'modId *= *[\'"]?'
mentatoryRegex = 'mandatory *= *'
modNameRegex = '[\w\d_]+'

modFilenameKey = 'modFilename'
dependenciesKey = 'dependencies'

def getDependenciesWithConfigs():
	return getDependencies(config.modFolder, config.ignoreDependencies)
def getDependencies(modFolder, ignoreDependencies):
	dependenciesInfo = {}
	for modZipName in os.listdir(modFolder):
		modZip = zipfile.ZipFile(os.path.join(modFolder, modZipName))
		if modConfigDir in modZip.namelist():
			with modZip.open(modConfigDir) as configFile:
				configFileContent = str(configFile.read())
				modName = findModName(configFileContent)
				dependencies = findAndFilterDependencies(configFileContent, ignoreDependencies)
				dependenciesInfo[modName] = {
					modFilenameKey: modZipName,
					dependenciesKey: dependencies
				}
	return dependenciesInfo

def findModName(configFileContent):
	search = re.search(f'{modIdRegexHeader}{modNameRegex}', configFileContent).group(0)
	modName = re.sub(modIdRegexHeader, '', search)
	return modName

def findAndFilterDependencies(configFileContent, ignoreDependencies):
	filteredDependencies = []
	dependencies = findDependencies(configFileContent)
	mandatories = findMandatories(configFileContent)
	pass

	for i in range(len(mandatories)):
		isMandatory = mandatories[i]
		if isMandatory:
			dependency = dependencies[i]
			if dependency not in ignoreDependencies:
				filteredDependencies.append(dependency)
	return filteredDependencies

def findDependencies(configFileContent):
	matches = re.findall(f'{modIdRegexHeader}{modNameRegex}', configFileContent)
	mods = []
	for i in range(1, len(matches)):
		match = matches[i]
		mods.append(re.sub(f'{modIdRegexHeader}', '', match))
	return mods

def findMandatories(configFileContent):
	matches = re.findall(f'{mentatoryRegex}{modNameRegex}', configFileContent)
	mandatories = []
	for match in matches:
		mandatories.append(re.sub(mentatoryRegex, '', match).lower() == 'true')
	return mandatories
