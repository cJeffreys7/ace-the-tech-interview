# Choose your own Adventure pseudocode

## Consts

### storyTextArr, scenarioChoicesArr, sceneArtArr

#### const storyTextArr = [ 
  #### ["You begin your adventure in a small village near the lake.", "Suddently, a small fire breaks out on the outskirts of the village. What do you do?"], 
  #### [], ...
  #### ["ENDPOINT1 You saved the village! You are showered with heaps of gold and forever immortalized as the village champion!"], ...]
  ##### 2d array where each element contains a text array that leads to a choice with the last element in the nested array.

  ###### Consider converting to arrays of objects 
  ###### [
  ######   {}
  ###### ]

#### const scenarioChoicesArr = [ 
  #### [ ["Begin looking for water", -20, 1], ["Try to find villagers to help", 0, 1], ["Cautiously scope out the situation", -10, 1], ["Run to the opposite side of the village", 0, 2] ], 
  #### [], ...]
  ##### 3d array where each element contains a 2d array of choices that coordinates with the index of the storyTextArr scenario. The first element in the nested choice array is text that will be displayed for the choice option. The second element is the health change for the player if they choose this option. The third element is the new index for the storyTextArr to begin rendering the next scenario text.

  ###### Consider converting to arrays of objects 
  ###### [ 
  ######  {
  ######    scenario: 1,
  ######    choice1: { text: "Begin looking for water", healthChange: -20, newStoryTextIdx: 1}
  ######    choice2: { text: "Try to find villagers to help", healthChange: 0, newStoryTextIdx, 1}
  ######    choice3: { text: "Cautiously scope out the situation", healthChange: -10, newStoryTextIdx: 1}
  ######    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 2}
  ######  },
  ######  {},
  ######  {}, ...
  ###### ]

## Variables

### playerHealth, maxPlayerHealth, storyScenarioIdx, storyTextIdx

## Features

### 1) Create init function that will initialize variables and render main page elements

#### 1.1) Initialize maxPlayerHealth to 100
#### 1.2) Initialize playerHealth to maxPlayerHealth
#### 1.3) Initialize storyScenarioIdx to 0
#### 1.4) Initialize storyTextIdx to 0
#### 1.5) Invoke render function

### 2) Create render function that will display main elements

#### 2.1) Set cached element playerHealthEl to display string using playerHealth
#### 2.2) If playerHealth === 0, show game over elementsset cached element sceneArt to display img src showing player loss art
##### 2.2.1) Set cached element sceneArt to display img src showing player loss art
##### 2.2.2) Set cached element storyText to display string describing player losing all of their health
##### 2.2.3) Hide player choice options and continueStoryBtn
##### 2.2.4) Show resetBtn
#### 2.3) Else, set cached element sceneArt to display img src using element storyScenarioIdx from the sceneArtArr array
#### 2.4) Set cached element storyText to display string using element storyTextIdx from element storyScenarioIdx from the storyTextArr array
##### 2.4.1) If story text contains "ENDPOINT#" in the string, the story has reached one of the endpoints other than a player losing all of their health, "winning" the game. The game will display the endpoint image and end text for the specific endpoint reached.
##### 2.4.2) Hide player choice options and continueStoryBtn
##### 2.4.3) Show resetBtn
#### 2.5) If storyTextIdx === storyTextArr[storyScenarioIdx].length - 1, display player choice options (story prompt for player choice should always be the last element in storyTextArr[storyScenarioIdx])
##### 2.5.1) Set cached element playerChoice0 to display string using element 0 from element storyScenarioIdx from element from scenarioChoicesArr array and be visible, set cached element playerChoice1 to display string using element 1..., playerChoice2 to display string using element 2..., playerChoice3 to display string using element 3...
##### 2.5.2) Set cached element continueStoryBtn to be hidden
#### 2.6) Else, hide player choice options
##### 2.6.1) Set cached element playerChoice0 to be hidden
##### 2.6.2) Set cached element continueStoryBtn to be visible

### 3) Create event listener on continueStoryBtn to progress story given user interaction

#### 3.1) Create function to increment index of story text each time continueStoryBtn is pressed
##### 3.1.1) function progressStory --> storyTextIdx++

### 4) Create event listener on parent element of playerChoice0, playerChoice1, playerChoice2, and playerChoice3 to event bubble player choice given user interaction

#### 4.1) Create function to handle player choice outcomes

##### 4.1.1) function playerChoiceResult(choiceIdx) --> get health change outcome from scenarioChoicesArr[storyScenarioIdx][choiceIdx][1] and add it to the playerHealth, setting the playerHealth to the new value clamped to a max of maxPlayerHealth and a min of 0
##### 4.1.2) If playerHealth === 0, invoke render to trigger game over screen
##### 4.1.3) Else, then set storyScenarioId to scenarioChoicesArr[storyScenarioIdx][choiceIdx][2]
##### 4.1.4) Set storyTextIdx to 0 to restart the element chosen for the next story scenario in storyTextArr
##### 4.1.6) Invoke the render function to continue to next story scenario after the player choice result has been handled, continuing the story

#### 5) Create event listener on resetBtn to invoke the init function to restart the game

#### 6) Find quick basic placeholder art (perhaps lorum picsum) for img src strings in sceneArtArr

## Post-MVP

### 1) Styling, Styling, Styling

### 2) Flush out story details

