import { useState } from "react";
import { Modal } from "../../../../common/components/Modal/Modal";
import { ModalMessage } from "../../../../common/components/ModalMessage/ModalMessage";
import { ButtonsWrapper } from "../../../../common/components/ButtonsWrapper/ButtonsWrapper";
import { Button } from "../../../../common/components/Button/Button";
import { GameboardPlayerGridShipPlacement } from "../GameboardPlayerGridShipPlacement/GameboardPlayerGridShipPlacement";
import { capitalizeString } from "../../../../common/utils/capitalizeString/capitalizeString";
import './GameLogicModals.scss';
import { useDispatch, useSelector } from "react-redux";
import { 
  handleButtonNewGame,
  handleModalPickOpponentComputer,
  handleModalPickOpponentPlayer,
  handleModalPreGamePlayerOneNameAgainstComputer,
  selectAmountOfColumns,
  selectAmountOfRows,
  selectButtonNextStepText,
  selectComputerName,
  selectComputerWonGame,
  selectEmptyGameboardValue,
  selectHorizontalDirectionValue,
  selectPlayerOneName,
  selectPlayerOneWonGame,
  selectPlayerTwoName,
  selectPlayerTwoWonGame,
  selectShipLengthPropertyText,
  selectShipNamePropertyText,
  selectShowModalGameOver, 
  selectShowModalPickOpponent, 
  selectShowModalPreGamePlayerOneNameAgainstComputer, 
  selectVerticalDirectionValue, 
  updatePlayerOneName, 
  updateShowModalGameOver, 
  updateShowModalPickOpponent
} from "../../gameSlice";
import { getGeneratedRandomGameboardPlayerInitialStates } from "../../../../common/utils/getGeneratedRandomGameboardPlayerInitialStates/getGeneratedRandomGameboardPlayerInitialStates";
import { createRandomGameboard } from "../../../../common/utils/createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "../../../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition";
import { ships } from '../../ships';

export const GameLogicModals = () => {
  const dispatch = useDispatch();

  const showModalGameOver = useSelector(selectShowModalGameOver);
  const playerOneWonGame = useSelector(selectPlayerOneWonGame);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoWonGame = useSelector(selectPlayerTwoWonGame);
  const playerTwoName = useSelector(selectPlayerTwoName);
  const computerWonGame = useSelector(selectComputerWonGame);
  const computerName = useSelector(selectComputerName);
  const showModalPickOpponent = useSelector(selectShowModalPickOpponent);
  const amountOfRows = useSelector(selectAmountOfRows);
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const showModalPreGamePlayerOneNameAgainstComputer = useSelector(selectShowModalPreGamePlayerOneNameAgainstComputer);
  const buttonNextStepText = useSelector(selectButtonNextStepText);

  const generatedRandomGameboardInitialStates = () => {
    return (getGeneratedRandomGameboardPlayerInitialStates(
      createRandomGameboard, 
      amountOfRows, 
      amountOfColumns,
      emptyGameboardValue,
      generateRandomValidShipPosition,
      ships,
      horizontalDirectionValue,
      verticalDirectionValue,
      shipNamePropertyText,
      shipLengthPropertyText
    ));
  }

  return (
    <>
      {
          showModalGameOver
        ? <Modal 
            closeModal={() => dispatch(updateShowModalGameOver(false))}
          >
            <ModalMessage>
              {playerOneWonGame ? playerOneName : playerTwoWonGame ? playerTwoName : computerWonGame ? computerName : "Noone"} won!
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={() => dispatch(handleButtonNewGame())}>Play again</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPickOpponent
        ? <Modal 
            closeModal={() => dispatch(updateShowModalPickOpponent())}
          >
            <ModalMessage>
              Pick your opponent
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={() => dispatch(handleModalPickOpponentComputer(generatedRandomGameboardInitialStates()))}>Computer</Button>
              <Button buttonOnClick={() => dispatch(handleModalPickOpponentPlayer(generatedRandomGameboardInitialStates()))}>Player</Button>
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
                onChange={(e) => dispatch(updatePlayerOneName(capitalizeString(e.target.value)))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={() => dispatch(handleModalPreGamePlayerOneNameAgainstComputer())}>{buttonNextStepText}</Button>
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
