import { SpriteBase } from "../../base";
import { createImage } from "../../../helpers/createImage";
import { Direction } from "../../../enums/io";
import { RenderSpec, Specification } from "../../../interfaces/actor";

export class RunMan extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 42;
  private spriteWidth: number = 44;
  private spriteHeight: number = 69;

  private spec: Specification = {
    size: { width: this.spriteWidth, height: this.spriteHeight },
    velocity: 16,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 69, 10);
    this.getRenderSpec();
  }

  getSpec = (): Specification => this.spec;

  getRenderSpec = (): RenderSpec => {
    const spriteInfo = this.getSprite();
  
    return {
      image: this.image,
      sx: spriteInfo.x + this.paddingX,
      sy: spriteInfo.y,
      sw: this.spriteWidth,
      sh: this.spriteHeight,
      sfx: 0,
      dw: this.spriteWidth,
      dh: this.spriteHeight
    };
  };

  
  update(direction: number): void {
    if (direction === Direction.forward) {
      this.image = createImage("../../assets/citymen/business/run.png");
    } else {
      this.image = createImage("../../assets/citymen/business/run-flip.png");
    }
  }

  render(posX: number, posY: number): void {
    
  }
}
