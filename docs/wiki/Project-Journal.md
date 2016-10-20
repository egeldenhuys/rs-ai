***
**08/09/2014**
- Started wrapping up the project
- Fixed wrong minimap coords bug
- Wrapped up the project at 
  - 2:34 PM, Monday, 08 September 2014 (GMT+2)
  - 10:35 PM, Monday, 08 September 2014 (GMT+10)
  - Submitting Links.

***
**26/08/2014**
- See commits...

***
**23/08/2014**
 - More work on sockets

***
**22/08/2014**
- Merged branches into 'walk_to_shop'
- Found 'Exit' and 'Break' to be bad methods. DON'T USE THEM. Makes code difficult to maintain
and debug

The following statements are all different:
- `while (time + timeOut) > GetSystemTime() AND result = False do`
- `while (time + timeOut > GetSystemTime()) AND (result = False) do`
- `while time + timeOut > GetSystemTime() AND result = False do`

The statement that produces the desired, and expected  result is
```Pascal
while (time + timeOut > GetSystemTime()) AND (result = False) do
```
otherwise the wrong things are being compared

- Started work on Client and Server
***
**21/08/2014**
- Improved the Lobby functions
 * Retry login after the first failed attempt
 * Fix lobby not being detected when mouse is over the login button
- Now working on the find item function so it can be used for dynamic interfaces.
- The needs of the client has been changed
 * The aim of the solution now is to acquire 10 million feathers simply for aesthetic purposes.
 * The client has no intent of selling the feathers and therefore will not disadvantage anyone.
 * The client will not use the feathers in any way, such as fishing.
 * The client will not show the feathers to any other people.
 * I (the developer) will not be responsible for the way the client uses the feathers
 * There will be no disadvantages towards other players.
 * The client will lose 60 million coins in the process and the feathers will not be sold.
 * Outcome: No profit. No effect on the economy. Lose 60,000,000 gp.
 * Statistics will be made public
- Worked on the item finding function. Forgot about TSOP. Need to merge the new work into it.
- Created a way to find the compass
    
***
**20/08/2014**
- Finished the keyboard functions. The keys pressed now correspond to the string sent to the function.
- SMART has now been integrated into 'master'
- Working on updating the Lobby functions as the interface has changed.
- Lobby has been updated and new functions added. See pull request #179.
- Working on minimap functions now

***
**19/08/2014**
- Making major changes to the documentation due to the new needs of the client.
 * Client can no longer sustain 30 accounts on one internet connection, has to be reduced to 2 accounts. 
This makes the current documented AI methods unusable.
 * Time is now a major factor as I am very behind schedule and some compromises will have to be made.
 This project was intended to be done over a longer period time.
- Again problems with character values.
- Figured it out: To send "a" you press the key value for "A".
To Send "A" you press the key value for Shift and "A".
The Ord() function returns the key value for "a" when you give it "a" and this should not be sent!
- So many damn hours have been wasted by the fact that sending the lower case ASCII value does not work!

***
**24/07/2014**
- Made more progress with sending text using SMART.
- Problem seems to be with the character values.

***
**23/07/2014**
- Started integrating SMART.
- Integration seems to have worked but SMART requires OpenGL mode which causes RuneScape
to crash on my computer. Updated driver, no fix.
- Committed Lobby improvements
- Found plugin for using DirectX instead of OpenGL
 * Having problem sending text to the game.

**22/07/2014**
- Tested the lobby functions. Everything works fine. Made some timing adjustments.
- Figured out how to pass a script to Simba and execute it through a command line.

***
**20/06/2014**
- Removed branches that had no work in them. All feature branches were created at once however they were not started. I think it would be better to branch when work is ready to be done.

***
**12/06/2014**
- Lately there has not been any spare time to work on this project.

***
**7/06/2014**
- Gained access to a personal computer again. Thank you @ndingle.
- Found the RuneScape downloadable client better to use on low end computers than the web app.
- Created a function for finding items. The method is documented in the wiki.
- Fixed the timezone on the computer used for committing. 

