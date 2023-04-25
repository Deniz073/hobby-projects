"use client"

import { useState, useRef } from 'react'


export default function Page() {
  const [choices, setChoices] = useState<string[]>([])

  const choiceInput = useRef<HTMLInputElement>(null)

  function addChoice() {
    if (choiceInput.current === null) return;

    if (!validateInput()) return;
    setChoices([...choices, choiceInput.current.value])
    choiceInput.current.value = ''
  }

  function removeLastChoice() {

    setChoices(choices.slice(0, choices.length - 1))
  }

  function removeAllChoices() {
    setChoices([])
  }

  function pickChoice() {
    if (choices.length === 0) return;
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    alert(`Chosen: ${randomChoice}`)
  }

  function validateInput() {
    if (choiceInput.current === null) return;

    if (choiceInput.current.value === '') {
      choiceInput.current.style.border = '2px solid red'
      choiceInput.current.placeholder = 'choice'
      return false;
    }
    choiceInput.current.style.border = '1px solid black'

    return true;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 md:px-0">
      <div className="border border-gray-300 rounded-md overflow-y-auto mb-8 md:mb-0">
        <h2 className="text-2xl font-bold px-4 py-2 border-b border-gray-300">Available choices:</h2>
        <ul role="list" className="divide-y divide-gray-200">
          {choices.map((choice) => (
            <li key={choice} className="px-4 py-2 flex justify-between items-center">
              <p className="text-sm font-semibold leading-6 text-gray-900">{choice}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-8 w-full md:w-auto">
        <div className="flex flex-col space-y-2">
          <label htmlFor="choice" className="text-xl font-bold">New Choice:</label>
          <div className="flex space-x-4">
            <input
              type="text"
              id="choice"
              className="border border-gray-300 py-2 px-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={choiceInput}
            />
            <button
              onClick={addChoice}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add choice
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={pickChoice}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            disabled={choices.length === 0}
          >
            Make a choice
          </button>
          <button
            onClick={removeLastChoice}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink"
            disabled={choices.length === 0}
          >
            Remove last choice
          </button>
          <button
            onClick={removeAllChoices}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink"
            disabled={choices.length === 0}
          >
            Remove all choices
          </button>
        </div>
      </div>
    </div>
  )
}
