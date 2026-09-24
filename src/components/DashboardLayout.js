import React from "react";

import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

const drawerWidth = 250;

const DashboardLayout = ({
  children,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [mobileOpen, setMobileOpen] =
    React.useState(false);

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleMenuClick = () => {
    setMobileOpen(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Header
        onMenuClick={handleMenuClick}
      />

      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={handleMobileClose}
      />

      <Box
        component="main"
        sx={{
          ml: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
          pt: "64px",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            p: {
              xs: 1.5,
              sm: 2.5,
              md: 3,
            },
            maxWidth: 1600,
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;