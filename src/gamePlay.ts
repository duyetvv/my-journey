import { CityMan } from "./entities/businessman/main";
import { WorkerMan } from "./entities/workerman/main";
import { Direction } from "./enums/io";
import { gameInstance } from "./gameInstance";
import { timestamp } from "./helpers/timeStamp";

export class GamePlay {
  tpf: number = Math.floor(1000 / gameInstance.gamePlayFPS);

  frameId!: number;
  cityMan!: CityMan;
  workerMan!: WorkerMan;
  currDirection: number = Direction.forward;

  constructor() {
    this.init();
  }

  init(): void {
    this.cityMan = new CityMan(200);
    this.workerMan = new WorkerMan(100);
  }

  update(deltaTime: number): void {
    if (gameInstance.isMovingPress) {
      gameInstance.fpsMovingCount += 1;
    } else {
      gameInstance.fpsMovingCount = 0;
    }

    gameInstance
      .getContext()!
      .clearRect(
        0,
        0,
        gameInstance.getViewport().width,
        gameInstance.getViewport().height
      );

    this.cityMan.update();
    this.workerMan.update();
  }

  render(deltaTime: number): void {
    this.cityMan.render();
    this.workerMan.render();
  }

  run(): void {
    const that = this;
    let now = 0;
    let dt = 0;
    let last = timestamp();
    let step = 1000 / gameInstance.gamePlayFPS;

    function frame() {
      now = timestamp();
      dt = dt + Math.min(1000, now - last);

      while (dt > step) {
        dt = dt - step;
        that.update(dt);
        that.render(dt);
      }

      // that.render(dt);
      
      last = now;
      that.frameId = requestAnimationFrame(frame);
    }

    that.frameId = requestAnimationFrame(frame);
  }

  stop(): void {
    cancelAnimationFrame(this.frameId);
  }
}
