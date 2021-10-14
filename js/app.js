/* ---------- MVP Features ---------- */

// // Create init function that will initialize variables and render main page elements
// Create render function that wil display main elements
// Create event listener on continueStoryBtn to progress story given user interaction
// Create event listener on parent element of playerChoice0, playerChoice1, playerChoice2, and playerChoice3 to event bubble player choice given user interaction
// Create event listener on resetBtn to invoke the init function to restart the game
// Find quick basic placeholder art (perhaps lorum picsum) for img src strings in sceneArtArr

/* ---------- Constants ---------- */

const storyTextArr = [
  ["You begin your adventure in a small village near the lake.", "Suddently, a small fire breaks out on the outskirts of the village. What do you do?"], ["ENDPOINT1 You saved the village! You are showered with heaps of gold and forever immortalized as the village champion!"], ["ENDPOINT2 The village burned down behind you as you slunk away. Shame on you. Game Over."]
]

const scenarioChoicesArr = [
  {
    scenario: 1,
    choice1: { text: "Begin looking for water", healthChange: -20, newStoryTextIdx: 1},
    choice2: { text: "Try to find villagers to help", healthChange: 0, newStoryTextIdx: 1},
    choice3: { text: "Cautiously scope out the situation", healthChange: -10, newStoryTextIdx: 1},
    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 2}
  }
]

const sceneArtArr = [
  "https://picsum.photos/200", "https://picsum.photos/400", "https://picsum.photos/50"
]

/* ---------- Variables ---------- */

let playerHealth, maxPlayerHealth, storyScenarioIdx, storyTextIdx

/* ---------- Event Listeners ---------- */



/* ---------- Functions ---------- */

init()

function init(){
  playerHealth = maxPlayerHealth = 100
  storyScenarioIdx = storyTextIdx = 0
  render()
}

function render(){
  console.log("Render elements on page");
  console.log(`Player Health is ${playerHealth}`);
  console.log(`Maximum Player Health is ${maxPlayerHealth}`);
  console.log(`Story Scenario Index is ${storyScenarioIdx}`);
  console.log(`Story Text Index is ${storyTextIdx}`);
}