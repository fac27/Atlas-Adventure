# Atlas Adventure

## Table of Contents

- [About the Repo](#about-the-repo)
- [Prototype](#prototype)
- [Spike](#spike)
- [Learning Outcomes](#learning-outcomes)
- [How to install](#how-to-install)

## About the Repo

### Why?

- This repo exists to hold the code for our game Atlas Adventure
- It provides users a chance to try out the app and view our steps to build it
- It also shows our progress towards meeting the learning outcomes for our HTTP Project

### What?

- Atlas Adventure is a country guessing game (similar to Geoguessr), which combines the [Unsplash API](https://unsplash.com/developers) and the [Rest Countries API](https://restcountries.com/)
- This repo stores the progress of our app

### How?

- Users can interact with our app via the github pages link, or by cloning the repo. See the [how to install](#how-to-install) section

## Prototype

- We wanted to focus on two things, **interactivity** and **reusability**
- Our wireframes focused on replicating the experience across devices, and was built with mobile-first in mind

### Wireframes

![Capture2](https://user-images.githubusercontent.com/117777716/217922244-1a7c38b6-e161-490b-a2f8-f513375f19fe.PNG)
![Capture3](https://user-images.githubusercontent.com/117777716/217956728-12532837-0e7d-4c21-ac26-25717ed67857.PNG)

## Spike

### What console methods are there other than .log()?
- `console.clear()` - clears contents of console, removing **any** previous console methods
- `console.assert()` - tests if a certain condition is true and if not, log an error message in the browser's JavaScript console
- `console.debug()` - outputs a message to the console with the log level `debug`. Very similar to console.log() but only used for debugging purposes. Allows easy filtering of log messages based on their level of importance
- `console.error()` - Outputs an error message. The console will often display these messages in a different color to distinguish them from other types of log messages

### What does the debugger statement do?
- Code will run until it hits the `debugger;` line - no code runs past the point this appears
  - We can test this with some simple functions
  
### Debugging HTML & CSS
- How can we find out *why* our page doesn’t look right?
  - Looking on developer tools and taking note of what element CSS styles have strikehtroughs, or aren't displaying correctly
  - Developer tools console - allowing us to write debug code within the browser and test it (either in JS or CSS format)
  - Other free debugging tools such as [Lambda Test](https://www.lambdatest.com/lt-debug)

### Asynchronous JavaScript
- Synchronous code is executed in a sequential order, meaning that each line of code must be completed before moving on to the next line
- Asynchronous code is executed out of order, meaning that the program does not have to wait for the current line of code to finish executing before moving on to the next line 
- Synchronous code is sometimes referred to as "blocking" because it blocks the program from moving forward until the current line of code has finished executing

## Learning Outcomes

### JavaScript 

- [x] Write code that executes asynchronously
- [x] Use callbacks to access values that aren’t available synchronously
- [x] Use promises to access values that aren’t available synchronously
- [x] Use the fetch method to make HTTP requests and receive responses
- [ ] Configure the options argument of the fetch method to make GET and POST requests
- [ ] Use the map array method to create a new array containing new values
- [ ] Use the filter array method to create a new array with certain values removed

### DOM 

- [x] Access DOM nodes using a variety of selectors
- [x] Add and remove DOM nodes to change the content on the page
- [x] Toggle the classes applied to DOM nodes to change their CSS properties

### Design 

- [x] Use consistent layout and spacing
- [x] Follow a spacing guideline to give our app a consistent feel

### Developer Toolkit 

- [x] Debug client side JS in our web browser
- [x] Use console.log() to help us debug our code

## How to Install

- Clone the repo using your terminal:

    `git clone https://github.com/fac27/Atlas-Adventure`

- Open and edit the repo files inside your code editor

- Any helpful contributions you wish to make are **greatly appreciated**. If you have suggestions for the project, please fork the repo and create a pull request, following these steps:

    1. Fork the project
    2. Create your feature branch (git checkout -b amazing-feature)
    3. Commit your changes (git commit -m 'Add my amazing feature')
    4. Push to the branch (git push origin amazing-feature)
    5. Open a pull request
