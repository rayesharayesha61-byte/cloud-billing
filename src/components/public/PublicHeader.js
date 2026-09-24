import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import {
  CloudQueue,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";

import "./PublicHeader.css";

function PublicHeader() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const goToPage = (path) => {
    closeMobile();
    navigate(path);
  };

  const goToFeatures = () => {
    closeMobile();

    const featuresSection = document.getElementById("features");

    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/features");
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <AppBar
        position="sticky"
        elevation={0}
        className="public-header"
      >
        <Container maxWidth="xl">
          <Toolbar className="public-toolbar">

            {/* ================= LOGO ================= */}

            <Box
              className="public-logo"
              onClick={() => goToPage("/")}
            >
              <Box className="public-logo-icon">
                <CloudQueue />
              </Box>

              <Typography className="public-logo-text">
                Cloud<span>Bill</span>
              </Typography>
            </Box>

            {/* ================= DESKTOP NAVIGATION ================= */}

            <Stack
              direction="row"
              spacing={0.5}
              className="public-navigation"
            >

              <Button
                onClick={() => goToPage("/")}
              >
                Home
              </Button>

              <Button
                onClick={goToFeatures}
              >
                Features
              </Button>

              <Button
                onClick={() => goToPage("/pricing")}
              >
                Pricing
              </Button>

              <Button
                onClick={() => goToPage("/about")}
              >
                About Us
              </Button>

              <Button
                onClick={() => goToPage("/contact")}
              >
                Contact
              </Button>

              <Button
                onClick={() => goToPage("/faq")}
              >
                FAQ
              </Button>

            </Stack>

            {/* ================= RIGHT ACTIONS ================= */}

            <Stack
              direction="row"
              spacing={1}
              className="public-header-actions"
            >

              <Button
                className="public-login"
                onClick={() => goToPage("/login")}
              >
                Login
              </Button>

              <Button
                className="public-register"
                variant="outlined"
                onClick={() => goToPage("/register")}
              >
                Register
              </Button>

              <Button
                variant="contained"
                className="public-trial"
                onClick={() => goToPage("/register")}
              >
                Free Trial
              </Button>

            </Stack>

            {/* ================= MOBILE MENU ================= */}

            <IconButton
              className="mobile-menu"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobile}
        className="mobile-drawer"
      >
        <Box className="mobile-drawer-content">

          {/* MOBILE HEADER */}

          <Box className="mobile-drawer-header">

            <Box
              className="mobile-logo"
              onClick={() => goToPage("/")}
            >
              <Box className="mobile-logo-icon">
                <CloudQueue />
              </Box>

              <Typography className="mobile-logo-text">
                Cloud<span>Bill</span>
              </Typography>
            </Box>

            <IconButton onClick={closeMobile}>
              <Close />
            </IconButton>

          </Box>

          <Divider />

          {/* MOBILE NAVIGATION */}

          <List className="mobile-navigation">

            <ListItemButton
              onClick={() => goToPage("/")}
            >
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton
              onClick={goToFeatures}
            >
              <ListItemText primary="Features" />
            </ListItemButton>

            <ListItemButton
              onClick={() => goToPage("/pricing")}
            >
              <ListItemText primary="Pricing" />
            </ListItemButton>

            <ListItemButton
              onClick={() => goToPage("/about")}
            >
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton
              onClick={() => goToPage("/contact")}
            >
              <ListItemText primary="Contact" />
            </ListItemButton>

            <ListItemButton
              onClick={() => goToPage("/faq")}
            >
              <ListItemText primary="FAQ" />
            </ListItemButton>

          </List>

          <Divider />

          {/* MOBILE ACTIONS */}

          <Box className="mobile-actions">

            <Button
              fullWidth
              variant="outlined"
              onClick={() => goToPage("/login")}
            >
              Login
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={() => goToPage("/register")}
            >
              Register
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => goToPage("/register")}
            >
              Free Trial
            </Button>

          </Box>

        </Box>
      </Drawer>
    </>
  );
}

export default PublicHeader;