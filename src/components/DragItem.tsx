import { Draggable } from "@hello-pangea/dnd";

export default function DragItem({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {index + 1} - {item.name} at {item.institutionName}
        </div>
      )}
    </Draggable>
  );
}
