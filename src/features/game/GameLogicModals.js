import { useState } from "react";
import { Modal } from "./Modal/Modal";
import { ModalMessage } from "./ModalMessage/ModalMessage";
import { ModalButtonsWrapper } from "./ModalButtonsWrapper/ModalButtonsWrapper";
import { Button } from "./Button/Button";
import { GameboardPlayerGridShipPlacement } from "./GameboardPlayerGridShipPlacement";
import './GameLogicModals.scss';

export const GameLogicModals = ({
  setShowModalPickOpponent,
  handleNewGame,
  setIsPlayerTwoComputer,
  handleStartGame,
  setShowModalGameSwitchTurnToPlayerTwo,
  setShowModalGameSwitchTurnToPlayerOne,
  showModalGameOver,
  setShowModalGameOver,
  playerOneWonGame,
  playerTwoWonGame,
  playerOneName,
  playerTwoName,
  computerWonGame,
  computerName,
  handleButtonNewGame,
  showModalPickOpponent,
  setPlayerOneName,
  setPlayerTwoName,
  showModalGameSwitchTurnToPlayerTwo,
  showModalGameSwitchTurnToPlayerOne,
  amountOfRows,
  amountOfColumns,
  emptyGameboardValue,
  horizontalDirectionValue,
  verticalDirectionValue,
  isPlayerTwoComputer,
  setGameboardPlayerOneInitialState,
  setGameboardPlayerTwoInitialState,
  setShowGameboards
}) => {
  // pre game logic for opponent is computer
  const [showModalPreGamePlayerOneNameAgainstComputer, setShowModalPreGamePlayerOneNameAgainstComputer] = useState(false);
  const [showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer, setShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer] = useState(false);
  
  // pre game logic for opponent is a player
  const [showModalPreGamePlayerOneName, setShowModalPreGamePlayerOneName] = useState(false);
  const [showModalPreGamePlayerTwoName, setShowModalPreGamePlayerTwoName] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerOneGameboard, setShowModalPreGameSwitchTurnToPlayerOneGameboard] = useState(false);
  const [showModalPreGameGameboardPlayerOneGridShipPlacement, setShowModalPreGameGameboardPlayerOneGridShipPlacement] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerTwoGameboard, setShowModalPreGameSwitchTurnToPlayerTwoGameboard] = useState(false);
  const [showModalPreGameGameboardPlayerTwoGridShipPlacement, setShowModalPreGameGameboardPlayerTwoGridShipPlacement] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerOne, setShowModalPreGameSwitchTurnToPlayerOne] = useState(false);

  // Pre game opponent is a computer logic
  const handleModalPickOpponentComputer = () => {
    setShowModalPickOpponent(false);
    handleNewGame();
    setIsPlayerTwoComputer(true);
    setShowGameboards(false);
    setShowModalPreGamePlayerOneNameAgainstComputer(true);
  }

  const handleModalPreGamePlayerOneNameAgainstComputer = () => {
    setShowModalPreGamePlayerOneNameAgainstComputer(false);
    setShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer(true);
  }

  // Pre game opponent is a player logic
  const handleModalPickOpponentPlayer = () => {
    setShowModalPickOpponent(false);
    handleNewGame();
    setIsPlayerTwoComputer(false);
    setShowGameboards(false);
    setShowModalPreGamePlayerOneName(true);
  }

  const handleModalPreGamePlayerOneName = () => {
    setShowModalPreGamePlayerOneName(false);
    setShowModalPreGamePlayerTwoName(true);
  }

  const handleModalPreGamePlayerTwoName = () => {
    setShowModalPreGamePlayerTwoName(false);
    setShowModalPreGameSwitchTurnToPlayerOneGameboard(true);
  }

  const handleModalPreGameSwitchToPlayerOneGameboard = () => {
    setShowModalPreGameSwitchTurnToPlayerOneGameboard(false);
    setShowModalPreGameGameboardPlayerOneGridShipPlacement(true);
  }

  const handleModalPreGameSwitchTurnToPlayerTwo = () => {
    setShowModalPreGameSwitchTurnToPlayerTwoGameboard(false);
    setShowModalPreGameGameboardPlayerTwoGridShipPlacement(true);
  }

  const handleModalPreGameSwitchTurnToPlayerOne = () => {
    setShowModalPreGameSwitchTurnToPlayerOne(false);
    setShowGameboards(true);
    handleStartGame();
  }

  // modal game switch turns for opponent is a player
  const handleModalGameSwitchTurnToPlayerTwo = () => {
    setShowModalGameSwitchTurnToPlayerTwo(false);
    setShowGameboards(true);
  }

  const handleModalGameSwitchTurnToPlayerOne = () => {
    setShowModalGameSwitchTurnToPlayerOne(false);
    setShowGameboards(true);
  }

  return (
    <>
      {
          showModalGameOver
        ? <Modal 
            setShowModal={setShowModalGameOver}
          >
            <ModalMessage 
              modalMessage={`${playerOneWonGame ? playerOneName : playerTwoWonGame ? playerTwoName : computerWonGame ? computerName : "Noone"} won!`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleButtonNewGame}>Play again</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPickOpponent
        ? <Modal 
            setShowModal={setShowModalPickOpponent}
          >
            <ModalMessage 
              modalMessage={"Pick your opponent"}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPickOpponentComputer}>Computer</Button>
              <Button buttonOnClick={handleModalPickOpponentPlayer}>Player</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGamePlayerOneNameAgainstComputer
        ? 
          <Modal 
            setShowModal={setShowModalPreGamePlayerOneNameAgainstComputer}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={
                <>
                  <h1>{`Enter Player 1's name`}</h1>
                  <input 
                    type="text" 
                    className="input-name"
                    value={playerOneName}
                    onChange={(e) => setPlayerOneName(e.target.value)}
                  />
                </>
              }
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerOneNameAgainstComputer}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer
        ?
          <>
            <h1>{`${playerOneName}'s ship placements`}</h1>
            <GameboardPlayerGridShipPlacement
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              emptyGameboardValue={emptyGameboardValue}
              horizontalDirectionValue={horizontalDirectionValue}
              verticalDirectionValue={verticalDirectionValue}
              setGameboardPlayerInitialState={setGameboardPlayerOneInitialState}
              setShowModalPreGameGameboardPlayerGridShipPlacement={setShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer}
              handleStartGame={handleStartGame}
              isPlayerTwoComputer={isPlayerTwoComputer}
              setShowGameboards={setShowGameboards}
            />
          </>
        : null
      }

      {
          showModalPreGamePlayerOneName
        ? 
          <Modal 
            setShowModal={setShowModalPreGamePlayerOneName}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={
                <>
                  <h1>{`Enter Player 1's name`}</h1>
                  <input 
                    type="text" 
                    className="input-name"
                    value={playerOneName}
                    onChange={(e) => setPlayerOneName(e.target.value)}
                  />
                </>
              }
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerOneName}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGamePlayerTwoName
        ? 
          <Modal 
            setShowModal={setShowModalPreGamePlayerTwoName}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={
                <>
                  <h1>{`Enter Player 2's name`}</h1>
                  <input 
                    type="text" 
                    className="input-name"
                    value={playerTwoName}
                    onChange={(e) => setPlayerTwoName(e.target.value)}
                  />
                </>
              }
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerTwoName}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerOneGameboard
        ? 
          <Modal 
            setShowModal={setShowModalPreGameSwitchTurnToPlayerOneGameboard}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={`Hand over to ${playerOneName}`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchToPlayerOneGameboard}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null 
      }

      {
          showModalPreGameGameboardPlayerOneGridShipPlacement
        ?
          <>
            <h1>{`${playerOneName}'s ship placements`}</h1>
            <GameboardPlayerGridShipPlacement
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              emptyGameboardValue={emptyGameboardValue}
              horizontalDirectionValue={horizontalDirectionValue}
              verticalDirectionValue={verticalDirectionValue}
              setGameboardPlayerInitialState={setGameboardPlayerOneInitialState}
              setShowModalPreGameGameboardPlayerGridShipPlacement={setShowModalPreGameGameboardPlayerOneGridShipPlacement}
              handleStartGame={handleStartGame}
              isPlayerTwoComputer={isPlayerTwoComputer}
              setNextModal={setShowModalPreGameSwitchTurnToPlayerTwoGameboard}
            />
          </>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerTwoGameboard
        ? <Modal 
            setShowModal={setShowModalPreGameSwitchTurnToPlayerTwoGameboard}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={`Hand over to ${playerTwoName}`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerTwo}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameGameboardPlayerTwoGridShipPlacement
        ?
          <>
            <h1>{`${playerTwoName}'s ship placements`}</h1>
            <GameboardPlayerGridShipPlacement
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              emptyGameboardValue={emptyGameboardValue}
              horizontalDirectionValue={horizontalDirectionValue}
              verticalDirectionValue={verticalDirectionValue}
              setGameboardPlayerInitialState={setGameboardPlayerTwoInitialState}
              setShowModalPreGameGameboardPlayerGridShipPlacement={setShowModalPreGameGameboardPlayerTwoGridShipPlacement}
              handleStartGame={handleStartGame}
              isPlayerTwoComputer={isPlayerTwoComputer}
              setNextModal={setShowModalPreGameSwitchTurnToPlayerOne}
            />
          </>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerOne
        ? <Modal 
            setShowModal={setShowModalPreGameSwitchTurnToPlayerOne}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={`Hand over to ${playerOneName}`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerOne}>Start game</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalGameSwitchTurnToPlayerTwo
        ? <Modal 
            setShowModal={setShowModalGameSwitchTurnToPlayerTwo}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={`Hand over to ${playerTwoName}`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalGameSwitchTurnToPlayerTwo}>Go</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalGameSwitchTurnToPlayerOne
        ? <Modal 
            setShowModal={setShowModalGameSwitchTurnToPlayerOne}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={`Hand over to ${playerOneName}`}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalGameSwitchTurnToPlayerOne}>Go</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }
    </>
  );
};
