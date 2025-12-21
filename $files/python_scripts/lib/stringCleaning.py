import re

def cleanedNameStr(nameStr):
	newStr = f"{nameStr}"
	newStr = re.sub('[^a-zA-Z0-9 _]+','', newStr)
	newStr = newStr.strip()
	newStr = re.sub(' +', '_', newStr)
	newStr = newStr.lower()
	return newStr

def cleanQuotes(inStr):
	return inStr.replace("'", "\\'")

def to_camel_case(snake_str):
	return "".join(x.capitalize() for x in snake_str.lower().split("_"))

def to_lower_camel_case(snake_str):
	# We capitalize the first letter of each component except the first one
	# with the 'capitalize' method and join them together.
	camel_string = to_camel_case(snake_str)
	return snake_str[0].lower() + camel_string[1:]

def toLowerCamelCaseIfSnake(strInput):
	if "_" in strInput:
		return to_lower_camel_case(strInput)
	else:
		return strInput
