import { SpriteBase } from "../base";
import { createImage } from "../../helpers/createImage";
import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/io";
import { Specification } from "../../interfaces/actor";

export class WalkMan extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 50;
  private spriteWidth: number = 32;
  private spriteHeight: number = 69;

  private spec: Specification = {
    size: { width: this.spriteWidth, height: this.spriteHeight },
    velocity: 0,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 69, 10);
    this.update();
  }

  getSpec = (): Specification => this.spec;
  
  update(): void {
    if (gameInstance.getDirection() === Direction.forward) {
      this.image = createImage("../../assets/citymen/walk.png");
    } else {
      this.image = createImage("../../assets/citymen/walk-flip.png");
    }
  }

  render(posX: number, posY: number): void {
    const spriteInfo = this.getSprite();

    gameInstance
      .getContext()
      .drawImage(
        this.image,
        spriteInfo.x + this.paddingX,
        spriteInfo.y,
        this.spriteWidth,
        spriteInfo.height,
        posX,
        posY,
        this.spriteWidth,
        spriteInfo.height
      );
  }
}
