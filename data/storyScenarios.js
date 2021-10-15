const storyScenarios = [
  {
    scenario: 1,
    text: ["You begin your adventure in a small village near the lake.", "Suddently, a small fire breaks out on the outskirts of the village. What do you do?"],
    imgSrc: "https://image.freepik.com/free-photo/pong-with-wooden-village-building-near-it-blue-sky_181624-46168.jpg",
    choice1: { text: "Begin looking for water", healthChange: -20, newStoryTextIdx: 4},
    choice2: { text: "Try to find villagers to help", healthChange: 0, newStoryTextIdx: 1},
    choice3: { text: "Cautiously scope out the situation", healthChange: -10, newStoryTextIdx: 2},
    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 2,
    text: ["You try to convince the villagers to rally together, but most seem to be ready to flee.", "What do you say to bolster their courage?"],
    imgSrc: "https://image.freepik.com/free-vector/cartoon-illustration-with-terrified-people-running-away-from-rat_1284-59529.jpg",
    choice1: { text: "Yell at them profusely", healthChange: -70, newStoryTextIdx: 3},
    choice2: { text: "Appeal to saving their heritage", healthChange: 0, newStoryTextIdx: 7},
    choice3: { text: "Try reverse psychology", healthChange: -50, newStoryTextIdx: 3},
    choice4: { text: "Run to the opposite side of the village", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 3,
    text: ["You wait to see what happens. Indeed it is a fire.", "The village is nearly engulfed in flames now.", "There still may be a chance to turn things around."],
    imgSrc: "https://image.freepik.com/free-photo/fire-steppe-grass-is-burning-destroying-everything-its-path_169016-13759.jpg",
    choice1: { text: "Slowly turn around and walk away", healthChange: -70, newStoryTextIdx: 5},
    choice2: { text: "Run into the fire to try putting it out", healthChange: -80, newStoryTextIdx: 6},
    choice3: { text: "Try pouring water on the fire", healthChange: -50, newStoryTextIdx: 6},
    choice4: { text: "Slowly turn around and walk away", healthChange: 0, newStoryTextIdx: 5}
  },
  {
    scenario: 4,
    text: ["Well, that went well. The villagers trampled you as they fled.", "The village is nearly engulfed in flames now.", "There still may be a chance to turn things around."],
    imgSrc: "https://image.freepik.com/free-vector/people-joining-stop-racism-movement_52683-40914.jpg",
    choice1: { text: "Attack the flames with your fists", healthChange: -100, newStoryTextIdx: 5},
    choice2: { text: "Stomp on the fire to try putting it out", healthChange: -100, newStoryTextIdx: 6},
    choice3: { text: "Try pouring water on the fire", healthChange: -20, newStoryTextIdx: 4},
    choice4: { text: "Slowly turn around and walk away", healthChange: 0, newStoryTextIdx: 5}
  }, 
  {
    scenario: "Endpoint 1",
    text: ["You saved the village! You are showered with heaps of gold and forever immortalized as the village champion!"],
    imgSrc: "https://image.freepik.com/free-photo/cheerful-group-diverse-students_53876-42761.jpg"
  },
  {
    scenario: "Endpoint 2",
    text: ["The village burned down behind you as you slunk away. Shame on you. Game Over."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg"
  },
  {
    scenario: "Endpoint 3",
    text: ["You burn to a crisp as you attempt a heroic action. Nice going. Game Over."],
    imgSrc: "https://image.freepik.com/free-photo/high-angle-shot-heated-volcano-process-eruption_181624-6772.jpg"
  },
  {
    scenario: "Endpoint 4",
    text: ["You convince the villagers to help and they save part of the village. They will need to rebuild what they've lost, but they're alive. Game Over."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg"
  },
  {
    scenario: "Player Dies",
    text: ["You succumb to your wounds. The world turns black. You gave it your all, but was it enough? Game Over."],
    imgSrc: "https://image.freepik.com/free-photo/abstract-space-wallpaper-background-dark-smoke-design_53876-128279.jpg"
  }
]

function getStoryText(scenarioIdx, textIdx) {
  let storyScenario = storyScenarios[scenarioIdx]
  return storyScenario.text[textIdx]
}

function getScenarioIndexByScenarioName(storyScenario) {
  return storyScenarios.findIndex(e => e.scenario === storyScenario)
}

function getIsScenarioAnEndpoint(scenarioIdx) {
  let scenarioText = storyScenarios[scenarioIdx].scenario
  return scenarioText.toString().includes("Endpoint")
}

function getLastScenarioTextIndex(scenarioIdx) {
  let storyScenario = storyScenarios[scenarioIdx]
  return storyScenario.text.length - 1
}

function getScenarioChoice(scenarioIdx, choiceIdx) {
  let scenarioChoicesObj = storyScenarios[scenarioIdx]
  return scenarioChoicesObj[`choice${choiceIdx}`]
}

function getSceneArt(scenarioIdx) {
  let sceneObj = storyScenarios[scenarioIdx]
  return sceneObj.imgSrc
}

export {
  getStoryText, getScenarioIndexByScenarioName, getIsScenarioAnEndpoint, getLastScenarioTextIndex, getScenarioChoice, getSceneArt
}