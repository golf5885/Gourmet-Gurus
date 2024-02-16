import requests
from datetime import datetime

def getMenu():
    baseurl = "https://api.ucsb.edu/dining/menu/v1/" #base url for menu calls

    timeInfo = datetime.now() # gain time info
    print(timeInfo)

    date = str(timeInfo).split(" ")[0]
    hour = timeInfo.hour
    min = timeInfo.minute

    url = baseurl + str(date) + '/' # add in the date    
    diningHall = "De-La-Guerra" # set dining hall

    url += diningHall + '/' # add the dining hall


    # find time of day and add accordingly
    if(hour > 10 and hour < 15):
        url += "Lunch"
    elif (hour >= 15 and hour <= 21):
        url += "Dinner"
    else :
        url += "Breakfast"

    print(url)

    headers = {'ucsb-api-key' : 'tSF72NnUFUe12xjLDWP6nAzBKa1pAqbP'} # header to pass in api key

    r = requests.get(url, headers = headers) # getting request
    ret = r.text

    r.close()
    return ret # print menu


print(getMenu())