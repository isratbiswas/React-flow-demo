/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, type ReactNode } from "react";
import { useNodesState, useEdgesState, addEdge, type Edge } from "reactflow";
import { FlowContext } from "../hooks/dnd-context";

const initialNodes = [
  {
    id: "1",
    position: { x: 500, y: 400 },
    type: "Output",
    data: { id: "1" },
  },
];

const initialEdges: Edge[] = [];

export function FlowProvider({ children }: { children: ReactNode }) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <FlowContext.Provider
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
}
