import React from "react";
import { Circle } from "react-konva";

import { transformCoords } from "./util";

function Player({ coord }) {
  if (coord) {
    const { x, y } = transformCoords({ x: coord.x, y: coord.y });
    return <Circle x={x} y={y} radius={12} fill={"magenta"} />;
  }
  return null;
}

export default Player;
