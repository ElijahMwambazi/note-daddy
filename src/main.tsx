import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NoteFormProvider } from "./context/note.context";
import { GlobalStyles } from "./global.styles";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <NoteFormProvider>
        <App />
      </NoteFormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
