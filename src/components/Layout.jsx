import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`layout ${!collapsed ? "sidebar-open" : ""}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main-content">
        <Header />
        {children}
        
      </div>
     
    </div>
  );
};

export default Layout;