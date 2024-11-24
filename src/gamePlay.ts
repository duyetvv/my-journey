import { ManIdle } from "./entities/citymen/idle";
import { Direction } from "./enums/direction";
import { gameInstance } from "./gameInstance";
import { timestamp } from "./helpers/timeStamp";

export class GamePlay {
  tpf: number = 60; // time per frame
  frameId!: number;
  idleMan!: ManIdle;
  currDirection: number = Direction.forward;

  constructor() {
    this.init();
  }

  init(): void {
    this.idleMan = new ManIdle(gameInstance.currDirection);
  }

  update(deltaTime: number): void {
    this.idleMan = new ManIdle(gameInstance.currDirection);
    gameInstance.context!.clearRect(0, 0, gameInstance.viewport.width, gameInstance.viewport.height);
    this.idleMan.update();
  }

  render(deltaTime: number): void {
    this.idleMan.render();
  }

  run(): void {
    const that = this;
    let now = 0;
    let dt = 0;
    let last = timestamp();
    let step = 1000 / 30;

    function frame() {
      now = timestamp();
      dt = dt + Math.min(1000, now - last);

      while (dt > step) {
        dt = dt - step;
        that.update(step);
      }

      that.render(dt);
      last = now;
      that.frameId = requestAnimationFrame(frame);
    }

    that.frameId = requestAnimationFrame(frame);
  }

  stop(): void {
    cancelAnimationFrame(this.frameId)
  }
}
