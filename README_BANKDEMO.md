# 🏦 BankDemo - React Banking Dashboard

A modern, fully-functional banking dashboard demo application built with React, Vite, and Material UI. This is a demonstration project with no real banking integration or payment processing.

## ✨ Features

### 🔐 Authentication
- Simple login page with username and password
- Demo credentials: `username: demo`, `password: demo123`
- Protected routes - requires login to access dashboard and other pages
- Logout functionality with session clearing

### 💳 Dashboard
- Account holder information
- Dummy account balance (₹50,000 initial balance)
- Quick action cards for Send Money, Withdraw, and Transactions
- Last 5 transactions preview
- Notification badge showing unread notifications

### 💰 Send Money
- Transfer money to another account
- Form validation
- Balance check before transaction
- Automatic deduction from account
- Transaction recording with timestamp
- Notification generation
- Optional note field for transactions
- Success snackbar confirmation

### 💸 Withdraw Cash
- Withdraw money from account
- Quick preset amounts (₹5,000, ₹10,000, ₹20,000, ₹50,000)
- Amount validation
- Balance verification
- Automatic deduction from account
- Transaction recording
- Notification generation

### 📊 Transaction History
- Complete transaction history table
- Search functionality (find by name or amount)
- Filter by transaction type (Send/Withdraw/Receive)
- Transaction details including:
  - Date and time
  - Transaction type with color-coded chips
  - Sender and receiver information
  - Amount with +/- indicators
  - Status badge
  - Associated notes
- Summary statistics (total transactions, total sent, total withdrawn)

### 🔔 Notifications
- Real-time notification display
- Mark notifications as read
- Notification types with icons:
  - Money Sent (blue icon)
  - Withdrawal (orange icon)
  - Money Received (green icon)
- Unread notification count in AppBar badge
- Notification timestamps
- Summary statistics

### 🎨 User Interface
- Material Design components
- Responsive layout (mobile, tablet, desktop)
- Beautiful gradient backgrounds
- AppBar with user menu and notifications
- Collapsible sidebar navigation
- Dark/light theme ready
- Professional card and table designs
- Custom Material UI theme with purple/blue gradient colors

### 💾 Data Persistence
- localStorage for storing:
  - User session
  - Account balance
  - Transaction history
  - Notifications
- Automatic data persistence on every action
- Data loads from localStorage on app startup

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **UI Library**: Material UI (MUI v5)
- **Icons**: Material UI Icons
- **Routing**: React Router v6
- **Styling**: Material-UI Theme System
- **State Management**: React Context API + Hooks
- **Storage**: Browser localStorage

## 📦 Project Structure

```
src/
├── components/
│   ├── Layout.jsx              # Main layout with AppBar and Sidebar
│   └── ProtectedRoute.jsx      # Route protection wrapper
├── context/
│   └── BankContext.jsx         # Global state management
├── pages/
│   ├── LoginPage.jsx           # Login page
│   ├── Dashboard.jsx           # Main dashboard
│   ├── SendMoneyPage.jsx       # Send money form
│   ├── WithdrawPage.jsx        # Withdraw form
│   ├── TransactionHistoryPage.jsx  # Transaction history
│   └── NotificationsPage.jsx   # Notifications list
├── utils/
│   └── helpers.js              # Utility functions (formatting, validation)
├── App.jsx                     # Main app with routing
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd /Users/varaprasad/Development/bankdemo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔑 Demo Credentials

**Username**: `demo`  
**Password**: `demo123`

Any username and password combination will work (no real authentication).

## 💡 How to Use

### 1. Login
- Enter username and password on the login page
- Click "Login" button
- You'll be redirected to the dashboard

### 2. Send Money
- Click "Send Money" from dashboard or sidebar
- Fill in receiver name and amount
- Add an optional note
- Click "Send Money"
- Money will be deducted from your balance
- A notification will be created

### 3. Withdraw Cash
- Click "Withdraw" from dashboard or sidebar
- Choose a preset amount or enter custom amount
- Click "Withdraw"
- Money will be deducted from your balance
- A notification will be created

### 4. View Transactions
- Click "Transactions" from sidebar
- View all transactions in table format
- Search by name or amount
- Filter by transaction type
- View transaction statistics

### 5. Check Notifications
- Click the notification bell icon in the AppBar
- View all notifications
- Click a notification to mark it as read
- Unread count shown in the badge

### 6. Logout
- Click on the user avatar in AppBar or sidebar
- Select "Logout"
- You'll be redirected to login page

## 🎯 Key Features

### Balance Management
- Initial balance: ₹50,000
- Automatic deduction on transactions
- Validation to prevent overdrafts
- Real-time balance display

### Responsive Design
- **Mobile**: Full-screen layout with hamburger menu
- **Tablet**: Two-column layout
- **Desktop**: Three-column layout with fixed sidebar

### Data Persistence
- All data saved to browser's localStorage
- Survives page refreshes
- Data can be cleared using browser dev tools

### Validation
- Username and password required
- Amount validation (must be positive)
- Balanced check before transaction
- Receiver name required

## 🎨 Color Scheme

- **Primary**: Purple (`#667eea`)
- **Secondary**: Dark Purple (`#764ba2`)
- **Success**: Green (`#10b981`)
- **Warning**: Amber (`#f59e0b`)
- **Error**: Red (`#ef4444`)
- **Background**: Light Gray (`#f5f5f5`)

## 🔐 Security Note

⚠️ **This is a demo application only!**
- No real authentication
- No real payments or transfers
- Data stored in browser (not secure)
- Not suitable for production use
- All data is lost if localStorage is cleared

## 🚀 Future Enhancements

Following features could be added:
- Dark mode toggle
- Multiple account support
- Transaction filters by date range
- Export transaction history as CSV/PDF
- QR code for money transfers
- Profile/Settings page
- Transaction details modal
- Scheduled transfers
- Recurring payments
- Money request feature

## 📝 Notes

- The app uses Indian Rupee (₹) currency formatting
- All transactions are timestamped
- Notifications are automatically generated for each transaction
- The app follows Material Design principles
- Fully responsive and mobile-friendly

## 📄 License

This project is for educational and demonstration purposes only.

## 👨‍💻 Developer

Created as a demo banking dashboard application.

---

**Enjoy exploring the BankDemo dashboard! 🎉**
