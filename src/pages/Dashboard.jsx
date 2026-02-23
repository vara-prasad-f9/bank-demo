import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Send as SendIcon,
  AttachMoney as AttachMoneyIcon,
  History as HistoryIcon,
} from '@mui/icons-material';
import { useBank } from '../context/BankContext';
import { formatCurrency } from '../utils/helpers';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, balance, transactions } = useBank();

  const lastTransactions = transactions.slice(0, 5);

  const getTransactionTypeColor = (type) => {
    switch (type) {
      case 'send':
        return 'error';
      case 'withdraw':
        return 'warning';
      case 'receive':
        return 'success';
      default:
        return 'default';
    }
  };

  const getTransactionLabel = (type) => {
    switch (type) {
      case 'send':
        return 'Money Sent';
      case 'withdraw':
        return 'Withdrawal';
      case 'receive':
        return 'Money Received';
      default:
        return type;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome, {user?.username}! 👋
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Here's your banking dashboard
        </Typography>
      </Box>

      {/* Balance Card */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                transform: 'translate(50%, -50%)',
              },
            }}
          >
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 1 }}>
                Account Balance
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                {formatCurrency(balance)}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Available for transactions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Action Cards */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Quick Actions
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s, boxShadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
            onClick={() => navigate('/send-money')}
          >
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <SendIcon
                sx={{
                  fontSize: 40,
                  color: '#667eea',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Send Money
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Transfer to recipient
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s, boxShadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
            onClick={() => navigate('/withdraw')}
          >
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <AttachMoneyIcon
                sx={{
                  fontSize: 40,
                  color: '#f59e0b',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Withdraw Cash
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Withdraw from ATM
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s, boxShadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
            onClick={() => navigate('/transactions')}
          >
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <HistoryIcon
                sx={{
                  fontSize: 40,
                  color: '#10b981',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Transactions
              </Typography>
              <Typography variant="caption" color="textSecondary">
                View all history
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Transactions */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Recent Transactions
      </Typography>

      {lastTransactions.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>From</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>To</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={getTransactionLabel(transaction.type)}
                      size="small"
                      color={getTransactionTypeColor(transaction.type)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{transaction.sender}</TableCell>
                  <TableCell>{transaction.receiver}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    {formatCurrency(transaction.amount)}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      size="small"
                      color="success"
                      variant="filled"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Typography color="textSecondary">
              No transactions yet. Start by sending money or withdrawing cash!
            </Typography>
          </CardContent>
        </Card>
      )}

      {lastTransactions.length > 0 && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/transactions')}
          >
            View All Transactions
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Dashboard;
