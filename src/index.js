import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);

// React itself has no tools, objects, functions for making HTTP Requests.

// React only cares about showing content and handing user events.
