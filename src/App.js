import { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main />
      <Sidebar sidebaropen={sidebarOpen} closeSidebar={closeSidebar} />

    </div>
    
  );
};

export default App;
