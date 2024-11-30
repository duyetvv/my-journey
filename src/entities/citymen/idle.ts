import { SpriteBase } from "../base";
import { createImage } from "../../helpers/createImage";
import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/io";
import { Specification } from "../../interfaces/actor";

export class ManIdle extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 46;
  private paddingTop: number = 59;
  private spriteWidth: number = 30;
  private spriteHeight: number = 69;

  private spec: Specification = {
    size: { width: 30, height: 69 },
    velocity: 0,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 128, 6);
    this.update();
  }

  getSpec = (): Specification => this.spec;

  update(): void {
    if (gameInstance.getDirection() === Direction.forward) {
      this.image = createImage("../../assets/citymen/idle.png");
    } else {
      this.image = createImage("../../assets/citymen/idle-flip.png");
    }
  }

  render(posX: number, posY: number): void {
    const spriteInfo = this.getSprite();
    const flipDistance: number =
      gameInstance.getDirection() === Direction.forward ? 0 : 4;

    gameInstance
      .getContext()
      .drawImage(
        this.image,
        spriteInfo.x + this.paddingX + flipDistance,
        spriteInfo.y + this.paddingTop,
        this.spriteWidth,
        this.spriteHeight,
        posX,
        posY,
        this.spriteWidth,
        this.spriteHeight
      );
  }
}
