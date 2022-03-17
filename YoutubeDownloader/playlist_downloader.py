# Importing libraries
import bs4 as bs
import sys
import os
from PyQt5.QtWebEngineWidgets import QWebEnginePage
from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import QUrl
import pytube  # library for downloading youtube videos // change line 152 in parser.py to func_regex = re.compile(r"function\([^)]?\)")
 
class Page(QWebEnginePage):
    def __init__(self, url):
        self.app = QApplication(sys.argv)
        QWebEnginePage.__init__(self)
        self.html = ''
        self.loadFinished.connect(self._on_load_finished)
        self.load(QUrl(url))
        self.app.exec_()
 
    def _on_load_finished(self):
        self.html = self.toHtml(self.Callable)
        print('Load finished')
 
    def Callable(self, html_str):
        self.html = html_str
        self.app.quit()
 
 
links = []
 
 
def exact_link(link):
    vid_id = link.split('=')
    str = ""
    for i in vid_id[0:2]:
        str += i + "="
 
    str_new = str[0:len(str) - 1]
    index = str_new.find("&")
 
    new_link = "https://www.youtube.com" + str_new[0:index]
    return new_link
 
 
url = "https://www.youtube.com/playlist?list=PLufAyPFE97jHiatMrqPAu3ECMOysIeft6"

# Scraping and extracting the video links from the given playlist url
page = Page(url)
count = 0
 
soup = bs.BeautifulSoup(page.html, 'html.parser')
for link in soup.find_all('a', id='thumbnail'):
 
    # not using first link because it is playlist link not particular video link
    if count == 0:
        count += 1
        continue
    else:
        try:
            #Prevents error for links with no href.
            vid_src = link['href']
            # keeping the format of link to be given to pytube otherwise in some cases
            new_link = exact_link(vid_src)
 
            # appending the link to the links array
            links.append(new_link)
        except Exception as exp:
            pass # No function necessary for invalid <a> tags.
 
video = str(input("Do you want to download the video as well? (y/n)"))

# download each video from the link in the links array
if video == "y" or video == "Y" or video == "yes" or video == "Yes":
    for link in links:
        yt = pytube.YouTube(link)
    
        # Downloaded video will be the best quality video
        stream = yt.streams.filter(progressive=True,
                                   file_extension='mp4').order_by(
            'resolution').desc().first()

        try:
            # result of success
            stream.download()
            print(yt.title + " has been successfully downloaded.")
        except:
            print('Some error in downloading: ', yt.title)

else:
    for link in links:
        yt = pytube.YouTube(link)

        # Downloaded video will be the best quality video
        stream = yt.streams.filter(only_audio=True).first()

        try:
            out_file = stream.download()
            # save the file
            base, ext = os.path.splitext(out_file)
            new_file = base + '.mp3'
            os.rename(out_file, new_file)
            # result of success
            print(yt.title + " has been successfully downloaded.")
        except:
            print('Some error in downloading: ', yt.title)
