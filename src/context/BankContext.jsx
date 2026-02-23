import React, { createContext, useState, useCallback, useEffect } from 'react';

export const BankContext = createContext();

const initialTransactions = [
  {
    id: 1,
    type: 'receive',
    date: new Date(Date.now() - 86400000 * 2).toLocaleString('en-IN'),
    sender: 'Employer',
    receiver: 'My Account',
    amount: 50000,
    note: 'Salary for the month',
    status: 'completed',
  },
  {
    id: 2,
    type: 'send',
    date: new Date(Date.now() - 86400000).toLocaleString('en-IN'),
    sender: 'My Account',
    receiver: 'Amazon',
    amount: 1500,
    note: 'Shopping',
    status: 'completed',
  },
  {
    id: 3,
    type: 'withdraw',
    date: new Date().toLocaleString('en-IN'),
    sender: 'My Account',
    receiver: 'ATM',
    amount: 2000,
    note: 'Cash withdrawal',
    status: 'completed',
  },
];

const initialNotifications = [
  {
    id: 1,
    type: 'receive',
    message: 'Salary received from Employer - ₹50,000.00',
    timestamp: new Date(Date.now() - 86400000 * 2).toLocaleString('en-IN'),
    read: true,
  },
  {
    id: 2,
    type: 'send',
    message: 'Money sent to Amazon - ₹1,500.00',
    timestamp: new Date(Date.now() - 86400000).toLocaleString('en-IN'),
    read: false,
  },
];

export const BankProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(3000000);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [notifications, setNotifications] = useState(initialNotifications);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('bankUser');
      const savedBalance = localStorage.getItem('bankBalance');
      const savedTransactions = localStorage.getItem('bankTransactions');
      const savedNotifications = localStorage.getItem('bankNotifications');

      if (savedUser && savedUser !== 'undefined') {
        setUser(JSON.parse(savedUser));
      }

      if (savedBalance && savedBalance !== 'undefined') {
        const parsedBalance = JSON.parse(savedBalance);
        if (parsedBalance === 46500) {
          setBalance(3000000);
        } else {
          setBalance(parsedBalance);
        }
      }
      
      if (savedTransactions && savedTransactions !== 'undefined') {
        const parsed = JSON.parse(savedTransactions);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTransactions(parsed);
        }
      }
      
      if (savedNotifications && savedNotifications !== 'undefined') {
        const parsed = JSON.parse(savedNotifications);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotifications(parsed);
        }
      }
    } catch (e) {
      console.error('Error parsing localStorage data, resetting defaults:', e);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('bankUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('bankUser');
    }
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
    // Validation for demo credentials
    if (username === 'gowthami@gmail.com' && password === '123456') {
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

  const depositMoney = useCallback((accountHolder, amount) => {
    if (amount <= 0) {
      return { success: false, message: 'Invalid amount' };
    }

    const newTransaction = {
      id: Date.now(),
      type: 'receive',
      date: new Date().toLocaleString('en-IN'),
      sender: 'Cash Deposit',
      receiver: accountHolder,
      amount: parseFloat(amount),
      note: 'Cash Deposit',
      status: 'completed',
    };

    setBalance((prev) => prev + parseFloat(amount));
    setTransactions((prev) => [newTransaction, ...prev]);

    const notification = {
      id: Date.now(),
      type: 'receive',
      message: `Money deposited - ₹${parseFloat(amount).toFixed(2)}`,
      timestamp: new Date().toLocaleString('en-IN'),
      read: false,
    };
    setNotifications((prev) => [notification, ...prev]);

    return { success: true, message: 'Money deposited successfully' };
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
    depositMoney,
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
