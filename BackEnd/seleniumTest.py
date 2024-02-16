from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome() # opens chrome

driver.get("https://nutrition.info.dining.ucsb.edu/NetNutrition/1") #will go to this website

driver.find_element(By.LINK_TEXT, 'De La Guerra Dining Commons').click()

driver.find_element(By.LINK_TEXT, 'De La Guerra\'s Daily Menu').click()

driver.find_element(By.LINK_TEXT, 'Dinner').click()



input()

driver.close()