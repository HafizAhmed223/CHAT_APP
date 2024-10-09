import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Form from "./modules/Form";
import Dashboard from "./modules/Dashboard";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("user:token") !== null || true;
  return loggedIn ? children : <Navigate to="/user/signin" />;
};

const PublicRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("user:token") !== null || true;
  return loggedIn ? <Navigate to="/" /> : children;
};

const App = () => {
  return (
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
        path="/user/signin"
        element={
          <PublicRoute>
            <Form isSignInPage={true} />
          </PublicRoute>
        }
      />
      <Route
        path="/user/signup"
        element={
          <PublicRoute>
            <Form isSignInPage={false} />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default App;
