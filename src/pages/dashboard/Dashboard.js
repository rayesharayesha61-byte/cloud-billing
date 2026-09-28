import React, { useState } from "react";

import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from "@mui/material";

import {
  Menu as MenuIcon,
  DashboardOutlined,
  ReceiptLongOutlined,
  Inventory2Outlined,
  People,
  AssessmentOutlined,
  AccountBalanceWalletOutlined,
  SettingsOutlined,
  CreditCardOutlined,
  NotificationsNoneOutlined,
  Add,
  ArrowUpward,
  ArrowDownward,
  MoreVert,
  LogoutOutlined,
  BusinessOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import "./Dashboard.css";

const drawerWidth = 250;

const invoices = [
  {
    id: "INV-1025",
    customer: "ABC Traders",
    date: "25 Sep 2026",
    amount: "₹2,500",
    status: "Paid",
  },
  {
    id: "INV-1024",
    customer: "Sri Lakshmi Stores",
    date: "25 Sep 2026",
    amount: "₹5,200",
    status: "Paid",
  },
  {
    id: "INV-1023",
    customer: "Kumar Agencies",
    date: "24 Sep 2026",
    amount: "₹1,800",
    status: "Pending",
  },
  {
    id: "INV-1022",
    customer: "Raj & Co",
    date: "24 Sep 2026",
    amount: "₹7,450",
    status: "Paid",
  },
  {
    id: "INV-1021",
    customer: "Bright Mart",
    date: "23 Sep 2026",
    amount: "₹3,250",
    status: "Unpaid",
  },
];

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Billing",
    icon: <ReceiptLongOutlined />,
  },
  {
    label: "Products",
    icon: <Inventory2Outlined />,
  },
  {
    label: "Customers",
    icon: <People />,
  },
  {
    label: "Inventory",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: "Reports",
    icon: <AssessmentOutlined />,
  },
  {
    label: "Expenses",
    icon: <AccountBalanceWalletOutlined />,
  },
];

const bottomMenuItems = [
  {
    label: "Subscription",
    icon: <CreditCardOutlined />,
  },
  {
    label: "Settings",
    icon: <SettingsOutlined />,
  },
];

