import { SpriteBase } from "../base";
import { createImage } from "../../helpers/createImage";
import { gameInstance } from "../../gameInstance";
import { ActorState, Direction } from "../../enums/direction";
import { ManIdle } from "./idle";
import { WalkMan } from "./walk";

export class CityMan {
  posX: number = 100;
  posY: number = 100;
  velocity: number = 5;

  idleMan = new ManIdle();
  walkMain = new WalkMan();

  stateMan!: SpriteBase;

  constructor() {
    this.stateMan = this.idleMan;
  }

  getInstance(): void {
    console.log('getInstance CityMan ', gameInstance.actorState);
    switch (gameInstance.actorState) {
      case ActorState.walk:
        this.stateMan = this.walkMain;
        break;
      default:
        this.stateMan = this.idleMan;
        break;
    }
  }

  update(): void {
    if (gameInstance.fpsOnKeyPressCounter) {
      this.posX = this.velocity * gameInstance.fpsOnKeyPressCounter * Direction.forward;
    }
    this.stateMan.update();
  }

  render(): void {
    this.stateMan.render(this.posX, this.posY);
  }
}
