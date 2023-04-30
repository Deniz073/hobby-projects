'use client'

import { useState } from 'react'
import { useDraw } from '@/hooks/useDraw'
import { ChromePicker } from 'react-color'
import { drawLine } from '@/utils/draw/drawLine'

export default function Draw() {
  const [color, setColor] = useState<string>('#000')
  const [borderRadius, setBorderRadius] = useState<number>(5)
  const { canvasRef, onMouseDown, clear, downloadCanvas } = useDraw(createLine)

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    drawLine({ prevPoint, currentPoint, ctx, color })
  }

  return (
      <div className='min-h-screen mt-14 sm:mt-0 flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex flex-col gap-5 pr-10'>
        <p className='font-bold'>Currently only works on desktop</p>
          <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Border
          </label>
          <input type="range" max={365} min={6} value={borderRadius} onChange={e => setBorderRadius(parseInt(e.target.value))} />
          <button
            type='button'
            className='p-2 rounded-md border bg-red-500 text-white border-black'
            onClick={clear}>
            Clear canvas
          </button>
          <button
            type='button'
            className='p-2 rounded-md border border-black'
            onClick={downloadCanvas}>
            Download drawing
          </button>
        </div>
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          width={750}
          height={750}
          style={{ borderRadius: `${borderRadius}px` }}
          className='border bg-white mt-4 sm:mt-0 w-[350px] h-[350px] sm:w-[725px] sm:h-[725px] border-black lg:ml-5 flex-grow-1'
        />
      </div>
  )
}
