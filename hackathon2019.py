#import libraries and packages
import urllib2 #query a website
from bs4 import BeautifulSoup #handles web scraping
import re #handles regular expressions
from selenium import webdriver
driver = webdriver.Chrome()
print (driver.current_url)

#variables



#save URLs to a python list
def scrapeRef():
	websiteURL = "https://www.sciencemag.org/news/2019/07/starving-children-often-don-t-recover-even-when-fed-enough-restoring-their-gut-bacteria" #website URL
	page = urllib2.urlopen(websiteURL)
	soup = BeautifulSoup(page, "html.parser")
	references = []
	for link in soup.find_all('a'):
		#print 'iteration works'
		ref = str(link.get('href'))
		#print ref
		if(re.search("http",ref) != None):
			#print 'regex works!'
			references.append(ref)

	return references 