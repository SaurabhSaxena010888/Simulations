import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Module1 from "./components/Module1";
import Module2 from "./components/Module2";
import Module3 from "./components/Module3";
import Module4 from "./components/Module4";
import Module5 from "./components/Module5";
import Module6 from "./components/Module6";
import Module7 from "./components/Module7";
import Module8 from "./components/Module8";
import Module9 from "./components/Module9";
import Module10 from "./components/Module10";
import Module11 from "./components/Module11";

export default function App() {
  return (
    <div>

      <nav style={{ padding: "1em", backgroundColor: "#333" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "1em" }}>
          Home
        </Link>

        <Link to="/module1" style={{ color: "#fff", marginRight: "1em" }}>
          Module 1
        </Link>

        <Link to="/module2" style={{ color: "#fff", marginRight: "1em" }}>
          Module 2
        </Link>

        <Link to="/module3" style={{ color: "#fff", marginRight: "1em" }}>
          Module 3
        </Link>

        <Link to="/module4" style={{ color: "#fff", marginRight: "1em" }}>
          Module 4
        </Link>

        <Link to="/module5" style={{ color: "#fff", marginRight: "1em" }}>
          Module 5
        </Link>

        <Link to="/module6" style={{ color: "#fff", marginRight: "1em" }}>
          Module 6
        </Link>

        <Link to="/module7" style={{ color: "#fff", marginRight: "1em" }}>
          Module 7
        </Link>

        <Link to="/module8" style={{ color: "#fff", marginRight: "1em" }}>
          Module 8
        </Link>

        <Link to="/module9" style={{ color: "#fff", marginRight: "1em" }}>
          Module 9
        </Link>

        <Link to="/module10" style={{ color: "#fff", marginRight: "1em" }}>
          Module 10
        </Link>

        <Link to="/module11" style={{ color: "#fff", marginRight: "1em" }}>
          Module 11
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to AI Simulation Platform</h1>} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module4" element={<Module4 />} />
        <Route path="/module5" element={<Module5 />} />
        <Route path="/module6" element={<Module6 />} />
        <Route path="/module7" element={<Module7 />} />
        <Route path="/module8" element={<Module8 />} />
        <Route path="/module9" element={<Module9 />} />
        <Route path="/module10" element={<Module10 />} />
        <Route path="/module11" element={<Module11 />} />
      </Routes>

    </div>
  );
}
