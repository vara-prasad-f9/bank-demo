import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Alert,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useBank } from '../context/BankContext';
import { formatCurrency } from '../utils/helpers';

const WithdrawPage = () => {
  const navigate = useNavigate();
  const { user, balance, withdrawMoney } = useBank();
  const [formData, setFormData] = useState({
    accountHolder: user?.username || '',
    amount: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('');

  const presetAmounts = [5000, 10000, 20000, 50000];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
    setSelectedAmount('');
  };

  const handlePresetAmount = (amount) => {
    setSelectedAmount(amount.toString());
    setFormData((prev) => ({
      ...prev,
      amount: amount.toString(),
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!formData.accountHolder.trim()) {
      setError('Account holder name is required');
      setLoading(false);
      return;
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid amount');
      setLoading(false);
      return;
    }

    if (parseFloat(formData.amount) > balance) {
      setError('Insufficient balance for this withdrawal');
      setLoading(false);
      return;
    }

    // Process the withdrawal
    setTimeout(() => {
      const result = withdrawMoney(formData.accountHolder, formData.amount);

      if (result.success) {
        setSuccess(true);
        setFormData({
          accountHolder: user?.username || '',
          amount: '',
        });
        setSelectedAmount('');
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 800);
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Withdraw Cash
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Withdraw money from your account
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: 3 }}>
          {/* Current Balance */}
          <Box
            sx={{
              mb: 3,
              p: 2,
              backgroundColor: '#f3f4f6',
              borderRadius: 1,
              border: '1px solid #e5e7eb',
            }}
          >
            <Typography variant="caption" color="textSecondary">
              Available Balance
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#667eea' }}>
              {formatCurrency(balance)}
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Account Holder Name"
              name="accountHolder"
              variant="outlined"
              margin="normal"
              value={formData.accountHolder}
              onChange={handleChange}
              disabled
              helperText="Your name (auto-filled)"
            />

            <TextField
              fullWidth
              label="Amount (₹)"
              name="amount"
              type="number"
              variant="outlined"
              margin="normal"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              inputProps={{ step: '100', min: '0' }}
            />

            {/* Preset Amounts */}
            <Box sx={{ mt: 3, mb: 2 }}>
              <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mb: 1 }}>
                Quick Select:
              </Typography>
              <ToggleButtonGroup
                value={selectedAmount}
                exclusive
                onChange={(e, value) => {
                  if (value) handlePresetAmount(parseInt(value));
                }}
                fullWidth
                size="small"
              >
                {presetAmounts.map((amount) => (
                  <ToggleButton
                    key={amount}
                    value={amount.toString()}
                    disabled={amount > balance}
                  >
                    ₹{amount.toLocaleString('en-IN')}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              }}
              startIcon={<CreditCardIcon />}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Withdraw'}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => navigate('/dashboard')}
              disabled={loading}
            >
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Withdrawal successful! Redirecting...
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default WithdrawPage;
