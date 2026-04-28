import { useState } from "react";
import { DnDContext, type OnDropAction } from "./dnd-context";

export function DnDProvider({ children }: { children: React.ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dropAction, setDropActionState] = useState<OnDropAction | null>(null);

  return (
    <DnDContext.Provider
      value={{
        isDragging,
        setIsDragging,
        dropAction,
        setDropAction: (action) => setDropActionState(() => action),
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}
