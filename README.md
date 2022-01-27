Project: Etch-a-Sketch - from The Odin Project Curriculum (https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project) - the focus of the exercise is on DOM manipulation 

[![preview.gif](https://i.postimg.cc/TPrvWwvD/preview.gif)](https://postimg.cc/Jy42fRnr)

*this version is not mobile friendly

The exercise asks for a browser version of "something between a sketchpad and an Etch-A-Sketch" (sort of a very very basic Paint app). 

The requirement is to create a 16 x 16 grid of square divs, which should be made using Javascript. 
The squares should change color when the mouse passes over them, leaving a pixelated trail. The exercise asks for a random RGB value (which became ‘paint with rainbow’ in my version) at mouse hover and also to try to increase with 10% the black, so that after 10 passes the square becomes completely black (which became ‘paint with grayScale’ in my version).
There should also be added a button that will clear the current grid and ask through a popup for the number of squares (max.100) per side for the new grid. The new grid should be generated in the same total space as the default 16 x 16 grid.
The exercise has a sentence that stuck with me: This project should not be easy for you.  And it wasn’t😊 

Because, in the beginning, I haven’t read properly the task of the exercise, I made my first attempt starting with the generated canvas (creating the function with a prompt alert for the number of squares) and creating the other functions for the default color and random RGB (because they were easier to make). In a few hours I had 80% of my misinterpretation of the exercise done. What I’ve learned in those hours was that the for loop is the slowest of them all (barely got to 64 x 64 grid with it, not to mention 100 x 100), so I decided to use the while loop instead.
Re-reading the exercise it hit me that a default 16x16 should be initially on the page. And here the project started to get complicated. Creating the default grid (or canvas) was not the problem. It was after clicking the reset button, in order to generate the new grid (or canvas) according to the number specified in the popup. The new grid was also generating as mentioned, also in the same amount of space, but the problem was that the buttons were not working and the squares remained the same while hovering them. 

It took me some time (a few days) to understand that the dynamic elements (square) that made the new grid, came with no event listeners. This was the biggest challenge of the project. And after that to wrap my head around how to re-write the code to work. 
As a beginner, like super beginner, I wished I was helped in the requirements somehow with more hints regarding the event listeners and the dynamic elements. I googled search a lot to identify my issue in the code and I also went a lot through others code regarding this exercise. I’m writing this, because I couldn’t find a code written for the level I’m at (the Odin curriculum lets Objects at the end, so I still haven’t learned how to use object methods in the code). During this project I also found out about the importance of removing events(which, again, wasn't mentioned in the DOM manipulation lesson).

Another frustrating task that gave me some headaches was to increase color opacity with 10% black on hover. 

I’ve worked for almost 2 weeks at this project, a project which I thought I already had it 80 % done in the first day.  
