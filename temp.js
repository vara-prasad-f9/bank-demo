import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Layout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4bdce1d5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=4bdce1d5"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"];
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
  Divider
} from "/node_modules/.vite/deps/@mui_material.js?v=4bdce1d5";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Send as SendIcon,
  AttachMoney as AttachMoneyIcon,
  History as HistoryIcon,
  NotificationsActive as NotificationsIcon,
  Logout as LogoutIcon,
  Close as CloseIcon
} from "/node_modules/.vite/deps/@mui_icons-material.js?v=4bdce1d5";
import { useNavigate, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=4bdce1d5";
import { useBank } from "/src/context/BankContext.jsx";
const Layout = ({ children }) => {
  _s();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, getUnreadCount } = useBank();
  const unreadCount = getUnreadCount ? getUnreadCount() : 0;
  const menuItems = [
    { label: "Dashboard", icon: /* @__PURE__ */ jsxDEV(DashboardIcon, {}, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 42,
      columnNumber: 31
    }, this), path: "/dashboard" },
    { label: "Send Money", icon: /* @__PURE__ */ jsxDEV(SendIcon, {}, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 43,
      columnNumber: 32
    }, this), path: "/send-money" },
    { label: "Withdraw", icon: /* @__PURE__ */ jsxDEV(AttachMoneyIcon, {}, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 44,
      columnNumber: 30
    }, this), path: "/withdraw" },
    { label: "Transactions", icon: /* @__PURE__ */ jsxDEV(HistoryIcon, {}, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 45,
      columnNumber: 34
    }, this), path: "/transactions" },
    { label: "Notifications", icon: /* @__PURE__ */ jsxDEV(NotificationsIcon, {}, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 46,
      columnNumber: 35
    }, this), path: "/notifications", badge: unreadCount }
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
    navigate("/");
    handleMenuClose();
  };
  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };
  const isActive = (path) => location.pathname === path;
  const drawerContent = /* @__PURE__ */ jsxDEV(Box, { sx: { width: 280 }, children: [
    /* @__PURE__ */ jsxDEV(Box, { sx: { display: "flex", justifyContent: "flex-end", p: 1 }, children: /* @__PURE__ */ jsxDEV(
      IconButton,
      {
        onClick: handleDrawerToggle,
        sx: { display: { sm: "none" } },
        children: /* @__PURE__ */ jsxDEV(CloseIcon, {}, void 0, false, {
          fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 77,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Box, { sx: { p: 2, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV(
        Avatar,
        {
          sx: {
            width: 60,
            height: 60,
            mx: "auto",
            mb: 1,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          },
          children: user?.username?.charAt(0).toUpperCase()
        },
        void 0,
        false,
        {
          fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
          lineNumber: 86,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Typography, { variant: "subtitle1", sx: { fontWeight: "bold" }, children: user?.username }, void 0, false, {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Typography, { variant: "caption", color: "textSecondary", children: "Demo Account" }, void 0, false, {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Divider, { sx: { my: 2 } }, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(List, { children: menuItems.map(
      (item) => /* @__PURE__ */ jsxDEV(
        ListItem,
        {
          button: true,
          onClick: () => handleNavigate(item.path),
          sx: {
            backgroundColor: isActive(item.path) ? "#f0f4ff" : "transparent",
            borderLeft: isActive(item.path) ? "4px solid #667eea" : "4px solid transparent",
            color: isActive(item.path) ? "#667eea" : "inherit",
            "&:hover": { backgroundColor: "#f9f9f9" }
          },
          children: [
            /* @__PURE__ */ jsxDEV(ListItemIcon, { sx: { color: isActive(item.path) ? "#667eea" : "#666" }, children: item.badge !== void 0 && item.badge > 0 ? /* @__PURE__ */ jsxDEV(Badge, { badgeContent: item.badge, color: "error", children: item.icon }, void 0, false, {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 122,
              columnNumber: 11
            }, this) : item.icon }, void 0, false, {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 120,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              ListItemText,
              {
                primary: item.label,
                primaryTypographyProps: {
                  sx: { fontWeight: isActive(item.path) ? 600 : 400 }
                }
              },
              void 0,
              false,
              {
                fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                lineNumber: 129,
                columnNumber: 13
              },
              this
            )
          ]
        },
        item.path,
        true,
        {
          fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
          lineNumber: 109,
          columnNumber: 7
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Divider, { sx: { my: 2 } }, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(List, { children: /* @__PURE__ */ jsxDEV(ListItem, { button: true, onClick: handleLogout, sx: { color: "#ef4444" }, children: [
      /* @__PURE__ */ jsxDEV(ListItemIcon, { sx: { color: "#ef4444" }, children: /* @__PURE__ */ jsxDEV(LogoutIcon, {}, void 0, false, {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 144,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(ListItemText, { primary: "Logout" }, void 0, false, {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
    lineNumber: 75,
    columnNumber: 3
  }, this);
  return /* @__PURE__ */ jsxDEV(Box, { sx: { display: "flex", width: "100%", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxDEV(
      AppBar,
      {
        position: "fixed",
        sx: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%"
        },
        children: /* @__PURE__ */ jsxDEV(Toolbar, { children: [
          /* @__PURE__ */ jsxDEV(
            IconButton,
            {
              color: "inherit",
              edge: "start",
              onClick: handleDrawerToggle,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ jsxDEV(MenuIcon, {}, void 0, false, {
                fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                lineNumber: 169,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 163,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Typography,
            {
              variant: "h6",
              sx: {
                fontWeight: "bold",
                flexGrow: 1,
                cursor: "pointer"
              },
              onClick: () => handleNavigate("/dashboard"),
              children: "💳 BankDemo"
            },
            void 0,
            false,
            {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 172,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            IconButton,
            {
              color: "inherit",
              onClick: () => handleNavigate("/notifications"),
              sx: { mr: 2 },
              children: /* @__PURE__ */ jsxDEV(Badge, { badgeContent: unreadCount, color: "error", children: /* @__PURE__ */ jsxDEV(NotificationsIcon, {}, void 0, false, {
                fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                lineNumber: 190,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                lineNumber: 189,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 184,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            IconButton,
            {
              color: "inherit",
              onClick: handleMenuOpen,
              sx: {
                p: 0.5,
                border: "2px solid rgba(255,255,255,0.3)"
              },
              children: /* @__PURE__ */ jsxDEV(
                Avatar,
                {
                  sx: {
                    width: 32,
                    height: 32,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    fontSize: "0.875rem"
                  },
                  children: user?.username?.charAt(0).toUpperCase()
                },
                void 0,
                false,
                {
                  fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                  lineNumber: 202,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 194,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Menu,
            {
              anchorEl,
              open: Boolean(anchorEl),
              onClose: handleMenuClose,
              children: [
                /* @__PURE__ */ jsxDEV(MenuItem, { disabled: true, children: /* @__PURE__ */ jsxDEV(Typography, { variant: "caption", children: user?.username }, void 0, false, {
                  fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                  lineNumber: 220,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                  lineNumber: 219,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV(Divider, {}, void 0, false, {
                  fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                  lineNumber: 222,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV(MenuItem, { onClick: handleLogout, sx: { color: "#ef4444" }, children: [
                  /* @__PURE__ */ jsxDEV(LogoutIcon, { sx: { mr: 1, fontSize: "1.2rem" } }, void 0, false, {
                    fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                    lineNumber: 224,
                    columnNumber: 15
                  }, this),
                  "Logout"
                ] }, void 0, true, {
                  fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
                  lineNumber: 223,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
              lineNumber: 214,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
          lineNumber: 162,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 154,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Box,
      {
        sx: {
          display: { xs: "none", md: "block" },
          width: 280,
          flexShrink: 0,
          bgcolor: "#ffffff"
        },
        children: /* @__PURE__ */ jsxDEV(
          Drawer,
          {
            variant: "permanent",
            sx: {
              width: 280,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 280,
                boxSizing: "border-box",
                mt: "64px",
                height: "calc(100vh - 64px)",
                position: "fixed",
                left: 0,
                top: "64px"
              }
            },
            children: drawerContent
          },
          void 0,
          false,
          {
            fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
            lineNumber: 239,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 231,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Drawer,
      {
        variant: "temporary",
        anchor: "left",
        open: drawerOpen,
        onClose: handleDrawerToggle,
        sx: {
          display: { xs: "block", md: "none" }
        },
        children: drawerContent
      },
      void 0,
      false,
      {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 259,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Box,
      {
        sx: {
          flexGrow: 1,
          pt: "64px",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          ml: { xs: 0, md: 280 },
          width: { xs: "100%", md: "calc(100% - 280px)" }
        },
        children
      },
      void 0,
      false,
      {
        fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
        lineNumber: 271,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
};
_s(Layout, "4oRRVqzFxx/gC7CkgISmeCwetL8=", false, function() {
  return [useNavigate, useLocation, useBank];
});
_c = Layout;
export default Layout;
var _c;
$RefreshReg$(_c, "Layout");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/Users/varaprasad/Development/bankdemo/src/components/Layout.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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UUFpQkE7QUFBQTtBQUFBLE1BekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTBCQTtBQUFBLElBRUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVE7QUFBQSxRQUNSLFFBQU87QUFBQSxRQUNQLE1BQU14QjtBQUFBQSxRQUNOLFNBQVNlO0FBQUFBLFFBQ1QsSUFBSTtBQUFBLFVBQ0ZXLFNBQVMsRUFBRWdDLElBQUksU0FBU04sSUFBSSxPQUFPO0FBQUEsUUFDckM7QUFBQSxRQUVDNUI7QUFBQUE7QUFBQUEsTUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFVQTtBQUFBLElBRUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLElBQUk7QUFBQSxVQUNGNkIsVUFBVTtBQUFBLFVBQ1ZhLElBQUk7QUFBQSxVQUNKbkIsV0FBVztBQUFBLFVBQ1hMLGlCQUFpQjtBQUFBLFVBQ2pCeUIsSUFBSSxFQUFFVCxJQUFJLEdBQUdOLElBQUksSUFBSTtBQUFBLFVBQ3JCM0IsT0FBTyxFQUFFaUMsSUFBSSxRQUFRTixJQUFJLHFCQUFxQjtBQUFBLFFBQ2hEO0FBQUEsUUFFQ3REO0FBQUFBO0FBQUFBLE1BVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV0E7QUFBQSxPQWpJRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0lBO0FBRUo7QUFBRUMsR0E3UElGLFFBQU07QUFBQSxVQUdPSCxhQUNBQyxhQUN3QkMsT0FBTztBQUFBO0FBQUEsS0FMNUNDO0FBK1BOLGVBQWVBO0FBQU8sSUFBQXVFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcHBCYXIiLCJCb3giLCJEcmF3ZXIiLCJJY29uQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJBdmF0YXIiLCJCYWRnZSIsIk1lbnUiLCJNZW51SXRlbSIsIkRpdmlkZXIiLCJNZW51SWNvbiIsIkRhc2hib2FyZCIsIkRhc2hib2FyZEljb24iLCJTZW5kIiwiU2VuZEljb24iLCJBdHRhY2hNb25leSIsIkF0dGFjaE1vbmV5SWNvbiIsIkhpc3RvcnkiLCJIaXN0b3J5SWNvbiIsIk5vdGlmaWNhdGlvbnNBY3RpdmUiLCJOb3RpZmljYXRpb25zSWNvbiIsIkxvZ291dCIsIkxvZ291dEljb24iLCJDbG9zZSIsIkNsb3NlSWNvbiIsInVzZU5hdmlnYXRlIiwidXNlTG9jYXRpb24iLCJ1c2VCYW5rIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJfcyIsImRyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm5hdmlnYXRlIiwibG9jYXRpb24iLCJ1c2VyIiwibG9nb3V0IiwiZ2V0VW5yZWFkQ291bnQiLCJ1bnJlYWRDb3VudCIsIm1lbnVJdGVtcyIsImxhYmVsIiwiaWNvbiIsInBhdGgiLCJiYWRnZSIsImhhbmRsZURyYXdlclRvZ2dsZSIsImhhbmRsZU1lbnVPcGVuIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVOYXZpZ2F0ZSIsImlzQWN0aXZlIiwicGF0aG5hbWUiLCJkcmF3ZXJDb250ZW50Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwIiwic20iLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJteCIsIm1iIiwiYmFja2dyb3VuZCIsInVzZXJuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJmb250V2VpZ2h0IiwibXkiLCJtYXAiLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyTGVmdCIsImNvbG9yIiwidW5kZWZpbmVkIiwic3giLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJ0aGVtZSIsImRyYXdlciIsIm1yIiwibWQiLCJmbGV4R3JvdyIsImN1cnNvciIsImJvcmRlciIsImZvbnRTaXplIiwiQm9vbGVhbiIsInhzIiwiZmxleFNocmluayIsImJnY29sb3IiLCJib3hTaXppbmciLCJtdCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInB0IiwibWwiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMYXlvdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEFwcEJhcixcbiAgQm94LFxuICBEcmF3ZXIsXG4gIEljb25CdXR0b24sXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgVG9vbGJhcixcbiAgVHlwb2dyYXBoeSxcbiAgQXZhdGFyLFxuICBCYWRnZSxcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIERpdmlkZXIsXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHtcbiAgTWVudSBhcyBNZW51SWNvbixcbiAgRGFzaGJvYXJkIGFzIERhc2hib2FyZEljb24sXG4gIFNlbmQgYXMgU2VuZEljb24sXG4gIEF0dGFjaE1vbmV5IGFzIEF0dGFjaE1vbmV5SWNvbixcbiAgSGlzdG9yeSBhcyBIaXN0b3J5SWNvbixcbiAgTm90aWZpY2F0aW9uc0FjdGl2ZSBhcyBOb3RpZmljYXRpb25zSWNvbixcbiAgTG9nb3V0IGFzIExvZ291dEljb24sXG4gIENsb3NlIGFzIENsb3NlSWNvbixcbn0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUJhbmsgfSBmcm9tICcuLi9jb250ZXh0L0JhbmtDb250ZXh0JztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCB7IHVzZXIsIGxvZ291dCwgZ2V0VW5yZWFkQ291bnQgfSA9IHVzZUJhbmsoKTtcblxuICBjb25zdCB1bnJlYWRDb3VudCA9IGdldFVucmVhZENvdW50ID8gZ2V0VW5yZWFkQ291bnQoKSA6IDA7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHsgbGFiZWw6ICdEYXNoYm9hcmQnLCBpY29uOiA8RGFzaGJvYXJkSWNvbiAvPiwgcGF0aDogJy9kYXNoYm9hcmQnIH0sXG4gICAgeyBsYWJlbDogJ1NlbmQgTW9uZXknLCBpY29uOiA8U2VuZEljb24gLz4sIHBhdGg6ICcvc2VuZC1tb25leScgfSxcbiAgICB7IGxhYmVsOiAnV2l0aGRyYXcnLCBpY29uOiA8QXR0YWNoTW9uZXlJY29uIC8+LCBwYXRoOiAnL3dpdGhkcmF3JyB9LFxuICAgIHsgbGFiZWw6ICdUcmFuc2FjdGlvbnMnLCBpY29uOiA8SGlzdG9yeUljb24gLz4sIHBhdGg6ICcvdHJhbnNhY3Rpb25zJyB9LFxuICAgIHsgbGFiZWw6ICdOb3RpZmljYXRpb25zJywgaWNvbjogPE5vdGlmaWNhdGlvbnNJY29uIC8+LCBwYXRoOiAnL25vdGlmaWNhdGlvbnMnLCBiYWRnZTogdW5yZWFkQ291bnQgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0RHJhd2VyT3BlbighZHJhd2VyT3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudU9wZW4gPSAoZSkgPT4ge1xuICAgIHNldEFuY2hvckVsKGUuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2dvdXQoKTtcbiAgICBuYXZpZ2F0ZSgnLycpO1xuICAgIGhhbmRsZU1lbnVDbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlID0gKHBhdGgpID0+IHtcbiAgICBuYXZpZ2F0ZShwYXRoKTtcbiAgICBzZXREcmF3ZXJPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBpc0FjdGl2ZSA9IChwYXRoKSA9PiBsb2NhdGlvbi5wYXRobmFtZSA9PT0gcGF0aDtcblxuICBjb25zdCBkcmF3ZXJDb250ZW50ID0gKFxuICAgIDxCb3ggc3g9e3sgd2lkdGg6IDI4MCB9fT5cbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgcDogMSB9fT5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogeyBzbTogJ25vbmUnIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggc3g9e3sgcDogMiwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcbiAgICAgICAgICAgIG1iOiAxLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dXNlcj8udXNlcm5hbWU/LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICBEZW1vIEFjY291bnRcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XG5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICBrZXk9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRlKGl0ZW0ucGF0aCl9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlKGl0ZW0ucGF0aCkgPyAnI2YwZjRmZicgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBpc0FjdGl2ZShpdGVtLnBhdGgpID8gJzRweCBzb2xpZCAjNjY3ZWVhJyA6ICc0cHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmUoaXRlbS5wYXRoKSA/ICcjNjY3ZWVhJyA6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyNmOWY5ZjknIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6IGlzQWN0aXZlKGl0ZW0ucGF0aCkgPyAnIzY2N2VlYScgOiAnIzY2NicgfX0+XG4gICAgICAgICAgICAgIHtpdGVtLmJhZGdlICE9PSB1bmRlZmluZWQgJiYgaXRlbS5iYWRnZSA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17aXRlbS5iYWRnZX0gY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGl0ZW0uaWNvblxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgIHByaW1hcnk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzeDogeyBmb250V2VpZ2h0OiBpc0FjdGl2ZShpdGVtLnBhdGgpID8gNjAwIDogNDAwIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8RGl2aWRlciBzeD17eyBteTogMiB9fSAvPlxuXG4gICAgICA8TGlzdD5cbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IHN4PXt7IGNvbG9yOiAnI2VmNDQ0NCcgfX0+XG4gICAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJyNlZjQ0NDQnIH19PlxuICAgICAgICAgICAgPExvZ291dEljb24gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb2dvdXRcIiAvPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgPC9MaXN0PlxuICAgIDwvQm94PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxBcHBCYXJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSknLFxuICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICBzeD17eyBtcjogMiwgZGlzcGxheTogeyBtZDogJ25vbmUnIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRlKCcvZGFzaGJvYXJkJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg8J+SsyBCYW5rRGVtb1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUoJy9ub3RpZmljYXRpb25zJyl9XG4gICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e3VucmVhZENvdW50fSBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVPcGVufVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcDogMC41LFxuICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyPy51c2VybmFtZT8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPnt1c2VyPy51c2VybmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IHN4PXt7IGNvbG9yOiAnI2VmNDQ0NCcgfX0+XG4gICAgICAgICAgICAgIDxMb2dvdXRJY29uIHN4PXt7IG1yOiAxLCBmb250U2l6ZTogJzEuMnJlbScgfX0gLz5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnYmxvY2snIH0sXG4gICAgICAgICAgd2lkdGg6IDI4MCxcbiAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgIGJnY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogMjgwLFxuICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyODAsXG4gICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICBtdDogJzY0cHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjRweCknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAnNjRweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJhd2VyQ29udGVudH1cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPERyYXdlclxuICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcbiAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICAgIG9wZW49e2RyYXdlck9wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnYmxvY2snLCBtZDogJ25vbmUnIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtkcmF3ZXJDb250ZW50fVxuICAgICAgPC9EcmF3ZXI+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICBwdDogJzY0cHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyxcbiAgICAgICAgICBtbDogeyB4czogMCwgbWQ6IDI4MCB9LFxuICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIG1kOiAnY2FsYygxMDAlIC0gMjgwcHgpJyB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJmaWxlIjoiL1VzZXJzL3ZhcmFwcmFzYWQvRGV2ZWxvcG1lbnQvYmFua2RlbW8vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzeCJ9