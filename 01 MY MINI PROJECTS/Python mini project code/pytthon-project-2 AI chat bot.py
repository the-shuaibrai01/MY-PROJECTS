import datetime
import time

name = input("Welcome, enter your name: ")

presenthour = datetime.datetime.now().hour

if 5 <= presenthour <= 11:
    print("Good morning,", name)
elif 11 < presenthour <= 17:
    print("Good afternoon,", name)
elif 17 < presenthour <= 24:
    print("Good evening,", name)
else:
    print("Good night,", name)

print("\nWelcome to your AI Chatbot!")
print("You can ask me basic questions.\n")

# chatbot memory (dictionary based)
responses = {
    "hello": "Hi, welcome! How can I help you?",
    "how are you": "I am fine, thank you!",
    "who are you": "I am a smart AI chatbot.",
    "motivate me": "Keep going! Success needs hard work 😊",
    "happy": "Great to hear that!"
}

# function to get chatbot response
def getresponseofbot(userquestion):
    userquestion = userquestion.lower()
    for eachkey in responses:
        if eachkey in userquestion:
            return responses[eachkey]
    return "I am not able to answer that yet. I will learn it soon!"

# chat loop
while True:
    userinput = input("Ask your question: ")
    reply = getresponseofbot(userinput)
    print("Bot response:", reply)

    if "bye" in userinput.lower():
        print("Goodbye! Have a great day 😊")
        break