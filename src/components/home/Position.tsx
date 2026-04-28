import { useState, type ChangeEvent } from "react";
import { Handle, Position, type NodeProps } from "reactflow";

type PositionNodeData = {
  label?: string;
};

export default function PositionNode({ data }: NodeProps<PositionNodeData>) {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number>(0);

  const handleNumberChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(Number(e.target.value));
    };

  return (
    <div className="w-52 rounded-md bg-back overflow-hidden border border-solid border-back">
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 30 }}
      />

      <div className="p-2 bg-green-600 text-white">
        {data?.label ?? "Position"}
      </div>

      <div className="flex flex-row justify-between p-1">
        <h2>Israt</h2>
        <div>x</div>
        <input
          type="number"
          className="p-1 bg-white opacity-50 text-sm"
          value={x}
          onChange={handleNumberChange(setX)}
        />
      </div>

      <div className="flex flex-row justify-between p-1">
        <div>y</div>
        <input
          type="number"
          className="p-1 bg-white opacity-50 text-sm"
          value={y}
          onChange={handleNumberChange(setY)}
        />
      </div>

      <div className="flex flex-row justify-between p-1">
        <div>z</div>
        <input
          type="number"
          className="p-1 bg-white opacity-50 text-sm"
          value={z}
          onChange={handleNumberChange(setZ)}
        />
      </div>
    </div>
  );
}
