import React, { useState, useEffect } from "react";

import Box from "./Box";
import Alert from "../UIElements/Alert";
import { checkGameForTie, checkGameForWinner } from "../BoxArray";
import "./Board.css";

const boxValueObjectData = [
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

const Board = (props) => {
  const [tie, setTie] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameWinnerText, setGameWinnerText] = useState("");
  const [uiBoxArray, setUiBoxArray] = useState(
    structuredClone(boxValueObjectData)
  );

  const computerTurnHandler = () => {
    if (winner) {
      return;
    }

    const tempArray = [...uiBoxArray];
    for (let box of tempArray) {
      let computerRandomChoice = Math.floor(Math.random() * 8);
      if (
        (box.id === computerRandomChoice && box.visible === false) ||
        box.visible === false
      ) {
        let foundBoxElement = tempArray.find(
          (element) => element.id === box.id
        );

        foundBoxElement.value = "O";
        foundBoxElement.visible = true;
        foundBoxElement.assigner = "Computer";

        let updatedBoxElement = tempArray.findIndex(
          (element) => element.id === foundBoxElement.id
        );
        tempArray[updatedBoxElement] = foundBoxElement;
        setUiBoxArray([...tempArray]);
        break;
      } else {
        continue;
      }
    }
  };
  // Added logic handler.
  const setObjectArrayUI = (id) => {
    let tempArray = [...uiBoxArray];

    let boxFound = tempArray.find((box) => box.id === id);
    boxFound.id = id;
    boxFound.value = "X";
    boxFound.assigner = "Player";
    boxFound.visible = true;

    const boxTriggeredIndex = tempArray.findIndex((box) => box.id === id);
    tempArray[boxTriggeredIndex] = boxFound;

    setUiBoxArray([...tempArray]);
    computerTurnHandler();
  };
  const resetGame = () => {
    setGameWinnerText("");
    setWinner(false);
    setUiBoxArray(structuredClone(boxValueObjectData));
  };

  useEffect(() => {
    if (!winner) {
      let tempArray = uiBoxArray;
      const { winnerFound } = checkGameForWinner(tempArray);
      if (winnerFound) {
        setWinner(winnerFound);
        setGameWinnerText("We have a winner.");
      }
    }
    return;
  }, [winner, uiBoxArray]);

  return (
    <section className="box-container">
      {tie && <Alert winnerText={"Tie"} onClick={resetGame} />}
      {winner && <Alert winnerText={gameWinnerText} onClick={resetGame} />}
      {!winner &&
        uiBoxArray.map((box) => (
          <Box
            id={box.id}
            key={box.id}
            onClick={setObjectArrayUI}
            value={box.value}
          />
        ))}
    </section>
  );
};

export default Board;
