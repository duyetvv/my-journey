import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/io";
import { ManIdle } from "./instances/idle";
import { WalkMan } from "./instances/walk";
import { AttackMan } from "./instances/attack";

export class CityMan {
  posX: number = gameInstance.getViewport().width / 2;
  posY: number = gameInstance.getViewport().height / 2;
  velocity: number = 0;

  idleMan = new ManIdle();
  walkMan = new WalkMan();
  attackMan = new AttackMan();

  private currInstance: ManIdle | WalkMan | AttackMan = null;

  constructor(posX: number) {
    this.posX = posX;
    this.update();
  }

  getInstance(): void {
    if (gameInstance.isAttackingPress) {
      this.currInstance = this.attackMan;
      return;
    }
    if (gameInstance.isMovingPress) {
      this.currInstance = this.walkMan;
      return;
    }

    this.currInstance = this.idleMan;
  }

  update(): void {
    this.getInstance();
    const direction = gameInstance.getDirection();
    const viewport = gameInstance.getViewport();

    const manSpec = this.currInstance.getSpec();
    this.currInstance.update(direction);

    this.posX = this.posX + manSpec.velocity * direction;

    if (this.posX < 0 && direction === Direction.backward) {
      this.posX = (this.posX % viewport.width) + viewport.width;
    }

    if (this.posX > viewport.width && direction === Direction.forward) {
      this.posX = this.posX % viewport.width;
    }
  }

  render(): void {
    const renderSpec = this.currInstance.getRenderSpec();

    gameInstance
      .getContext()
      .drawImage(
        renderSpec.image,
        renderSpec.sx,
        renderSpec.sy,
        renderSpec.sw,
        renderSpec.sh,
        this.posX,
        this.posY,
        renderSpec.sw,
        renderSpec.sh
      );
  }
}
