import { CityMan } from "./entities/citymen/city-man";
import { Direction } from "./enums/io";
import { gameInstance } from "./gameInstance";
import { timestamp } from "./helpers/timeStamp";

export class GamePlay {
  tpf: number = 60; // time per frame
  frameId!: number;
  cityMan!: CityMan;
  currDirection: number = Direction.forward;

  constructor() {
    this.init();
  }

  init(): void {
    this.cityMan = new CityMan();
  }

  update(deltaTime: number): void { 
    if (gameInstance.isKeyPress) {
      gameInstance.fpsPressingCount += 1;
    } else {
      gameInstance.fpsPressingCount = 0;
    }

    gameInstance.getContext()!.clearRect(
      0,
      0,
      gameInstance.getViewport().width,
      gameInstance.getViewport().height
    );

    this.cityMan.getInstance();
    this.cityMan.update();
  }

  render(deltaTime: number): void {
    this.cityMan.render();
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
