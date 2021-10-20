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

// // Flush out styling to better match wireframe
// // Flush out story details to create interesting scenarios
// // Implement time mechanic
// Implement sanity booster mechanic
// Implement coder toolbox mechanic
// // Move storyTextArr, scenarioChoicesArr, sceneArtArr to data/storyScenarios.js and access data through exported getFunctions
// // Improve placeholder story art
// Visual feedback when health changes, adding or using food, adding or equipping weapons, or money changes
// Polish scene art

/* ---------- Constants ---------- */

import { getStoryText, getDoesStoryNeedAChoice,  getScenarioChoiceById, getScenarioChoiceByText, getTotalScenarioChoices, getScenarioItem, getSceneArt, getSceneSound } from "../data/storyScenarios.js"
import { getItemByName } from "../data/storyItems.js"
const studyingMusic = new Audio("../audio/Crash Landing.mp3")

/* ---------- Variables ---------- */

let playerSanity, maxPlayerSanity, playerItems, storyScenario, storyTextIdx, lowSanityInterval, currentTime, previousTime, sceneSound

/* ---------- Cached Element References ---------- */

const body = document.querySelector("body")
const titleScreen = document.querySelector("#title-screen")
const startBtn = document.querySelector("#start-button")
const gameScreen = document.querySelector("#game-screen")
const statBar = document.querySelector("#stat-bar")
const sanityMeter = document.querySelector("#sanity-meter")
const sanityFill = document.querySelector("#brain-fill")
const sanityBoosters = document.querySelector("#sanity-boosters")
const sanityBoosterList = document.querySelector("#stat-icon-list")
const timeFillLeft = document.querySelector(".left-progress")
const timeFillRight = document.querySelector(".right-progress")
const clockTime = document.querySelector("#clock-icon")
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
startBtn.addEventListener("click", viewGameScreen)
resetBtn.addEventListener("click", init)
sanityBoosters.addEventListener("click", openBoosterList)
sanityBoosterList.addEventListener("click", useBoosterItem)
lightDarkBtn.addEventListener("click", toggleLightDarkMode)
// window.addEventListener("resize", resizeText)
studyingMusic.addEventListener("ended", () => {
  studyingMusic.currentTime = 0
  studyingMusic.play()
}, false)

/* ---------- Functions ---------- */

checkDarkPref()

function viewGameScreen(){
  toggleElementDisplay(gameScreen, "contents")
  toggleElementDisplay(titleScreen, "none")
  init()
}

function init(){
  maxPlayerSanity = 100
  playerSanity = 80
  storyTextIdx = 0
  currentTime = 12
  playerItems = []
  createBoosterItem("Coffee")
  createBoosterItem("Cookie")
  storyScenario = "Start"
  playerChoices.style.display = "none"
  toggleElementDisplay(resetBtn, "initial")
  statBar.className = sceneArt.className = ""
  studyingMusic.currentTime = 0
  studyingMusic.play()
  checkDarkPref()
  render()
}

