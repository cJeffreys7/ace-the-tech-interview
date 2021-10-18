/* ---------- MVP Features ---------- */

// // Create init function that will initialize variables and render main page elements
// // Create render function that wil display main elements
// // Create event listener on continueStoryBtn to progress story given user interaction
// // Create event listener on parent element of playerChoice0, playerChoice1, playerChoice2, and playerChoice3 to event bubble player choice given user interaction
// // Create event listener on resetBtn to invoke the init function to restart the game
// // Find quick basic placeholder art (perhaps lorum picsum) for img src strings in sceneArtArr
// // Can make choices to arrive at 1 of at least 4 endpoints
// // Includes sound
// Includes animation
// // Light/Dark Mode
// README.md includes game title, Getting Started section, Screenshots section, Technologies Used section, Next Steps
// // Format for Desktop

/* ---------- POST MVP Features ---------- */

// Flush out styling to better match wireframe
// // Flush out story details to create interesting scenarios
// Implement food mechanic
// Implement weapon mechanic
// Implement money mechanic
// // Move storyTextArr, scenarioChoicesArr, sceneArtArr to data/storyScenarios.js and access data through exported getFunctions
// // Improve placeholder story art
// Visual feedback when health changes, adding or using food, adding or equipping weapons, or money changes
// Polish scene art

/* ---------- Constants ---------- */

import { getStoryText, getDoesStoryNeedAChoice,  getScenarioChoice, getSceneArt } from "../data/storyScenarios.js"
const studyingMusic = new Audio("../audio/Crash Landing.mp3")

/* ---------- Variables ---------- */

let playerSanity, maxPlayerSanity, storyScenario, storyTextIdx

/* ---------- Cached Element References ---------- */

const body = document.querySelector("body")
const healthFill = document.querySelector("#brain-fill")
const sceneArt = document.querySelector("#scene-art")
const storyText = document.querySelector("#story-text")
const lightDarkBtn = document.querySelector("#light-dark-mode-icon")
const progressBtns = document.querySelector("#buttons")
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
lightDarkBtn.addEventListener("click", toggleLightDarkMode)

/* ---------- Functions ---------- */

init()

function init(){
  maxPlayerSanity = 100
  playerSanity = 80
  storyTextIdx = 0
  storyScenario = "Start"
  playerChoices.style.display = "none"
  resetBtn.setAttribute("hidden", "")
  // studyingMusic.play()
  checkDarkPref()
  render()
}

function render(){
  healthFill.style.height = `${(playerSanity/maxPlayerSanity) * 100}%`
  // console.log(healthFill.style.height, 'health left')
  sceneArt.setAttribute("src", getSceneArt(storyScenario))
  storyText.textContent = getStoryText(storyScenario, storyTextIdx)
  if (getDoesStoryNeedAChoice(storyScenario, storyTextIdx)) {
    if (storyScenario.includes("Endpoint")){
      //? toggleElementDisplay does not receive progressBtns
      // toggleElementDisplay(progressBtns, "flex")
      progressBtns.style.display = "none"
      toggleElementDisplay(progressBtns, "flex")
      continueStoryBtn.setAttribute("hidden", "")
      resetBtn.removeAttribute("hidden")
    } else {
      continueStoryBtn.setAttribute("hidden", "")
      toggleElementDisplay(playerChoices, "flex")
      //? toggleElementDisplay does not receive progressBtns
      // toggleElementDisplay(progressBtns, "flex")
      progressBtns.style.display = "none"
      choice1.textContent = getScenarioChoice(storyScenario, 1).text
      choice2.textContent = getScenarioChoice(storyScenario, 2).text
      choice3.textContent = getScenarioChoice(storyScenario, 3).text
      choice4.textContent = getScenarioChoice(storyScenario, 4).text
    }
  } else {
    if (playerChoices.style.display !== "none") {
      toggleElementDisplay(playerChoices, "flex")
      toggleElementDisplay(progressBtns, "flex")
    }
    continueStoryBtn.removeAttribute("hidden")
  }
}

function toggleElementDisplay(element, value) {
  if (element.style.display === value) {
    element.style.display = "none"
  } else {
    element.style.display = value
  }
}

function progressStory(){
  storyTextIdx++
  render()
}

function playerChoiceResult(evt){
  let choiceId = evt.target.id
  choiceId = choiceId.slice(choiceId.length - 1)
  let choiceObj = getScenarioChoice(storyScenario, choiceId)
  let sanityChangeAmount = choiceObj.sanityChange
  playerSanity = Math.max(0, Math.min(playerSanity + sanityChangeAmount, maxPlayerSanity))
  storyTextIdx = 0
  if (playerSanity === 0) {
    storyScenario = "Endpoint - Stressed out"
    render()
  } else {
    storyScenario = choiceObj.newStoryScenario
    render()
  }
}

function toggleLightDarkMode() {
  body.className = body.className === "" ? "dark" : ""
  lightDarkBtn.src = lightDarkBtn.src.includes("light") ? "./images/darkMode.svg" : "./images/lightMode.svg"
}

function checkDarkPref() {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches && body.className !== "dark") {
    toggleLightDarkMode()
  }
}