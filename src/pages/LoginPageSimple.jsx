import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useBank } from '../context/BankContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useBank();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username, password);
      navigate('/dashboard');
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h3" sx={{ mb: 3, textAlign: 'center' }}>
          BankDemo Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mb: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
          Demo: gowthami@gmail.com / 123456
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
