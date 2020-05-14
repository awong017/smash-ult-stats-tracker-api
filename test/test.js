const matches = [
  {
    id: "m1",
    date: 0980980098,
    user: "u1",
    player: 8,
    opponent: 9,
    outcome: "win"
  },
  {
    id: "m2",
    date: 0980980098,
    user: "u1",
    player: 8,
    opponent: 9,
    outcome: "loss"
  },
  {
    id: "m3",
    date: 0980980098,
    user: "u1",
    player: 8,
    opponent: 9,
    outcome: "win"
  },
]

console.log(matches.findIndex(m => m.id === "m2"))