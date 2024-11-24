import { SpriteBase } from "../base";
import { createImage } from "../../helpers/createImage";
import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/direction";

export class ManIdle extends SpriteBase {
  posX: number = 100;
  posY: number = 100;
  image: HTMLImageElement = null;

  constructor(private direction: number) {
    super(0, 5, 128, 128, 6);
   if (direction === Direction.forward) {
     this.image = createImage("../../assets/citymen/idle.png");
   } else {
    this.image = createImage("../../assets/citymen/idle-flip.png")
   }
  }

  update(): void {}

  render(): void {
    const spriteInfo = this.getUpdate();
    gameInstance.context.drawImage(
      this.image,
      spriteInfo.x,
      spriteInfo.y,
      spriteInfo.width,
      spriteInfo.height,
      this.posX, 
      this.posY,
      spriteInfo.width,
      spriteInfo.height
    );
  }
}
