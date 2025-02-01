import { Direction } from "./enums/io";
import { Size } from "./interfaces/size";

class GameInstance {
  gamePlayFPS: number = 10;
  isAttackingPress: boolean = false;
  isMovingPress: boolean = false;
  fpsMovingCount: number = 0;

  private context!: CanvasRenderingContext2D;
  getContext = (): CanvasRenderingContext2D => this.context;
  setContext(currContext: CanvasRenderingContext2D): void {
    this.context = currContext;
  }

  private viewport!: Size;
  getViewport = (): Size => this.viewport;
  setViewport(currViewport: Size): void {
    this.viewport = currViewport;
  }

  private direction: number = Direction.forward;
  getDirection = (): number => this.direction;
  setDirection(newDirection: number): void {
    this.direction = newDirection;
  }
}

export const gameInstance = new GameInstance();
