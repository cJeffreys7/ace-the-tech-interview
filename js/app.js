/* ---------- MVP Features ---------- */

// // Create init function that will initialize variables and render main page elements
// // Create render function that wil display main elements
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

/* ---------- Cached Element References ---------- */

const sceneArt = document.querySelector("#scene-art")
const storyText = document.querySelector("#story-text")
const continueStoryBtn = document.querySelector("#continue-button")
const resetBtn = document.querySelector("#reset-button")
const playerChoices = document.querySelector("#player-choices")
const choice1 = document.querySelector("#choice-1")
const choice2 = document.querySelector("#choice-2")
const choice3 = document.querySelector("#choice-3")
const choice4 = document.querySelector("#choice-4")

/* ---------- Event Listeners ---------- */



/* ---------- Functions ---------- */

init()

function init(){
  playerHealth = maxPlayerHealth = 100
  storyScenarioIdx = storyTextIdx = 0
  // playerHealth = 0
  // storyTextIdx = 1
  render()
}

function render(){
  if (playerHealth === 0) {
    console.log("Game Over");
    sceneArt.setAttribute("src", sceneArtArr[2])
    storyText.textContent = storyTextArr[2]
    playerChoices.setAttribute("hidden", "")
    continueStoryBtn.setAttribute("hidden", "")
    resetBtn.removeAttribute("hidden")
  } else {
    sceneArt.setAttribute("src", sceneArtArr[storyScenarioIdx])
    storyText.textContent = storyTextArr[storyScenarioIdx][storyTextIdx]
    if (storyText.textContent.includes("ENDPOINT")){
      playerChoices.setAttribute("hidden", "")
      continueStoryBtn.setAttribute("hidden", "")
      resetBtn.removeAttribute("hidden")
    } else {
      if (storyTextIdx === storyTextArr[storyScenarioIdx].length - 1){
        continueStoryBtn.setAttribute("hidden", "")
        playerChoices.removeAttribute("hidden")
        choice1.textContent = scenarioChoicesArr[storyScenarioIdx].choice1.text
        choice2.textContent = scenarioChoicesArr[storyScenarioIdx].choice2.text
        choice3.textContent = scenarioChoicesArr[storyScenarioIdx].choice3.text
        choice4.textContent = scenarioChoicesArr[storyScenarioIdx].choice4.text
      } else {
        if (!playerChoices.hasAttribute("hidden")) {
          playerChoices.setAttribute("hidden", "")
        }
        continueStoryBtn.removeAttribute("hidden")
      }
    }
  }
}