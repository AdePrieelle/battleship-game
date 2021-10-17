import { useState } from 'react';
// import { createGameboard } from './createGameboard/createGameboard';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  // const [gameboard, setGameboard] = useState(createGameboard(amountOfRows, amountOfColumns, "empty"));

  // place ships on default positions to test functionality
  const [gameboardPlayer, setGameboardPlayer] = useState([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
  // console.log(gameboardPlayer);
  const [gameboardComputer, setGameboardComputer] = useState([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
  // console.log(gameboardComputer);

  // update the gameboard with events
  const handleMovePlayer = (event) => {
    // console.log(event);
    // console.log(gameboardPlayer[event.target.id]);
    if (gameboardPlayer[event.target.id] !== "empty" 
        && gameboardPlayer[event.target.id] !== "hit" 
        && gameboardPlayer[event.target.id] !== "miss"
    ) {
      let newState = [...gameboardPlayer];
      newState[event.target.id] = "hit";
      setGameboardPlayer(newState)
    } else if (gameboardPlayer[event.target.id] === "empty") {
      let newState = [...gameboardPlayer];
      newState[event.target.id] = "miss";
      setGameboardPlayer(newState)
    }
    return;
  }

  let initialRandomComputerNumberArray = Array.from(Array(100).keys());
  // add random computer turn move logic here
  const [randomComputerNumberArray, setRandomComputerNumberArray] = useState(initialRandomComputerNumberArray);

  const handleMoveComputer = () => {
    console.log("computer clicked");

    // function randomIntFromInterval(min, max) { // min and max included 
    //   return Math.floor(Math.random() * (max - min + 1) + min)
    // }
    // let randomNumber = randomIntFromInterval(0, 99);
    
    

    const randomItemFromArray = () => {
      // console.log(randomComputerNumberArray.length);
      let randomComputerNumber = Math.floor(Math.random() * randomComputerNumberArray.length);
      return randomComputerNumber;
    }
    let randomItemFromArrayValue = randomItemFromArray();
    console.log(randomItemFromArrayValue);
    let randomComputerNumber = randomComputerNumberArray[randomItemFromArrayValue];
    console.log(randomComputerNumber);
    let copyRandomComputerNumberArray = [...randomComputerNumberArray];
    // console.log(copyRandomComputerNumberArray);
    copyRandomComputerNumberArray.splice(randomItemFromArrayValue, 1);
    // console.log(copyRandomComputerNumberArray);
    setRandomComputerNumberArray(copyRandomComputerNumberArray);

    // array[Math.floor(Math.random() * array.length)];


    if (gameboardComputer[randomComputerNumber] !== "empty" 
        && gameboardComputer[randomComputerNumber] !== "hit" 
        && gameboardComputer[randomComputerNumber] !== "miss"
    ) {
      let newState = [...gameboardComputer];
      newState[randomComputerNumber] = "hit";
      setGameboardComputer(newState)
    } else if (gameboardComputer[randomComputerNumber] === "empty") {
      let newState = [...gameboardComputer];
      newState[randomComputerNumber] = "miss";
      setGameboardComputer(newState)
    }
    return;
  }

  return (
    <div className="gameboard-wrapper">
      <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardPlayer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardPlayer[id] === "hit" ? " hit" : gameboardPlayer[id] === "miss" ? " miss" : ""}`} onClick={handleMovePlayer}></div>
        ))}
      </div>
      <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardComputer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardComputer[id] === "hit" ? " hit" : gameboardComputer[id] === "miss" ? " miss" : ""}`} onClick={handleMoveComputer}></div>
        ))}
      </div>
  </div>
  )
}


