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
export const loopForTheWin = (array) => {
  let tie = false;
  for (let boxValue of array) {
    if (boxValue.value !== "") {
      tie = true;
    }
    else
    {
      tie = false;
    }
  }
  return tie;
};
