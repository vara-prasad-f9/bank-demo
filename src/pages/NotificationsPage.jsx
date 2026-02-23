import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useBank } from '../context/BankContext';

const NotificationsPage = () => {
  const navigate = useNavigate();
  const { notifications, markNotificationAsRead } = useBank();

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'send':
        return <SendIcon sx={{ color: '#667eea' }} />;
      case 'withdraw':
        return <AttachMoneyIcon sx={{ color: '#f59e0b' }} />;
      case 'receive':
        return <SendIcon sx={{ color: '#10b981' }} />;
      default:
        return <NotificationsIcon sx={{ color: '#667eea' }} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'send':
        return 'error';
      case 'withdraw':
        return 'warning';
      case 'receive':
        return 'success';
      default:
        return 'info';
    }
  };

  const getTypeLabel = (type) => {
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

  const handleNotificationClick = (notificationId) => {
    markNotificationAsRead(notificationId);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Notifications
        </Typography>
        <Typography variant="body2" color="textSecondary">
          View all your banking notifications
        </Typography>
      </Box>

      {notifications.length > 0 ? (
        <>
          {/* Notifications Stats */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Quick Stats
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ textAlign: 'center', flex: 1, minWidth: 100 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {notifications.length}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Total Notifications
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', flex: 1, minWidth: 100 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                    {notifications.filter((n) => !n.read).length}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Unread
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Notifications List */}
          <Card>
            <List sx={{ width: '100%' }}>
              {notifications.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  <ListItem
                    sx={{
                      backgroundColor: notification.read ? 'transparent' : '#f0f4ff',
                      '&:hover': {
                        backgroundColor: notification.read ? '#f9f9f9' : '#e8edff',
                      },
                    }}
                    secondaryAction={
                      <Chip
                        label={getTypeLabel(notification.type)}
                        size="small"
                        color={getTypeColor(notification.type)}
                        variant="outlined"
                      />
                    }
                  >
                    <ListItemButton
                      onClick={() => handleNotificationClick(notification.id)}
                      sx={{ flex: 1 }}
                    >
                      <ListItemIcon>
                        {getNotificationIcon(notification.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={notification.message}
                        secondary={
                          <Box sx={{ mt: 0.5 }}>
                            <Typography
                              variant="caption"
                              display="block"
                              color="textSecondary"
                            >
                              {notification.timestamp}
                            </Typography>
                            {notification.read && (
                              <Chip
                                label="Read"
                                size="small"
                                variant="outlined"
                                sx={{ mt: 0.5 }}
                              />
                            )}
                          </Box>
                        }
                        primaryTypographyProps={{
                          sx: {
                            fontWeight: notification.read ? 400 : 600,
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < notifications.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <NotificationsIcon
              sx={{
                fontSize: 60,
                color: '#d1d5db',
                mb: 2,
              }}
            />
            <Typography color="textSecondary" sx={{ mb: 2 }}>
              No notifications yet
            </Typography>
            <Typography variant="caption" display="block" color="textSecondary" sx={{ mb: 2 }}>
              You'll see notifications here when you perform transactions
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/send-money')}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              Send Money
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Info Alert */}
      <Alert severity="info" sx={{ mt: 3 }}>
        Notifications are stored in your browser's local storage. For security, they persist
        only on this device.
      </Alert>

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

export default NotificationsPage;
