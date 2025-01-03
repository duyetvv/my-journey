import { Size } from "./size";

export interface Position {
  x: number;
  y: number;
}

export interface Specification {
  size: Size;
  velocity: number;
  fps: number;
}

export interface RenderSpec {
  image: HTMLImageElement;
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  sfx: number; // Sprite Foot X on frame.
  dw: number;
  dh: number;
}
