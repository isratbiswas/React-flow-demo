/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "📝 Create List" },
    style: {
      background: "#4ade80",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n2",
    position: { x: 0, y: 120 },
    data: { label: "👨‍👩‍👧 Share with Family" },
    style: {
      background: "#60a5fa",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n3",
    position: { x: 0, y: 240 },
    data: { label: "📤 Send to Shop" },
    style: {
      background: "#f59e0b",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n4",
    position: { x: 0, y: 360 },
    data: { label: "🛒 Shopping Process" },
    style: {
      background: "#f43f5e",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n5",
    position: { x: 0, y: 480 },
    data: { label: "📦 Pack Items" },
    style: {
      background: "#a78bfa",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n6",
    position: { x: 0, y: 600 },
    data: { label: "🚚 Pickup" },
    style: {
      background: "#22c55e",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
  {
    id: "n7",
    position: { x: 0, y: 720 },
    data: { label: "✅ Done" },
    style: {
      background: "#0ea5e9",
      color: "#fff",
      padding: 10,
      borderRadius: 10,
    },
  },
];
const initialEdges = [
  { id: "e1-2", source: "n1", target: "n2" },
  { id: "e2-3", source: "n2", target: "n3" },
  { id: "e3-4", source: "n3", target: "n4" },
  { id: "e4-5", source: "n4", target: "n5" },
  { id: "e5-6", source: "n5", target: "n6" },
  { id: "e6-7", source: "n6", target: "n7" },
];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [],
  );

  return (
    <div className="w-full h-screen bg-gray-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        {/* UI Enhancements */}
        <MiniMap />
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
