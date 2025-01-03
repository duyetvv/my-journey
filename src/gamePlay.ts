import { CityMan } from "./entities/businessman/main";
import { Direction } from "./enums/io";
import { gameInstance } from "./gameInstance";
import { timestamp } from "./helpers/timeStamp";

export class GamePlay {
  tpf: number = 300; // time per frame
  frameId!: number;
  cityMan!: CityMan;
  cityMan1!: CityMan;
  currDirection: number = Direction.forward;

  constructor() {
    this.init();
  }

  init(): void {
    this.cityMan = new CityMan(100);
    this.cityMan1 = new CityMan(200);
  }

  update(deltaTime: number): void { 
    if (gameInstance.isMovingPress) {
      gameInstance.fpsMovingCount += 1;
    } else {
      gameInstance.fpsMovingCount = 0;
    }

    gameInstance.getContext()!.clearRect(
      0,
      0,
      gameInstance.getViewport().width,
      gameInstance.getViewport().height
    );

    this.cityMan.update();
    this.cityMan1.update();
  }

  render(deltaTime: number): void {
    this.cityMan.render();
    this.cityMan1.render();
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
        that.update(step);
      }
      
      that.render(dt);
      last = now;
      that.frameId = requestAnimationFrame(frame);
    }

    that.frameId = requestAnimationFrame(frame);
  }

  stop(): void {
    cancelAnimationFrame(this.frameId);
  }
}
