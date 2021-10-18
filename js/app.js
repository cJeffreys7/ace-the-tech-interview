/* ---------- MVP Features ---------- */

// // Create init function that will initialize variables and render main page elements
// // Create render function that wil display main elements
// // Create event listener on continueStoryBtn to progress story given user interaction
// // Create event listener on parent element of playerChoice0, playerChoice1, playerChoice2, and playerChoice3 to event bubble player choice given user interaction
// // Create event listener on resetBtn to invoke the init function to restart the game
// // Find quick basic placeholder art (perhaps lorum picsum) for img src strings in sceneArtArr
// // Can make choices to arrive at 1 of at least 4 endpoints
// // Includes sound
// // Includes animation
// // Light/Dark Mode
// // README.md includes game title, Getting Started section, Screenshots section, Technologies Used section, Next Steps
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

let playerSanity, maxPlayerSanity, storyScenario, storyTextIdx, lowSanityInterval

/* ---------- Cached Element References ---------- */

const body = document.querySelector("body")
const statBar = document.querySelector("#stat-bar")
const sanityMeter = document.querySelector("#sanity-meter")
const sanityFill = document.querySelector("#brain-fill")
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
  toggleElementDisplay(resetBtn, "initial")
  statBar.className = sceneArt.className = ""
  studyingMusic.play()
  checkDarkPref()
  render()
}

function render(){
  sanityFill.style.height = `${(playerSanity/maxPlayerSanity) * 100}%`
  // console.log(sanityFill.style.height, 'sanity left')
  if (0 < playerSanity && playerSanity <= 20) {
    if (!lowSanityInterval) {
      animateElement(sanityMeter, "heartBeat", 0, true)
      lowSanityInterval = setInterval(() => {
      animateElement(sanityMeter, "heartBeat", 0, true)
      }, 2000)
    }
  } else if (lowSanityInterval) {
      clearInterval(lowSanityInterval)
      lowSanityInterval = null
  }
  sceneArt.setAttribute("src", getSceneArt(storyScenario))
  storyText.textContent = getStoryText(storyScenario, storyTextIdx)
  if (getDoesStoryNeedAChoice(storyScenario, storyTextIdx)) {
    if (progressBtns.style.display !== "none"){
      toggleElementDisplay(progressBtns, "none")
    }
    toggleElementDisplay(continueStoryBtn, "initial")
    if (storyScenario.includes("Endpoint")){
      setTimeout(() => {
        animateElement(statBar, "fadeOut")
        animateElement(sceneArt, "fadeOut")
        setTimeout(() => {
          animateElement(resetBtn, "fadeIn")
          toggleElementDisplay(resetBtn, "initial")
        }, 2000)
      }, 1000)
      toggleElementDisplay(progressBtns, "flex")
    } else {
      toggleElementDisplay(resetBtn, "initial")
      toggleElementDisplay(playerChoices, "flex")
      progressBtns.style.display = "none"
      toggleElementDisplay(choice1, "none")
      toggleElementDisplay(choice2, "none")
      toggleElementDisplay(choice3, "none")
      toggleElementDisplay(choice4, "none")
      choice1.textContent = getScenarioChoice(storyScenario, 1).text
      animateElement(choice1, "slideInRight", 0)
      toggleElementDisplay(choice1, "initial", 0)
      choice2.textContent = getScenarioChoice(storyScenario, 2).text
      animateElement(choice2, "slideInRight", 0.5)
      toggleElementDisplay(choice2, "initial", 0.5)
      choice3.textContent = getScenarioChoice(storyScenario, 3).text
      animateElement(choice3, "slideInRight", 1)
      toggleElementDisplay(choice3, "initial", 1)
      choice4.textContent = getScenarioChoice(storyScenario, 4).text
      animateElement(choice4, "slideInRight", 1.5)
      toggleElementDisplay(choice4, "initial", 1.5)
    }
  } else {
    if (playerChoices.style.display !== "none") {
      toggleElementDisplay(playerChoices, "flex")
      toggleElementDisplay(progressBtns, "flex")
    }
    if (continueStoryBtn.style.display !== "initial"){
      toggleElementDisplay(continueStoryBtn, "initial")
      animateElement(continueStoryBtn, "bounce")
    }
    if (resetBtn.style.display !== "none"){
      toggleElementDisplay(resetBtn, "none")
    }
  }
}

function toggleElementDisplay(element, value, secondsToDelay) {
  setTimeout(() => {
    if (element.style.display === value) {
      element.style.display = "none"
    } else {
      element.style.display = value
    }
  }, (secondsToDelay * 1000 || 0))
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

function animateElement(element, animationName, secondsToDelay, resetAnimation) {
  setTimeout(() => {
    let defaultClassName = element.className
    element.classList.add(`animate__animated`,
                          `animate__${animationName}`)
    setTimeout(() => {
      if (resetAnimation) {
        element.className = defaultClassName
      }
    }, 1000);
  }, (secondsToDelay * 1000 || 0))
}