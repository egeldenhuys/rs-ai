Project Breakdown
===============
This document explores all the features that need to be developed for this project.

# Description
The aim of this project is to create ~~Artificial Intelligence~~ a series of scripts to interact with [RuneScape](http://www.runescape.com/community).
The AI will be run using [Simba](http://wizzup.org/simba/).

# Contents
- [AI Commander](#ai-commander)
- [Statistics](#statistics)
- [AI Modes](#ai-modes)
 * [Idle Mode](#idle-mode)
 * [Fill Vials](#fill-vials)
 * [Soften Clay](#soften-clay)
 * [Drop Party](#drop-party)
- [Library](#library)
 * [Core](#core)
 * [Functions](#functions)
 * [Interfaces](#interfaces)

# AI Commander

**Definitions**

| Term        | Definition                          |
| ----------- | ----------------------------------- |
| **AI Unit** | An account that is controlled by AI |
| **Server**  | The computer running the AI.        |


**Description:**
- This will be the first interface the user opens.
- From here all AI units will be controlled and managed.
- Able to start a new AI unit from here
- View the status of active AI units.
- Console for sending commands
- Display statistics for each AI.
- Display profits for each method
- It would be helpful if the methods were loaded dynamically.
For example: They are loaded from a directory and added to the Command Center using the parameters defined in the method file.
- Manage server
- Alert the user when an error occurs with one of then AI units.

# Statistics

**Description**:
- Variables tracked while the AI unit is active.
- Each method tracks its related variables.
- Each AI unit has its own statistics
- Statistics for each AI unit will then be collated to provide total statistics.
- Hosted using GitHub.

## Storage of statistics
- Statistics will be stored in a plain text file
- The statistics files will be stored in a GitHub repository.

## Hosting and displaying statistics
- Statistics will be hosted using github pages.
- Rendered using a java script graphing framework.
- Will be periodically pushed to the origin.

# AI Modes
AI Modes are built using the library and when active they will perform a specific task.

## Idle Mode
- This will be the default mode.
- Listens for most commands
- This mode will be used when the client wants to have full control over the AI unit.

## Fill Vials
- This mode will fill empty vials at the G.E

## Soften Clay
- This mode will make soft clay at the G.E

## Drop Party
- This mode drops items or coins
- Can drop in a straight line or in random locations around the initial point.

# Library
- The library contains all the code to create an AI unit

## Core

The core library contains the functionality required for the AI to function.

### Mouse
- Human mouse movement

**Functions**:
- Move mouse
- Click mouse
- Miss target
- Move off screen

### Keyboard
- Human typing

**Functions**:
- Enter text
- Make mistake and correct

## Functions
These are functions that perform a specific task. They use the interface functions to collect information and then processes it. Then again uses the interface functions to perform the output.

**Example:** Get the image from the minimap. Perform some crazy algorithm. Use the minimap to click a coordinate. The function would be the part that does the processing.

### Walking
Walking is required for for creating more complex AI modes.
#### Minimap walking
- This will be the most complex feature of the library.
- The AI Unit has to be able to walk using the minimap.
- Documentation and research for this function is yet to be created.

#### Screen walking
- This is a simple implementation of walking using the screen.
- The walk command will use this function.
- It simply clicks coordinates on the screen.

### OCR
- The AI has to be able to read text from the RuneScape screen.

### Follow player
- Given the name of the player to follow the AI has to find that player in the main screen and follow the player.

#### Implementation
- Right click in a spiral motion moving outward from the centre of the screen until the target name appears in the pop up text. Requires **OCR**.

## Interfaces
These classes will contain the functions that are specific to the interface.

All interfaces will have the following functions:
- **Init**: The function called to initialize all variables for the interface. These can include setting the position of buttons, finding the bounds of the interface.
- **Get bounds**: Get the position of the interface. All other coordinates inside the interface are relative to this.
- **Is Open**: Returns True if the interface was detected and is currently open.
- **Close**: Close the interface if it is open

**Interface names:**

![Interface-Names](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/Interface-Names.png)

### Lobby
**Login**

![Login](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/login.png)

**Player Info**

![Player Info](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/player_info.png)

**World Select min**

![World Select min](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/world_select_min.png)

**World Select max**

![World Select max](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/world_select_max.png)

**Friends**

![Friends](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/friends.png)

**Friends Chat**

![Friends Chat](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/friends_chat.png)

**Clan Chat**

![Clan Chat](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/clan_chat.png)

**Options**

![Options](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lobby/options.png)

### Backpack
![backpack](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/gametabs/backpack.png)

### Minimap
![minimap](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/minimap.png)

### Main Screen
### Bank
![bank](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/bank.png)

### Production
![water production](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/water_production.png)

### Lodestones
![lodestones](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/lodestones.png)

### Chatbox

### Trade
### Emote
### Skills
### Clan Chat
### Friends Chat
