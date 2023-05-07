import { useState, useEffect } from 'react';

type Card = string;

const uniqueCardsArray: Card[] = [
  '🍎', '🍊', '🍇', '🍓', '🍉', '🍌', '🥝', '🍒'
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice(0);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

function getCards(): Card[] {
  return shuffleArray([...uniqueCardsArray, ...uniqueCardsArray]);
}

type GameStatus = 'playing' | 'won';

interface MemoryHook {
  isComplete: boolean;
  attemptedMoves: number;
  board: Card[];
  chosenCards: number[];
  foundCards: number[];
  chooseCard: (index: number) => void;
}

export function useMemory(): MemoryHook {
  const [currentGameStatus, setCurrentGameStatus] = useState<GameStatus>('playing');
  const [board, setBoard] = useState<Card[]>(getCards());
  const [chosenCards, setChosenCards] = useState<number[]>([]);
  const [foundCards, setFoundCards] = useState<number[]>([]);
  const [attemptedMoves, setAttemptedMoves] = useState<number>(0);

  const isComplete = currentGameStatus === 'won';

  function chooseCard(index: number) {
    setChosenCards(prevChosenCards => {
      if (prevChosenCards.length < 2) {
        return [...prevChosenCards, index];
      } else {
        return [index];
      }
    });
  }

  useEffect(() => {
    if (chosenCards.length === 2) {
      setAttemptedMoves(prevAttemptedMoves => prevAttemptedMoves + 1);
      if (board[chosenCards[0]] === board[chosenCards[1]]) {
        setFoundCards(prevFoundCards => [...prevFoundCards, ...chosenCards]);
        setChosenCards([]);
      } else {
        setTimeout(() => {
          setChosenCards(prevChosenCards => prevChosenCards.filter(card => !chosenCards.includes(card)));
        }, 1000);
      }
    }
  }, [chosenCards, board]);

  useEffect(() => {
    if (currentGameStatus === 'playing' && foundCards.length === board.length) {
      setCurrentGameStatus('won');
    }
  }, [foundCards]);

  return {
    currentGameStatus,
    attemptedMoves,
    isComplete,
    board,
    chosenCards,
    foundCards,
    chooseCard
  };
}