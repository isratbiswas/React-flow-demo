import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";
import "./xy-theme.css";
import "@xyflow/react/dist/style.css";

const container = document.getElementById("app");

if (!container) throw new Error("Root #app not found");

createRoot(container).render(<App />);
