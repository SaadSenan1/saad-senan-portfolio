// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import "./styles/layout.css";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`layout ${!collapsed ? "sidebar-open" : ""}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main className="main-content">
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;