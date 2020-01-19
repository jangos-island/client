import React from "react";
import { Stage, Layer } from "react-konva";

import Path from "./Path";
import Rooms from "./Rooms";

function Canvas({ rooms, currentRoom }) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Path rooms={rooms} />
        <Rooms rooms={rooms} />
      </Layer>
    </Stage>
  );
}

export default Canvas;
