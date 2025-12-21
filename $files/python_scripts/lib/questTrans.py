import os
from src import const

snbtCache = {}

def hasTrans(transKey, minecraftTransCode=const.engLangCode):
	return transKey in dict(loadSnbt(minecraftTransCode)).keys()

def addTrans(transKey, transText, minecraftTransCode=const.engLangCode):
	snbt = loadSnbt(minecraftTransCode)
	snbt[transKey] = transText
	dumpSnbt(snbt, minecraftTransCode)

def loadSnbt(minecraftTransCode=const.engLangCode):
	if minecraftTransCode in snbtCache:
		return snbtCache[minecraftTransCode]
	else:
		return loadSnbtNoCache(minecraftTransCode)

def loadSnbtNoCache(minecraftTransCode=const.engLangCode):
	fileLoc = const.questTransFileDir(minecraftTransCode)
	dictTrans = {}
	if os.path.exists(fileLoc):
		lines = open(fileLoc, "r", encoding='utf-8').read().split('\n')
		curIdx = 0
		while curIdx < len(lines):
			curIdx = parse(curIdx, lines, dictTrans)
	return dictTrans

def parse(curIdx, lines, dictTrans):
	line = lines[curIdx]
	if hasKey(line):
		key = lineKey(line)
		if (
			hasArrayStart(line) and
			hasArrayEnd(line)
		):
			dictTrans[key] = [lineText(line)]
		elif hasText(line):
			dictTrans[key] = lineText(line)
		elif hasArrayStart(line):
			curIdx += 1
			arrLine = lines[curIdx]
			textArray = []
			while not hasArrayEnd(arrLine):
				textArray.append(lineText(arrLine))
				curIdx += 1
				arrLine = lines[curIdx]
			dictTrans[key] = textArray
	return curIdx + 1

def hasKey(line):
	return ":" in line

def lineKey(line):
	return line.split(":")[0].strip()

def hasArrayStart(line):
	return "[" in line

def hasArrayEnd(line):
	return "]" in line

def hasText(line):
	return '"' in line

def lineText(line):
	tempStr = '!@#$'
	escapeStr = '\\"'
	newLine = line.replace(escapeStr, tempStr)
	value = newLine.split('"')[1]
	value = value.replace(tempStr, escapeStr)
	return value

def dumpSnbt(transDict, minecraftTransCode=const.engLangCode):
	with open(const.questTransFileDir(minecraftTransCode), "w", encoding='utf-8') as f:
		f.write('{\n')
		for key in transDict:
			component = transDict[key]
			if type(component) == str:
				f.write(f'\t{key}: "{component}"\n')
			elif type(component) == list:
				f.write(f'\t{key}: [')
				if len(component) > 1:
					f.write('\n')
				for element in component:
					if len(component) > 1:
						f.write('\t\t')
					f.write(f'"{element}"')
					if len(component) > 1:
						f.write('\n')
				if len(component) > 1:
					f.write('\t')
				f.write(f']\n')
		f.write('}\n')
