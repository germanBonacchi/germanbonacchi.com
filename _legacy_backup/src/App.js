import React, { Suspense } from "react";
import Home from "./pages";
import Loading from "./components/Loading";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Home />
      </Router>
    </Suspense>
  );
}

export default App;
