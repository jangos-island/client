import React from "react";
import { Star } from "react-konva";
import orange from "@material-ui/core/colors/orange";

import { transformCoords } from "./util";

function Player({ coord }) {
  if (coord) {
    const { x, y } = transformCoords({ x: coord.x, y: coord.y });
    return (
      <Star
        numPoints={5}
        x={x}
        y={y}
        innerRadius={8}
        outerRadius={15}
        fill={orange[900]}
      />
    );
  }
  return null;
}

export default Player;
