import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/components/Button/Button";
import { ButtonsWrapper } from "../../../../common/components/ButtonsWrapper/ButtonsWrapper";
import { Modal } from "../../../../common/components/Modal/Modal";
import { ModalMessage } from "../../../../common/components/ModalMessage/ModalMessage";
import { capitalizeString } from "../../../../common/utils/capitalizeString/capitalizeString";
import { createRandomGameboard } from "../../../../common/utils/createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "../../../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition";
import { getGeneratedRandomGameboardPlayerInitialStates } from "../../../../common/utils/getGeneratedRandomGameboardPlayerInitialStates/getGeneratedRandomGameboardPlayerInitialStates";
import {
  handleButtonNewGame,
  handleModalGameSwitchTurnToPlayerOne,
  handleModalGameSwitchTurnToPlayerTwo,
  handleModalPickOpponentComputer,
  handleModalPickOpponentPlayer,
  handleModalPreGamePlayerOneName,
  handleModalPreGamePlayerOneNameAgainstComputer,
  handleModalPreGamePlayerTwoName,
  handleModalPreGameSwitchToPlayerOneGameboard,
  handleModalPreGameSwitchTurnToPlayerOne,
  handleModalPreGameSwitchTurnToPlayerTwo,
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
  selectShips,
  selectShowModalGameOver,
  selectShowModalGameSwitchTurnToPlayerOne,
  selectShowModalGameSwitchTurnToPlayerTwo,
  selectShowModalPickOpponent,
  selectShowModalPreGameGameboardPlayerOneGridShipPlacement,
  selectShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer,
  selectShowModalPreGameGameboardPlayerTwoGridShipPlacement,
  selectShowModalPreGamePlayerOneName,
  selectShowModalPreGamePlayerOneNameAgainstComputer,
  selectShowModalPreGamePlayerTwoName,
  selectShowModalPreGameSwitchTurnToPlayerOne,
  selectShowModalPreGameSwitchTurnToPlayerOneGameboard,
  selectShowModalPreGameSwitchTurnToPlayerTwoGameboard,
  selectVerticalDirectionValue,
  updatePlayerOneName,
  updatePlayerTwoName,
  updateShowModalGameOver,
  updateShowModalPickOpponent
} from "../../gameSlice";
import { GameboardPlayerGridShipPlacement } from "../GameboardPlayerGridShipPlacement/GameboardPlayerGridShipPlacement";
import './GameLogicModals.scss';

export const GameLogicModals = () => {
  const dispatch = useDispatch();
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const buttonNextStepText = useSelector(selectButtonNextStepText);
  const computerName = useSelector(selectComputerName);
  const computerWonGame = useSelector(selectComputerWonGame);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerOneWonGame = useSelector(selectPlayerOneWonGame);
  const playerTwoName = useSelector(selectPlayerTwoName);
  const playerTwoWonGame = useSelector(selectPlayerTwoWonGame);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const ships = useSelector(selectShips);
  const showModalGameOver = useSelector(selectShowModalGameOver);
  const showModalGameSwitchTurnToPlayerOne = useSelector(selectShowModalGameSwitchTurnToPlayerOne);
  const showModalGameSwitchTurnToPlayerTwo  = useSelector(selectShowModalGameSwitchTurnToPlayerTwo);
  const showModalPickOpponent = useSelector(selectShowModalPickOpponent);
  const showModalPreGameGameboardPlayerOneGridShipPlacement = useSelector(selectShowModalPreGameGameboardPlayerOneGridShipPlacement);
  const showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer = useSelector(selectShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer);
  const showModalPreGameGameboardPlayerTwoGridShipPlacement = useSelector(selectShowModalPreGameGameboardPlayerTwoGridShipPlacement);
  const showModalPreGamePlayerOneName = useSelector(selectShowModalPreGamePlayerOneName);
  const showModalPreGamePlayerOneNameAgainstComputer = useSelector(selectShowModalPreGamePlayerOneNameAgainstComputer);
  const showModalPreGamePlayerTwoName = useSelector(selectShowModalPreGamePlayerTwoName);
  const showModalPreGameSwitchTurnToPlayerOne = useSelector(selectShowModalPreGameSwitchTurnToPlayerOne);
  const showModalPreGameSwitchTurnToPlayerOneGameboard = useSelector(selectShowModalPreGameSwitchTurnToPlayerOneGameboard);
  const showModalPreGameSwitchTurnToPlayerTwoGameboard = useSelector(selectShowModalPreGameSwitchTurnToPlayerTwoGameboard);
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);

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
  };

  return (
    <>
      {
          showModalGameOver
        ? <Modal closeModal={() => dispatch(updateShowModalGameOver(false))}>
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
        ? <Modal closeModal={() => dispatch(updateShowModalPickOpponent(false))}>
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
            <GameboardPlayerGridShipPlacement isPlayerOne={true} />
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
                onChange={(e) => dispatch(updatePlayerOneName(capitalizeString(e.target.value)))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={() => dispatch(handleModalPreGamePlayerOneName())}>{buttonNextStepText}</Button>
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
                onChange={(e) => dispatch(updatePlayerTwoName(capitalizeString(e.target.value)))}
              />
            </ModalMessage>
            <ButtonsWrapper>
              <Button buttonOnClick={() => dispatch(handleModalPreGamePlayerTwoName())}>{buttonNextStepText}</Button>
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
              <Button buttonOnClick={() => dispatch(handleModalPreGameSwitchToPlayerOneGameboard())}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null 
      }

      {
          showModalPreGameGameboardPlayerOneGridShipPlacement
        ?
          <>
            <GameboardPlayerGridShipPlacement isPlayerOne={true} />
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
              <Button buttonOnClick={() => dispatch(handleModalPreGameSwitchTurnToPlayerTwo())}>{buttonNextStepText}</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalPreGameGameboardPlayerTwoGridShipPlacement
        ?
          <>
            <GameboardPlayerGridShipPlacement isPlayerOne={false} />
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
              <Button buttonOnClick={() => dispatch(handleModalPreGameSwitchTurnToPlayerOne())}>Start game</Button>
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
              <Button buttonOnClick={() => dispatch(handleModalGameSwitchTurnToPlayerTwo())}>Go</Button>
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
              <Button buttonOnClick={() => dispatch(handleModalGameSwitchTurnToPlayerOne())}>Go</Button>
            </ButtonsWrapper>
          </Modal>
        : null
      }
    </>
  );
};
