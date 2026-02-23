// Format number to Indian Rupees
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Format number with Indian number system
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

// Validate email
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate phone number
export const isValidPhoneNumber = (phone) => {
  return /^\d{10}$/.test(phone.replace(/\D/g, ''));
};

// Validate amount
export const isValidAmount = (amount) => {
  const num = parseFloat(amount);
  return num > 0 && num <= 1000000;
};
