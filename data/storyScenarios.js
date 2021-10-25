const storyScenarios = [
  {
    scenario: "Tutorial",
    text: ["You are beyond excited! You just finished a great conversation with a hiring manager.", "They are excited about your recent projects and think you would be a great fit within the company.", "However, before they offer you a position, you need to nail it in the technical interview.", "You knew this was going to happen, and you begin to sweat. You are a little out of practice.", "It's been a while since your coding boot camp. You've spent too much time on styling and not enough time on algorithms.", "That's ok! You know you need to brush up on everything you've learned and it will come flooding back to you."],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "So, what do I do?",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 2"
      },
      { 
        text: "Let's go!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ]
  },
  {
    scenario: "Tutorial 2",
    text: ["You will be presented with choices that can either help or hurt you as you study for your technical interview in the morning.", "Choices can impact your sanity by pushing your mind to its limits, or giving you a much needed break."],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "Sounds stressful!",
        sanityChange: -70,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 3"
      },
      { 
        text: "Yeah, yeah. Let's go already!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ]
  },
  {
    scenario: "Tutorial 3",
    text: ["Watch your sanity meter! It will help you determine if it is time to take a break, or crunch some more programming knowledge.", "Along the way you may pick up some items that can boost your sanity and can be used at any time."],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "Give me some coffee!",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 4 coffee"
      },
      { 
        text: "Give me a cookie!",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 4 cookie"
      },
      { 
        text: "I'm ready to go!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ]
  },
  {
    scenario: "Tutorial 4 coffee",
    text: ["You can access your sanity boosters if you have any by pressing the party hat button.", "These sanity boosters may be the only thing that can help you keep your cool during crunch time, so use them wisely!"],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "So how do I study?",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 5"
      },
      { 
        text: "Let's do this!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ],
    item: "Coffee" 
  },
  {
    scenario: "Tutorial 4 cookie",
    text: ["You can access your sanity boosters if you have any by pressing the party hat button.", "These sanity boosters may be the only thing that can help you keep your cool during crunch time, so make sure to use them wisely!"],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "So how do I study?",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 5"
      },
      { 
        text: "Let's do this!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ],
    item: "Cookie" 
  },
  {
    scenario: "Tutorial 5",
    text: ["Each time you review programming concepts, a new programming skill will be added to your coding toolbox!", "Absorb as many as you can, because you never know what you will need in order to pass the technical assessment."],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "So how long do I have?",
        sanityChange: 0,
        hoursUsed: 1, 
        newStoryScenario: "Tutorial 6"
      },
      { 
        text: "I'm ready now!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      }
    ]
  },
  {
    scenario: "Tutorial 6",
    text: ["Each choice you make will cost you time, so make sure you are focusing on what is really important.", "Watch the clock as the hours dwindle down to evaluate your decisions."],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "I'm ready!",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Start"
      },
      { 
        text: "Can you explain it again?",
        sanityChange: 0,
        hoursUsed: 0, 
        newStoryScenario: "Tutorial"
      }
    ]
  },
  {
    scenario: "Start",
    text: ["You look at the clock. It's 8pm.", "Your technical interview is at 8am tomorrow morning, so you have 12 hours to review everything you have learned.", "It's going to be a long night. Where should you start?"],
    imgSrc: "./images/sceneArtStart.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "Review past projects",
        sanityChange: -25,
        hoursUsed: .5, 
        newStoryScenario: "Review projects"
      },
      { 
        text: "Watch interview prep videos", 
        sanityChange: 10, 
        hoursUsed: 1,
        newStoryScenario: "Watch videos"
      },
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      }
    ]
  },
  {
    scenario: "Review projects",
    text: ["You begin loading up some of your past projects to refresh your memory.", "As you pour through your previous work, some things start to resurface from the deeper recesses of your mind.", "However, you stumble across a line of JavaScript code that doesn't make any sense.", "You try to decypher it, but you can't quite crack it.", "Of course, there is only one person to turn to in situations like this.", "Google.", "Some different results pop up, but you know that not every link you click on is going to be the best reference.", "What link do you click on?"],
    imgSrc: "./images/sceneArtProjects.svg",
    audio: "./audio/Retro Blop 22.mp3",
    choices: [
      { 
        text: "Search W3Schools", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution"
      },
      { 
        text: "Search MDN", 
        sanityChange: -5, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution"
      },
      { 
        text: "Search Stack Overflow", 
        sanityChange: -10, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution"
      },
      { 
        text: "Search the pantry", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Search the pantry"
      }
    ],
    item: "codeConcept"
  },
  {
    scenario: "Search online for a solution",
    text: ["After finding a reference to the line of code in question, it begins to make more sense now.", "You've got some programming concepts coming back to you now, but do you feel confident about the interview tomorrow?"],
    imgSrc: "./images/sceneArtOnlineSearch.svg",
    audio: "./audio/Retro Impact Metal 05.mp3",
    choices: [
      { 
        text: "Watch interview prep videos", 
        sanityChange: 10, 
        hoursUsed: 1,
        newStoryScenario: "Watch videos"},
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      },
      { 
        text: "Try a Mock Tech Interview problem", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview"
      }
    ],
    item: "codeConcept"
  },
  {
    scenario: "Watch videos",
    text: ["You start searching for the most common tech interview questions and videos walking you through the process.", "You begin to get into the groove, taking notes and find yourself answering parts of the questions on your own.", "You are about to click on the next video in the series, when something catches your eye.", "It's that clip of a chipmunk giving a dramatic look to the camera.", "Just a quick 6 second video and you'll get back to the tech interview videos.", "Oh look, they did a version where it's wearing a mustache! And holding a lightsaber!", "You totally forgot about the sneezing panda, that one is a classic...", "You finish watching Charlie biting his brother's finger when you see what time it is.", "You've been on a watching spree for the past hour.", "You come back to your senses and know you need to get back on track. It is getting late and you still need to brush up on some things."],
    imgSrc: "./images/sceneArtVideos.svg",
    audio: "./audio/Retro Magic 34.mp3",
    choices: [
      { 
        text: "Review past projects",
        sanityChange: -25,
        hoursUsed: .5, 
        newStoryScenario: "Review projects"
      },
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      },
      { 
        text: "It is too late to turn back now...", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Descend into madness"
      }
    ]
  }, 
  {
    scenario: "Endpoint - Descend into madness",
    text: ["As you click on the next video of a leprechaun sighting, the edges of the room begins to fade.", "You no longer remember why you first started watching videos, but you know you must watch Harry Potter puppets sing.", "You begin to become one with the keyboard cat, playing your catchy song over and over again.", "You've descended into youtube madness and lose touch on reality.", "Perhaps if you didn't click on that chipmunk video, things would have gone differently?"],
    imgSrc: "./images/sceneArtVideoMadness.svg",
    audio: "./audio/Retro Turn Off 12.mp3",
    choices: [

    ]
  },
  {
    scenario: "Read textbook",
    text: ["You walk over to the bookshelf. There you find the tech interview prep book on the top shelf.", "You have it earmarked where you last left off, so you start there.", "Your head starts spinning as you take it all back in, so you go back a few pages.", "The design patterns make sense again as you review the examples.", "You decide to take a quick break from the textbook, you've made some good progress.", "You want to change it up a bit, but keep the momentum going."],
    imgSrc: "./images/sceneArtTextbook.svg",
    audio: "./audio/Retro PowerUp 09.mp3",
    choices: [
      { 
        text: "Review past projects",
        sanityChange: -25,
        hoursUsed: .5, 
        newStoryScenario: "Review projects"
      },
      { 
        text: "Watch interview prep videos", 
        sanityChange: 0, 
        hoursUsed: 1,
        newStoryScenario: "Watch videos"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      },
      { 
        text: "Try a Mock Tech Interview problem", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview"
      }
    ],
    item: "codeConcept"
  },
  {
    scenario: "Prep coffee",
    text: ["You head into the kitchen and pull out the dark roast.", "The smell kick starts the senses, helps clear your mind.", "The smoky auroma fills the room as the water begins to run through the filter.", "You take a moment to enjoy the full body taste. It courses through you, fills your body with electricity.", "You are glad to started a fresh pot, you can always come back to it later.", "That gives you the boost you need. You are ready to keep studying."],
    imgSrc: "./images/sceneArtCoffee.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "Review past projects",
        sanityChange: -25,
        hoursUsed: .5, 
        newStoryScenario: "Review projects"
      },
      { 
        text: "Watch interview prep videos", 
        sanityChange: 10, 
        hoursUsed: 1,
        newStoryScenario: "Watch videos"
      },
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Search the pantry", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Search the pantry"
      }
    ],
    item: "Coffee"
  },
  {
    scenario: "Search the pantry",
    text: ["Can't fill your mind on an empty stomach.", "You rifle through the pantry to find a quick bite to eat.", "You spot some macadamia nut cookies. That gives you a quick boost.", "You throw one in your pocket, just in case you need a little pick-me-up.", "Now that you've got some sustenance, you are ready to get back to it."],
    imgSrc: "./images/sceneArtPantry.svg",
    audio: "./audio/Retro Event StereoUP 02.mp3",
    choices: [
      { 
        text: "Review past projects",
        sanityChange: -25,
        hoursUsed: .5, 
        newStoryScenario: "Review projects"
      },
      { 
        text: "Watch interview prep videos", 
        sanityChange: 10, 
        hoursUsed: 1,
        newStoryScenario: "Watch videos"
      },
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      }
    ],
    item: "Cookie"
  },
  {
    scenario: "Mock Interview",
    text: ["You feel ready to try a practice round. You find a fresh question that you haven't tackled before.", "You settle in and begin reading the specs outloud.", "As you finish the spec list, you begin asking your mock interviewer some clarifying questions.", "You respond back to yourself with some more specs and try to throw yourself a curveball edgecase.", "You begin talking through your plan of attack, describing how you would first approach the problem.", "As you talk through the problem, you reach into your back pocket of design patterns you have recently seen. Which one will work best?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Electronic Burst StereoUP 04.mp3",
    choices: [
      { 
        text: "Toss in a reduce method", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 2",
        codeConcept: "Reduce method"
      },
      { 
        text: "Filter the array", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 2",
        codeConcept: "Filter method"
      },
      { 
        text: "Try throwing a map method in there", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 2",
        codeConcept: "Map method"
      },
      { 
        text: "For loop in a for loop", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 2",
        codeConcept: "Nested for loop"
      },
      { 
        text: "Initialize a large, hard coded array", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 2",
        codeConcept: "Hard coded array"
      },
      { 
        text: "Do some research to find solution", 
        sanityChange: -20, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Mock Interview 2",
    text: ["It's a clunky approach, but it will hopefully get you where you want to go. You can clean up your function later.", "You begin coding it out, and you don't quite get it working.", "You talk through where you think you got off track. How should you rework the problem?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Electronic Burst StereoUP 04.mp3",
    choices: [
      { 
        text: "Handle the edge case with a different return statement", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 3",
        codeConcept: "Handle edge cases"
      },
      { 
        text: "Refactor the initial if statement", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 3",
        codeConcept: "Refactor"
      },
      { 
        text: "Include the last element in the loop condition", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 3",
        codeConcept: "Iterate all elements"
      },
      { 
        text: "Console log all the things!", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Mock Interview 3",
        codeConcept: "Console log"
      },
      { 
        text: "Do some research to find solution", 
        sanityChange: -20, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Mock Interview 3",
    text: ["Fortunately you get your brute force solution working and have passed some tests.", "Now the challenging part, your mock interviewer asks if you can optimize this solution further.", "You try to go for a logrithmic complexity and propose a refactored version of your initial attempt."],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Electronic Burst StereoUP 04.mp3",
    choices: [
      { 
        text: "Use a binary search tree", 
        sanityChange: 0, 
        hoursUsed: .5,
        newStoryScenario: "Finish Mock interview",
        codeConcept: "Binary search tree"
      },
      { 
        text: "Refactor to a recursive function", 
        sanityChange: 0, 
        hoursUsed: .5,
        newStoryScenario: "Finish Mock interview",
        codeConcept: "Recursion"
      },
      { 
        text: "Try to perform a merge sort", 
        sanityChange: 0, 
        hoursUsed: .5,
        newStoryScenario: "Finish Mock interview",
        codeConcept: "Merge sort"
      },
      { 
        text: "Do some research to find solution", 
        sanityChange: -20, 
        hoursUsed: .5,
        newStoryScenario: "Search online for a solution",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Finish Mock interview",
    text: ["You code it out, and your code passes the tests again.", "You feel relieved that you were able to use what you've learned so far to go through a mock problem.", "You're feeling tired, but perhaps you want to keep going, just in case you need some more ammunition for 8am."],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Electronic Burst StereoUP 04.mp3",
    choices: [
      { 
        text: "Review past projects", 
        sanityChange: -10, 
        hoursUsed: 1,
        newStoryScenario: "Review projects"
      },
      { 
        text: "Read your tech prep textbook", 
        sanityChange: -20, 
        hoursUsed: 1,
        newStoryScenario: "Read textbook"
      },
      { 
        text: "Brew a fresh batch of coffee", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Prep coffee"
      },
      { 
        text: "Get ready for bed", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Sleep prep"
      }
    ]
  },
  {
    scenario: "Sleep prep",
    text: ["You've done everything you thought of to do. You know it isn't going to go well if you keep pushing yourself before the interview.", "You quickly brush your teeth, wash your face, and head towards the bedroom.", "The clock reads {currentTime} as you drop into bed. You try to map out what it will look like between now and 8am."],
    imgSrc: "./images/sceneArtSleepPrep.svg",
    audio: "./audio/Retro Owl 01.mp3",
    choices: [
      { 
        text: "Set alarm to go off at 7am", 
        sanityChange: 0, 
        hoursUsed: "7am",
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Set alarm to go off at 6am", 
        sanityChange: 0, 
        hoursUsed: "6am",
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Set alarm to go off at 7:50am", 
        sanityChange: 0, 
        hoursUsed: "7:50am",
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Set alarm to go off at 7:30am", 
        sanityChange: 0, 
        hoursUsed: "7:30am",
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Lay down for 5 minutes", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Wakeup"
      }
    ]
  },
  {
    scenario: "Endpoint - Sleep in",
    text: ["Callback functions and event listeners begin bouncing around as you dream in code.", "You go into that technical interview and knock it out of the park.", "You are offered a position and begin growing at the company.", "You become a valuable team member and build a beautiful career as a software engineer.", "If only that is what really happened. This is all just a wonderful dream, of course.", "Too bad your dream was so good that you completely sleep through your alarms.", "You miss the tech interview and lose out on the opportunity.", "That's ok, because a few weeks later you get a call from a hiring manager, looking to fill a fullstack engineering role."],
    imgSrc: "./images/sceneArtSleepThroughAlarms.svg",
    audio: "./audio/Retro Turn Off 12.mp3",
    choices: [

    ]
  },
  {
    scenario: "Stare at ceiling",
    text: ["If you fall asleep in 20 minutes, you will have {sleepTime20} to sleep.", "35 minutes pass, so you readjust your calculations and determine you will now have {sleepTime35} to sleep.", "As your mind keeps track of the time and total sleep time you would have if your mind wasn't keeping tabs of the time, you stare angrily at the ceiling.", "You wish your brain would stop thinking and relax, but there is too much activity rapidfiring to get you into the mindset of sleep.", "Finally, after about an hour of overthinking sleep, you drift unawares into an uneasy slumber.", "Suddenly, the alarm is blaring in your ear. The time has come."],
    imgSrc: "./images/sceneArtStareCeiling.svg",
    audio: "./audio/Retro Owl 01.mp3",
    choices: [
      { 
        text: "Hit the snooze", 
        sanityChange: 10, 
        hoursUsed: .2,
        newStoryScenario: "Snooze"
      },
      { 
        text: "Slowly slink out of bed", 
        sanityChange: -10, 
        hoursUsed: 0,
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Set a new alarm for 30 more minutes", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Snooze"
      }
    ]
  },
  {
    scenario: "Snooze",
    text: ["Nope.", "Just a few more minutes of blissful rest.", "No sooner have you finished your thought do you hear the familiar screech of your alarm.", "Why did you pick that maniacal sound to wake you up? Well, it does the trick at least."],
    imgSrc: "./images/sceneArtSleepIn.svg",
    audio: "./audio/Retro Event UI 13.mp3",
    choices: [
      { 
        text: "Hit the snooze one more time", 
        sanityChange: 10, 
        hoursUsed: 2,
        newStoryScenario: "Endpoint - Sleep in"
      },
      { 
        text: "Slowly slink out of bed", 
        sanityChange: -10, 
        hoursUsed: 0,
        newStoryScenario: "Wakeup"
      },
      { 
        text: "Set a new alarm for 30 more minutes", 
        sanityChange: 20, 
        hoursUsed: .5,
        newStoryScenario: "Snooze"
      }
    ]
  },
  {
    scenario: "Wake well rested",
    text: ["You race your alarm to see who can stir first. Congrats, you win.", "You lie in wait until your alarm catches up, then turn it off.", "However, you are feeling like a champ. Such a restful night's sleep is going to start your day off right!",  "You plant your feet on the groud, get a solid stretch in, and now you are awake.", "The clock is still ticking down till the big interview. What's next, champ?"],
    imgSrc: "./images/sceneArtBedAwake.svg",
    audio: "./audio/Retro Birds 07.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ]
  },
  {
    scenario: "Wakeup",
    text: ["Your bones creak as you slowly climb out of your bed.", "Your eyes are still sealed shut as your feet hit the floor, so you peel them open to the searing morning light.", "It's time to get moving."],
    imgSrc: "./images/sceneArtBedAwake.svg",
    audio: "./audio/Retro Impact Metal 05.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ]
  },
  {
    scenario: "Shower",
    text: ["You get a nice relaxing shower in. The rising steam helps wake you up.", "You feel ready to take on the world! What's next?"],
    imgSrc: "./images/sceneArtShower.svg",
    audio: "./audio/Retro Event Acute 11.mp3",
    choices: [
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Get dressed", 
        sanityChange: 5, 
        hoursUsed: .5,
        newStoryScenario: "Dress"
      }, 
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ]
  },
  {
    scenario: "Breakfast",
    text: ["You down a hearty bowl of Captain Crunch. Why? Cause you're a captain today.", "Well, it was either that or some Raisin Bran. You made the correct decision.", "What's your next move, captain?"],
    imgSrc: "./images/sceneArtBreakfast.svg",
    audio: "./audio/Retro PowerUP 09.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Get dressed", 
        sanityChange: 5, 
        hoursUsed: .5,
        newStoryScenario: "Dress"
      }, 
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ]
  },
  {
    scenario: "Review",
    text: ["Your notes are scattered around your desk from the night before.", "You mine through them to take away some choice coding concept nuggets.", "It's enough to keep some of the heavy hitter design patterns fresh for today.", "The gears in your brain are back up and running. What's next?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Magic 34.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Get dressed", 
        sanityChange: 5, 
        hoursUsed: .5,
        newStoryScenario: "Dress"
      }, 
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ],
    item: "codeConcept"
  },
  {
    scenario: "Dress",
    text: ["Even though this will be an online technical interview, you don't just go with the bare minimum.", "You pull out all the stops. You have just the outfit for today.", "You bust out those shoes even though they won't be visible. But you know you look good in them.", "Do you put it on now and head to the interview or wait till you are done getting ready?"],
    imgSrc: "./images/sceneArtDress.svg",
    audio: "./audio/Retro Event Acute 08.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Do a 30 minute workout", 
        sanityChange: 30, 
        hoursUsed: .5,
        newStoryScenario: "Workout"
      }
    ]
  },
  {
    scenario: "Workout",
    text: ["Your mind is ripped with knowledge, but it takes more than a fit brain to keep you functioning properly.", "You run through your jazzercise routine, and you are working up a good sweat!", "Whew! Time for a cooldown. What's up next?"],
    imgSrc: "./images/sceneArtWorkout.svg",
    audio: "./audio/Retro PowerUP 09.mp3",
    choices: [
      { 
        text: "Take a shower", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Shower"
      },
      { 
        text: "Eat breakfast", 
        sanityChange: 10, 
        hoursUsed: .5,
        newStoryScenario: "Breakfast"
      },
      { 
        text: "Review notes", 
        sanityChange: -15, 
        hoursUsed: .5,
        newStoryScenario: "Review"
      },
      { 
        text: "Get dressed", 
        sanityChange: 5, 
        hoursUsed: .5,
        newStoryScenario: "Dress"
      }
    ]
  },
  {
    scenario: "Interview",
    text: ["IT'S TIME!", "Opening up your laptop, you feel a small adrenaline rush as your nerves kick in.", "Inhale. Exhale.", "The video call opens and you are greeted by your technical interviewer.", "Introductions go well, and you get right into it.", "The questions pops up on the screen, along with the specs that you'll need to consider.", "Your mind begins looking through its archives to find the right tools for the job.", "Now it's your turn. You squeak out your first question, then get more comfortable with your next.", "As you get more information, you take a first pass at walking through the problem.", "Which route do you take to initially work out the algorithm?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Electronic Burst StereoUP 04.mp3",
    choices: [
      { 
        text: "Toss in a reduce method", 
        sanityChange: -5, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 2",
        codeConcept: "Reduce method"
      },
      { 
        text: "Filter the array", 
        sanityChange: -10, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 2",
        codeConcept: "Filter method"
      },
      { 
        text: "Try throwing a map method in there", 
        sanityChange: -15, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 2",
        codeConcept: "Map method"
      },
      { 
        text: "For loop in a for loop", 
        sanityChange: -30, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 2",
        codeConcept: "Nested for loop"
      },
      { 
        text: "Initialize a large, hard coded array", 
        sanityChange: -40, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 2",
        codeConcept: "Hard coded array"
      },
      { 
        text: "Stare at the screen for 30 minutes", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Fail interview",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Interview part 2",
    text: ["Interesting approach. Can your solution pass the tests?", "You stare at the function for a moment and say a small prayer.", "Pass, pass, pass... fail.", "That's ok, you've got most of it, but something is throwing a wrench in the solution.", "You take a step back and try to think through the logic again. What did you miss?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Event UI 13.mp3",
    choices: [
      { 
        text: "Handle the edge case with a different return statement", 
        sanityChange: -5, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 3",
        codeConcept: "Handle edge cases"
      },
      { 
        text: "Refactor the initial if statement", 
        sanityChange: -20, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 3",
        codeConcept: "Refactor"
      },
      { 
        text: "Include the last element in the loop condition", 
        sanityChange: -25, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 3",
        codeConcept: "Iterate all elements"
      },
      { 
        text: "Console log all the things!", 
        sanityChange: -35, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 3",
        codeConcept: "Console log"
      },
      { 
        text: "Stare at the screen for 20 minutes", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Fail interview",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Interview part 3",
    text: ["Pass, pass, pass... pass!", "You begin to breathe again. You are still in this.", "The interviewer congratulates you on your working, albeit very hacky solution.", "How can you make your solution more efficient?", "You knew your brief respite wasn't going to last long as you enter the next phase of your interview.", "How are you going to make your brute force approach look more elegant?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Event Acute 11.mp3",
    choices: [
      { 
        text: "Try to work in a bucket sort", 
        sanityChange: -10, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 4",
        codeConcept: "Bucket sort"
      },
      { 
        text: "Refactor to a recursive function", 
        sanityChange: -20, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 4",
        codeConcept: "Recursion"
      },
      { 
        text: "Try to perform a merge sort", 
        sanityChange: -25, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 4",
        codeConcept: "Merge sort"
      },
      { 
        text: "Try a bubble sort", 
        sanityChange: -35, 
        hoursUsed: 0,
        newStoryScenario: "Interview part 4",
        codeConcept: "Bubble sort"
      },
      { 
        text: "Stare at the screen for 15 minutes", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Fail interview",
        codeConcept: ""
      }
    ]
  },
  {
    scenario: "Interview part 4",
    text: ["The tests pass again, and your solution is looking much better!", "You feel your confidence rising and can see the light at the end of the tunnel.", "The interviewer congratulates you on your working solution.", "How can you make your solution run in constant time?", "Your blood freezes. The elusive constant time.", "One more time, how can you make this into a rockstar algorithm?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Event Acute 08.mp3",
    choices: [
      { 
        text: "Implement a hash table", 
        sanityChange: -10, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Pass interview",
        codeConcept: "Hash table"
      },
      { 
        text: "Rework to use a counting sort", 
        sanityChange: -20, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Pass interview",
        codeConcept: "Counting sort"
      },
      { 
        text: "Create a radix sort", 
        sanityChange: -25, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Pass interview",
        codeConcept: "Radix sort"
      },
      { 
        text: "Use a binary search tree", 
        sanityChange: -35, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Pass interview",
        codeConcept: "Binary search tree"
      },
      { 
        text: "It's impossible, it can't run faster than this!", 
        sanityChange: 0, 
        hoursUsed: 0,
        newStoryScenario: "Endpoint - Fail interview"
      }
    ]
  },
  {
    scenario: "Endpoint - Pass interview",
    text: ["Congratulations! Your code is a lean, mean, sorting machine.", "The interviewer thanks you for your time and gives you some info on when she will reach out next.", "The video call ends, and you lean back in your chair, relieved.", "You try to stop thinking about programming for a bit. You can always go back over the problem later to keep your skills sharp.", "Well done! You made it through the technical interview.", "What would happen if you tried other approaches to preparing for the interview?"],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro PowerUP 09.mp3",
    choices: [

    ]
  },
  {
    scenario: "Endpoint - Fail interview",
    text: ["You have no clue what happened. You don't know how you could have approached it differently.", "The interviewer thanks you for your time and ends the call.", "You continue to stare in disbelief at your code as you relive the interview in your head.", "Well, it was good practice, you tell yourself, and you will have plenty of time to chew through it now.", "You dust yourself off, take a break, then try working through the problem some more.", "You eventually get it to pass all of the tests and know you will ace the next one."],
    imgSrc: "./images/sceneArtMockInterview.svg",
    audio: "./audio/Retro Turn Off 12.mp3",
    choices: [

    ]
  },
  {
    scenario: "Endpoint - Stressed out",
    text: ["Your brain shuts down.", "You can feel your mind short-circuiting.", "You pushed yourself too hard and now you can't function anymore.", "Any hopes of passing this tech interview are gone.", "Weeks later you are able to get another tech interview lined up.", "Maybe you can pace yourself differently this time?"],
    imgSrc: "./images/sceneArtStressedOut.svg",
    audio: "./audio/Retro Turn Off 12.mp3",
    choices: [

    ]
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

function getScenarioChoiceById(scenario, choiceIdx) {
  let scenarioChoicesObj = storyScenarios.find(e => e.scenario === scenario)
  return scenarioChoicesObj.choices[choiceIdx]
}

function getScenarioChoiceByText(scenario, choiceText) {
  let scenarioChoicesObj = storyScenarios.find(e => e.scenario === scenario)
  return (scenarioChoicesObj.choices.find(e => e.text === choiceText) || null)
}

function getTotalScenarioChoices(scenario) {
  let scenarioChoicesObj = storyScenarios.find(e => e.scenario === scenario)
  return scenarioChoicesObj.choices.length
}

function getScenarioItem(scenario) {
  let sceneObj = storyScenarios.find(e => e.scenario === scenario)
  return sceneObj.item
}

function getSceneArt(scenario) {
  let sceneObj = storyScenarios.find(e => e.scenario === scenario)
  return sceneObj.imgSrc
}

function getSceneSound(scenario) {
  let sceneObj = storyScenarios.find(e => e.scenario === scenario)
  return sceneObj.audio
}

export {
  getStoryText, getDoesStoryNeedAChoice, getScenarioChoiceById, getScenarioChoiceByText, getTotalScenarioChoices, getScenarioItem, getSceneArt, getSceneSound
}