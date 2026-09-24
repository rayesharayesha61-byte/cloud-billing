// import React from "react";

// import {
//   Drawer,
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
// } from "@mui/material";

// import {
//   Dashboard,
//   Inventory2,
//   People,
//   ReceiptLong,
//   Assessment,
//   Payments,
//   CardMembership,
//   Settings,
//   Logout,
// } from "@mui/icons-material";

// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import BusinessOutlined from "@mui/icons-material/BusinessOutlined";

// const drawerWidth = 250;

// const menuItems = [
//   {
//     label: "Dashboard",
//     path: "/dashboard",
//     icon: <Dashboard />,
//   },
  
//   {
//     label: "Products",
//     path: "/products",
//     icon: <Inventory2 />,
//   },
//   {
//     label: "Customers",
//     path: "/customers",
//     icon: <People />,
//   },
//   {
//     label: "Create Invoice",
//     path: "/billing/create",
//     icon: <ReceiptLong />,
//   },
//   {
//     label: "Reports",
//     path: "/reports",
//     icon: <Assessment />,
//   },
//   {
//     label: "Expenses",
//     path: "/expenses",
//     icon: <Payments />,
//   },
//   {
//     label: "Subscription",
//     path: "/subscription",
//     icon: <CardMembership />,
//   },
//   {
//   label: "Business Details",
//   path: "/business-details",
//   icon: <BusinessOutlined />,
// },

//   {
//     label: "Settings",
//     path: "/settings",
//     icon: <Settings />,
//   },
// ];

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,

//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#0F172A",
//           color: "#FFFFFF",
//           borderRight: "none",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           height: 64,
//           display: "flex",
//           alignItems: "center",
//           px: 3,
//         }}
//       >
//         <Typography
//           variant="h6"
//           fontWeight={800}
//         >
//           Cloud<span style={{ color: "#3B82F6" }}>Bill</span>
//         </Typography>
//       </Box>

//       <Divider
//         sx={{
//           borderColor: "#334155",
//         }}
//       />

//       <List sx={{ px: 1.5, py: 2 }}>
//         {menuItems.map((item) => {
//           const active =
//             location.pathname === item.path;

//           return (
//             <ListItemButton
//               key={item.path}
//               selected={active}
//               onClick={() => navigate(item.path)}
//               sx={{
//                 borderRadius: 2,
//                 mb: 0.5,

//                 color: "#CBD5E1",

//                 "&:hover": {
//                   backgroundColor: "#1E293B",
//                   color: "#FFFFFF",
//                 },

//                 "&.Mui-selected": {
//                   backgroundColor: "#2563EB",
//                   color: "#FFFFFF",
//                 },

//                 "&.Mui-selected:hover": {
//                   backgroundColor: "#1D4ED8",
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: "inherit",
//                   minWidth: 42,
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>

//               <ListItemText
//                 primary={item.label}
//               />
//             </ListItemButton>
//           );
//         })}
//       </List>

//       <Box sx={{ flexGrow: 1 }} />

//       <Box sx={{ px: 1.5, pb: 2 }}>
//         <ListItemButton
//           onClick={logout}
//           sx={{
//             borderRadius: 2,
//             color: "#CBD5E1",

//             "&:hover": {
//               backgroundColor: "#1E293B",
//               color: "#FFFFFF",
//             },
//           }}
//         >
//           <ListItemIcon
//             sx={{
//               color: "inherit",
//               minWidth: 42,
//             }}
//           >
//             <Logout />
//           </ListItemIcon>

//           <ListItemText primary="Logout" />
//         </ListItemButton>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;
import React from "react";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const drawerWidth = 250;

