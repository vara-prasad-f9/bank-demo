import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBank } from '../context/BankContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useBank();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
