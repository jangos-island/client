import React from "react";
import { Stage, Layer } from "react-konva";

import Path from "./Path";
import Rooms from "./Rooms";
import Player from "./Player";

function Canvas({ rooms = [], playerCoord = { x: 0, y: 0 } }) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Path rooms={rooms} />
        <Rooms rooms={rooms} />
        <Player coord={playerCoord} />
      </Layer>
    </Stage>
  );
}

export default Canvas;
