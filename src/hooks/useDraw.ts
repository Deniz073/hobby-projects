import { useEffect, useRef, useState } from 'react'

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
  const [mouseDown, setMouseDown] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prevPoint = useRef<null | Point>(null)

  const onMouseDown = () => setMouseDown(true)

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      e.preventDefault()
      if (!mouseDown) return

      const currentPoint = computePointInCanvas(e)

      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx || !currentPoint) return

      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current })
      prevPoint.current = currentPoint
    }

    const computePointInCanvas = (e: MouseEvent | TouchEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      let x, y;
      if (e instanceof MouseEvent) {
        x = e.clientX - rect.left
        y = e.clientY - rect.top
      } else if (e instanceof TouchEvent) {
        x = e.touches[0].clientX - rect.left
        y = e.touches[0].clientY - rect.top
      }

      return { x, y }
    }

    const mouseUpHandler = () => {
      setMouseDown(false)
      prevPoint.current = null
    }

    // Add event listeners
    canvasRef.current?.addEventListener('mousedown', onMouseDown)
    canvasRef.current?.addEventListener('mousemove', handler)
    canvasRef.current?.addEventListener('touchstart', onMouseDown)
    canvasRef.current?.addEventListener('touchmove', handler)
    window.addEventListener('mouseup', mouseUpHandler)
    window.addEventListener('touchend', mouseUpHandler)

    // Remove event listeners
    return () => {
      canvasRef.current?.removeEventListener('mousedown', onMouseDown)
      canvasRef.current?.removeEventListener('mousemove', handler)
      canvasRef.current?.removeEventListener('touchstart', onMouseDown)
      canvasRef.current?.removeEventListener('touchmove', handler)
      window.removeEventListener('mouseup', mouseUpHandler)
      window.removeEventListener('touchend', mouseUpHandler)
    }
  }, [onDraw])

  return { canvasRef, onMouseDown, clear }
}