***
**6/06/2014**
- Starting development again by borrowing a friend's computer.
- Started working on item finding.
- Researched using Types and Arrays.

***
**5/06/2014**
- Major disruptions. Unable to access computer used for development.
- Should gain access again in the next couple of days.

***
**2/06/2014**
- Tested the speed of GetColor. Results are in the research branch.
This now makes OCR feasible.
- Trying out a new strategy with the branch management. Feature Branch flow.
- A bit behind on the Gantt Chart. Trying to make up for it by doing regular code sprints.

***
**1/06/2014**
- Fixed the include dependency problems
- Cleaned the master branch
- Purged old branches
- Experimented with branching and merging to avoid future errors

***
**29/05/2014**
- Made a mistake by committing a private file. In the future these files will be stored outside
of the repository or in an ignored directory.
- Started cleaning the master branch and fixing includes. 

***
**28/05/2014**
- Tested the lobby detection function. Works for all tabs.
- Unit tests can not be implemented at the moment as the method is not consistent, that is, The test click tabs in internet explorer. Need to find another way of reliably implementing this. One way could be to load an image into memory and test points from there. This way you can simply give it the latest screenshots for the RuneScape interface and it would show you what functions are not working.
- Created a prototype using the Type constructor. Will add more detail of how this will be used later.

***
**27/05/2014**
- Finished function for detecting the lobby. Coordinates might need to be changed to work on
other lobby tabs.
- Created a type for storing point coordinates and colour.

***
**26/05/2014**
- Added a description for the labels used. See [Issue Labels](Issue-Labels)
- Finished keyboard functions
- Finished EnterDetails() function for lobby
- Organised the wiki - removed outdated information from the problem definition. Added latest features to master README.
- Add the author of the JavaScript key events test script.
- Redesigned the label system
- Added documentation to the keyboard functions.
- Learned how to make a contents page. **Note:** the link has to be lower case!Example `- [My Heading](#my-heading)`

***
**25/05/2014**
- Added descriptions and keys to the Gantt Chart.
- Made changes to the time period in which the user documentation is done. It will now be done while the final solution is being tested.
- Made a list of existing RS bots.
- Implemented rough keyboard typing function
- Added tool for viewing time between key events.

***
**24/05/2014**
- Added more information about statistics in the project breakdown document.
- Doing my best to meet the deadline for creating the Gantt chart and defining the problem.
- Started taking screenshot of all the interfaces. They will be included in the project breakdown.
- For each feature in the project breakdown I will create a implementation section. Here I will discuss how I will implement it and create documentation and planning for it. The page may latter be broken into separate pages to make it easier to find a specific feature and its documentation.
- Finished the Gantt chart. As I start the planning stage of a feature the Gantt chart may be updated to reflect the new needs of the feature.
- Added screenshots to the wiki. These help clarify what each interface is named and how it looks.
- I will create a separate page for the interfaces, and how they will be identified.
- Documentation from previous projects have been moved to Google Docs.

***
**23/05/2014**
- Moved Gantt chart to a spread sheet. Will create an image and display it
- Finished the first iteration of the Gantt Chart. I find the current layout to not give a good
overview of what has to be done to complete each task. Example: To finish the Chatbox interface, OCR needs to be developed first, which involves research, system documentation such as algorithm, IPO tables and so on. Each task requires its own unique documentation.
- Tomorrow I will break down the Gantt chart even further so it will actually be more helpful.
- Created the document 'Project Breakdown'. This discusses all the required features in more depth than the Problem Definition. I might later break these up into their own pages once I start adding images and algorithms for documentation.
- Changed the structure of the home page of the wiki to be more descriptive and easier to find documents based on their purpose.

***
**22/05/2014**
- Added more tasks to the Gantt Chart. After all tasks are added time needs to be allocated to each.

***
**21/05/2014**
- Added more information to the Gantt Chart. Finding Google Drawings very slow to use for
a Gantt Chart, however this is the only way of effectively displayed it in the wiki.

