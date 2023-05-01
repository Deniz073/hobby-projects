"use client"

import React, { useEffect, useState } from 'react';
import styles from './Memory.module.scss';
import classNames from 'classnames';

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

function Memory() {
  const [currentGameStatus, setCurrentGameStatus] = useState<string>('playing');
  const [board, setBoard] = useState<Card[]>(getCards());
  const [chosenCards, setChosenCards] = useState<number[]>([]);
  const [foundCards, setFoundCards] = useState<number[]>([]);

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

  // Check if all cards are found
  useEffect(() => {
    if (currentGameStatus === 'playing' && foundCards.length === board.length) {
      setCurrentGameStatus('won');
    }
  }, [foundCards]);



  return (
    <div className="max-w-[80vh] max-h-[80vh] mx-auto mt-36">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Classic Memory Game</h1>
      <div className="grid grid-cols-4 gap-3 m-4">
        {board.map((card, index) => {
          const isChosen = chosenCards.includes(index);
          const isFound = foundCards.includes(index);
          const isClickable = !(isChosen || isFound);

          return (
            <div
              className="relative bg-gray-500 h-0 pt-[100%] cursor-pointer rounded-full"
              key={index}
              onClick={() => isClickable && chooseCard(index)}
            >
              <div
                className={classNames({
                  [styles['card__backface']]: true,
                  [styles['card__backface--chosen']]: isChosen,
                  [styles['card__backface--found']]: isFound
                })}
              />

              <div
                className={classNames({
                  [styles['card__icon-container']]: true,
                  [styles['card__icon-container--chosen']]: isChosen,
                  [styles['card__icon-container--found']]: isFound,
                  [styles['card__icon-container--board-complete']]: isComplete
                })}
              >
                <div className={classNames({
                  [styles['card__icon']]: true,
                  [styles['card__icon--completed']]: isComplete
                })}
                >
                  {card}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memory;
