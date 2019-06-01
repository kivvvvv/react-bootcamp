import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

function DraggableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%", fontSize: "0" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleRemoveColor={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
