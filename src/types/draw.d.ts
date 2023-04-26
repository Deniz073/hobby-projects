type Draw = {
  ctx: CanvasRenderingContext2D
  currentPoint: Point
  prevPoint: Point | null
}

type Point = { x: number | undefined; y: number | undefined}