***
**20/05/2014**
- More detail to problem definition
- Create Gantt chart
- Had an interview with the client
- Discussed the following new features:
 * AI Controller - The main interface for interacting with the AI.
  - Contains the console, displays the Active AI, GUI for changing preferences.

***
**19/05/2014**
- Started to make the problem define more detailed. After this is done
the Gantt chart will be created.

***
**16/05/2014**
Created a basic draft of the modular structure. It took a while to work out 
which information should be included.

***
**15/05/2014**
- Started creating the keyboard functions
- Producing unexpected results. Getting the character code for a, 
then typing that code yields a different character

***
**14/05/2014**
- Identified a number of issues with the mouse. See Issue #30
- Fix mouse accuracy.
- Finished reviewing the issues
- Finished writing up the pull request for the mouse, waiting for client to review
and merge it.
- The next thing to work on is the lobby and entering text.

***
**13/05/2014** 
- Finished the mouse movement function. Later it might be improved.

***
**12/05/2014**
- Moved the To Do List to the Issues page. This will allow me to easily edit, review and add more issues.
- Introduced my client to GitHub and provided him with an account. In the following days I will be teaching my client how to use GitHub and provide feedback through it.

***
**11/05/2014**
- Finished the straight mouse movement, however it has no randomisation.
- Created another version of EquationMouse that allows for hand mouse movements.
- The next step in mouse functions is to add randomisation
- Updated the documentation and organised it more

**8/05/2014**
- Going to create a canvas to paint the mouse coordinates detected using JavaScript.
This will allow me to compare the movements of a human and the AI.
- Having a look at the SRL mouse functions and how they look when painted on the canvas. 

***
**7/05/2014**
- Created a transcript of the interview.
- Worked on making the mouse move diagonally to the target, was not very successful

***
**6/05/2014**
- Created prototype for simple mouse movement. 
Currently it is still overly mechanical and not human-like. 
The next step with the prototyping is to move directly to the point, both axis at the same time. 
In a straight line.
- Started researching the different methods that may be used to detect bots.
- Planning to interview the client today.
- Client has been interviews. Much more information gathered.
From the information gathered certain things have been simplified.
The need for identifying complex objects such as trees and ores are no longer needed.
I will be updating the problem definition. A transcript of the interview will be created
to make things easier to review.

***
**5/05/2014**
- Recreated the problem definition to more more detailed.
- Finished the document for justifying the development approach and how it will be used in this project.
- I feel like it is now more clear on what has to be done due to the more detailed problem definition and development approach.
- I now need to present this new documentation to the client and get feedback:
 * Do the new needs reflect what the client has in mind? 
 * Are there new features they want to be included? 
 * How does the client intend to use the final product?
- Spent way too much time putting the marking criteria on the wiki. But hopefully it would be easier to use it for guidance now.

***
**3/05/2014**
- Scrapped previous work on the Login screen.
- Created a a function to identify the login screen
- Created a function to show the bounds of the user name field
- Need to create a function for human mouse movement. 
At the moment it jumps instantly to the next location
- Having trouble defining the needs of the project.
- Made more progress. Learned how to use Records and assign values to them.

```pascal
Type
  myRecord = Record
    A : integer;
    B : Integer;
  end;

var
  thing : myRecord = [45, 24];

WriteLn(thing.A); // Would return 45
WriteLn(thing.B); // Would return 24

```

***
**2/05/2014**
- I will be using [Simba](http://wizzup.org/simba/) to write and run my code.
- Getting started is harder than I expected. I am not very familiar with Pascal.
- Started working on detecting the login screen. Did not get very far.

***
**1/05/2014**
- Started writing down which features the AI requires. 
It needs to behave as humanly as much as possible. 
From watching it work it should look like a human playing. 
This will decrease efficiency however. 
The library will consist of functions used by the AI, such as identifying objects, 
interfaces and other functions related to getting input and giving output.

***
**30/04/2014**
- Officially decided on a feasible project; RuneScape Artificial Intelligence.
- Next step is to create a description of the project and define the needs and features.