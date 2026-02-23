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
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useBank } from '../context/BankContext';
import { formatCurrency } from '../utils/helpers';

const SendMoneyPage = () => {
  const navigate = useNavigate();
  const { user, balance, sendMoney } = useBank();
  const [formData, setFormData] = useState({
    senderName: user?.username || '',
    receiverName: '',
    amount: '',
    note: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!formData.senderName.trim()) {
      setError('Sender name is required');
      setLoading(false);
      return;
    }

    if (!formData.receiverName.trim()) {
      setError('Receiver name is required');
      setLoading(false);
      return;
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid amount');
      setLoading(false);
      return;
    }

    if (parseFloat(formData.amount) > balance) {
      setError('Insufficient balance for this transaction');
      setLoading(false);
      return;
    }

    // Process the transaction
    setTimeout(() => {
      const result = sendMoney(
        formData.senderName,
        formData.receiverName,
        formData.amount,
        formData.note
      );

      if (result.success) {
        setSuccess(true);
        setFormData({
          senderName: user?.username || '',
          receiverName: '',
          amount: '',
          note: '',
        });
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
          Send Money
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Transfer money to another account
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
              Current Balance
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
              label="Sender Name"
              name="senderName"
              variant="outlined"
              margin="normal"
              value={formData.senderName}
              onChange={handleChange}
              disabled
              helperText="Your name (auto-filled)"
            />

            <TextField
              fullWidth
              label="Receiver Name"
              name="receiverName"
              variant="outlined"
              margin="normal"
              value={formData.receiverName}
              onChange={handleChange}
              placeholder="Enter recipient name"
              inputProps={{ maxLength: 50 }}
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
              inputProps={{ step: '0.01', min: '0' }}
            />

            <TextField
              fullWidth
              label="Note (Optional)"
              name="note"
              variant="outlined"
              margin="normal"
              value={formData.note}
              onChange={handleChange}
              placeholder="Add note for this transaction"
              multiline
              rows={3}
              inputProps={{ maxLength: 200 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
              startIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Send Money'}
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
          Money sent successfully! Redirecting...
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SendMoneyPage;
