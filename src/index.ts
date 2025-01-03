import { GamePlay } from "./gamePlay";
import { gameInstance } from "./gameInstance";
import { Direction, KeyActions, KeyCodes } from "./enums/io";

(function main() {
  const eleBound = document.body.getBoundingClientRect();

  let canvas = document.body.getElementsByTagName("canvas")[0];
  !canvas && (canvas = document.createElement("canvas"));

  const context = canvas.getContext("2d");
  const viewportWidth = eleBound.width;
  const viewportHeight = eleBound.height;

  document.body.appendChild(canvas);
  canvas.setAttribute("width", viewportWidth.toString());
  canvas.setAttribute("height", viewportHeight.toString());
  
  console.log("[Main Context]:: ", context);
  gameInstance.setContext(context!);
  gameInstance.setViewport({ width: viewportWidth, height: viewportHeight });

  new GamePlay().run();

  document.addEventListener(KeyActions.keydown, (evt) => {
    switch (evt.code) {
      case KeyCodes.arrowLeft:
        gameInstance.setDirection(Direction.backward);
        gameInstance.isMovingPress = true;
        break;
      case KeyCodes.arrowRight:
        gameInstance.setDirection(Direction.forward);
        gameInstance.isMovingPress = true;
        break;
      case KeyCodes.keyD:
        gameInstance.isAttackingPress = true;
      default:
        break;
    }
  });

  document.addEventListener(KeyActions.keyup, (evt) => {
    switch (evt.code) {
      case KeyCodes.arrowLeft:
      case KeyCodes.arrowRight:
        gameInstance.isMovingPress = false;
        break;
      case KeyCodes.keyD:
        gameInstance.isAttackingPress = false;
        break;
      default:
        break;
    }
  });
})();

