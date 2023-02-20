type Coordinates = [x: number, y: number]

abstract class Shape {
  constructor(protected color: string, protected name: string) {}

  abstract doDrawing(): void

  draw(): void {
    console.log('*'.repeat(20))
    console.log(`Here I'm drawing a ${this.name} with color: ${this.color}`)
    this.doDrawing()
    console.log('*'.repeat(20))
    console.log('\n')
  }
}

export class Circle extends Shape {
  #center: Coordinates
  #radius: number

  constructor(color: string, center: Coordinates, radius: number) {
    super(color, 'Circle')
    this.#center = center
    this.#radius = radius
  }

  doDrawing(): void {
    console.log(
      `Circle drawing with center: ${this.#center} and radius: ${this.#radius}`
    )
  }
}

export class Line extends Shape {
  #start: Coordinates
  #end: Coordinates

  constructor(color: string, start: Coordinates, end: Coordinates) {
    super(color, 'Line')
    this.#start = start
    this.#end = end
  }

  doDrawing(): void {
    console.log(`Line drawing from: ${this.#start} to: ${this.#end}`)
  }
}

const circle = new Circle('red', [0, 0], 10)
circle.draw()

const line = new Line('blue', [0, 0], [10, 10])
line.draw()