function render(){
  if (storyScenario.includes("Endpoint")){
    studyingMusic.pause()
  }
  sanityFill.style.height = `${(playerSanity/maxPlayerSanity) * 100}%`
  clockTime.style.transform = `rotate(-${currentTime*30}deg)`
  if (currentTime < 6) {
    timeFillRight.style.transform = "rotate(-180deg)"
    timeFillLeft.style.transform = `rotate(${(6-currentTime)*30}deg)`
  } else {
    timeFillRight.style.transform = `rotate(-${currentTime*30}deg)`
    timeFillLeft.style.transform = "rotate(0deg)"
  }
  // Low sanity alert animation
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
  // Special story text cases
  if (storyText.textContent.includes("{")) {
    storyText.textContent = formatSpecialCaseText()
  } else {
    previousTime = currentTime
  }
  if (getDoesStoryNeedAChoice(storyScenario, storyTextIdx)) {
    if (progressBtns.style.display !== "none"){
      toggleElementDisplay(progressBtns, "none")
    }
    // Render endpoint and option to restart game
    toggleElementDisplay(continueStoryBtn, "initial")
    if (storyScenario.includes("Endpoint")){
      studyingMusic.pause()
      setTimeout(() => {
        animateElement(statBar, "fadeOut")
        animateElement(sceneArt, "fadeOut")
        setTimeout(() => {
          animateElement(resetBtn, "fadeIn")
          toggleElementDisplay(resetBtn, "initial")
        }, 2000)
      }, 1000)
      toggleElementDisplay(progressBtns, "flex")
      // Show valid scenario choices
    } else if (playerChoices.style.display === "none") {
      console.log((playerChoices.style.display));
      toggleElementDisplay(resetBtn, "initial")
      toggleElementDisplay(playerChoices, "flex")
      progressBtns.style.display = "none"
      console.log("Determine choice visibility");
      toggleElementDisplay(choice1, "none")
      toggleElementDisplay(choice2, "none")
      toggleElementDisplay(choice3, "none")
      toggleElementDisplay(choice4, "none")
      let currValidChoiceIdx = getValidTimeChoiceIdx(0)
      if (setNextValidChoice(choice1, currValidChoiceIdx, 0.5)) {
        currValidChoiceIdx = getValidTimeChoiceIdx(currValidChoiceIdx + 1)
        if (setNextValidChoice(choice2, currValidChoiceIdx, 1)) {
          currValidChoiceIdx = getValidTimeChoiceIdx(currValidChoiceIdx + 1)
          if (setNextValidChoice(choice3, currValidChoiceIdx, 1.5)) {
            currValidChoiceIdx = getValidTimeChoiceIdx(currValidChoiceIdx + 1)
            if (setNextValidChoice(choice4, currValidChoiceIdx, 2)) {
              currValidChoiceIdx = getValidTimeChoiceIdx(currValidChoiceIdx + 1)
            }
          }
        }
      }
    }
  // Show continue option for progressing through scenario
  } else {
    if (playerChoices.style.display !== "none") {
      toggleElementDisplay(playerChoices, "flex")
      toggleElementDisplay(progressBtns, "flex")
    }
    if (continueStoryBtn.style.display !== "initial"){
      toggleElementDisplay(continueStoryBtn, "initial")
      animateElement(continueStoryBtn, "bounce")
      sceneSound = new Audio(`${getSceneSound(storyScenario)}`)
      sceneSound.play()
    }
    if (resetBtn.style.display !== "none"){
      toggleElementDisplay(resetBtn, "none")
    }
  }
}

function formatSpecialCaseText(){
  let formattedText = ""
  const regex = new RegExp ("\{(.*?)\}")
  const timeMatches = storyText.textContent.match(regex)
  if (timeMatches.some(e => e === "currentTime")) {
    let formattedTime = currentTime
    let formattedMinutes = Math.floor((formattedTime % 1) * 60).toString()
    if (formattedMinutes === "0") {
      formattedMinutes = "00"
    } else {
      formattedTime += 1
      formattedMinutes = (60 - formattedMinutes).toString()
    }
    console.log("format time");
    let formattedHours = Math.floor(formattedTime)
    formattedText = storyText.textContent.replace(regex, `${convertDecimalTimeTo12HourInt(formattedHours, 8) + ":" + formattedMinutes}${currentTime <= 8 ? "am" : "pm"}`)
    // Calculate amount of time to sleep and return hours and minutes
  } else if (timeMatches.some(e => e.includes("sleepTime"))) {
    let timeChangeAmount = timeMatches[1].slice(-2, timeMatches[1].length)
    let totalSleepTime = previousTime - currentTime - timeChangeAmount/60
    let formattedMinutes = Math.ceil((totalSleepTime % 1) * 60)
    if (formattedMinutes === 0) {
      formattedMinutes = "00"
    } else {
      totalSleepTime -= 1
    }
    let formattedHours = Math.floor(totalSleepTime)
    formattedText = storyText.textContent.replace(regex, `${formattedHours} hours and ${formattedMinutes} minutes`)
  }
  return formattedText
}

