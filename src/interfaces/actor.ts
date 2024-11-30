import { Size } from "./size";

export interface Position {
  x: number;
  y: number;
}

export interface Specification {
  size: Size,
  velocity: number,
  fps: number,
}