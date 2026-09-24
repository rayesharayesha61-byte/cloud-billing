
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

import {
  ReceiptLong,
  People,
  AccountBalanceWallet,
  Assessment,
  Inventory2,
  CloudDone,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";

import PublicHeader from "../../components/public/PublicHeader";
import PublicFooter from "../../components/public/PublicFooter";

function SmallBusiness() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ReceiptLong />,
      title: "Professional Invoicing",
      description:
        "Create professional invoices, add taxes, and share them with customers easily.",
    },
    {
      icon: <People />,
      title: "Customer Management",
      description:
        "Store customer details, track transactions, and manage customer records.",
    },
    {
      icon: <AccountBalanceWallet />,
      title: "Expense Tracking",
      description:
        "Track business expenses and understand where your money is being spent.",
    },
    {
      icon: <Assessment />,
      title: "Business Reports",
      description:
        "Get clear reports to understand sales, income, expenses, and business growth.",
    },
    {
      icon: <Inventory2 />,
      title: "Product Management",
      description:
        "Manage products, prices, stock details, and inventory in one place.",
    },
    {
      icon: <CloudDone />,
      title: "Cloud-Based Software",
      description:
        "Access your business billing information securely from anywhere.",
    },
  ];

  const benefits = [
    "Save time on manual billing",
    "Reduce invoice errors",
    "Manage customers in one place",
    "Track business income and expenses",
    "Generate useful business reports",
    "Grow your business with confidence",
  ];

  return (
    <>
      <PublicHeader />

      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          color: "#0F172A",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #EEF2FF 0%, #F0FDFA 55%, #FFFFFF 100%)",
            py: { xs: 7, md: 11 },
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Grid
            container
            spacing={5}
            alignItems="center"
            sx={{ maxWidth: 1250, mx: "auto" }}
          >
            <Grid item xs={12} md={6}>
              <Chip
                label="Built for Small Businesses"
                sx={{
                  mb: 2,
                  backgroundColor: "#E0E7FF",
                  color: "#4338CA",
                  fontWeight: 700,
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                  lineHeight: 1.12,
                  mb: 3,
                }}
              >
                Simple Billing Software for Small Businesses
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 560,
                }}
              >
                Manage invoices, customers, products, expenses, and business
                reports from one easy-to-use cloud billing platform.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate("/register")}
                  sx={{
                    backgroundColor: "#4F46E5",
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#4338CA",
                      boxShadow: "none",
                    },
                  }}
                >
                  Start Free Trial
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => navigate("/pricing")}
                  sx={{
                    color: "#4F46E5",
                    borderColor: "#4F46E5",
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": {
                      borderColor: "#4338CA",
                      backgroundColor: "#EEF2FF",
                    },
                  }}
                >
                  View Pricing
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 4,
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 20px 50px rgba(79, 70, 229, 0.12)",
                }}
              >
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800 }}>
                      Business Overview
                    </Typography>

                    <Chip
                      label="This Month"
                      size="small"
                      sx={{
                        backgroundColor: "#EEF2FF",
                        color: "#4F46E5",
                      }}
                    />
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: "#EEF2FF",
                        }}
                      >
                        <Typography
                          sx={{ color: "#6366F1", fontSize: 13 }}
                        >
                          Total Sales
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, mt: 1 }}
                        >
                          ₹85,400
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: "#F0FDFA",
                        }}
                      >
                        <Typography
                          sx={{ color: "#0F766E", fontSize: 13 }}
                        >
                          Invoices
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, mt: 1 }}
                        >
                          128
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "#64748B",
                        mb: 1,
                      }}
                    >
                      Recent Activity
                    </Typography>

                    {[
                      "Invoice #INV-1024 created",
                      "Payment received from customer",
                      "New product added",
                    ].map((item) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 1 }}
                      >
                        <CheckCircle
                          sx={{ color: "#4F46E5", fontSize: 18 }}
                        />
                        <Typography sx={{ fontSize: 14, color: "#475569" }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Introduction */}
        <Box
          sx={{
            maxWidth: 1000,
            mx: "auto",
            px: { xs: 2, sm: 4 },
            py: { xs: 6, md: 9 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Everything Your Small Business Needs
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            CloudBill helps small businesses simplify daily financial tasks,
            reduce paperwork, and focus more on business growth.
          </Typography>
        </Box>

        {/* Features */}
        <Box
          sx={{
            maxWidth: 1250,
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6 },
            pb: { xs: 6, md: 9 },
          }}
        >
          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#FFFFFF",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#A5B4FC",
                      boxShadow: "0 12px 30px rgba(79, 70, 229, 0.10)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      backgroundColor: "#EEF2FF",
                      color: "#4F46E5",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box
          sx={{
            backgroundColor: "#0F172A",
            color: "#FFFFFF",
            py: { xs: 6, md: 9 },
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Grid
            container
            spacing={5}
            alignItems="center"
            sx={{ maxWidth: 1150, mx: "auto" }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "1.9rem", md: "2.5rem" },
                }}
              >
                Grow Your Business with Less Effort
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.8,
                }}
              >
                Spend less time managing paperwork and more time serving your
                customers. CloudBill keeps your business information organized
                and accessible.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {benefits.map((benefit) => (
                  <Stack
                    key={benefit}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircle sx={{ color: "#A5B4FC" }} />
                    <Typography sx={{ color: "#E2E8F0" }}>
                      {benefit}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 9 },
            px: 2,
            background:
              "linear-gradient(135deg, #EEF2FF 0%, #F0FDFA 100%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Ready to Simplify Your Business?
          </Typography>

          <Typography sx={{ color: "#64748B", mb: 3 }}>
            Start managing your business with CloudBill today.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => navigate("/register")}
            sx={{
              backgroundColor: "#4F46E5",
              textTransform: "none",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#4338CA",
                boxShadow: "none",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <PublicFooter />
    </>
  );
}

export default SmallBusiness;