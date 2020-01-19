import React from "react";
import { Circle } from "react-konva";

import { transformCoords } from "./util";

function Rooms({ rooms }) {
  return (
    <>
      {rooms.map(room => {
        const { x, y } = transformCoords({ x: room.x, y: room.y });
        return <Circle key={room.id} x={x} y={y} radius={8} fill={"green"} />;
      })}
    </>
  );
}

export default Rooms;
