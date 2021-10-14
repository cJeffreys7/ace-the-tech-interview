/* ---------- MVP Features ---------- */

// // Create init function that will initialize variables and render main page elements
// // Create render function that wil display main elements
// // Create event listener on continueStoryBtn to progress story given user interaction
// // Create event listener on parent element of playerChoice0, playerChoice1, playerChoice2, and playerChoice3 to event bubble player choice given user interaction
// // Create event listener on resetBtn to invoke the init function to restart the game
// // Find quick basic placeholder art (perhaps lorum picsum) for img src strings in sceneArtArr
// // Can make choices to arrive at 1 of at least 4 endpoints

/* ---------- POST MVP Features ---------- */

// Flush out styling to better match wireframe
// Flush out story details to create interesting scenarios
// Implement food mechanic
// Implement weapon mechanic
// Implement money mechanic
// Move storyTextArr, scenarioChoicesArr, sceneArtArr to data/storyScenarios.js and access data through exported getFunctions
// Improve placeholder story art
// Visual feedback when health changes, adding or using food, adding or equipping weapons, or money changes

/* ---------- Constants ---------- */

const storyTextArr = [
  ["You begin your adventure in a small village near the lake.", "Suddently, a small fire breaks out on the outskirts of the village. What do you do?"], ["You try to convince the villagers to rally together, but most seem to be ready to flee.", "What do you say to bolster their courage?"], ["You wait to see what happens. Indeed it is a fire.", "The village is nearly engulfed in flames now.", "There still may be a chance to turn things around."], ["Well, that went well. The villagers trampled you as they fled.", "The village is nearly engulfed in flames now.", "There still may be a chance to turn things around."], ["ENDPOINT1 You saved the village! You are showered with heaps of gold and forever immortalized as the village champion!"], ["ENDPOINT2 The village burned down behind you as you slunk away. Shame on you. Game Over."], ["ENDPOINT3 You burn to a crisp as you attempt a heroic action. Nice going. Game Over."], ["ENDPOINT4 You convince the villagers to help and they save part of the village. They will need to rebuild what they've lost, but they're alive. Game Over."], ["You succumb to your wounds. The world turns black. You gave it your all, but was it enough? Game Over."]
]

const scenarioChoicesArr = [
  {
    scenario: 1,
    choice1: { text: "Begin looking for water", healthChange: -20, newStoryTextIdx: 4},
    choice2: { text: "Try to find villagers to help", healthChange: 0, newStoryTextIdx: 1},
    choice3: { text: "Cautiously scope out the situation", healthChange: -10, newStoryTextIdx: 2},
    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 2,
    choice1: { text: "Yell at them profusely", healthChange: -70, newStoryTextIdx: 3},
    choice2: { text: "Appeal to saving their heritage", healthChange: 0, newStoryTextIdx: 7},
    choice3: { text: "Try reverse psychology", healthChange: -50, newStoryTextIdx: 3},
    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 3,
    choice1: { text: "Slowly turn around and walk away", healthChange: -70, newStoryTextIdx: 5},
    choice2: { text: "Run into the fire to try putting it out", healthChange: -80, newStoryTextIdx: 6},
    choice3: { text: "Try pouring water on the fire", healthChange: -50, newStoryTextIdx: 6},
    choice4: { text: "Slowly turn around and walk away", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 4,
    choice1: { text: "Slowly turn around and walk away", healthChange: -70, newStoryTextIdx: 5},
    choice2: { text: "Run into the fire to try putting it out", healthChange: -80, newStoryTextIdx: 6},
    choice3: { text: "Try pouring water on the fire", healthChange: -50, newStoryTextIdx: 6},
    choice4: { text: "Slowly turn around and walk away", healthChange: 0, newStoryTextIdx: 5}
  }
]

const sceneArtArr = [
  "https://image.freepik.com/free-photo/pong-with-wooden-village-building-near-it-blue-sky_181624-46168.jpg", "https://image.freepik.com/free-vector/cartoon-illustration-with-terrified-people-running-away-from-rat_1284-59529.jpg", "https://image.freepik.com/free-photo/fire-steppe-grass-is-burning-destroying-everything-its-path_169016-13759.jpg", "https://image.freepik.com/free-vector/people-joining-stop-racism-movement_52683-40914.jpg", "https://image.freepik.com/free-photo/cheerful-group-diverse-students_53876-42761.jpg", "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg", "https://image.freepik.com/free-photo/high-angle-shot-heated-volcano-process-eruption_181624-6772.jpg", "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg", 
  "https://image.freepik.com/free-photo/abstract-space-wallpaper-background-dark-smoke-design_53876-128279.jpg"
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

continueStoryBtn.addEventListener("click", progressStory)
playerChoices.addEventListener("click", playerChoiceResult)
resetBtn.addEventListener("click", init)

/* ---------- Functions ---------- */

init()

function init(){
  playerHealth = maxPlayerHealth = 100
  storyScenarioIdx = storyTextIdx = 0
  playerChoices.setAttribute("hidden", "")
  resetBtn.setAttribute("hidden", "")
  render()
}

function render(){
  console.log(`Story Scenario is ${storyScenarioIdx}`);
  if (playerHealth === 0) {
    console.log("Game Over");
    sceneArt.setAttribute("src", sceneArtArr[sceneArtArr.length - 1])
    storyText.textContent = storyTextArr[storyTextArr.length - 1]
    playerChoices.setAttribute("hidden", "")
    continueStoryBtn.setAttribute("hidden", "")
    resetBtn.removeAttribute("hidden")
  } else {
    sceneArt.setAttribute("src", sceneArtArr[storyScenarioIdx])
    console.log(`Scene art displaying ${sceneArtArr[storyScenarioIdx]}`);
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

function progressStory(){
  storyTextIdx++
  render()
}

function playerChoiceResult(evt){
  let choiceId = evt.target.id
  choiceId = choiceId.slice(choiceId.length - 1)
  let choiceOptionsObj = scenarioChoicesArr[storyScenarioIdx]
  let choiceObj = choiceOptionsObj[`choice${choiceId}`]
  let healthChangeAmount = choiceObj.healthChange
  playerHealth = Math.max(0, Math.min(playerHealth + healthChangeAmount, maxPlayerHealth))
  if (playerHealth === 0) {
    render()
  } else {
    storyScenarioIdx = choiceObj.newStoryTextIdx
    storyTextIdx = 0
    render()
  }
}