Runescape Artificial Intelligence
=====
The final solution is planned to have the following features.

## AI Command Center

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

## Statistics

**Description**:
- Variables tracked while the AI unit is active.
- Each method tracks its related variables.
- Each AI unit has its own statistics
- Statistics for each AI unit will then be collated to provide total statistics.
- Hosted using GitHub.

### Storage of statistics
- Statistics will be stored in a plain text file
- The statistics files will be stored in a GitHub repository.

### Hosting and displaying statistics
- Statistics will be hosted using github pages.
- Rendered using a java script graphing framework.
- Will be periodically pushed to the origin.

## AI Modes
AI Modes are built using the library and when active they will perform a specific task.

### Idle Mode
- This will be the default mode.
- Listens for most commands
- This mode will be used when the client wants to have full control over the AI unit.

### Fill Vials
- This mode will fill empty vials at the G.E

### Soften Clay
- This mode will make soft clay at the G.E

### Drop Party
- This mode drops items or coins
- Can drop in a straight line or in random locations around the initial point.

## Library
- The library contains all the code to create an AI unit

### Core

The core library contains the functionality required for the AI to function.

#### Mouse
- Human mouse movement

**Functions**:
- Move mouse
- Click mouse
- Miss target
- Move off screen

#### Keyboard
- Human typing

**Functions**:
- Enter text
- Make mistake and correct

### Functions
These are functions that perform a specific task. They use the interface functions to collect information and then processes it. Then again uses the interface functions to perform the output.

**Example:** Get the image from the minimap. Perform some crazy algorithm. Use the minimap to click a coordinate. The function would be the part that does the processing.

#### Walking
Walking is required for for creating more complex AI modes.
##### Minimap walking
- This will be the most complex feature of the library.
- The AI Unit has to be able to walk using the minimap.
- Documentation and research for this function is yet to be created.

##### Screen walking
- This is a simple implementation of walking using the screen.
- The walk command will use this function.
- It simply clicks coordinates on the screen.

#### OCR
- The AI has to be able to read text from the RuneScape screen.

#### Follow player
- Given the name of the player to follow the AI has to find that player in the main screen and follow the player.
