This assingment we were tasked to create a randomised password generator.

The user is asked a few questions upon clicking on the generate password button specifying password length and characters used (lower/upper case, numbers and special characters).
The window confirms the users decisions.

Finally the script outputs a randomised password onto the screen.

Script isnt entirely perfect. For every specific character selected by the user, I appended them to a single string, then randomly selected characters from that string.
The issue with this is that it does not select specific characters and can therefore randomly not select characters the user has requested. I didnt really know how to work around this so I tried to make the number of characters in each string equal (e.g. had doubles of 0-9 so there were 20 total characters, which were closer to the 26 in the alphabet and had around 20 special characters too) so to give a better chance of characters being selected.

![Screenshot of Website](./images/screenshotofpassword1.png)
![Screenshot of Password](./images/screenshotofpassword2.png)

Website link: https://moeac.github.io/MoeCPasswordGenerator/