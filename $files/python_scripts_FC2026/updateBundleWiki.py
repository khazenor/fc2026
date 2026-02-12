from modpack_analysis import modpackAnalysis
import zipfile

if __name__ == "__main__":

	mainFolder = 'data'
	lookUpNames = ['lang', 'en_us.json']

	lookedUpPaths = modpackAnalysis.getPaths('assets')
	for lookedUpPath in lookedUpPaths:
		zipfile = zipfile.ZipFile(lookedUpPath)
		pass
