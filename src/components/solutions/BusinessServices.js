
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
  BusinessCenter,
  ReceiptLong,
  People,
  Inventory2,
  AccountBalanceWallet,
  Assessment,
  Settings,
  ArrowForward,
  CheckCircle,
  CloudDone,
} from "@mui/icons-material";

import PublicHeader from "../../components/public/PublicHeader";
import PublicFooter from "../../components/public/PublicFooter";

function BusinessServices() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <ReceiptLong />,
      title: "Invoice Management",
      description:
        "Create professional invoices, manage billing details, and share invoices with customers.",
    },
    {
      icon: <People />,
      title: "Customer Management",
      description:
        "Organize customer information, view purchase history, and track outstanding payments.",
    },
    {
      icon: <Inventory2 />,
      title: "Product & Inventory",
      description:
        "Manage products, prices, stock levels, and inventory movements from one platform.",
    },
    {
      icon: <AccountBalanceWallet />,
      title: "Expense Management",
      description:
        "Record business expenses and monitor your spending to maintain better control.",
    },
    {
      icon: <Assessment />,
      title: "Business Reports",
      description:
        "Generate useful sales, payment, expense, and business performance reports.",
    },
    {
      icon: <Settings />,
      title: "Business Automation",
      description:
        "Reduce repetitive tasks and simplify your daily business operations with automation.",
    },
  ];

  const businessTypes = [
    "Retail Stores",
    "Small Businesses",
    "Service Providers",
    "Wholesale Businesses",
    "Freelancers",
    "Growing Enterprises",
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
            px: { xs: 2, sm: 4, md: 8 },
            py: { xs: 7, md: 11 },
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
                label="Business Services"
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
                Everything Your Business Needs in One Place
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  maxWidth: 580,
                  mb: 4,
                }}
              >
                Simplify invoicing, customer management, inventory, expenses,
                and business reporting with CloudBill business solutions.
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
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
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
                  onClick={() => navigate("/contact")}
                  sx={{
                    color: "#4F46E5",
                    borderColor: "#4F46E5",
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#4338CA",
                      backgroundColor: "#EEF2FF",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 4,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 20px 50px rgba(79, 70, 229, 0.12)",
                }}
              >
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
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
                      }}
                    >
                      <BusinessCenter />
                    </Box>

                    <Box>
                      <Typography
                        sx={{ fontWeight: 800, color: "#0F172A" }}
                      >
                        Business Dashboard
                      </Typography>

                      <Typography sx={{ color: "#64748B", fontSize: 13 }}>
                        Manage your business easily
                      </Typography>
                    </Box>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: "#EEF2FF",
                        }}
                      >
                        <Typography sx={{ color: "#6366F1", fontSize: 13 }}>
                          Total Revenue
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, mt: 1 }}
                        >
                          ₹1,25,400
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
                        <Typography sx={{ color: "#0F766E", fontSize: 13 }}>
                          Total Invoices
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, mt: 1 }}
                        >
                          245
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
                        color: "#64748B",
                        fontSize: 13,
                        mb: 1.5,
                      }}
                    >
                      Business Activities
                    </Typography>

                    {[
                      "Invoice created successfully",
                      "Customer details updated",
                      "Business report generated",
                    ].map((activity) => (
                      <Stack
                        key={activity}
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 1 }}
                      >
                        <CheckCircle
                          sx={{ color: "#4F46E5", fontSize: 18 }}
                        />

                        <Typography
                          sx={{ color: "#475569", fontSize: 14 }}
                        >
                          {activity}
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
            maxWidth: 950,
            mx: "auto",
            textAlign: "center",
            px: { xs: 2, sm: 4 },
            py: { xs: 6, md: 9 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 2,
            }}
          >
            Business Tools That Work Together
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            CloudBill brings your important business activities together so
            that you can manage your operations with less effort and better
            visibility.
          </Typography>
        </Box>

        {/* Services Section */}
        <Box
          sx={{
            maxWidth: 1250,
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6 },
            pb: { xs: 6, md: 9 },
          }}
        >
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
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
                      width: 54,
                      height: 54,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      backgroundColor: "#EEF2FF",
                      color: "#4F46E5",
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#0F172A",
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Business Types */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            px: { xs: 2, sm: 4, md: 8 },
            py: { xs: 6, md: 9 },
          }}
        >
          <Box sx={{ maxWidth: 1150, mx: "auto" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                mb: 4,
              }}
            >
              Suitable for Different Business Types
            </Typography>

            <Grid container spacing={2}>
              {businessTypes.map((business) => (
                <Grid item xs={12} sm={6} md={4} key={business}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <CheckCircle sx={{ color: "#4F46E5" }} />

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#334155",
                        }}
                      >
                        {business}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Benefits Section */}
        <Box
          sx={{
            backgroundColor: "#0F172A",
            color: "#FFFFFF",
            px: { xs: 2, sm: 4, md: 8 },
            py: { xs: 6, md: 9 },
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
                  fontSize: { xs: "1.9rem", md: "2.5rem" },
                  mb: 2,
                }}
              >
                Built to Simplify Business Management
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.8,
                }}
              >
                Manage your business information, daily transactions, and
                reports from a single cloud-based platform.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {[
                  "Centralized business information",
                  "Simple and professional invoicing",
                  "Better customer and product management",
                  "Easy expense and payment tracking",
                  "Useful reports for business decisions",
                  "Cloud access from anywhere",
                ].map((benefit) => (
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

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            px: 2,
            py: { xs: 6, md: 9 },
            background:
              "linear-gradient(135deg, #EEF2FF 0%, #F0FDFA 100%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 2,
            }}
          >
            Take Your Business to the Next Level
          </Typography>

          <Typography sx={{ color: "#64748B", mb: 3 }}>
            Start managing your business smarter with CloudBill.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => navigate("/register")}
            sx={{
              backgroundColor: "#4F46E5",
              color: "#FFFFFF",
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 2,
              px: 4,
              py: 1.5,
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

export default BusinessServices;