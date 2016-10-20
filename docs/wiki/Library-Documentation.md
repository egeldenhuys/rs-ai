This page contains all the documentation required to implement the features as defined in the [Project Breakdown](project-breakdown) page.

# Functions
More complex functions used by AI modes.

## Find Item
![Find Item Points](https://docs.google.com/drawings/d/1YjvaqdUUhk1-R2Qv2UniBpinVM9ouAEUcydLk-yLAtw/pub?w=358&h=231)

The main point (Red) only contains the colour. The sub points (Blue) contain the position relative to the main point and also a colour.

When searching for an item the position of all colours matching the main colour is found.
Then for each of these main points the sub points are checked.

### Algorithm
```
Find all points that match the main point

Check the points relative to the main point to see if they match
the sub points

Return the position of the main point if all sub points match.
```

# Interfaces
## Backpack
![Interface-Names](https://googledrive.com/host/0Bx-d6G8hYwBPWlBfMzEyMEhNQ00/gametabs/backpack.png)

### Functions
- Find - Find the position of the backpack screen
- IsOpen -  Is the backpack screen open
- Open - Open the backpack screen using the Game Buttons
- Drop(slotNumber) - Drops the item in the given slot
- Use(slotNumber) - use the item in the slot
- IsFull - Is the backpack full

## Bank
### Functions
- Find
- IsOpen
- Close
- Withdraw(slotNumber, amount)
- DepositAll

# AI Modes
## Fill Vials
### Simple Algorithms

Short example of getting the state and acting based on it
```

If not at the right place
    Teleport home and walk to the G.E

If the inventory is empty
    Go get more empty vials

If we have empty vials and can see the fountain
    Fill the vials

If we have empty vials can not see the fountain
    Walk to the fountain

If all the vials in the inventory are full
   Walk to the bank and deposit them

If we are at the bank screen, and our inventory is empty
    Withdraw more vials
Otherwise
   Deposit all

```