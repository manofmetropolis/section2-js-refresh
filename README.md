# section2-js-refresh
Section 2: Udemy JS Refresher Course
- If it's not working, make sure you saved your file.

- Javascript can be run in the browser, or on any computer outside of the computer. It executes directly on the machine. And on mobile devices.
- Javascript is somewhat foundational for using React.
- She's versatile. I love that for her.

# The basics
- Use the script tags to write it out; Use script import to pull it in from a file.
- We prefer the import, because the manual tag can get unruly. It's good to keep 'em separated.

# JS + React
- Script is injected to React files via the build. So you don't use the script tags. You'll see what that means.
- The code you write is not the code that gets executed inthe browser. It's TRANSFORMED. (ooooh.)
    - The tools used to do so  are in the dependencies.
- Raw unprocessed React code won't execute because it uses jsx, which is HTML code written into JS files. That is not a standard feature, so the code must be transformed.
- The could would not be optimized (a.k.a. minified)
- You need node to run React projects.

# Exports
- Export default is often used when a whole function is created and needs to be used elsewhere. Most files are single components, so the entire thing can be exported via default.