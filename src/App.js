import React, { Suspense } from "react";
import Home from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Home />
      </Router>
    </Suspense>
  );
}

export default App;
