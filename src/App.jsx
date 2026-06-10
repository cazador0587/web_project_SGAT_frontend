import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import RegisterEquipment from "./pages/RegisterEquipment/RegisterEquipment";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import EquipmentDetail from "./pages/EquipmentDetail/EquipmentDetail";
import EditEquipment from "./pages/EditEquipment/EditEquipment";

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/register-equipment" element={<RegisterEquipment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="/equipment/:id/edit" element={<EditEquipment />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
