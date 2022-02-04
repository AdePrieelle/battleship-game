import { useState } from "react";
import { Modal } from "../../../../common/components/Modal/Modal";
import { ModalMessage } from "../../../../common/components/ModalMessage/ModalMessage";
import { ButtonsWrapper } from "../../../../common/components/ButtonsWrapper/ButtonsWrapper";
import { Button } from "../../../../common/components/Button/Button";
import { GameboardPlayerGridShipPlacement } from "../GameboardPlayerGridShipPlacement/GameboardPlayerGridShipPlacement";
import { capitalizeString } from "../../../../common/utils/capitalizeString/capitalizeString";
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
  setShowGameboards,
  buttonNextStepText,
  shipNamePropertyText,
  shipLengthPropertyText
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
            <ModalMessage>
              {playerOneWonGame ? playerOneName : playerTwoWonGame ? playerTwoName : computerWonGame ? computerName : "Noone"} won!
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleButtonNewGame}>Play again</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPickOpponent
        ? <Modal 
            setShowModal={setShowModalPickOpponent}
          >
            <ModalMessage>
              Pick your opponent
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPickOpponentComputer}>Computer</Button>
              <Button buttonOnClick={handleModalPickOpponentPlayer}>Player</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGamePlayerOneNameAgainstComputer
        ? 
          <Modal>
            <ModalMessage>
              <h1>Enter Player 1's name</h1>
              <input 
                type="text" 
                className="input-name"
                value={playerOneName}
                onChange={(e) => setPlayerOneName(capitalizeString(e.target.value))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerOneNameAgainstComputer}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer
        ?
          <>
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
              playerName={playerOneName}
              buttonNextStepText={buttonNextStepText}
              shipNamePropertyText={shipNamePropertyText}
              shipLengthPropertyText={shipLengthPropertyText}
            />
          </>
        : null
      }

      {
          showModalPreGamePlayerOneName
        ? 
          <Modal>
            <ModalMessage>
              <h1>Enter Player 1's name</h1>
              <input 
                type="text" 
                className="input-name"
                value={playerOneName}
                onChange={(e) => setPlayerOneName(capitalizeString(e.target.value))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerOneName}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGamePlayerTwoName
        ? 
          <Modal>
            <ModalMessage>
              <h1>Enter Player 2's name</h1>
              <input 
                type="text" 
                className="input-name"
                value={playerTwoName}
                onChange={(e) => setPlayerTwoName(capitalizeString(e.target.value))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGamePlayerTwoName}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerOneGameboard
        ? 
          <Modal>
            <ModalMessage>
              Hand over to {playerOneName}
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchToPlayerOneGameboard}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null 
      }

      {
          showModalPreGameGameboardPlayerOneGridShipPlacement
        ?
          <>
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
              playerName={playerOneName}
              buttonNextStepText={buttonNextStepText}
              shipNamePropertyText={shipNamePropertyText}
              shipLengthPropertyText={shipLengthPropertyText}
            />
          </>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerTwoGameboard
        ? <Modal>
            <ModalMessage>
              Hand over to {playerTwoName}
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerTwo}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameGameboardPlayerTwoGridShipPlacement
        ?
          <>
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
              playerName={playerTwoName}
              buttonNextStepText={buttonNextStepText}
              shipNamePropertyText={shipNamePropertyText}
              shipLengthPropertyText={shipLengthPropertyText}
            />
          </>
        : null
      }

      {
          showModalPreGameSwitchTurnToPlayerOne
        ? <Modal>
            <ModalMessage>
              Hand over to {playerOneName}
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerOne}>Start game</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalGameSwitchTurnToPlayerTwo
        ? <Modal>
            <ModalMessage>
              Hand over to {playerTwoName}
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalGameSwitchTurnToPlayerTwo}>Go</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalGameSwitchTurnToPlayerOne
        ? <Modal>
            <ModalMessage>
              Hand over to {playerOneName}
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={handleModalGameSwitchTurnToPlayerOne}>Go</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }
    </>
  );
};
