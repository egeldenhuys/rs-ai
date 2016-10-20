# Description:
This AI Mode will use a list of accounts to buy feathers
from the fishing shop NPC in Lumbridge.

# Latest Documentation

```
# Functions Required
- [X] Stats.Increment(name, amount, time)
- [X] Players.LoadList
- [X] Players.key
- [X] Players.DecryptList
- [X] Players.EncryptList
- [X] Players.SaveList
- [X] Players.player[i].username
- [X] Players.player[i].password
- [X] Players.player[i].coins
- [X] Players.player[i].lastPurchase
- [X] Players.player[i].feathersPurchased
- [X] Lobby.isAtLogin
- [X] Lobby.SelectTab
- [X] Lobby.Login(username, password)
- [X] Lobby.isWrongPassword
- [X] Lobby.GoToLogin
- [X] Lobby.RetryLogin
- [X] Lobby.ClearFields
- [X] Lobby.isEmailScreenOpen
- [X] Lobby.SkipEmailScreen
- [X] Lobby.waitForLogin
- [X] Lobby.isAtLobby
- [X] Lobby.Play
- [ ] Lobby.waitForPlay
- [X] Game.isOpen
- [X] Minimap.FindCompass
- [X] Minimap.ClickCompas
- [ ] Find NPC
- [ ] Trade NPC
- [ ] Buy Feathers
- [ ] Close NPC Trade Window
- [ ] Game.Logout
- [ ] GE.GetPrice(name)
```
# Algorithms

## Simple Algorithm
```
Account details:
 - Username
 - Password
 - Amount of coins in pouch
 - Total feathers purchased
 - Time of last purchase

Statistics file:
 - Total Feathers purchased
 - Total cost
 - Value of feathers (GE)
 - Profit of feathers (GE)

Get key

Load encrypted player list into memory
Decrypt player list in memory

Start Loop
	Select player[i]
	
	If the player has less than 6000 coins then
		Alert the user and select the next player
	
	// At this stage we know we are at the login screen
	
	Login using player[i]
	
	If the player has invalid login details then
		Alert the user
		Return to the login screen
		Select next player
	
	// At this stage we know we are in the lobby
	
	Enter the game using player[i]
	
	If the game does not open (or cannot be detected) then
		Alert the user
		Return to login screen
		Select next player
		
	// At this stage we know we are in the game
	
	If the player is not at the fishing shop then
		Alert the user
		Return to the login screen
		Select the next player
	
	// At this stage we know we are in the fishing shop
	
	If we can find the shopkeeper NPC then
		Trade him and buy 1000 feathers
		Close the shop
	Else
		Alert the user
		Return to the login screen
		Select the next player
		
	// At this stage we have bought 1k feathers and have closed the shop
	
	// Update the player statistics
	player[i].coins -= 6k
	player[i].feathers += 1k
	player[i].lastPurchase = GetSystemTime()
	
	// Update the public statistics file	
	Stats.Inc('Total Feathers Purchased', 1000)
	Stats.Inc('Total Cost', 6000)
	
	Encrypt the player list
	Save the player list
	Select Next Player

End Loop
```

## Extended Algorithm
```

BEGIN LoadPlayerList
	GET listPath
	GET key
	
	fileData = READ TO END listPath
	
	// fileData now contains the encrypted player list
	
	DECRYPT fileData USING key
	
	// We now need to extract the player details -> TPlayer
	
	FOR i = 1 to 
END

BEGIN FeatherBuyer
	LoadPlayerList

END


```