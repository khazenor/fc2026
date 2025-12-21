import uuid
import json
def mergeDicts(dict1, dict2):
	dict1.update(dict2)
	return dict1

def uuidStr():
	return str(uuid.uuid1()).replace('-', '')

def exportJson(content, fileDir):
	json.dump(content, open(fileDir, "w") , indent=2)

