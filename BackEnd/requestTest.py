import requests
from datetime import datetime
import json

def getMenu():
    baseurl = "https://api.ucsb.edu/dining/menu/v1/"  # base url for menu calls

    timeInfo = datetime.now()  # gain time info
    print(timeInfo)

    date = str(timeInfo).split(" ")[0]
    hour = timeInfo.hour

    url = baseurl + str(date) + '/'  # add in the date
    diningHall = "De-La-Guerra"  # set dining hall

    url += diningHall + '/'  # add the dining hall

    # find time of day and add accordingly
    if 10 < hour < 15:
        url += "Lunch"
    elif 15 <= hour <= 21:
        url += "Dinner"
    else:
        url += "Breakfast"

    print(url)

    headers = {'ucsb-api-key': 'tSF72NnUFUe12xjLDWP6nAzBKa1pAqbP'}  # header to pass in api key

    r = requests.get(url, headers=headers)  # getting request
    ret = r.json()
    r.close()

    # Save the menu data to a JSON file
    with open('menu.json', 'w') as f:
        json.dump(ret, f)

def returnMenuNames():
    baseurl = "https://api.ucsb.edu/dining/menu/v1/"  # base url for menu calls

    timeInfo = datetime.now()  # gain time info
    print(timeInfo)

    date = str(timeInfo).split(" ")[0]
    hour = timeInfo.hour

    url = baseurl + str(date) + '/'  # add in the date
    diningHall = "De-La-Guerra"  # set dining hall

    url += diningHall + '/'  # add the dining hall

    # find time of day and add accordingly
    if 10 < hour < 15:
        url += "Lunch"
    elif 15 <= hour <= 21:
        url += "Dinner"
    else:
        url += "Breakfast"

    print(url)

    headers = {'ucsb-api-key': 'tSF72NnUFUe12xjLDWP6nAzBKa1pAqbP'}  # header to pass in api key

    r = requests.get(url, headers=headers)  # getting request
    ret = []

    for elem in r.json():
        ret.append(elem["name"])
    return ret

print(returnMenuNames())
getMenu()