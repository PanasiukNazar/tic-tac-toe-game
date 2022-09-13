import React, { useEffect, useMemo, useState } from 'react';
import RestartModal from './RestartModal';
import ResultModal from './ResultModal';
import Settings from './Settings';
import Game from './Game';
import { AVAILABLE_MARKS, SCREEN, OPPONENT_TYPE } from '../constants.js';
import {
  getComputerChoice,
  getWinnerMark,
  setCheckboxIntoField,
} from '../utils';

const Application = () => {
  const [opponent, setOpponent] = useState(OPPONENT_TYPE.PLAYER);
  const [ticMark, setTicMark] = useState(true);
  const [screen, setScreen] = useState('settings');
  const [isTicActive, setTicActive] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [checkboxField, setCheckboxField] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ ticScore: 0, tacScore: 0, ties: 0 });

  const isComputerOpponent = opponent === OPPONENT_TYPE.COMPUTER;
  const isPlayerModeActive = !isComputerOpponent;

  const computerSymbol = isTicActive
    ? AVAILABLE_MARKS.TAC
    : AVAILABLE_MARKS.TIC;
  const playerSymbol = isTicActive ? AVAILABLE_MARKS.TIC : AVAILABLE_MARKS.TAC;

  const winner = useMemo(() => getWinnerMark(checkboxField), [checkboxField]);

  const isTie = !checkboxField.includes(null);
  const isRoundCompleted = !!winner || isTie;
  const isPlayer1Winner = winner === AVAILABLE_MARKS.TIC;
  const isPlayer2Winner = winner === AVAILABLE_MARKS.TAC;

  const onStartGame = (opponentType) => {
    setOpponent(opponentType);
    setScreen(SCREEN.GAME);

    if (
      opponentType === OPPONENT_TYPE.COMPUTER &&
      computerSymbol === AVAILABLE_MARKS.TIC
    ) {
      playComputerTurn();
    }
  };

  const finishGame = () => {
    setScreen(SCREEN.SETTINGS);
    resetScore();
    resetRound();
  };

  const restartGame = () => {
    setModalOpen(false);
    resetScore();
    resetRound();
  };

  const resetScore = () => {
    setScore({ ticScore: 0, tacScore: 0, ties: 0 });
  };

  const resetRound = () => {
    setCheckboxField(Array(9).fill(null));
    setTicActive(true);
  };

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const onCheckboxSelected = (selectedIndex) => {
    playPlayerTurn(selectedIndex);

    if (opponent === OPPONENT_TYPE.COMPUTER) {
      playComputerTurn();
    } else {
      setTicActive(!isTicActive);
    }
  };

  const playPlayerTurn = (selectedIndex) => {
    setCheckboxField((currentCheckboxField) =>
      setCheckboxIntoField(currentCheckboxField, selectedIndex, playerSymbol),
    );
  };

  const playComputerTurn = () => {
    setCheckboxField((currentCheckboxField) => {
      const selectedIndex = getComputerChoice({
        checkboxField: currentCheckboxField,
        computerSymbol,
        playerSymbol,
      });

      return setCheckboxIntoField(
        currentCheckboxField,
        selectedIndex,
        computerSymbol,
      );
    });
  };

  useEffect(() => {
    let { ticScore, tacScore, ties } = score;

    if (winner === AVAILABLE_MARKS.TIC) {
      ticScore += 1;
      setScore({ ...score, ticScore });
    }

    if (winner === AVAILABLE_MARKS.TAC) {
      tacScore += 1;
      setScore({ ...score, tacScore });
    }

    if (winner === '' && !checkboxField.includes(null)) {
      ties += 1;
      setScore({ ...score, ties });
    }
  }, [winner, checkboxField]);

  return [
    <div className='main'>
      {screen === SCREEN.SETTINGS ? (
        <Settings
          isTicActive={isTicActive}
          onToggleMarks={() => setTicActive(!isTicActive)}
          onStartGame={onStartGame}
        />
      ) : null}

      {screen === SCREEN.GAME ? (
        <Game
          score={score}
          isTicActive={isTicActive}
          onToggleModal={openModal}
          checkboxField={checkboxField}
          isPlayerModeActive={isPlayerModeActive}
          setMarkIntoCheckbox={onCheckboxSelected}
        />
      ) : null}

      {isModalOpen ? (
        <RestartModal
          onCancel={closeModal}
          onRestart={() => {
            closeModal();
            restartGame();
          }}
        />
      ) : null}

      {isRoundCompleted ? (
        <ResultModal
          winner={winner}
          isComputerOpponent={isComputerOpponent}
          isPlayer1Winner={isPlayer1Winner}
          isTie={isTie}
          onFinishGame={() => {
            closeModal();
            finishGame();
          }}
          onNextRound={() => {
            closeModal();
            resetRound();
          }}
        />
      ) : null}
    </div>,
  ];
};

export default Application;