### 3) Implement food mechanic and opportunities to collect food from choice outcomes
#### 3.1) Create food object, review .__prototype__ to create base food class/object, then create several kinds of food objects with name: "", heal: # properties
#### 3.2) Implement system for passing through food objects in choice options in scenarioChoicesArr
#### 3.3) Store food objects collected in foodArr
#### 3.4) Implement button in HTML and store cached element foodIconBtn
#### 3.5) Implement event listener on foodIconBtn to use food (validation on if list should be opened handled in 3.6)
##### 3.5.1) Create function retreiveFood to retrieve specified idx in foodArr and return food object
##### 3.5.1.1) Create function to handle click on foodIconBtn that initially returns retreiveFood(0) to get first element in foodArr (then later update to pass through an event argument, gets index of event.target, then passes that into retreiveFood(targetId))
###### 3.5.1.2) Implement fancier feature of opening a carousel/button group? that displays several items in foodArr to choose from, implementing food icons in each food object to display (icon: "" property), then event bubbles when food carousel is open, get index selected and pass that into the retrieveFood function, then close carousel
##### 3.5.2) Create function to take food object returned and heal player to change playerHealth to Math.min(new value, maxPlayerHealth)
#### 3.6) Disable foodIconBtn if foodArr is empty or if playerHealth is equal to maxPlayerHealth
#### 3.7) Enable foodIconBtn if foodArr has any elements and playerHealth is less than maxPlayerHealth
#### 3.8) Add/Revise story to incorporate food objects that player can encounter through different choices

### 4) Implement weapon mechanic and opportunities to collect weapons from choice outcomes
#### 4.1) Create weapon object, review .__prototype__ to create base weapon class/object, then create several kinds of weapon objects with name: "", damage: #, icon: "" properties
#### 4.2) Implement system for passing through weapon objects in choice options in scenarioChoicesArr
#### 4.3) Store weapon objects collected in weaponArr
##### 4.3.1) Initialize weaponArr in init with a weapon object of fists
#### 4.4) Implement button in HTML and store cached element weaponIconBtn
#### 4.5) Implement event listener on weaponIconBtn to open weapon list (validation on if list should be opened handled in 4.6)
##### 4.5.1) Create function to retrieve specified idx in weaponArr and return weapon object
##### 4.5.1.1) Create function to handle click on weaponIconBtn that passes through an event argument, gets index of event.target, then passes that into retreiveWeapon(targetId))
###### 4.5.1.2) Implement fancier feature of opening a carousel/button group? that displays several items in weaponArr to choose from, implementing weapon icons in each weapon object to display, then event bubbles when weapon carousel is open, get index selected and pass that into the retrieveWeapon function, then close carousel
##### 4.5.2) Create function to take weapon object returned and store object in global variable equippedWeapon, then in render change weaponIconBtn img to equippedWeapon.icon to display to user in side bar
#### 4.6) Disable weaponIconBtn if weaponArr is not greater than 1
#### 4.7) Enable weaponIconBtn if weaponArr is greater than 1
#### 4.8) Add/Revise story to incorporate weapon objects that player can encounter through different choices

### 5) Implement money mechanic and opportunities to collect and use money through choice outcomes
#### 5.1) Create new variable called playerMoney
#### 5.2) Initialize playerMoney at 0 in init function
#### 5.3) Implement system for passing through money in choice options in scenarioChoicesArr
#### 5.4) Implement system for passing through money in choice options in scenarioChoicesArr
#### 5.5) Implement money icon with a text div next to it in HTML and store cached div element moneyAmount
#### 5.6) Render playerMoney value in moneyAmount in the render function
#### 5.7) Create function updateMoney to pass through money amount change argument that is added to playerMoney, then return Math.max(playerMoney, 0)
#### 5.8) In function playerChoiceResult (mvp feature 4.1.1), if choice selected by player has a money amount change !== 0, invoke updateMoney(moneyChangeAmount)
#### 5.9) Incorporate scenarios where the player can choose to use money to purchase either food, weapons, or special actions (bribe someone for info, pay someone to not beat you up...), and has at least one option that does not require a purchase
##### 5.9.1) Create a new function playerHasEnoughMoney that receives an argument of money amount change and returns a boolean of the result of playerMoney is less than money required to use the choice
##### 5.9.2) Invoke function playerHasEnoughMoney(moneyAmount) during retrieval of each player choice in the render function (mvp feature 2.5.1) if money amount change is greater than 0
##### 5.9.3) If playerHasEnoughMoney(moneyAmount), enable playerChoice button, else disable playerChoice button
###### 5.9.3.1) For even more mindbending fun, create scenarios that have more than 4 choices with the last choice does not require a purchase, iterate through those choices, then if !playerHasEnoughMoney(moneyAmount), do not add it to the current playerChoice and test next iteration (perhaps if no valid choices, have a failsafe of providing a generic last option that does not require a purchase)
###### 5.9.3.2) Format buttons to stretch across container if no other sibling button item is present on its row

### 6) Move storyTextArr, scenarioChoicesArr, sceneArtArr to data/storyScenarios.js, then implement getStoryText(storyScenarioIdx, storyTextIdx), getScenarioChoices(storyScenarioIdx), getSceneArt(storyScenarioIdx) functions, export out functions, import into app.js, setup html script to apply type="module" to app.js

### 7) Find better story art to replace placeholder art

### 8) On any playerHealth change, addition or removal of a food object in foodArr, addition or equipping of a weapon object in weaponArr, or any playerMoney change, show feedback with an element next to each respective icon that represents the change with a quick fadeUpOut animation