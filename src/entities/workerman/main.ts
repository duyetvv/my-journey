import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/io";
import { WorkerIdle } from "./instances/idle";
import { WorkerWalk } from "./instances/walk";
import { WorkerRun } from "./instances/run";
import { WorkerAttack } from "./instances/attack";

export class WorkerMan {
  posX: number = gameInstance.getViewport().width / 2;
  posY: number = gameInstance.getViewport().height / 2;
  velocity: number = 0;

  idleMan = new WorkerIdle();
  walkMan = new WorkerWalk();
  runMan = new WorkerRun();
  attackMan = new WorkerAttack();

  private currInstance: WorkerIdle | WorkerWalk | WorkerRun | WorkerAttack = null;

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
      this.currInstance = this.runMan;
      return;
    }

    this.currInstance = this.walkMan;
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
