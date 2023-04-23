"use client"

import { useEffect, useRef, useState } from 'react'
import 'animate.css'
import ColorMemoryButton from '../components/ColorMemoryButton';


const STEP_VALUES = ['red', 'green', 'blue', 'yellow'];
const STEP_DELAY_MS = 1000;

type Color = 'red' | 'green' | 'blue' | 'yellow';

export default function ColorMemory() {
  const [steps, setSteps] = useState<Color[]>([]);
  const [currentSteps, setCurrentSteps] = useState<Color[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [highscore, setHighscore] = useState<string>(localStorage.getItem('highscore') ?? '0');

  const buttonRefs = {
    red: useRef<HTMLButtonElement>(null),
    green: useRef<HTMLButtonElement>(null),
    blue: useRef<HTMLButtonElement>(null),
    yellow: useRef<HTMLButtonElement>(null),
  };

  const handleAnimation = (ref: React.RefObject<HTMLButtonElement>) => {
    if (!ref.current) return;
    ref.current.classList.remove('animate__pulse');
    ref.current.offsetWidth;
    ref.current.classList.add('animate__pulse');
  }

  const handleClick = (color: Color) => {
    const ref = buttonRefs[color];
    if (!ref) return;

    handleAnimation(ref)
    new Audio(`./sounds/${color}.mp3`).play();

    if (color !== steps[currentSteps.length]) {
      setGameOver(true);
      setGameStarted(false);
      addRandomStep(true);
      setCurrentSteps([]);
      return;
    }
    setCurrentSteps([...currentSteps, color]);

    if (currentSteps.length === steps.length - 1) {
      if (localStorage.getItem('highscore') ?? '0' < steps.length.toString()) {
        localStorage.setItem('highscore', steps.length.toString());
        setHighscore(steps.length.toString());
      }

      setTimeout(() => {
        addRandomStep(false);
        setCurrentSteps([]);
      }, STEP_DELAY_MS);
    }
  };

  const addRandomStep = (gameOver: boolean) => {
    const randomStep = STEP_VALUES[Math.floor(Math.random() * STEP_VALUES.length)] as Color;
    const newSteps = gameOver ? [randomStep] : [...steps, randomStep];
    setSteps(newSteps);

    if (newSteps.length > 0) {
      setDisabled(true);
      newSteps.forEach((step, index) => {
        const ref = buttonRefs[step];
        if (!ref) return;

        setTimeout(() => {
          handleAnimation(ref);
          new Audio(`./sounds/${step}.mp3`).play();
        }, index * STEP_DELAY_MS);
      });

      setTimeout(() => {
        setDisabled(false);
      }, newSteps.length * STEP_DELAY_MS);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    if (steps.length > 0) {
      const ref = buttonRefs[steps[0]];
      if (ref) {
        handleAnimation(ref);
        new Audio(`./sounds/${steps[0]}.mp3`).play();
      }
    }
  };

  useEffect(() => {
    addRandomStep(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold">Color Memory Game</h1>
      <small className="text-gray-500 mb-5">by Deniz Erdem</small>
      <div className="grid grid-cols-2 gap-3">
        <ColorMemoryButton disabled={!gameStarted || disabled} ref={buttonRefs.red} className="bg-red-500" onClick={() => handleClick('red')} />
        <ColorMemoryButton disabled={!gameStarted || disabled} ref={buttonRefs.green} className="bg-green-500" onClick={() => handleClick('green')} />
        <ColorMemoryButton disabled={!gameStarted || disabled} ref={buttonRefs.blue} className="bg-blue-500" onClick={() => handleClick('blue')} />
        <ColorMemoryButton disabled={!gameStarted || disabled} ref={buttonRefs.yellow} className="bg-yellow-500" onClick={() => handleClick('yellow')} />
      </div>
      {
        gameOver && <p className="text-xl font-bold text-red-700 mt-4">Game Over</p>
      }
      <button disabled={gameStarted} className='bg-blue-500 hover:bg-blue-700 disabled:opacity-30 text-white font-bold py-2 px-4 rounded mt-4' onClick={startGame}>Start</button>
      <div className="flex flex-row">
        <p className="font-bold text-gray-700 mt-4 mr-4">Highscore: {highscore}</p>
        <p className="font-bold text-gray-700 mt-4">Current round: {steps.length}</p>
      </div>
    </div>

  )
}
