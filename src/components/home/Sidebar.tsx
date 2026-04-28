import { useReactFlow, type XYPosition } from "@xyflow/react";
import { useCallback, useState } from "react";

import { useDnDPosition } from "../../hooks/useDnDPosition";
import { useDnD } from "../../hooks/useDnD";
import type { OnDropAction } from "../../hooks/dnd-context";

let id = 0;
const getId = () => `node_${id++}`;

export function Sidebar() {
  const { onDragStart, isDragging } = useDnD();
  const { setNodes } = useReactFlow();
  const [type, setType] = useState<string | null>(null);

  const createNode = useCallback(
    (nodeType: string): OnDropAction => {
      return ({ position }: { position: XYPosition }) => {
        const newNode = {
          id: getId(),
          type: nodeType,
          position,
          data: { label: `${nodeType} node` },
        };

        setNodes((nds) => [...nds, newNode]);
        setType(null);
      };
    },
    [setNodes],
  );

  return (
    <>
      {isDragging && <DragGhost type={type} />}

      <aside>
        <div className="description">Drag nodes to canvas</div>

        <div
          className="dndnode input"
          onPointerDown={(e) => {
            setType("input");
            onDragStart(e, createNode("input"));
          }}
        >
          Input
        </div>

        <div
          className="dndnode"
          onPointerDown={(e) => {
            setType("default");
            onDragStart(e, createNode("default"));
          }}
        >
          Default
        </div>

        <div
          className="dndnode output"
          onPointerDown={(e) => {
            setType("output");
            onDragStart(e, createNode("output"));
          }}
        >
          Output
        </div>
      </aside>
    </>
  );
}

function DragGhost({ type }: { type: string | null }) {
  const { position } = useDnDPosition();

  if (!position) return null;

  return (
    <div
      className={`dndnode ghostnode ${type}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      {type}
    </div>
  );
}