function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  positive = true,
}) {
  return (
    <Card className="dashboard-stat-card">
      <CardContent className="stat-card-content">
        <Box className="stat-top">
          <Box className="stat-icon">
            {icon}
          </Box>

          <IconButton size="small" className="stat-more">
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>

        <Typography className="stat-title">
          {title}
        </Typography>

        <Typography className="stat-value">
          {value}
        </Typography>

        <Box className="stat-bottom">
          <Box
            className={`stat-trend ${
              positive
                ? "trend-positive"
                : "trend-negative"
            }`}
          >
            {positive ? (
              <ArrowUpward fontSize="inherit" />
            ) : (
              <ArrowDownward fontSize="inherit" />
            )}

            <span>{trend}</span>
          </Box>

          <Typography className="stat-subtitle">
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [notificationAnchor, setNotificationAnchor] =
    useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleProfileMenu = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleNotificationMenu = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleCloseMenus = () => {
    setProfileAnchor(null);
    setNotificationAnchor(null);
  };

  const handleMenuClick = (label) => {
    setSelectedMenu(label);

    if (window.innerWidth < 900) {
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box className="sidebar-wrapper">

      {/* Logo */}
      <Box className="sidebar-logo">
        <Box className="logo-icon">
          <BusinessOutlined />
        </Box>

        <Box>
          <Typography className="logo-title">
            CloudBill
          </Typography>

          <Typography className="logo-subtitle">
            Billing Software
          </Typography>
        </Box>
      </Box>

      <Divider className="sidebar-divider" />

      {/* Main Menu */}
      <Typography className="menu-heading">
        MAIN MENU
      </Typography>

      <List className="sidebar-list">
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={selectedMenu === item.label}
            onClick={() => handleMenuClick(item.label)}
            className="sidebar-item"
          >
            <ListItemIcon className="sidebar-icon">
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      {/* Account */}
      <Typography className="menu-heading settings-heading">
        ACCOUNT
      </Typography>

      <List className="sidebar-list">
        {bottomMenuItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={selectedMenu === item.label}
            onClick={() => handleMenuClick(item.label)}
            className="sidebar-item"
          >
            <ListItemIcon className="sidebar-icon">
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      {/* Trial */}
      <Box className="trial-card">
        <Typography className="trial-title">
          Free Trial
        </Typography>

        <Typography className="trial-days">
          23 days remaining
        </Typography>

        <LinearProgress
          variant="determinate"
          value={77}
          className="trial-progress"
        />

        <Button
          fullWidth
          variant="contained"
          className="upgrade-btn"
        >
          Upgrade Plan
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box className="dashboard-root">

      {/* Sidebar */}
      <Box
        component="nav"
        className="dashboard-navigation"
        aria-label="dashboard navigation"
      >

        {/* Mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main */}
      <Box className="dashboard-main">

        {/* Topbar */}
        <AppBar
          position="sticky"
          className="dashboard-appbar"
        >
          <Toolbar className="dashboard-toolbar">

            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className="mobile-menu-button"
            >
              <MenuIcon />
            </IconButton>

            <Box className="mobile-brand">
              <Typography>
                CloudBill
              </Typography>
            </Box>

            <Box className="topbar-spacer" />

            {/* Notification */}
            <IconButton
              className="notification-button"
              onClick={handleNotificationMenu}
            >
              <Badge
                badgeContent={3}
                color="error"
                overlap="circular"
              >
                <NotificationsNoneOutlined />
              </Badge>
            </IconButton>

            <Menu
              anchorEl={notificationAnchor}
              open={Boolean(notificationAnchor)}
              onClose={handleCloseMenus}
            >
              <MenuItem>
                <Box>
                  <Typography fontWeight={600}>
                    New invoice created
                  </Typography>

                  <Typography variant="caption">
                    INV-1025 was created successfully.
                  </Typography>
                </Box>
              </MenuItem>

              <MenuItem>
                <Box>
                  <Typography fontWeight={600}>
                    Low stock alert
                  </Typography>

                  <Typography variant="caption">
                    Product A stock is below minimum.
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>

            {/* Profile */}
            <Box
              className="profile-area"
              onClick={handleProfileMenu}
            >
              <Avatar className="profile-avatar">
                A
              </Avatar>

              <Box className="profile-details">
                <Typography className="profile-name">
                  Admin
                </Typography>

                <Typography className="profile-role">
                  Owner
                </Typography>
              </Box>
            </Box>

            <Menu
              anchorEl={profileAnchor}
              open={Boolean(profileAnchor)}
              onClose={handleCloseMenus}
            >
              <MenuItem onClick={handleCloseMenus}>
                <ListItemIcon>
                  <SettingsOutlined fontSize="small" />
                </ListItemIcon>

                Profile Settings
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleCloseMenus}>
                <ListItemIcon>
                  <LogoutOutlined fontSize="small" />
                </ListItemIcon>

                Logout
              </MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box className="dashboard-content">

          {/* Page Header */}
          <Box className="page-header">
            <Box>
              <Typography className="page-title">
                Dashboard
              </Typography>

              <Typography className="page-description">
                Welcome back! Here's what's happening with your
                business today.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<Add />}
              className="create-invoice-btn"
            >
              Create Invoice
            </Button>
          </Box>

          {/* Stats */}
          <Box className="stats-grid">

            <StatCard
              title="Today's Sales"
              value="₹25,450"
              subtitle="vs yesterday"
              trend="12.5%"
              positive
              icon={
                <AccountBalanceWalletOutlined />
              }
            />

            <StatCard
              title="Total Sales"
              value="₹5,25,000"
              subtitle="this month"
              trend="8.2%"
              positive
              icon={<ArrowUpward />}
            />

            <StatCard
              title="Total Invoices"
              value="245"
              subtitle="this month"
              trend="15.8%"
              positive
              icon={<ReceiptLongOutlined />}
            />

            <StatCard
              title="Outstanding"
              value="₹45,500"
              subtitle="pending amount"
              trend="4.6%"
              positive={false}
              icon={<CreditCardOutlined />}
            />

          </Box>

          {/* Chart + Quick Actions */}
          <Box className="middle-grid">

            {/* Sales Overview */}
            <Card className="chart-card">
              <CardContent>

                <Box className="section-header">
                  <Box>
                    <Typography className="section-title">
                      Sales Overview
                    </Typography>

                    <Typography className="section-subtitle">
                      Your sales performance for this week
                    </Typography>
                  </Box>

                  <Button
                    variant="outlined"
                    className="period-btn"
                  >
                    This Week
                  </Button>
                </Box>

                {/* Pure CSS Chart */}
                <Box className="simple-chart">

                  <Box className="chart-y-labels">
                    <span>₹35k</span>
                    <span>₹25k</span>
                    <span>₹15k</span>
                    <span>₹5k</span>
                  </Box>

                  <Box className="chart-area">

                    <Box className="chart-grid-line line-1" />
                    <Box className="chart-grid-line line-2" />
                    <Box className="chart-grid-line line-3" />
                    <Box className="chart-grid-line line-4" />

                    <Box className="chart-bars">

                      <Box className="chart-column">
                        <Box className="chart-bar bar-1" />
                        <span>Mon</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-2" />
                        <span>Tue</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-3" />
                        <span>Wed</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-4" />
                        <span>Thu</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-5" />
                        <span>Fri</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-6" />
                        <span>Sat</span>
                      </Box>

                      <Box className="chart-column">
                        <Box className="chart-bar bar-7" />
                        <span>Sun</span>
                      </Box>

                    </Box>
                  </Box>
                </Box>

              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="quick-card">
              <CardContent>

                <Typography className="section-title">
                  Quick Actions
                </Typography>

                <Typography className="section-subtitle">
                  Frequently used actions
                </Typography>

                <Box className="quick-actions">

                  <Button
                    className="quick-action"
                    startIcon={
                      <ReceiptLongOutlined />
                    }
                  >
                    New Invoice
                  </Button>

                  <Button
                    className="quick-action"
                    startIcon={<People />}
                  >
                    Add Customer
                  </Button>

                  <Button
                    className="quick-action"
                    startIcon={
                      <Inventory2Outlined />
                    }
                  >
                    Add Product
                  </Button>

                  <Button
                    className="quick-action"
                    startIcon={
                      <AssessmentOutlined />
                    }
                  >
                    View Reports
                  </Button>

                </Box>
              </CardContent>
            </Card>

          </Box>

          {/* Recent Invoices */}
          <Card className="invoice-card">
            <CardContent className="invoice-card-content">

              <Box className="section-header invoice-header">

                <Box>
                  <Typography className="section-title">
                    Recent Invoices
                  </Typography>

                  <Typography className="section-subtitle">
                    Latest billing activity
                  </Typography>
                </Box>

                <Button className="view-all-btn">
                  View All
                </Button>

              </Box>

              <TableContainer className="invoice-table-container">

                <Table>

                  <TableHead>
                    <TableRow>

                      <TableCell>
                        Invoice
                      </TableCell>

                      <TableCell>
                        Customer
                      </TableCell>

                      <TableCell>
                        Date
                      </TableCell>

                      <TableCell>
                        Amount
                      </TableCell>

                      <TableCell>
                        Status
                      </TableCell>

                      <TableCell align="right">
                        Action
                      </TableCell>

                    </TableRow>
                  </TableHead>

                  <TableBody>

                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>

                        <TableCell>
                          <Typography className="invoice-id">
                            {invoice.id}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Box className="customer-cell">

                            <Avatar className="customer-avatar">
                              {invoice.customer.charAt(0)}
                            </Avatar>

                            <Typography>
                              {invoice.customer}
                            </Typography>

                          </Box>
                        </TableCell>

                        <TableCell>
                          {invoice.date}
                        </TableCell>

                        <TableCell>
                          <Typography className="amount-cell">
                            {invoice.amount}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Chip
                            label={invoice.status}
                            className={`status-chip status-${invoice.status.toLowerCase()}`}
                          />
                        </TableCell>

                        <TableCell align="right">
                          <IconButton size="small">
                            <MoreVert fontSize="small" />
                          </IconButton>
                        </TableCell>

                      </TableRow>
                    ))}

                  </TableBody>

                </Table>

              </TableContainer>

            </CardContent>
          </Card>

          {/* Bottom Cards */}
          <Box className="bottom-grid">

            {/* Inventory */}
            <Card className="bottom-card">
              <CardContent>

                <Typography className="section-title">
                  Inventory Alert
                </Typography>

                <Typography className="section-subtitle">
                  Products that need attention
                </Typography>

                <Box className="inventory-item">

                  <Box>
                    <Typography className="inventory-name">
                      Product A
                    </Typography>

                    <Typography className="inventory-stock">
                      Only 8 items left
                    </Typography>
                  </Box>

                  <Chip
                    label="Low Stock"
                    className="low-stock-chip"
                  />

                </Box>

                <Box className="inventory-item">

                  <Box>
                    <Typography className="inventory-name">
                      Product B
                    </Typography>

                    <Typography className="inventory-stock">
                      Only 12 items left
                    </Typography>
                  </Box>

                  <Chip
                    label="Low Stock"
                    className="low-stock-chip"
                  />

                </Box>

              </CardContent>
            </Card>

            {/* Trial */}
            <Card className="bottom-card">
              <CardContent>

                <Typography className="section-title">
                  Trial Status
                </Typography>

                <Typography className="section-subtitle">
                  Your current subscription
                </Typography>

                <Box className="trial-status">

                  <Box>
                    <Typography className="trial-plan">
                      Free Trial
                    </Typography>

                    <Typography className="trial-date">
                      Expires on 18 October 2026
                    </Typography>
                  </Box>

                  <Chip
                    label="23 Days Left"
                    className="trial-chip"
                  />

                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  className="trial-upgrade"
                >
                  Upgrade Subscription
                </Button>

              </CardContent>
            </Card>

          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;