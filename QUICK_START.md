# 🚀 Quick Start Guide

## Installation & Setup (2 minutes)

### Step 1: Navigate to Project
```bash
cd /Users/varaprasad/Development/bankdemo
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:5173
```

---

## Login (1 minute)

### Demo Credentials
- **Username**: `demo`
- **Password**: `demo123`

Or use any username/password combination (no real authentication).

---

## First Transaction (2 minutes)

### Send Money
1. Click "Send Money" in sidebar
2. Enter receiver name: "Ramesh"
3. Enter amount: "₹5,000"
4. Click "Send Money"
5. See success message
6. Balance reduces to ₹45,000

### Withdraw Cash
1. Click "Withdraw" in sidebar
2. Click preset "₹5,000" button or enter custom amount
3. Click "Withdraw"
4. See success message

---

## Check Your Transactions (1 minute)

### View All Transactions
1. Click "Transactions" in sidebar
2. See transaction table with all details
3. Use search box to find transactions
4. Use filter dropdown to filter by type

---

## Check Notifications (1 minute)

### View Notifications
1. Click bell icon in AppBar (shows unread count)
2. See all notifications with types
3. Click notification to mark as read

---

## Build for Production

### Create Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Features Quick Reference

| Feature | Location | Time |
|---------|----------|------|
| Dashboard | Home after login | View in 1 min |
| Send Money | Sidebar menu | Try in 2 min |
| Withdraw | Sidebar menu | Try in 2 min |
| Transactions | Sidebar menu | View in 1 min |
| Notifications | Bell icon | View in 1 min |

---

## Tips & Tricks

### 💡 Quick Tips
- Balance updates in real-time
- All data saved automatically
- Refresh page - data persists
- Close browser - data still there (refreshes needed)
- Use preset amounts for quick withdrawal

### 🎯 What You Can Do
- ✅ Send money multiple times
- ✅ Withdraw cash
- ✅ Search transactions
- ✅ Filter transactions by type
- ✅ View real-time balance
- ✅ Check notifications

### ⚠️ What You Can't Do
- ✗ Real payments (demo only)
- ✗ Actual money transfer
- ✗ Real authentication
- ✗ Account creation
- ✗ Multiple accounts

---

## Keyboard Shortcuts

- `Ctrl/Cmd + K` - Command palette (if added)
- `Ctrl/Cmd + L` - Logout (with menu)

---

## Troubleshooting

### App Not Loading
```bash
# Clear cache and restart
npm run dev
# Or open in new incognito window
```

### Data Lost After Refresh
- Check developer console (F12)
- Check browser's localStorage settings
- Modern browsers should persist data

### Port Already in Use
```bash
# Vite will automatically use next available port
# Or specify port manually:
npx vite --port 3000
```

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Material UI installation

---

## Project Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Create production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint

# Dependencies
npm install          # Install all packages
npm update           # Update packages
```

---

## File Structure

```
bankdemo/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── BankContext.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── SendMoneyPage.jsx
│   │   ├── WithdrawPage.jsx
│   │   ├── TransactionHistoryPage.jsx
│   │   └── NotificationsPage.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── README_BANKDEMO.md
├── FEATURES.md
└── QUICK_START.md (this file)
```

---

## Next Steps

1. **Explore**: Try all features and pages
2. **Test**: Perform multiple transactions
3. **Customize**: Modify colors, add features
4. **Deploy**: Build and deploy to production
5. **Enhance**: Add more features as needed

---

## Common Customizations

### Change Initial Balance
**File**: `src/context/BankContext.jsx` (line ~15)
```javascript
const [balance, setBalance] = useState(50000); // Change this
```

### Change App Name
**File**: `src/components/Layout.jsx`
```javascript
💳 BankDemo  // Change the name
```

### Change Colors
**File**: `src/App.jsx` (theme section)
```javascript
primary: {
  main: '#667eea', // Change primary color
},
```

### Add New Transaction Type
**File**: `src/context/BankContext.jsx`
- Add new case in switch statements
- Add new transaction type handling
- Update color mapping in pages

---

## Need Help?

### Resources
1. **React Docs**: https://react.dev
2. **Material UI**: https://mui.com
3. **React Router**: https://reactrouter.com
4. **Vite Docs**: https://vitejs.dev

### Common Issues & Solutions

**Q: Data not persisting?**
A: Check browser storage settings. Chrome: ⚙️ → Privacy → Clear cookies

**Q: App won't start?**
A: Run `npm install` again, then `npm run dev`

**Q: Balance calculation wrong?**
A: Check localStorage in DevTools (F12 → Application → Local Storage)

---

## That's It! 🎉

You now have a fully functional banking dashboard!

Start with the Login page and explore all features.
Enjoy! 🏦
