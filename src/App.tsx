import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import "./i18n";

const App: React.FC =  () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<Homelayout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
      </Routes>
    </Router>
  )
}
export default App;