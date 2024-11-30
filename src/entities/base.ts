export abstract class SpriteBase {
  private currSpriteIdx: number = 0;

  constructor(
    private startIdx: number,
    private endIdx: number,
    private width: number,
    private height: number,
    private spritesPerRow: number,
  ) {}

  getSprite() {
    this.currSpriteIdx++;
    this.currSpriteIdx > this.endIdx && (this.currSpriteIdx = this.startIdx);
    let x = (this.currSpriteIdx % this.spritesPerRow) * this.width;
    let y = this.currSpriteIdx / this.spritesPerRow;

    return {
      x,
      y,
      width: this.width,
      height: this.height,
    };
  }

  abstract update(): void;
  abstract render(x: number, y: number): void;
}
