import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useBank } from '../context/BankContext';
import { formatCurrency } from '../utils/helpers';

const TransactionHistoryPage = () => {
  const navigate = useNavigate();
  const { transactions } = useBank();
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredTransactions = transactions.filter((transaction) => {
    const typeMatch = filterType === 'all' || transaction.type === filterType;
    const searchMatch =
      transaction.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.receiver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toString().includes(searchTerm);

    return typeMatch && searchMatch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Transaction History
        </Typography>
        <Typography variant="body2" color="textSecondary">
          View all your transactions
        </Typography>
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Search transactions"
                placeholder="Search by name or amount..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Filter by type"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="all">All Transactions</MenuItem>
                <MenuItem value="send">Money Sent</MenuItem>
                <MenuItem value="withdraw">Withdrawal</MenuItem>
                <MenuItem value="receive">Money Received</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      {filteredTransactions.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Date & Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>From</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>To</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f9f9f9',
                    },
                  }}
                >
                  <TableCell>
                    <Typography variant="body2">{transaction.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={getTransactionLabel(transaction.type)}
                      size="small"
                      color={getTransactionTypeColor(transaction.type)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{transaction.sender}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{transaction.receiver}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 'bold',
                        color:
                          transaction.type === 'receive'
                            ? '#10b981'
                            : '#ef4444',
                      }}
                    >
                      {transaction.type === 'receive' ? '+' : '-'}
                      {formatCurrency(transaction.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      size="small"
                      color={transaction.status === 'completed' ? 'success' : 'default'}
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color="textSecondary">
                      {transaction.note || '-'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
              {searchTerm || filterType !== 'all'
                ? 'No transactions match your search'
                : 'No transactions yet'}
            </Typography>
            {(searchTerm || filterType !== 'all') && (
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Summary */}
      {filteredTransactions.length > 0 && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary">
                    Total Transactions
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {filteredTransactions.length}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary">
                    Total Sent
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#ef4444' }}
                  >
                    {formatCurrency(
                      filteredTransactions
                        .filter((t) => t.type === 'send')
                        .reduce((sum, t) => sum + t.amount, 0)
                    )}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary">
                    Total Withdrawn
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#f59e0b' }}
                  >
                    {formatCurrency(
                      filteredTransactions
                        .filter((t) => t.type === 'withdraw')
                        .reduce((sum, t) => sum + t.amount, 0)
                    )}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default TransactionHistoryPage;
