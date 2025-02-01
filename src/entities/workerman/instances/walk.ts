import { SpriteBase } from "../../base";
import { createImage } from "../../../helpers/createImage";
import { Direction } from "../../../enums/io";
import { RenderSpec, Specification } from "../../../interfaces/actor";

export class WorkerWalk extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 46;
  private spriteWidth: number = 39;
  private spriteHeight: number = 70;

  private spec: Specification = {
    size: { width: this.spriteWidth, height: this.spriteHeight },
    velocity: 5,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 70, 10);
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
      this.image = createImage("../../assets/citymen/worker/Walk.png");
    } else {
      this.image = createImage("../../assets/citymen/worker/Walk-flip.png");
    }
  }

  render(posX: number, posY: number): void {
    
  }
}
