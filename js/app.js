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
// Light/Dark Mode
// README.md includes game title, Getting Started section, Screenshots section, Technologies Used section, Next Steps
// Format for Desktop

/* ---------- POST MVP Features ---------- */

// Flush out styling to better match wireframe
// Flush out story details to create interesting scenarios
// Implement food mechanic
// Implement weapon mechanic
// Implement money mechanic
// // Move storyTextArr, scenarioChoicesArr, sceneArtArr to data/storyScenarios.js and access data through exported getFunctions
// Improve placeholder story art
// Visual feedback when health changes, adding or using food, adding or equipping weapons, or money changes

/* ---------- Constants ---------- */

import { getStoryText, getScenarioIndexByScenarioName, getIsScenarioAnEndpoint, getLastScenarioTextIndex,  getScenarioChoice, getSceneArt } from "../data/storyScenarios.js"
const studyingMusic = new Audio("../audio/Crash Landing.mp3")

/* ---------- Variables ---------- */

let playerHealth, maxPlayerHealth, storyScenarioIdx, storyTextIdx

/* ---------- Cached Element References ---------- */

const healthFill = document.querySelector("#brain-fill")
const sceneArt = document.querySelector("#scene-art")
const storyText = document.querySelector("#story-text")
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

/* ---------- Functions ---------- */

init()

function init(){
  playerHealth = maxPlayerHealth = 100
  storyScenarioIdx = storyTextIdx = 0
  healthFill.style.height = `${(playerHealth/maxPlayerHealth) * 100}%`
  console.log(healthFill.style.height, 'health left')
  playerChoices.style.display = "none"
  resetBtn.setAttribute("hidden", "")
  studyingMusic.play()
  render()
}

function render(){
  if (playerHealth === 0) {
    sceneArt.setAttribute("src", getSceneArt(getScenarioIndexByScenarioName("Player Dies")))
    storyText.textContent = getStoryText(getScenarioIndexByScenarioName("Player Dies"), 0)
    toggleElementDisplay(playerChoices, "flex")
    toggleElementDisplay(progressBtns, "flex")
    continueStoryBtn.setAttribute("hidden", "")
    resetBtn.removeAttribute("hidden")
  } else {
    sceneArt.setAttribute("src", getSceneArt(storyScenarioIdx))
    storyText.textContent = getStoryText(storyScenarioIdx, storyTextIdx)
    if (getIsScenarioAnEndpoint(storyScenarioIdx)){
      toggleElementDisplay(playerChoices, "flex")
      toggleElementDisplay(progressBtns, "flex")
      continueStoryBtn.setAttribute("hidden", "")
      resetBtn.removeAttribute("hidden")
    } else {
      if (storyTextIdx === getLastScenarioTextIndex(storyScenarioIdx)){
        continueStoryBtn.setAttribute("hidden", "")
        toggleElementDisplay(playerChoices, "flex")
        //? toggleElementDisplay does not receive progressBtns
        // toggleElementDisplay(progressBtns, "flex")
        progressBtns.style.display = "none"
        choice1.textContent = getScenarioChoice(storyScenarioIdx, 1).text
        choice2.textContent = getScenarioChoice(storyScenarioIdx, 2).text
        choice3.textContent = getScenarioChoice(storyScenarioIdx, 3).text
        choice4.textContent = getScenarioChoice(storyScenarioIdx, 4).text
      } else {
        if (playerChoices.style.display !== "none") {
          toggleElementDisplay(playerChoices, "flex")
          toggleElementDisplay(progressBtns, "flex")
        }
        continueStoryBtn.removeAttribute("hidden")
      }
    }
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
  let choiceObj = getScenarioChoice(storyScenarioIdx, choiceId)
  let healthChangeAmount = choiceObj.healthChange
  playerHealth = Math.max(0, Math.min(playerHealth + healthChangeAmount, maxPlayerHealth))
  healthFill.style.height = `${(playerHealth/maxPlayerHealth) * 100}%`
  console.log(healthFill.style.height, 'health left')
  if (playerHealth === 0) {
    render()
  } else {
    storyScenarioIdx = choiceObj.newStoryTextIdx
    storyTextIdx = 0
    render()
  }
}