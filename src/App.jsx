import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SendMoneyPage from './pages/SendMoneyPage';
import WithdrawPage from './pages/WithdrawPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import NotificationsPage from './pages/NotificationsPage';
import Layout from './components/Layout';
import { BankProvider, useBank } from './context/BankContext';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user } = useBank();
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function AppRoutes() {
  const { user } = useBank();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/send-money"
        element={
          <ProtectedRoute>
            <Layout>
              <SendMoneyPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/withdraw"
        element={
          <ProtectedRoute>
            <Layout>
              <WithdrawPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Layout>
              <TransactionHistoryPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Layout>
              <NotificationsPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <BankProvider>
        <AppRoutes />
      </BankProvider>
    </Router>
  );
}

