const storyScenarios = [
  {
    scenario: "Start",
    text: ["You are beyond excited! You just finished a great conversation with a hiring manager.", "They are excited about your recent projects and think you would be a great fit within the company.", "However, before they offer you a position, you need to nail it in the technical interview.", "You knew this was going to happen, and you begin to sweat. You are a little out of practice.", "It has been a little while since your coding boot camp. You've spent too much time working on styling and not enough time on creating algorithms.", "That's ok! You know you need to brush up on everything you've learned and it will come flooding back to you.", "You look at the clock. It's 8pm.", "Your technical interview is at 8am tomorrow morning, so you have 12 hours to review everything you have learned.", "It's going to be a long night. Where should you start?"],
    imgSrc: "https://image.freepik.com/free-photo/pong-with-wooden-village-building-near-it-blue-sky_181624-46168.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Watch interview prep videos", sanityChange: 10, newStoryScenario: "Watch videos"},
    choice3: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice4: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"}
  },
  {
    scenario: "Review projects",
    text: ["You begin loading up some of your past projects to refresh your memory.", "As you pour through your previous work, some things start to resurface from the deeper recesses of your mind.", "However, you stumble across a line of JavaScript code that doesn't make any sense.", "You try to decypher it, but you can't quite crack it.", "Of course, there is only one person to turn to in situations like this. Google.", "Some different results pop up, but you know that not every link you click on is going to be the best reference.", "What link do you click on?"],
    imgSrc: "https://image.freepik.com/free-vector/cartoon-illustration-with-terrified-people-running-away-from-rat_1284-59529.jpg",
    choice1: { text: "Search W3Schools", sanityChange: -15, newStoryScenario: "Search online for a solution"},
    choice2: { text: "Search MDN", sanityChange: -5, newStoryScenario: "Search online for a solution"},
    choice3: { text: "Search Stack Overflow", sanityChange: -10, newStoryScenario: "Search online for a solution"},
    choice4: { text: "Search the pantry", sanityChange: 10, newStoryScenario: "Search the pantry"}
  },
  {
    scenario: "Search online for a solution",
    text: ["After finding a reference to the line of code in question, it begins to make more sense now.", "You've got some programming concepts coming back to you now, but do you feel confident about the interview tomorrow?"],
    imgSrc: "https://image.freepik.com/free-photo/fire-steppe-grass-is-burning-destroying-everything-its-path_169016-13759.jpg",
    choice1: { text: "Watch interview prep videos", sanityChange: 10, newStoryScenario: "Watch videos"},
    choice2: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice3: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"},
    choice4: { text: "Try a Mock Tech Interview problem", sanityChange: -20, newStoryScenario: "Mock interview"}
  },
  {
    scenario: "Watch videos",
    text: ["You start searching for the most common tech interview questions and videos walking you through the process.", "You begin to get into the groove, taking notes and find yourself answering parts of the questions on your own.", "You are about to click on the next video in the series, when something catches your eye.", "It's that clip of a chipmunk giving a dramatic look to the camera.", "Just a quick 6 second video and you'll get back to the tech interview videos.", "Oh look, they did a version where it's wearing a mustache! And holding a lightsaber!", "You totally forgot about the sneezing panda, that one is a classic...", "You finish watching Charlie biting his brother's finger when you see what time it is.", "You've been on a watching spree for the past hour.", "You come back to your senses and know you need to get back on track. It is getting late and you still need to brush up on some things"],
    imgSrc: "https://image.freepik.com/free-vector/people-joining-stop-racism-movement_52683-40914.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice3: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"},
    choice4: { text: "It is too late to turn back now...", sanityChange: 0, newStoryScenario: "Endpoint - Descend into madness"}
  }, 
  {
    scenario: "Endpoint - Descend into madness",
    text: ["As you click on the next video of a leprechaun sighting, the edges of the room begins to fade.", "You no longer remember why you first started watching videos, but you know you must watch Harry Potter puppets sing.", "You begin to become one with the keyboard cat, playing your catchy song over and over again.", "You've descended into youtube madness and lose touch on reality.", "Perhaps if you didn't click on that chipmunk video, things would have gone differently?"],
    imgSrc: "https://image.freepik.com/free-photo/cheerful-group-diverse-students_53876-42761.jpg"
  },
  {
    scenario: "Read textbook",
    text: ["You walk over to the bookshelf. There you find the tech interview prep book on the top shelf.", "You have it earmarked where you last left off, so you start there.", "Your head starts spinning as you take it all back in, so you go back a few pages.", "The design patterns make sense again as you review the examples.", "You decide to take a quick break from the textbook, you've made some good progress.", "You want to change it up a bit, but keep the momentum going."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Watch interview prep videos", sanityChange: 0, newStoryScenario: "Watch videos"},
    choice3: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"},
    choice4: { text: "Try a Mock Tech Interview problem", sanityChange: -20, newStoryScenario: "Mock interview"}
  },
  {
    scenario: "Prep coffee",
    text: ["You head into the kitchen and pull out the dark roast.", "The smell kick starts the senses, helps clear your mind.", "The smoky auroma fills the room as the water begins to run through the filter", "You take a moment to enjoy the full body taste. It courses through you, fills your body with electricity.", "That gives you the boost you need. You are ready to keep studying."],
    imgSrc: "https://image.freepik.com/free-photo/high-angle-shot-heated-volcano-process-eruption_181624-6772.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Watch interview prep videos", sanityChange: 10, newStoryScenario: "Watch videos"},
    choice3: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice4: { text: "Search the pantry", sanityChange: 10, newStoryScenario: "Search the pantry"}
  },
  {
    scenario: "Search the pantry",
    text: ["Can't fill your mind on an empty stomache.", "You rifle through the pantry to find a quick bite to eat.", "You spot some macadamia nut cookies. That gives you a quick boost", "You grab a few more, to help you keep burning the midnight oil.", "Now that you've got some sustenance, you are ready to get back to it."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Watch interview prep videos", sanityChange: 10, newStoryScenario: "Watch videos"},
    choice3: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice4: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"}
  },
  {
    scenario: "Mock interview",
    text: ["You feel ready to try a practice round. You find a fresh question that you haven't tackled before.", "You settle in and begin reading the specs outloud.", "As you finish the spec list, you begin asking your mock interviewer some clarifying questions.", "You respond back to yourself with some responses and try to throw yourself a curveball.", "You begin talking through your plan of attack, describing how you would first approach the problem.", "As you talk through the problem, you reach into your back pocket of design patterns you have recently seen and use the tried and true for loop.", "It's a clunky approach, but it will hopefully get you where you want to go. You can clean up your function later.", "You begin coding it out, and you don't quite get it working.", "You talk through where you think you got off track, then rework the problem.", "Fortunately you get your brute force solution working and have passed some tests.", "Now the challenging part, your mock interviewer asks if you can optimize this solution further.", "You try to go for a logrithmic complexity and propose a refactored version of your initial attempt.", "You code it out, and your code passes the tests again.", "You feel relieved that you were able to use what you've learned so far to go through a mock problem.", "You're feeling tired, but perhaps you want to keep going, just in case you need some more ammunition for 8am."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg",
    choice1: { text: "Review past projects", sanityChange: -10, newStoryScenario: "Review projects"},
    choice2: { text: "Read your tech prep textbook", sanityChange: -20, newStoryScenario: "Read textbook"},
    choice3: { text: "Brew a fresh batch of coffee", sanityChange: 20, newStoryScenario: "Prep coffee"},
    choice4: { text: "Get ready for bed", sanityChange: 20, newStoryScenario: "Sleep prep"}
  },
  {
    scenario: "Sleep prep",
    text: ["You've done everything you thought of to do. You know it isn't going to go well if you keep pushing yourself before the interview.", "You quickly brush your teeth, wash your face, and head towards the bedroom.", "The clock reads ${Insert time here} as you drop into bed. You try to map out what it will look like between now and 8am."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg",
    choice1: { text: "Set alarm to go off at 7am", sanityChange: 50, newStoryScenario: "${sleepHours < 2}"},
    choice2: { text: "Set alarm to go off at 6am", sanityChange: 40, newStoryScenario: "${sleepHours < 5}"},
    choice3: { text: "Set alarm to go off at 7:50am", sanityChange: 20, newStoryScenario: "${sleepHours >= 5}"},
    choice4: { text: "Set alarm to go off at 7:30am", sanityChange: 25, newStoryScenario: "Endpoint - Sleep in"},
    choice5: { text: "Lay down for 5 minutes", sanityChange: 0, newStoryScenario: "${sleepHours < 5}"}
  },
  {
    scenario: "Endpoint - Sleep in",
    text: ["Callback functions and event listeners begin bouncing around as you dream in code.", "You go into that technical interview and knock it out of the park.", "You are offered a position and begin growing at the company.", "You become a valuable team member and build a beautiful career as a software engineer.", "If only that is what really happened. This is all just a wonderful dream, of course.", "Too bad your dream was so good that you completely sleep through your alarms.", "You miss the tech interview and lose out on the opportunity.", "That's ok, because a few weeks later you get a call from a hiring manager, looking to fill a fullstack engineering role."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg"
  },
  {
    scenario: "Endpoint - Sleep in",
    text: ["You've done everything you thought of to do. You know it isn't going to go well if you keep pushing yourself before the interview.", "You quickly brush your teeth, wash your face, and head towards the bedroom.", "The clock reads ${Insert time here} as you drop into bed. You try to map out what it will look like between now and 8am."],
    imgSrc: "https://image.freepik.com/free-photo/destroyed-architecture-with-great-white-mountain_181624-470.jpg",
    choice1: { text: "Set alarm to go off at 7am", sanityChange: 50, newStoryScenario: "7am wakeup"},
    choice2: { text: "Set alarm to go off at 6am", sanityChange: 40, newStoryScenario: "6am wakeup"},
    choice3: { text: "Set alarm to go off at 7:50am", sanityChange: 20, newStoryScenario: "7:50am wakeup"},
    choice4: { text: "Set alarm to go off at 7:30am", sanityChange: 25, newStoryScenario: "7:30am wakeup"},
    choice5: { text: "Lay down for 5 minutes", sanityChange: 0, newStoryScenario: "Sleep prep"}
  },
  {
    scenario: "Player Dies",
    text: ["You succumb to your wounds. The world turns black. You gave it your all, but was it enough? Game Over."],
    imgSrc: "https://image.freepik.com/free-photo/abstract-space-wallpaper-background-dark-smoke-design_53876-128279.jpg"
  }
]

function getStoryText(scenario, textIdx) {
  let storyScenario = storyScenarios.find(e => e.scenario === scenario)
  return storyScenario.text[textIdx]
}

function getDoesStoryNeedAChoice(scenario, textIdx) {
  let storyScenario = storyScenarios.find(e => e.scenario === scenario)
  return storyScenario.text.length - 1 === textIdx
}

function getScenarioChoice(scenario, choiceIdx) {
  let scenarioChoicesObj = storyScenarios.find(e => e.scenario === scenario)
  return scenarioChoicesObj[`choice${choiceIdx}`]
}

function getSceneArt(scenario) {
  console.log("Current scenario", scenario)
  let sceneObj = storyScenarios.find(e => e.scenario === scenario)
  console.log(sceneObj)
  return sceneObj.imgSrc
}

export {
  getStoryText, getDoesStoryNeedAChoice, getScenarioChoice, getSceneArt
}