const Sidebar = ({
  mobileOpen,
  onMobileClose,
}) => {
  const [salesOpen, setSalesOpen] =
    React.useState(true);

  const [itemsOpen, setItemsOpen] =
    React.useState(true);

  const [customersOpen, setCustomersOpen] =
    React.useState(false);

  const navigate = (path) => {
    window.location.href = path;

    if (onMobileClose) {
      onMobileClose();
    }
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0F172A",
        color: "#FFFFFF",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: 64,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              background:
                "linear-gradient(135deg, #2563EB, #4F46E5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            C
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              CloudBill
            </Typography>

            <Typography
              sx={{
                fontSize: 10,
                color: "#94A3B8",
                letterSpacing: 0.5,
              }}
            >
              BUSINESS BILLING
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={onMobileClose}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#FFFFFF",
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 1.2,
          py: 2,
        }}
      >
        <Typography
          sx={{
            px: 1.5,
            mb: 1,
            fontSize: 10,
            fontWeight: 700,
            color: "#64748B",
            letterSpacing: 1,
          }}
        >
          OVERVIEW
        </Typography>

        <List disablePadding>
          <NavItem
            icon={<DashboardOutlinedIcon />}
            label="Dashboard"
            onClick={() =>
              navigate("/dashboard")
            }
          />
        </List>

        <Typography
          sx={{
            px: 1.5,
            mt: 2.5,
            mb: 1,
            fontSize: 10,
            fontWeight: 700,
            color: "#64748B",
            letterSpacing: 1,
          }}
        >
          SALES
        </Typography>

        <List disablePadding>
          <ParentItem
            icon={<ShoppingCartOutlinedIcon />}
            label="Sales"
            open={salesOpen}
            onClick={() =>
              setSalesOpen(!salesOpen)
            }
          />

          <Collapse
            in={salesOpen}
            timeout="auto"
            unmountOnExit
          >
            <SubItem
              label="Invoices"
              onClick={() =>
                navigate("/billing/invoices")
              }
            />

            <SubItem
              label="Recurring Invoices"
              onClick={() =>
                navigate(
                  "/billing/recurring-invoices"
                )
              }
            />

            <SubItem
              label="Credit Notes"
              onClick={() =>
                navigate(
                  "/billing/credit-notes"
                )
              }
            />

            <SubItem
              label="Payments Received"
              onClick={() =>
                navigate(
                  "/billing/payments"
                )
              }
            />
          </Collapse>
        </List>

        <Typography
          sx={{
            px: 1.5,
            mt: 2.5,
            mb: 1,
            fontSize: 10,
            fontWeight: 700,
            color: "#64748B",
            letterSpacing: 1,
          }}
        >
          ITEMS
        </Typography>

        <List disablePadding>
          <ParentItem
            icon={<Inventory2OutlinedIcon />}
            label="Items"
            open={itemsOpen}
            onClick={() =>
              setItemsOpen(!itemsOpen)
            }
          />

          <Collapse
            in={itemsOpen}
            timeout="auto"
            unmountOnExit
          >
            <SubItem
              label="Products"
              onClick={() =>
                navigate("/products")
              }
            />

            <SubItem
              label="Services"
              onClick={() =>
                navigate("/services")
              }
            />

            <SubItem
              label="Categories"
              onClick={() =>
                navigate("/categories")
              }
            />

            <SubItem
              label="Price Lists"
              onClick={() =>
                navigate("/price-lists")
              }
            />
          </Collapse>
        </List>

        <Typography
          sx={{
            px: 1.5,
            mt: 2.5,
            mb: 1,
            fontSize: 10,
            fontWeight: 700,
            color: "#64748B",
            letterSpacing: 1,
          }}
        >
          CUSTOMERS
        </Typography>

        <List disablePadding>
          <ParentItem
            icon={
              <PeopleOutlineOutlinedIcon />
            }
            label="Customers"
            open={customersOpen}
            onClick={() =>
              setCustomersOpen(
                !customersOpen
              )
            }
          />

          <Collapse
            in={customersOpen}
            timeout="auto"
            unmountOnExit
          >
            <SubItem
              label="All Customers"
              onClick={() =>
                navigate("/customers")
              }
            />

            <SubItem
              label="Customer Statements"
              onClick={() =>
                navigate(
                  "/customers/statements"
                )
              }
            />
          </Collapse>
        </List>

        <Typography
          sx={{
            px: 1.5,
            mt: 2.5,
            mb: 1,
            fontSize: 10,
            fontWeight: 700,
            color: "#64748B",
            letterSpacing: 1,
          }}
        >
          BUSINESS
        </Typography>

        <List disablePadding>
          <NavItem
            icon={
              <AccountBalanceWalletOutlinedIcon />
            }
            label="Expenses"
            onClick={() =>
              navigate("/expenses")
            }
          />

          <NavItem
            icon={<AssessmentOutlinedIcon />}
            label="Reports"
            onClick={() =>
              navigate("/reports")
            }
          />

          <NavItem
            icon={<CreditCardOutlinedIcon />}
            label="Subscription"
            onClick={() =>
              navigate("/subscription")
            }
          />

          <NavItem
            icon={<BusinessOutlinedIcon />}
            label="Business Details"
            onClick={() =>
              navigate("/business-details")
            }
          />

          <NavItem
            icon={<SettingsOutlinedIcon />}
            label="Settings"
            onClick={() =>
              navigate("/settings")
            }
          />
        </List>
      </Box>

      {/* Bottom Trial Card */}
      <Box
        sx={{
          p: 1.5,
        }}
      >
        <Box
          sx={{
            p: 1.8,
            borderRadius: 2.5,
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(79,70,229,0.22))",
            border:
              "1px solid rgba(96,165,250,0.18)",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Free Trial
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              color: "#94A3B8",
              mt: 0.5,
            }}
          >
            Manage your subscription
          </Typography>

          <Box
            component="button"
            onClick={() =>
              navigate("/subscription")
            }
            sx={{
              mt: 1.2,
              border: 0,
              borderRadius: 1.5,
              px: 1.5,
              py: 0.8,
              cursor: "pointer",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            View Plans
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: 0,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
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
            border: 0,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

const NavItem = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 42,
        borderRadius: 1.8,
        mb: 0.4,
        color: "#CBD5E1",
        "&:hover": {
          backgroundColor: "#1E293B",
          color: "#FFFFFF",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 38,
          color: "inherit",
        }}
      >
        {icon}
      </ListItemIcon>

      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 13,
          fontWeight: 500,
        }}
      />
    </ListItemButton>
  );
};

const ParentItem = ({
  icon,
  label,
  open,
  onClick,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 42,
        borderRadius: 1.8,
        color: "#CBD5E1",
        "&:hover": {
          backgroundColor: "#1E293B",
          color: "#FFFFFF",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 38,
          color: "inherit",
        }}
      >
        {icon}
      </ListItemIcon>

      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 13,
          fontWeight: 500,
        }}
      />

      {open ? (
        <ExpandLessIcon sx={{ fontSize: 18 }} />
      ) : (
        <ExpandMoreIcon sx={{ fontSize: 18 }} />
      )}
    </ListItemButton>
  );
};

const SubItem = ({
  label,
  onClick,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        minHeight: 36,
        pl: 6.2,
        borderRadius: 1.5,
        color: "#94A3B8",
        "&:hover": {
          backgroundColor: "#1E293B",
          color: "#FFFFFF",
        },
      }}
    >
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 12.5,
        }}
      />
    </ListItemButton>
  );
};

export default Sidebar;