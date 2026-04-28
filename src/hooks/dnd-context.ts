import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { XYPosition } from "@xyflow/react";

export type OnDropAction = (params: { position: XYPosition }) => void;

export interface DnDContextType {
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  dropAction: OnDropAction | null;
  setDropAction: Dispatch<SetStateAction<OnDropAction | null>>;
}

export const DnDContext = createContext<DnDContextType | null>(null);
