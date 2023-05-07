"use client"

import { motion } from 'framer-motion'

export default function HeaderText() {
  function getAge(): number {
    const today = new Date()
    const birthDate = new Date('2002-09-15')
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const line1 = `I am Deniz Erdem, a ${getAge()} year old turkish software developer from the Netherlands. `
  const line2 = "I am interested in all things software development related, but I am especially interested in back end stuff. "
  const line3 = "This is my personal website where I will be posting my hobby projects."

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.p variants={sentence} initial="hidden" animate="visible" className="mt-6 text-lg leading-8 text-gray-600">
      {line1.split("").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        )
      })}
      {line2.split("").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        )
      })}
      {line3.split("").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        )
      })}
    </motion.p>
  )
}
