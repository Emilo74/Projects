#!/usr/bin/env python

import speech_recognition as sr


# initialize the recognizer
r = sr.Recognizer()

time = float(input("How long would you like to listen for? (in minutes)? "))
time = time * 60

with sr.Microphone() as source:
    # read the audio data from the default microphone
    audio_data = r.record(source, duration=int(time))
    print("Recognizing...")
    # convert speech to text
    text = r.recognize_google(audio_data)
    print(text)
