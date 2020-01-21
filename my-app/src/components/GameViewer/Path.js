import React from "react";
import { Line } from "react-konva";
import deepOrange from "@material-ui/core/colors/deepOrange";

import { transformCoords } from "./util";

function NorthPath({ room }) {
  if (room && room.n_to) {
    const point1 = transformCoords({ x: room.x, y: room.y });
    const point2 = transformCoords({ x: room.x, y: room.y + 1 });
    return (
      <Line
        key={room.id}
        points={[point1.x, point1.y, point2.x, point2.y]}
        stroke={deepOrange[900]}
        strokeWidth={3}
        dash={[5, 2]}
      />
    );
  }
  return null;
}

function EastPath({ room }) {
  if (room && room.e_to) {
    const point1 = transformCoords({ x: room.x, y: room.y });
    const point2 = transformCoords({ x: room.x + 1, y: room.y });
    return (
      <Line
        key={room.id}
        points={[point1.x, point1.y, point2.x, point2.y]}
        stroke={deepOrange[900]}
        strokeWidth={3}
        dash={[5, 2]}
      />
    );
  }
  return null;
}

function Path({ rooms = [] }) {
  return (
    <>
      {rooms.map(room => NorthPath({ room }))}
      {rooms.map(room => EastPath({ room }))}
    </>
  );
}

export default Path;
