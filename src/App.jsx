import { useState } from "react";
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
import EquipmentContext from "./contexts/EquipmentContext";
import { initialEquipments } from "./data/equipments";
import Toast from "./components/Toast/Toast";
import EditProfile from "./pages/EditProfile/EditProfile";


function App() {
  const [equipments, setEquipments] = useState(initialEquipments);
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  const showToast = (message) => {
    setToast({
      show: true,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
      });
    }, 3000);
  };

  return (
    <EquipmentContext.Provider value={{ equipments, setEquipments, showToast }}>
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
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </main>

      <Footer />
      <Toast message={toast.message} show={toast.show} />
    </EquipmentContext.Provider>
  );
}

export default App;
