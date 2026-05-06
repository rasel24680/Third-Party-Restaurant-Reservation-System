// src/App.jsx

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-sans bg-[#0f0f0f] text-white min-h-screen">
      <Outlet />
    </div>
  );
}

export default App;