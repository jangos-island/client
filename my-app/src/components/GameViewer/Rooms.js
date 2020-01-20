import React from "react";
import { Circle } from "react-konva";
import lightGreen from "@material-ui/core/colors/lightGreen";

import { transformCoords } from "./util";

function Rooms({ rooms }) {
  return (
    <>
      {rooms.map(room => {
        const { x, y } = transformCoords({ x: room.x, y: room.y });
        return (
          <Circle key={room.id} x={x} y={y} radius={8} fill={lightGreen[700]} />
        );
      })}
    </>
  );
}

export default Rooms;
