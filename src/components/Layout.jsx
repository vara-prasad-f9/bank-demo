import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Send as SendIcon,
  AttachMoney as AttachMoneyIcon,
  History as HistoryIcon,
  NotificationsActive as NotificationsIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBank } from '../context/BankContext';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, getUnreadCount } = useBank();

  const unreadCount = getUnreadCount ? getUnreadCount() : 0;

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Send Money', icon: <SendIcon />, path: '/send-money' },
    { label: 'Withdraw', icon: <AttachMoneyIcon />, path: '/withdraw' },
    { label: 'Transactions', icon: <HistoryIcon />, path: '/transactions' },
    { label: 'Notifications', icon: <NotificationsIcon />, path: '/notifications', badge: unreadCount },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleMenuClose();
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const drawerContent = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            mx: 'auto',
            mb: 1,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          {user?.username?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {user?.username}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Demo Account
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.path}
            onClick={() => handleNavigate(item.path)}
            sx={{
              backgroundColor: isActive(item.path) ? '#f0f4ff' : 'transparent',
              borderLeft: isActive(item.path) ? '4px solid #667eea' : '4px solid transparent',
              color: isActive(item.path) ? '#667eea' : 'inherit',
              '&:hover': { backgroundColor: '#f9f9f9' },
            }}
          >
            <ListItemIcon sx={{ color: isActive(item.path) ? '#667eea' : '#666' }}>
              {item.badge !== undefined && item.badge > 0 ? (
                <Badge badgeContent={item.badge} color="error">
                  {item.icon}
                </Badge>
              ) : (
                item.icon
              )}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: { fontWeight: isActive(item.path) ? 600 : 400 },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <List>
        <ListItem button onClick={handleLogout} sx={{ color: '#ef4444' }}>
          <ListItemIcon sx={{ color: '#ef4444' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: '100%',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleNavigate('/dashboard')}
          >
            💳 BankDemo
          </Typography>

          <IconButton
            color="inherit"
            onClick={() => handleNavigate('/notifications')}
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{
              p: 0.5,
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: 'rgba(255,255,255,0.2)',
                fontSize: '0.875rem',
              }}
            >
              {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem disabled>
              <Typography variant="caption">{user?.username}</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout} sx={{ color: '#ef4444' }}>
              <LogoutIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: 280,
          flexShrink: 0,
          bgcolor: '#ffffff',
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: 280,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 280,
              boxSizing: 'border-box',
              mt: '64px',
              height: 'calc(100vh - 64px)',
              position: 'fixed',
              left: 0,
              top: '64px',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          pt: '64px',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          ml: { xs: 0, md: 280 },
          width: { xs: '100%', md: 'calc(100% - 280px)' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
