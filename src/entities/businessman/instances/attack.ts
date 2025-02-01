import { SpriteBase } from "../../base";
import { createImage } from "../../../helpers/createImage";
import { Direction } from "../../../enums/io";
import { RenderSpec, Specification } from "../../../interfaces/actor";

export class AttackMan extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 44;
  private spriteWidth: number = 50;
  private spriteHeight: number = 64;
  private currDirection: number = Direction.forward;

  private spec: Specification = {
    size: { width: 30, height: 64 },
    velocity: 0,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 64, 4);
    this.getRenderSpec();
  }

  getSpec = (): Specification => this.spec;

  getRenderSpec = (): RenderSpec => {
    const spriteInfo = this.getSprite();
    const isForward = this.currDirection === Direction.forward;
    const flipDistance: number = isForward ? 0 : -10;
    const spriteFootX = isForward ? 0 : -16;

    return {
      image: this.image,
      sx: spriteInfo.x + this.paddingX + flipDistance,
      sy: spriteInfo.y,
      sw: this.spriteWidth,
      sh: this.spriteHeight,
      sfx: spriteFootX,
      dw: this.spriteWidth,
      dh: this.spriteHeight
    };
  };

  update(direction: number): void {
    this.currDirection = direction;
    if (direction === Direction.forward) {
      this.image = createImage("../../assets/citymen/business/attack.png");
    } else {
      this.image = createImage("../../assets/citymen/business/attack-flip.png");
    }
  }

  render(posX: number, posY: number): void {
   
  }
}
