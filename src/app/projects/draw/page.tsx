'use client'

import { useState } from 'react'
import { useDraw } from '@/hooks/useDraw'
import { ChromePicker } from 'react-color'
import { drawLine } from '@/utils/draw/drawLine'

export default function Draw() {
  const [color, setColor] = useState<string>('#000')
  const [borderRadius, setBorderRadius] = useState<number>(6)
  const { canvasRef, onMouseDown, clear } = useDraw(createLine)

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    drawLine({ prevPoint, currentPoint, ctx, color })
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-5 pr-10'>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Border
        </label>
        <input
          className='w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          type="number"
          value={borderRadius}
          onChange={e => setBorderRadius(parseInt(e.target.value))}
        />
        <button
          type='button'
          className='p-2 rounded-md border border-black'
          onClick={() => clear()}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        style={{ borderRadius: `${borderRadius}px` }}
        className='border bg-white border-black'
      />
    </div>
  )
}
