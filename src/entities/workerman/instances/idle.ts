import { SpriteBase } from "../../base";
import { createImage } from "../../../helpers/createImage";
import { Direction } from "../../../enums/io";
import { RenderSpec, Specification } from "../../../interfaces/actor";

export class WorkerIdle extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 46;
  private spriteWidth: number = 30;
  private spriteHeight: number = 66;
  private currDirection: number = Direction.forward;

  private spec: Specification = {
    size: { width: 30, height: 66 },
    velocity: 0,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 66, 6);
    this.getRenderSpec();
  }

  getSpec = (): Specification => this.spec;

  getRenderSpec = (): RenderSpec => {
    const spriteInfo = this.getSprite();
    const flipDistance: number =
      this.currDirection === Direction.forward ? 0 : 4;

    return {
      image: this.image,
      sx: spriteInfo.x + this.paddingX + flipDistance,
      sy: spriteInfo.y,
      sw: this.spriteWidth,
      sh: this.spriteHeight,
      sfx: 0,
      dw: this.spriteWidth,
      dh: this.spriteHeight
    };
  };

  update(direction: number): void {
    this.currDirection = direction;
    if (direction === Direction.forward) {
      this.image = createImage("../../assets/citymen/worker/Idle.png");
    } else {
      this.image = createImage("../../assets/citymen/worker/Idle-flip.png");
    }
  }

  render(posX: number, posY: number): void {
   
  }
}
