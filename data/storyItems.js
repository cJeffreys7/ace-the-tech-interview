const items = [
  {
    type: "booster",
    name: "Coffee",
    description: "Electricity in a tumbler",
    sanityBoost: 30,
    icon: "./images/coffeeItem.svg"
  },
  {
    type: "booster",
    name: "Cookie",
    description: "Sweet, nutty deliciousness",
    sanityBoost: 20,
    icon: "./images/cookieItem.svg"
  },
  {
    type: "codeConcept",
    name: "Nested for loop",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Hard coded array",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Map method",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Filter method",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Reduce method",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Refactor",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Iterate all elements",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Console log",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Handle edge cases",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Bubble sort",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Merge sort",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Recursion",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Bucket sort",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Binary search tree",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Radix sort",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Counting sort",
    description: "",
    icon: ""
  },
  {
    type: "codeConcept",
    name: "Hash table",
    description: "",
    icon: ""
  }
]

function getItemByName(name){
  return items.find(e => e.name === name)
}

function getItemsOfType(type){
  return items.filter(e => e.type === type)
}

export {
  getItemByName, getItemsOfType
}