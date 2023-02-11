# Atlas Adventure

## Table of Contents

- [About the Repo](#about-the-repo)
- [Prototype](#prototype)
- [Spike](#spike)
- [Stretch Goals](#stretch-goals)
- [How to install](#how-to-install)

## About the Repo

### Why?

### What?

### How?

## Prototype

- We wanted to focus on two things, **interactivity** and **reusability**.
- With this in mind, our idea for a Geoguessr type game came about.
- Our wireframes focused on replicating the experience across devices, and was built with mobile-first in mind.
- The structure for the app was simple: 
    1. A landing page to welcome the user
    2. A loading screen to indicate the game (and APIs) are loading
    3. A game screen, displaying country facts, images, and flags
    4. A success/fail screen, showing the users points tally and letting them continue to the next challenge

![Capture2](https://user-images.githubusercontent.com/117777716/217922244-1a7c38b6-e161-490b-a2f8-f513375f19fe.PNG)
![Capture3](https://user-images.githubusercontent.com/117777716/217956728-12532837-0e7d-4c21-ac26-25717ed67857.PNG)

## Spike

### What console methods are there other than .log()?
- `console.clear()` - clears contents of console, removing **any** previous console methods.
- `console.assert()` - tests if a certain condition is true and if not, log an error message in the browser's JavaScript console.
- `console.debug()` - outputs a message to the console with the log level `debug`. Very similar to console.log() but only used for debugging purposes. Allows easy filtering of log messages based on their level of importance.
- `console.error()` - Outputs an error message. The console will often display these messages in a different color to distinguish them from other types of log messages.

### What does the debugger statement do?
- Code will run until it hits the `debugger;` line - no code runs past the point this appears.
  - We can test this with some simple functions.
  
### Debugging HTML & CSS
- How can we find out *why* our page doesn’t look right?
  - Looking on developer tools and taking note of what element CSS styles have strikehtroughs, or aren't displaying correctly
  - Developer tools console - allowing us to write debug code within the browser and test it (either in JS or CSS format)
  - Other free debugging tools such as [Lambda Test](https://www.lambdatest.com/lt-debug)

### Asynchronous JavaScript
- Synchronous code is executed in a sequential order, meaning that each line of code must be completed before moving on to the next line
- Asynchronous code is executed out of order, meaning that the program does not have to wait for the current line of code to finish executing before moving on to the next line 
- Synchronous code is sometimes referred to as "blocking" because it blocks the program from moving forward until the current line of code has finished executing

## Stretch Goals

- Implement an extra section into the nav bar (perhaps a country information page fetching data from both APIs)

## How to Install

- Clone the repo using your terminal (the download is 3.7MB in size):

    `git clone https://github.com/fac27/Atlas-Adventure`

- Open and edit the repo files inside your code editor

- Any helpful contributions you wish to make are **greatly appreciated**. If you have suggestions for the project, please fork the repo and create a pull request, following these steps:

    1. Fork the project
    2. Create your feature branch (git checkout -b amazing-feature)
    3. Commit your changes (git commit -m 'Add my amazing feature')
    4. Push to the branch (git push origin amazing-feature)
    5. Open a pull request
