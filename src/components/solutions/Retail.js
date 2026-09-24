
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
  PointOfSale,
  Inventory2,
  ReceiptLong,
  People,
  Assessment,
  Payments,
  ArrowForward,
  CheckCircle,
  Storefront,
} from "@mui/icons-material";

import PublicHeader from "../../components/public/PublicHeader";
import PublicFooter from "../../components/public/PublicFooter";

function Retail() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <PointOfSale />,
      title: "Fast POS Billing",
      description:
        "Create quick and accurate bills for every customer at your retail store.",
    },
    {
      icon: <Inventory2 />,
      title: "Inventory Management",
      description:
        "Track product quantities, stock movement, low-stock items, and availability.",
    },
    {
      icon: <ReceiptLong />,
      title: "GST Invoicing",
      description:
        "Generate professional GST invoices with product and tax details.",
    },
    {
      icon: <People />,
      title: "Customer Management",
      description:
        "Manage customer details, purchase history, and outstanding payments.",
    },
    {
      icon: <Payments />,
      title: "Multiple Payments",
      description:
        "Accept cash, card, UPI, and other payment methods with ease.",
    },
    {
      icon: <Assessment />,
      title: "Sales Reports",
      description:
        "Understand daily sales, product performance, and business revenue.",
    },
  ];

  const benefits = [
    "Faster checkout process",
    "Accurate stock tracking",
    "Easy GST billing",
    "Reduced manual work",
    "Better customer management",
    "Clear sales and inventory reports",
  ];

  return (
    <>
      <PublicHeader />

      <Box sx={{ backgroundColor: "#F8FAFC", overflow: "hidden" }}>
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
                label="Retail Billing Software"
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
                  color: "#0F172A",
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                  lineHeight: 1.12,
                  mb: 3,
                }}
              >
                Smart Retail Billing Software for Your Store
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 570,
                }}
              >
                Manage retail billing, inventory, customers, payments, and
                sales reports from one simple cloud-based platform.
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
                  onClick={() => navigate("/pricing")}
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
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 2,
                          backgroundColor: "#EEF2FF",
                          color: "#4F46E5",
                        }}
                      >
                        <Storefront />
                      </Box>

                      <Box>
                        <Typography
                          sx={{ fontWeight: 800, color: "#0F172A" }}
                        >
                          Retail Store
                        </Typography>

                        <Typography
                          sx={{ fontSize: 13, color: "#64748B" }}
                        >
                          Sales Overview
                        </Typography>
                      </Box>
                    </Stack>

                    <Chip
                      label="Today"
                      size="small"
                      sx={{
                        backgroundColor: "#EEF2FF",
                        color: "#4F46E5",
                      }}
                    />
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
                          Total Sales
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ color: "#0F172A", fontWeight: 800, mt: 1 }}
                        >
                          ₹42,850
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
                          Bills Created
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{ color: "#0F172A", fontWeight: 800, mt: 1 }}
                        >
                          86
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 13,
                        mb: 1.5,
                      }}
                    >
                      Store Activities
                    </Typography>

                    {[
                      "New invoice generated",
                      "Stock quantity updated",
                      "Payment received through UPI",
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
              color: "#0F172A",
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 2,
            }}
          >
            Everything You Need to Run Your Retail Store
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            CloudBill helps retailers manage everyday store operations with
            simple billing tools, accurate inventory tracking, and useful
            business insights.
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
                    sx={{
                      color: "#0F172A",
                      fontWeight: 700,
                      mb: 1,
                    }}
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

        {/* Benefits */}
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
                Make Retail Management Easier
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.8,
                }}
              >
                Spend less time on manual calculations and more time serving
                your customers. CloudBill keeps your retail operations
                organized and efficient.
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
            px: 2,
            py: { xs: 6, md: 9 },
            background:
              "linear-gradient(135deg, #EEF2FF 0%, #F0FDFA 100%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#0F172A",
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 2,
            }}
          >
            Ready to Simplify Your Retail Business?
          </Typography>

          <Typography sx={{ color: "#64748B", mb: 3 }}>
            Start managing your store with CloudBill today.
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

export default Retail;