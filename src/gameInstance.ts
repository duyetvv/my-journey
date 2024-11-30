import { ActorState } from "./enums/actor";
import { Direction } from "./enums/io";
import { Position } from "./interfaces/actor";
import { Size } from "./interfaces/size";

class GameInstance {
  manFPS: number = 30;
  gamePlayFPS: number = 60;
  isKeyPress: boolean = false;
  fpsPressingCount: number = 0;

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

  private actorState: number = ActorState.idle;
  getActorState = (): number => this.actorState;
  setActorState(newActorState: number): void {
    this.actorState = newActorState;
  }

  private actorPosition: Position = { x: 0, y: 0 };
  getActorPosition = (): Position => this.actorPosition;
  setActorPosition(newPosition: Position): void {
    this.actorPosition = newPosition;
  }
  setActorPositionX(posX: number): void {
    this.actorPosition.x = posX;
  }
  setActorPositionY(posY: number): void {
    this.actorPosition.y = posY;
  }
}

export const gameInstance = new GameInstance();
