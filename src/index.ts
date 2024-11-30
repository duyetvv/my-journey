import { GamePlay } from "./gamePlay";
import { gameInstance } from "./gameInstance";
import { ActorState } from "./enums/actor";
import { Direction, KeyActions } from "./enums/io";

export function main() {
  const eleBound = document.body.getBoundingClientRect();

  let canvas = document.body.getElementsByTagName("canvas")[0];
  !canvas && (canvas = document.createElement("canvas"));

  const context = canvas.getContext("2d");
  const viewportWidth = eleBound.width;
  const viewportHeight = eleBound.height;

  document.body.appendChild(canvas);
  canvas.setAttribute("width", viewportWidth.toString());
  canvas.setAttribute("height", viewportHeight.toString());

  gameInstance.setContext(context!);
  gameInstance.setViewport({ width: viewportWidth, height: viewportHeight });
  gameInstance.setActorPosition({ x: 0, y: parseInt((viewportHeight / 2).toString(), 10) });

  new GamePlay().run();

  document.addEventListener(KeyActions.keydown, (evt) => {
    if (evt.keyCode === 37) {
      gameInstance.setDirection(Direction.backward);
      gameInstance.setActorState(ActorState.walk);
      gameInstance.isKeyPress = true;
    } else if (evt.keyCode === 39) {
      gameInstance.setDirection(Direction.forward);
      gameInstance.setActorState(ActorState.walk);
      gameInstance.isKeyPress = true;
    }
  });

  document.addEventListener(KeyActions.keyup, (evt) => {
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      gameInstance.setActorState(ActorState.idle);
      gameInstance.isKeyPress = false;
    }
  });
}

main();
