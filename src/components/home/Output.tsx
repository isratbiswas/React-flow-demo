import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import type { Mesh } from "three";
import { Handle, Position, type NodeProps } from "reactflow";

type OutputNodeData = {
  label?: string;
};

type BoxProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
};

function Box(props: BoxProps) {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={1} />
      <pointLight position={[3, 3, 3]} intensity={2} />

      <Box position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[3, 3, 3]} />
    </Canvas>
  );
}

export function Output({ data }: NodeProps<OutputNodeData>) {
  return (
    <div className="h-80 w-70 rounded-md bg-back overflow-hidden border border-solid border-back">
      <Handle type="target" position={Position.Left} id="p" style={{ top: 60 }}>
        <div className="text-white relative left-3 bottom-3">p</div>
      </Handle>

      <Handle
        type="target"
        position={Position.Left}
        id="r"
        style={{ top: 100 }}
      >
        <div className="text-white relative left-3 bottom-3">r</div>
      </Handle>

      <Handle
        type="target"
        position={Position.Left}
        id="s"
        style={{ top: 140 }}
      >
        <div className="text-white relative left-3 bottom-3">s</div>
      </Handle>

      <div className="p-2 bg-orange-500 text-white">
        {data?.label ?? "Output"}
      </div>

      <div className="h-[calc(100%-40px)]">
        <Scene />
      </div>
    </div>
  );
}
