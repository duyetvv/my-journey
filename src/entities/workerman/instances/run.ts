import { SpriteBase } from "../../base";
import { createImage } from "../../../helpers/createImage";
import { Direction } from "../../../enums/io";
import { RenderSpec, Specification } from "../../../interfaces/actor";

export class WorkerRun extends SpriteBase {
  image: HTMLImageElement = null;
  private paddingX: number = 42;
  private spriteWidth: number = 44;
  private spriteHeight: number = 68;
  private currDirection: number = Direction.forward;

  private spec: Specification = {
    size: { width: 30, height: 68 },
    velocity: 16,
    fps: 60,
  };

  constructor() {
    super(0, 5, 128, 68, 10);
    this.getRenderSpec();
  }

  getSpec = (): Specification => this.spec;

  getRenderSpec = (): RenderSpec => {
    const spriteInfo = this.getSprite();
    const isForward = this.currDirection === Direction.forward;
    const spriteFootX = isForward ? 0 : -16;

    return {
      image: this.image,
      sx: spriteInfo.x + this.paddingX,
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
      this.image = createImage("../../assets/citymen/worker/Run.png");
    } else {
      this.image = createImage("../../assets/citymen/worker/Run-flip.png");
    }
  }

  render(posX: number, posY: number): void {
   
  }
}
