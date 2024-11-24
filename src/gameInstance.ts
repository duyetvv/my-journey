import { Direction } from './enums/direction';
import { createImage } from './helpers/createImage';

class GameInstance {
  context!: CanvasRenderingContext2D;
  initContext(currContext: CanvasRenderingContext2D) {
    this.context = currContext;
  }

  viewport!: { width: number; height: number };
  updateViewport(currViewport: { width: number; height: number }) {
    this.viewport = currViewport;
  }

  currDirection: number = Direction.forward;
  updateDirection(newDirection: number) {
    this.currDirection = newDirection;
  }
}

export const gameInstance = new GameInstance();

