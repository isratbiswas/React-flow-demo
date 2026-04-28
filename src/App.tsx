import { ReactFlowProvider } from "@xyflow/react";

import DnDFlow from "./components/home/DnDFlow";
import { DnDProvider } from "./hooks/DnDProvider";

export default function App() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <DnDFlow />
      </DnDProvider>
    </ReactFlowProvider>
  );
}
