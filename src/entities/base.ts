export class SpriteBase {
  private currSpriteIdx: number = 0;

  constructor(
    private startIdx: number,
    private endIdx: number,
    private width: number,
    private height: number,
    private spritesPerRow: number
  ) {}

  getUpdate() {
    this.currSpriteIdx++;
    this.currSpriteIdx > this.endIdx && (this.currSpriteIdx = this.startIdx);
    const x = (this.currSpriteIdx % this.spritesPerRow) * this.width;
    const y = this.currSpriteIdx / this.spritesPerRow;

    return {
      x,
      y,
      width: this.width,
      height: this.height,
    };
  }
}
