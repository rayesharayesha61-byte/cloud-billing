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
  Grid,
  Paper,
} from "@mui/material";

import {
  ReceiptLong,
  Inventory2,
  People,
  Assessment,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";

import "./Home.css";

const features = [
  {
    icon: <ReceiptLong />,
    title: "Smart Invoicing",
    description:
      "Create professional GST invoices quickly and manage your billing from one place.",
  },
  {
    icon: <Inventory2 />,
    title: "Product Management",
    description:
      "Manage products, pricing, stock and GST details with ease.",
  },
  {
    icon: <People />,
    title: "Customer Management",
    description:
      "Keep customer information organized and access it whenever you need.",
  },
  {
    icon: <Assessment />,
    title: "Reports & Analytics",
    description:
      "Track sales, invoices and business performance with useful reports.",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box className="cloudbill-home">

      {/* ================= HEADER ================= */}

      <AppBar
        position="sticky"
        elevation={0}
        className="public-header"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters className="header-toolbar">

            {/* Logo */}

            <Box
              className="cloudbill-logo"
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              <Box className="logo-icon">
                <ReceiptLong />
              </Box>

              <Typography
                variant="h6"
                className="logo-text"
              >
                Cloud<span>Bill</span>
              </Typography>
            </Box>

            {/* Navigation */}

            <Stack
              direction="row"
              spacing={3}
              className="desktop-navigation"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Features
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Pricing
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </Button>
            </Stack>

            {/* Header Actions */}

            <Stack
              direction="row"
              spacing={1.5}
              className="header-actions"
            >
              <Button
                className="login-button"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                variant="contained"
                className="trial-button"
                onClick={() => navigate("/register")}
              >
                Start Free Trial
              </Button>
            </Stack>

          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= HERO ================= */}

      <Box className="hero-section">
        <Container maxWidth="lg">

          <Grid
            container
            spacing={6}
            alignItems="center"
          >

            <Grid item xs={12} md={6}>

              <Box className="hero-content">

                <Typography className="hero-badge">
                  Cloud Billing Software
                </Typography>

                <Typography
                  variant="h1"
                  className="hero-title"
                >
                  Simplify Your Business
                  <span> Billing & Invoicing</span>
                </Typography>

                <Typography
                  className="hero-description"
                >
                  Create GST invoices, manage products and
                  customers, track payments and understand your
                  business performance — all from one powerful
                  cloud platform.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  className="hero-buttons"
                >

                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    className="hero-primary-button"
                    onClick={() => navigate("/register")}
                  >
                    Start Free Trial
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    className="hero-secondary-button"
                    onClick={() =>
                      document
                        .getElementById("features")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Features
                  </Button>

                </Stack>

                <Stack
                  direction="row"
                  spacing={3}
                  className="hero-points"
                >
                  <Box>
                    <CheckCircle />
                    <span>30-Day Free Trial</span>
                  </Box>

                  <Box>
                    <CheckCircle />
                    <span>Easy Setup</span>
                  </Box>

                  <Box>
                    <CheckCircle />
                    <span>Cloud Based</span>
                  </Box>
                </Stack>

              </Box>

            </Grid>

            {/* Dashboard Preview */}

            <Grid item xs={12} md={6}>

              <Paper
                elevation={0}
                className="dashboard-preview"
              >

                <Box className="preview-header">
                  <Typography>
                    CloudBill Dashboard
                  </Typography>

                  <Box className="preview-dot" />
                </Box>

                <Grid container spacing={2}>

                  <Grid item xs={6}>
                    <Box className="preview-card">
                      <Typography>
                        Today's Sales
                      </Typography>

                      <Typography className="preview-value">
                        ₹24,850
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box className="preview-card">
                      <Typography>
                        Total Invoices
                      </Typography>

                      <Typography className="preview-value">
                        128
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box className="chart-preview">

                      <Typography>
                        Sales Overview
                      </Typography>

                      <Box className="fake-chart">
                        <Box className="bar bar-1" />
                        <Box className="bar bar-2" />
                        <Box className="bar bar-3" />
                        <Box className="bar bar-4" />
                        <Box className="bar bar-5" />
                        <Box className="bar bar-6" />
                        <Box className="bar bar-7" />
                      </Box>

                    </Box>
                  </Grid>

                </Grid>

              </Paper>

            </Grid>

          </Grid>

        </Container>
      </Box>

      {/* ================= FEATURES ================= */}

      <Box
        id="features"
        className="features-section"
      >
        <Container maxWidth="lg">

          <Box className="section-heading">

            <Typography className="section-label">
              POWERFUL FEATURES
            </Typography>

            <Typography
              variant="h2"
              className="section-title"
            >
              Everything You Need to
              <span> Manage Billing</span>
            </Typography>

            <Typography className="section-description">
              CloudBill brings your billing, customers,
              products and business reports together in one
              simple platform.
            </Typography>

          </Box>

          <Grid container spacing={3}>

            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
              >

                <Paper
                  elevation={0}
                  className="feature-card"
                >

                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    className="feature-title"
                  >
                    {feature.title}
                  </Typography>

                  <Typography className="feature-description">
                    {feature.description}
                  </Typography>

                </Paper>

              </Grid>
            ))}

          </Grid>

        </Container>
      </Box>

      {/* ================= PRICING ================= */}

      <Box
        id="pricing"
        className="pricing-section"
      >
        <Container maxWidth="lg">

          <Box className="section-heading">

            <Typography className="section-label">
              SIMPLE PRICING
            </Typography>

            <Typography
              variant="h2"
              className="section-title"
            >
              Plans That Grow With
              <span> Your Business</span>
            </Typography>

          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
          >

            {[
              {
                name: "Basic",
                price: "299",
              },
              {
                name: "Professional",
                price: "599",
                popular: true,
              },
              {
                name: "Business",
                price: "999",
              },
            ].map((plan) => (

              <Grid
                item
                xs={12}
                md={4}
                key={plan.name}
              >

                <Paper
                  elevation={0}
                  className={`pricing-card ${
                    plan.popular ? "popular-plan" : ""
                  }`}
                >

                  {plan.popular && (
                    <Box className="popular-badge">
                      Most Popular
                    </Box>
                  )}

                  <Typography className="plan-name">
                    {plan.name}
                  </Typography>

                  <Box className="plan-price">
                    ₹{plan.price}
                    <span>/month</span>
                  </Box>

                  <Button
                    fullWidth
                    variant={
                      plan.popular
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => navigate("/register")}
                  >
                    Start Free Trial
                  </Button>

                </Paper>

              </Grid>

            ))}

          </Grid>

        </Container>
      </Box>

      {/* ================= ABOUT ================= */}

      <Box
        id="about"
        className="about-section"
      >
        <Container maxWidth="md">

          <Typography className="section-label">
            ABOUT CLOUDBILL
          </Typography>

          <Typography
            variant="h2"
            className="section-title"
          >
            Billing Made Simple
          </Typography>

          <Typography className="about-description">
            CloudBill is designed to help businesses manage
            their everyday billing operations without
            unnecessary complexity. From creating invoices
            to monitoring sales and managing customers,
            everything is available in one cloud platform.
          </Typography>

        </Container>
      </Box>

      {/* ================= CTA ================= */}

      <Box
        id="contact"
        className="cta-section"
      >
        <Container maxWidth="md">

          <Typography
            variant="h2"
            className="cta-title"
          >
            Ready to Simplify Your Billing?
          </Typography>

          <Typography className="cta-description">
            Start your free 30-day trial today and experience
            a smarter way to manage your business.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            className="cta-button"
            onClick={() => navigate("/register")}
          >
            Start Free Trial
          </Button>

        </Container>
      </Box>

      {/* ================= FOOTER ================= */}

      <Box className="footer">
        <Container maxWidth="lg">

          <Grid container spacing={4}>

            <Grid item xs={12} md={6}>

              <Typography className="footer-logo">
                Cloud<span>Bill</span>
              </Typography>

              <Typography className="footer-description">
                Simple, powerful cloud billing software for
                growing businesses.
              </Typography>

            </Grid>

            <Grid item xs={6} md={3}>

              <Typography className="footer-heading">
                Product
              </Typography>

              <Typography
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="footer-link"
              >
                Features
              </Typography>

              <Typography
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="footer-link"
              >
                Pricing
              </Typography>

            </Grid>

            <Grid item xs={6} md={3}>

              <Typography className="footer-heading">
                Account
              </Typography>

              <Typography
                onClick={() => navigate("/login")}
                className="footer-link"
              >
                Login
              </Typography>

              <Typography
                onClick={() => navigate("/register")}
                className="footer-link"
              >
                Start Free Trial
              </Typography>

            </Grid>

          </Grid>

          <Box className="footer-bottom">
            © {new Date().getFullYear()} CloudBill. All
            rights reserved.
          </Box>

        </Container>
      </Box>

    </Box>
  );
}

export default Home;