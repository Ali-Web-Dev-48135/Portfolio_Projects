console.log("Imported From Box Array");
export const boxValueObjectData = [
  {
    id: 1,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 2,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 3,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 4,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 5,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 6,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 7,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 8,
    value: "",
    assigner: "",
    visible: false,
  },
  {
    id: 9,
    value: "",
    assigner: "",
    visible: false,
  },
];

// CONTINUE WITH THE TIE LOGIC.
export const checkGameForTie = (array) => {
  let tie = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].value !== "") {
      tie = true;
    } else {
      tie = false;
    }
  }
  return tie;
};

export const checkGameForWinner = (array) => {
  const X = "X";
  const O = "O";
  let winnerFound = false;

  if (
    (array[0].value === X && array[1].value === X && array[2].value === X) ||
    (array[0].value === O && array[1].value === O && array[2].value === O) ||
    (array[3].value === X && array[4].value === X && array[5].value === X) ||
    (array[3].value === O && array[4].value === O && array[5].value === O) ||
    (array[0].value === X && array[4].value === X && array[8].value === X) ||
    (array[0].value === O && array[4].value === O && array[8].value === O) ||
    (array[3].value === X && array[4].value === X && array[5].value === X) ||
    (array[3].value === O && array[4].value === O && array[5].value === O) ||
    (array[1].value === X && array[4].value === X && array[7].value === X) ||
    (array[1].value === O && array[4].value === O && array[7].value === O) ||
    (array[6].value === X && array[7].value === X && array[8].value === X) ||
    (array[6].value === O && array[7].value === O && array[8].value === O)
  ) {
    winnerFound = true;
  } else {
    console.log("No winner found yet.");
  }

  return { winnerFound };
};

/*
  Live Session Week 1.

*/