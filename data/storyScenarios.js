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

function getStoryText(scenarioIdx, textIdx) {
  return storyTextArr[scenarioIdx][textIdx]
}

function getLastScenarioIndex() {
  return storyTextArr.length - 1
}

function getLastScenarioTextIndex(scenarioIdx) {
  return storyTextArr[scenarioIdx].length - 1
}

function getScenarioChoice(scenarioIdx, choiceIdx) {
  let scenarioChoicesObj = scenarioChoicesArr[scenarioIdx]
  return scenarioChoicesObj[`choice${choiceIdx}`]
}

function getSceneArt(scenarioIdx) {
  return sceneArtArr[scenarioIdx]
}

function getLastSceneArtIndex() {
  return sceneArtArr.length - 1
}

export {
  getStoryText, getLastScenarioIndex, getLastScenarioTextIndex, getScenarioChoice, getSceneArt, getLastSceneArtIndex
}