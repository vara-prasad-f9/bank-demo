import React, { createContext, useState, useCallback, useEffect } from 'react';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(50000);
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('bankUser');
    const savedBalance = localStorage.getItem('bankBalance');
    const savedTransactions = localStorage.getItem('bankTransactions');
    const savedNotifications = localStorage.getItem('bankNotifications');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedBalance) setBalance(JSON.parse(savedBalance));
    if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (user) localStorage.setItem('bankUser', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('bankBalance', JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('bankTransactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('bankNotifications', JSON.stringify(notifications));
  }, [notifications]);

  const login = useCallback((username, password) => {
    // Simple login - no real authentication
    if (username && password) {
      const userData = {
        username,
        loginTime: new Date().toISOString(),
      };
      setUser(userData);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const sendMoney = useCallback((senderName, receiverName, amount, note) => {
    if (amount > balance) {
      return { success: false, message: 'Insufficient balance' };
    }

    if (amount <= 0) {
      return { success: false, message: 'Invalid amount' };
    }

    const newTransaction = {
      id: Date.now(),
      type: 'send',
      date: new Date().toLocaleString('en-IN'),
      sender: senderName,
      receiver: receiverName,
      amount: parseFloat(amount),
      note,
      status: 'completed',
    };

    setBalance((prev) => prev - parseFloat(amount));
    setTransactions((prev) => [newTransaction, ...prev]);

    const notification = {
      id: Date.now(),
      type: 'send',
      message: `Money sent to ${receiverName} - ₹${parseFloat(amount).toFixed(2)}`,
      timestamp: new Date().toLocaleString('en-IN'),
      read: false,
    };
    setNotifications((prev) => [notification, ...prev]);

    return { success: true, message: 'Money sent successfully' };
  }, [balance]);

  const withdrawMoney = useCallback((accountHolder, amount) => {
    if (amount > balance) {
      return { success: false, message: 'Insufficient balance' };
    }

    if (amount <= 0) {
      return { success: false, message: 'Invalid amount' };
    }

    const newTransaction = {
      id: Date.now(),
      type: 'withdraw',
      date: new Date().toLocaleString('en-IN'),
      sender: accountHolder,
      receiver: 'ATM Withdrawal',
      amount: parseFloat(amount),
      note: 'ATM Withdrawal',
      status: 'completed',
    };

    setBalance((prev) => prev - parseFloat(amount));
    setTransactions((prev) => [newTransaction, ...prev]);

    const notification = {
      id: Date.now(),
      type: 'withdraw',
      message: `Money withdrawn - ₹${parseFloat(amount).toFixed(2)}`,
      timestamp: new Date().toLocaleString('en-IN'),
      read: false,
    };
    setNotifications((prev) => [notification, ...prev]);

    return { success: true, message: 'Money withdrawn successfully' };
  }, [balance]);

  const addNotification = useCallback((type, message) => {
    const notification = {
      id: Date.now(),
      type,
      message,
      timestamp: new Date().toLocaleString('en-IN'),
      read: false,
    };
    setNotifications((prev) => [notification, ...prev]);
  }, []);

  const markNotificationAsRead = useCallback((notificationId) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  const value = {
    user,
    balance,
    transactions,
    notifications,
    login,
    logout,
    sendMoney,
    withdrawMoney,
    addNotification,
    markNotificationAsRead,
    getUnreadCount,
  };

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
};

export const useBank = () => {
  const context = React.useContext(BankContext);
  if (!context) {
    throw new Error('useBank must be used within BankProvider');
  }
  return context;
};
