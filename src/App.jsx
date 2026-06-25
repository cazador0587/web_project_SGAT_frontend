import { useState, useEffect } from "react";
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
import Toast from "./components/Toast/Toast";
import EditProfile from "./pages/EditProfile/EditProfile";
import CurrentUserContext from "./contexts/CurrentUserContext";
import mainApi from "./utils/MainApi";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./pages/Register/Register";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  const [equipments, setEquipments] = useState([]);
  
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

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("sgat-token");

    if (!token) return;

    mainApi
      .getCurrentUser(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);

        return mainApi.getEquipments(token);
      })
      .then((equipmentsData) => {
        setEquipments(equipmentsData);
      })
      .catch(() => {
        localStorage.removeItem("sgat-token");
        setCurrentUser(null);
        setIsLoggedIn(false);
      });
  }, []);

  const handleLogin = ({ email, password }) => {
    return mainApi
      .signin({ email, password })
      .then(({ token }) => {
        localStorage.setItem("sgat-token", token);

        return mainApi.getCurrentUser(token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);

        const token = localStorage.getItem("sgat-token");
        return mainApi.getEquipments(token);
      })
      .then((equipmentsData) => {
        setEquipments(equipmentsData);
        showToast("Sesión iniciada correctamente");
      });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("sgat-token");
    setCurrentUser(null);
    setIsLoggedIn(false);
    setEquipments([]);
    showToast("Sesión cerrada correctamente");
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      <EquipmentContext.Provider
        value={{ equipments, setEquipments, showToast }}
      >
        {isLoggedIn && <Header />}
        {isLoggedIn && <Navigation />}

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login onLogin={handleLogin} />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            />

            <Route
              path="/register-equipment"
              element={
                <ProtectedRoute>
                  <RegisterEquipment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile/edit"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/equipment/:id"
              element={
                <ProtectedRoute>
                  <EquipmentDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/equipment/:id/edit"
              element={
                <ProtectedRoute>
                  <EditEquipment />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
        <Toast message={toast.message} show={toast.show} />
      </EquipmentContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
