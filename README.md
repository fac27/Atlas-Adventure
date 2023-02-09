# Atlas Adventure

## Table of Contents

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
