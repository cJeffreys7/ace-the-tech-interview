const items = [
  {
    type: "booster",
    name: "Coffee",
    description: "Electricity in a tumbler",
    sanityBoost: 30
  },
  {
    type: "booster",
    name: "Cookie",
    description: "Sweet, nutty deliciousness",
    sanityBoost: 20
  }
]

function getItemByName(name){
  return items.find(e => e.name === name)
}

export {
  getItemByName
}