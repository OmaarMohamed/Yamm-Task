import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import OrdersTable from "./components/OrdersTable";
import OrderDetail from "./pages/OrderDetails";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-700">
          <Routes>
            <Route path="/" element={<OrdersTable />} />
            <Route path="/order/:id" element={<OrderDetail />} />
          </Routes>
        </div>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
