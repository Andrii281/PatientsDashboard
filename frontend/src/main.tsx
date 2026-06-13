import { createRoot } from "react-dom/client";

import { Providers } from "./providers.tsx";

import "./nullStyle.css";

createRoot(document.getElementById("root")!).render(<Providers />);
