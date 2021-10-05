#!/usr/bin/env python

import speech_recognition as sr
from tkinter import *

def convert():
    # initialize the recognizer
    r = sr.Recognizer()

    time = float(textentry.get())
    time = time * 60

    output.delete(0.0, END)

    with sr.Microphone() as source:
        # read the audio data from the default microphone
        audio_data = r.record(source, duration=int(time))
        print("Recognizing...")
        # convert speech to text
        text = r.recognize_google(audio_data)
        output.insert(END, text)

window = Tk()
window.title("Speech to Text Converter for my boo")
window.configure(background="black")
window.geometry("610x500")

Label(window, text="\n Hi bae <3 hope you get through w your work :) You got this\n\n", bg="black", fg="white").grid(row=0, column=0, sticky=W)
Label(window, text="Enter the length of time you want to record for (in minutes): \n", bg="black", fg="white").grid(row=1, column=0, sticky=W)
textentry = Entry(window, width=20, bg="white")
textentry.grid(row=2, column=0, sticky=W)
Button(window, text="Enter", width=5, command=convert).grid(row=3,column=0,sticky=W)
Label(window, text="\n\nOutput: \n", bg="black", fg="white").grid(row=4,column=0,sticky=W)
output = Text(window, width=75, height=50, wrap=WORD, background="white")
output.grid(row=5,column=0, columnspan=2, sticky=W)

window.mainloop()
