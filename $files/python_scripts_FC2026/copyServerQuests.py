import shutil

if __name__ == '__main__':
	shutil.copytree(
		'..\\servers\\Personal Play Server\\config\\ftbquests',
		'..\\..\\config\\ftbquests', dirs_exist_ok=True
	)
