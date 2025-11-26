from distutils.dir_util import copy_tree
import os
import shutil
import urllib2

to_dir = os.path.dirname(os.path.realpath(__file__)) + "/public"
from_dir = "D:/Project/Bigplay/VinFast/VinFast"
# from_dir = "D:/bigplay/tlmn/VinFast/VinFast"

print "------------Git pull-------------\n"
os.system("git pull")

# shutil.copyfile(from_dir + "/backup/build/newtracking/BuildConfig.js",from_dir +  "/src/config/BuildConfig.js")
#shutil.copyfile(from_dir + "/web_backup_bigvip/SourceProject.js", from_dir + "/src/SourceProject.js")
#shutil.copyfile(from_dir + "/web_backup_bigvip/main.js", from_dir + "/src/main.js")

print "--------------Compile------------\n"
os.chdir(from_dir)
os.system("cocos compile -p web -m release")
os.chdir(os.path.dirname(os.path.realpath(__file__)))

print "--------Do copy files-------------\n"

shutil.copyfile(from_dir + "/publish/html5/game.min.js", to_dir + "/game.min.js")
shutil.copyfile(from_dir + "/publish/html5/project.json", to_dir + "/project.json")
#shutil.copyfile(from_dir + "/publish/html5/index.html", to_dir + "/index.html")

shutil.rmtree(to_dir + "/res")
shutil.copytree(from_dir + "/res", to_dir + "/res")

shutil.rmtree(to_dir + "/games")
shutil.copytree(from_dir + "/games", to_dir + "/games")

shutil.rmtree(to_dir + "/respack")
os.makedirs(to_dir + "/respack")

for d in os.listdir(from_dir + "/respack"):
    if d.startswith("."):
        continue
    os.makedirs(to_dir + "/respack/" + d)
    shutil.copyfile(from_dir + "/respack/" + d + "/resList.json", to_dir + "/respack/" + d + "/resList.json")
    copy_tree(from_dir + "/respack/" + d + "/res", to_dir + "/res")
	
#shutil.copyfile(from_dir + "/web_backup_bigvip/LoadingScreen.json", to_dir + "/res/LoadingScreen.json")
#shutil.copyfile(from_dir + "/web_backup_bigvip/icon_game.png", to_dir + "/res/BigImage/icon_game.png")
#shutil.copyfile(from_dir + "/web_backup_bigvip/loading_background.png", to_dir + "/res/BigImage/loading_background.png")

#shutil.rmtree(to_dir + "/frameworks/cocos2d-html5")
#shutil.copytree(from_dir + "/frameworks/cocos2d-html5", to_dir + "/frameworks/cocos2d-html5")

import codecs
from bs4 import BeautifulSoup

url = os.path.dirname(os.path.realpath(__file__)) + "/public/choigame.html"

f = codecs.open(url, 'r')
parsed_html = BeautifulSoup(f.read())
f.close()
allData = parsed_html.findAll("script", cocos="cocos")
for i in range(len(allData)):
    data_number = allData[i]["src"].split("=")
    allNumber = data_number[1].split(".")
    for j in range(len(allNumber)):
        allNumber[j] = int(allNumber[j])
    if allNumber[2] == 9:
        allNumber[2] = 0
        if allNumber[1] == 9:
            allNumber[1] = 0
            allNumber[0] = allNumber[0] + 1
        else:
            allNumber[1] = allNumber[1] + 1
    else:
        allNumber[2] = allNumber[2] + 1

    currentData = data_number[0]
    currentData += "="
    for j in range(len(allNumber)):
        currentData += str(allNumber[j])
        if j != len(allNumber)-1:
            currentData += "."
    allData[i]["src"] = currentData
    #print allData[i]["src"]

with open(url, "w") as outf:
    outf.write(str(parsed_html))
	
	
# todo auto change debugmode = false
import json

filename = os.path.dirname(os.path.realpath(__file__)) + "/public/project.json"
f = codecs.open(filename, 'r')
data = json.load(f)
data["debugMode"] = 0

with open(filename, 'w') as outfile:
    json.dump(data, outfile)	

	
print "Done\n"

