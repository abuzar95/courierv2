// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Sidebar from "./pages/Sidebar";
import ManageAgent from "./pages/ManageAgent";
import ChatHistory from "./pages/ChatHistory";
import Support from "./pages/Support";
import TicketDetail from "./components/table/TicketDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Overview from "./pages/Overview";
import Monitor from "./pages/Monitor";
import SupportTicket from "./components/support/SupportTicket";

function App() {
  const [data, setData] = useState("");

  const handleDataChange = (newData) => {
    setData(newData);
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <ProtectedRoute
              element={
                <div className="flex bg-black">
                  <Sidebar data={data} />
                  <div className="flex-1 flex flex-col">
                    <Topbar />
                    <Routes>
                      <Route path="/" element={<Overview />} />
                      <Route
                        path="/agents"
                        element={
                          <ManageAgent onDataChange={handleDataChange} />
                        }
                      />
                      <Route path="/chat-history" element={<ChatHistory />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/monitor" element={<Monitor />} />
                      <Route path="support/ticket" element={<SupportTicket />} />
                      {/* <Route
                        path="/support/ticket/:id"
                        element={<TicketDetail />}
                      /> */}
                    </Routes>
                  </div>
                </div>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
