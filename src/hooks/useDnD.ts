import { useReactFlow } from "@xyflow/react";
import { useCallback, useContext, useEffect } from "react";
import { DnDContext, type OnDropAction } from "./dnd-context";

export const useDnD = () => {
  const { screenToFlowPosition } = useReactFlow();
  const context = useContext(DnDContext);

  if (!context) throw new Error("useDnD must be used within provider");

  const { isDragging, setIsDragging, setDropAction, dropAction } = context;

  const onDragStart = (event: React.PointerEvent, onDrop: OnDropAction) => {
    event.preventDefault();
    (event.target as HTMLElement).setPointerCapture(event.pointerId);

    setIsDragging(true);
    setDropAction(onDrop);
  };

  const onDragEnd = useCallback(
    (event: PointerEvent) => {
      if (!isDragging) return;

      const el = document.elementFromPoint(event.clientX, event.clientY);
      const isFlow = el?.closest(".react-flow");

      if (isFlow && dropAction) {
        const position = screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });

        dropAction({ position });
      }

      setIsDragging(false);
    },
    [isDragging, dropAction, screenToFlowPosition, setIsDragging],
  );

  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener("pointerup", onDragEnd);
    return () => document.removeEventListener("pointerup", onDragEnd);
  }, [isDragging, onDragEnd]);

  return { isDragging, onDragStart };
};