function setNextValidChoice(button, startingChoiceIdx, animDelay){
  if (Number.isInteger(startingChoiceIdx)) {
    button.textContent = getScenarioChoiceById(storyScenario, startingChoiceIdx).text
    animateElement(button, "slideInRight", animDelay)
    toggleElementDisplay(button, "initial", animDelay)
    return true
  } else {
    button.textContent = "Go to interview"
    animateElement(button, "slideInRight", 0)
    toggleElementDisplay(button, "initial", 0)
    return false
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
  if (evt.target.id !== "player-choices"){
    storyTextIdx = 0
    let selectedChoice = evt.target
    let choiceObj = getScenarioChoiceByText(storyScenario, selectedChoice.textContent)
    // Collect item from scenario
    if (choiceObj && getScenarioItem(choiceObj.newStoryScenario)) {
      createBoosterItem(getScenarioItem(choiceObj.newStoryScenario))
    }
    let wakeUsingSpecifiedTime = false
    if (selectedChoice.textContent !== "Go to interview") {
      let sanityChangeAmount = choiceObj.sanityChange
      let timeChangeAmount = choiceObj.hoursUsed
      updatePlayerSanityAmount(sanityChangeAmount)
      // Special case calculate hoursUsed from wake up time
      if (isNaN(timeChangeAmount)) {
        timeChangeAmount = calculateRemainingTimeFromChoiceText(timeChangeAmount)
        // Update sanity and scenario from hours slept
        if (timeChangeAmount < 2.5) {
          storyScenario = "Endpoint - Sleep in"
          wakeUsingSpecifiedTime = true
          updatePlayerSanityAmount(100)
        } else if (timeChangeAmount < 5) {
          storyScenario = "Stare at ceiling"
          wakeUsingSpecifiedTime = true
          updatePlayerSanityAmount(25)
        } else {
          storyScenario = "Wake well rested"
          wakeUsingSpecifiedTime = true
          updatePlayerSanityAmount(45)
        }
      }
      currentTime = Math.max(0, currentTime - timeChangeAmount)
      if (playerSanity === 0) {
        storyScenario = "Endpoint - Stressed out"
        render()
      } else if (wakeUsingSpecifiedTime) {
        render()
      } else {
        storyScenario = choiceObj.newStoryScenario
        render()
      }
    } else {
      storyScenario = "Interview"
      currentTime = 0
      console.log("Go to Interview");
      render()
    }
  }
}

function updatePlayerSanityAmount(changeInSanity) {
  playerSanity = Math.max(0, Math.min(playerSanity + changeInSanity, maxPlayerSanity))
  // render()
}

function createBoosterItem(itemName) {
  let newItem = getItemByName(itemName)
  playerItems.push(newItem)
  let newBoosterItem = document.createElement("div")
  newBoosterItem.innerHTML = `
  <div class="${newItem.name} booster-item-container carousel-item"><img class="booster-item" id="${newItem.name}" src="${newItem.icon}"></img><span>${newItem.name}</span></div>` // add to class name${playerItems.length === 1 ? "active" : ""}
  sanityBoosterList.appendChild(newBoosterItem)
  console.log(playerItems)
}

function openBoosterList(){
  if (playerItems.length) {
    toggleElementDisplay(sanityBoosterList, "flex")
  }
}

function useBoosterItem(evt) {
  let selectedItem = evt.target
  if (selectedItem.className === "booster-item") {
    updatePlayerSanityAmount(getItemByName(selectedItem.id).sanityBoost)
    let itemIdx = playerItems.findIndex(e => e.name === selectedItem.id)
    playerItems.splice(itemIdx, 1)
    sanityBoosterList.children.item(itemIdx).remove()
    if (!playerItems.length) {
      toggleElementDisplay(sanityBoosterList, "flex")
    }
    render()
  }
}

function convertDecimalTimeTo12HourInt(decimalTime, startingTime){
  return decimalTime <= startingTime - 1 ? (startingTime - decimalTime) : ((12 - decimalTime) + startingTime)
}

function getValidTimeChoiceIdx(elementId) {
  for (let i = elementId; i < getTotalScenarioChoices(storyScenario); i++) {
    let choiceTimeRequired = getScenarioChoiceById(storyScenario, i).hoursUsed
    if (isNaN(choiceTimeRequired)) {
      choiceTimeRequired = calculateRemainingTimeFromChoiceText(choiceTimeRequired)
    }
    if (choiceTimeRequired < currentTime || choiceTimeRequired === 0) {
      return i
    }
  }
  return null
}

function calculateRemainingTimeFromChoiceText(choiceTime){
    let endMinutes = 0
    let endHour = parseInt(choiceTime.slice(0,1))
    if (choiceTime.includes(":")) {
      let minutesIdx = choiceTime.indexOf(":")
      endMinutes = parseInt(choiceTime.slice(minutesIdx + 1, minutesIdx + 3))
    }
    let endTime = endHour + (endMinutes/60)
    return (endTime - convertDecimalTimeTo12HourInt(currentTime, 8)) < 0 ? endTime + (12 - convertDecimalTimeTo12HourInt(currentTime, 8)) : endTime - convertDecimalTimeTo12HourInt(currentTime, 8)
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

// function resizeText() {
//   storyText.style.fontSize = `${(storyText.clientWidth/1000) * 2.3}rem`
//   console.log("Inner width of textbox:", storyText.clientWidth);
// }