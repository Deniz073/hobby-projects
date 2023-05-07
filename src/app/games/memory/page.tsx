"use client"

import styles from './Memory.module.scss';
import { useMemory } from '@/hooks/UseMemory';
import classNames from 'classnames';
import { motion } from 'framer-motion';


function Memory() {
  const { isComplete, board, chosenCards, foundCards, attemptedMoves, chooseCard } = useMemory();

  return (
    <div className="max-w-[80vh] max-h-[80vh] mx-auto mt-36">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Classic Memory Game</h1>
      <p className="text-center mb-4 text-gray-500">Attempted Moves: {attemptedMoves}</p>
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
              <motion.div
                animate={{ transform: isChosen || isFound ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className={classNames({
                  [styles['card__backface']]: true
                })}
              />

              <motion.div
                animate={{ transform: isChosen || isFound ? 'rotateY(0deg)' : 'rotateY(180deg)', transformStyle: 'preserve-3d' }}
                transition={{ duration: 0.2, ease: 'easeInOut'  }}
                className={classNames({
                  [styles['card__icon-container']]: true,
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memory;
