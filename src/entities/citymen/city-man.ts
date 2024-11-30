import { SpriteBase } from "../base";
import { gameInstance } from "../../gameInstance";
import { ActorState } from "../../enums/actor";
import { ManIdle } from "./idle";
import { WalkMan } from "./walk";
import { Direction } from "../../enums/io";

export class CityMan {
  posX: number = gameInstance.getActorPosition().x;
  posY: number = gameInstance.getActorPosition().y;
  velocity: number = 8;

  idleMan = new ManIdle();
  walkMain = new WalkMan();

  stateMan!: SpriteBase;

  constructor() {
    this.stateMan = this.idleMan;
    console.log("Calculate posX [constructor]");
    this.posX = gameInstance.getActorPosition().x;
  }

  getInstance(): void {
    switch (gameInstance.getActorState()) {
      case ActorState.walk:
        this.stateMan = this.walkMain;
        break;
      default:
        this.stateMan = this.idleMan;
        break;
    }
  }

  update(): void {
    if (!gameInstance.fpsPressingCount) {
      gameInstance.setActorPositionX(this.posX);
      this.stateMan.update();
      return;
    }

    const viewport = gameInstance.getViewport();
    const direction = gameInstance.getDirection();
    const distance: number = this.velocity * gameInstance.fpsPressingCount;

    this.posX = gameInstance.getActorPosition().x + distance * direction;

    if (this.posX < 0 && direction === Direction.backward) {
      this.posX = (this.posX % viewport.width) + viewport.width;
    }

    if (this.posX > viewport.width && direction === Direction.forward) {
      this.posX = this.posX % viewport.width;
    }

    this.stateMan.update();
  }

  render(): void {
    this.stateMan.render(this.posX, this.posY);
  }
}
