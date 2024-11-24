import { ActorState, Direction } from './enums/direction';
import { createImage } from './helpers/createImage';

class GameInstance {
  manFPS: number = 30;
  gamePlayFPS: number = 60;
  isKeyPress: boolean = false;
  fpsOnKeyPressCounter: number = 0;

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

  actorState: number = ActorState.idle;
  updateActorState(newActorState: number) {
    this.actorState = newActorState;
  }
}

export const gameInstance = new GameInstance();

