import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import {
  ReceiptLongOutlined,
  Inventory2Outlined,
  PeopleOutlineOutlined,
  AssessmentOutlined,
  PictureAsPdfOutlined,
  WhatsApp,
  EmailOutlined,
  SecurityOutlined,
  CloudOutlined,
  SpeedOutlined,
  AutoGraphOutlined,
  NotificationsActiveOutlined,

  ArrowForward,
  RocketLaunchOutlined,
  SupportAgentOutlined,
  DevicesOutlined,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const features = [
  {
    icon: <ReceiptLongOutlined />,
    title: "GST Invoice Management",
    description:
      "Create professional GST-compliant invoices quickly with customer, product, tax and payment details.",
    color: "#4f46e5",
  },
  {
    icon: <Inventory2Outlined />,
    title: "Product Management",
    description:
      "Manage products, pricing, stock details and product information from one centralized dashboard.",
    color: "#2563eb",
  },
  {
    icon: <PeopleOutlineOutlined />,
    title: "Customer Management",
    description:
      "Store customer information and easily access customer history whenever you need it.",
    color: "#7c3aed",
  },
  {
    icon: <AssessmentOutlined />,
    title: "Business Reports",
    description:
      "Understand your business with sales reports, invoice reports and useful business insights.",
    color: "#0891b2",
  },
  {
    icon: <PictureAsPdfOutlined />,
    title: "PDF Invoices",
    description:
      "Generate professional PDF invoices that are ready to download, print or share with customers.",
    color: "#dc2626",
  },
  {
    icon: <WhatsApp />,
    title: "WhatsApp Sharing",
    description:
      "Share invoices directly with your customers through WhatsApp for faster communication.",
    color: "#16a34a",
  },
  {
    icon: <EmailOutlined />,
    title: "Email Invoices",
    description:
      "Send invoices and billing documents directly to your customers through email.",
    color: "#ea580c",
  },
  {
    icon: <AutoGraphOutlined />,
    title: "Sales Analytics",
    description:
      "Track sales performance and understand business trends using clear analytics.",
    color: "#9333ea",
  },
  {
    icon: <NotificationsActiveOutlined />,
    title: "Smart Notifications",
    description:
      "Stay updated with important invoice, business and account notifications.",
    color: "#ca8a04",
  },
  {
    icon: <SecurityOutlined />,
    title: "Secure Business Data",
    description:
      "Keep your business information, customer details and invoices protected.",
    color: "#475569",
  },
  {
    icon: <CloudOutlined />,
    title: "Cloud Based",
    description:
      "Access your billing information through a cloud-based platform without maintaining local software.",
    color: "#0284c7",
  },
  {
    icon: <DevicesOutlined />,
    title: "Responsive Experience",
    description:
      "Use CloudBill comfortably across desktop, tablet and mobile screen sizes.",
    color: "#4f46e5",
  },
];

const benefits = [
  "Create GST invoices quickly",
  "Manage products and customers",
  "Download professional PDF invoices",
  "Share invoices through WhatsApp",
  "Send invoices through email",
  "Track sales and business reports",
  "Manage billing information centrally",
  "Access your business data from the cloud",
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8faff 0%, #ffffff 45%, #f8faff 100%)",
        overflow: "hidden",
      }}
    >
      <PublicHeader />

      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 9, md: 13 },
          background:
            "linear-gradient(135deg, #eef2ff 0%, #ffffff 48%, #eef2ff 100%)",
        }}
      >
        {/* Decorative Background */}
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(79,70,229,0.10)",
            filter: "blur(70px)",
            top: -180,
            left: -150,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.10)",
            filter: "blur(80px)",
            bottom: -150,
            right: -100,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{
              textAlign: "center",
              maxWidth: 850,
              mx: "auto",
            }}
          >
            <Chip
              icon={<RocketLaunchOutlined />}
              label="POWERFUL CLOUD BILLING FEATURES"
              sx={{
                mb: 3,
                px: 1,
                py: 2.5,
                fontWeight: 800,
                color: "#4338ca",
                background: "#e0e7ff",
                border: "1px solid #c7d2fe",
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.3rem", sm: "3rem", md: "4rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#111827",
                mb: 3,
              }}
            >
              Everything You Need to
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#4f46e5",
                }}
              >
                Manage Your Business
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
                color: "#64748b",
                mb: 4,
              }}
            >
              CloudBill brings invoicing, products, customers, reports and
              business management together in one simple cloud-based platform.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/register")}
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  background: "#4f46e5",
                  boxShadow: "0 10px 25px rgba(79,70,229,0.25)",
                  "&:hover": {
                    background: "#4338ca",
                  },
                }}
              >
                Start Free Trial
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  px: 4,
                  py: 1.6,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#4f46e5",
                  borderColor: "#a5b4fc",
                  "&:hover": {
                    borderColor: "#4f46e5",
                    background: "#eef2ff",
                  },
                }}
              >
                Request a Demo
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= FEATURE INTRO ================= */}
      <Box sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              textAlign: "center",
              maxWidth: 750,
              mx: "auto",
              mb: 7,
            }}
          >
            <Typography
              sx={{
                color: "#4f46e5",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: 1.5,
                mb: 1.5,
              }}
            >
              BUILT FOR MODERN BUSINESSES
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 900,
                color: "#111827",
                mb: 2,
              }}
            >
              Powerful Features. Simple Experience.
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              From creating your first invoice to understanding your business
              performance, CloudBill provides the tools you need to simplify
              everyday billing operations.
            </Typography>
          </MotionBox>

          {/* ================= FEATURE GRID ================= */}
      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
    },
    gap: 3,
  }}
>
  {features.map((feature) => (
    <Card
      key={feature.title}
      sx={{
        width: "100%",
        minHeight: 270,
        borderRadius: 4,
        border: "1px solid #e2e8f0",
        boxShadow: "0 8px 30px rgba(15,23,42,0.05)",
        background: "#ffffff",
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "#c7d2fe",
          boxShadow: "0 18px 40px rgba(79,70,229,0.12)",
        },
      }}
    >
      <Box
        sx={{
          p: { xs: 3, sm: 3.5 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            color: feature.color,
            background: `${feature.color}12`,
            flexShrink: 0,

            "& svg": {
              fontSize: 30,
            },
          }}
        >
          {feature.icon}
        </Box>

        {/* TITLE */}
        <Typography
          component="h3"
          sx={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#172033",
            mb: 1.5,
          }}
        >
          {feature.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#64748b",
            lineHeight: 1.75,
            fontSize: "0.95rem",
          }}
        >
          {feature.description}
        </Typography>
      </Box>
    </Card>
  ))}
</Box>
        </Container>
      </Box>

      {/* ================= WHY CLOUDBILL ================= */}
     <Box
  sx={{
    py: { xs: 8, md: 11 },
    background: "#0f172a",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Background Glow */}
  <Box
    sx={{
      position: "absolute",
      width: 400,
      height: 400,
      borderRadius: "50%",
      background: "rgba(79,70,229,0.22)",
      filter: "blur(100px)",
      top: -180,
      right: -120,
    }}
  />

  <Container
    maxWidth="lg"
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: "1100px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 7 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* ================= LEFT ================= */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 520,
              mx: "auto",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Chip
              label="WHY CLOUDBILL?"
              sx={{
                mb: 2.5,
                color: "#c7d2fe",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(129,140,248,0.3)",
                fontWeight: 800,
              }}
            />

            <Typography
              component="h2"
              sx={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Make Billing

              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#818cf8",
                }}
              >
                Simple & Efficient
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                lineHeight: 1.8,
                mb: 4,
                fontSize: "1.02rem",
              }}
            >
              CloudBill is designed to reduce manual billing work and give
              business owners a clear view of their daily operations.
            </Typography>

            {/* Benefits */}
            <Stack
              spacing={2}
              sx={{
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              {benefits.map((benefit) => (
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  key={benefit}
                >
                

                  <Typography
                    sx={{
                      color: "#e2e8f0",
                      fontSize: "0.98rem",
                    }}
                  >
                    {benefit}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* ================= RIGHT ================= */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 520,
              mx: "auto",
            }}
          >
            <Card
              sx={{
                borderRadius: 5,
                p: { xs: 2.5, md: 4 },
                background:
                  "linear-gradient(145deg, #1e293b 0%, #111827 100%)",
                border: "1px solid rgba(148,163,184,0.15)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
                width: "100%",
              }}
            >
              <Stack spacing={2.5}>

                {/* Dashboard Header */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#94a3b8",
                        fontSize: "0.8rem",
                        mb: 0.5,
                      }}
                    >
                      BUSINESS OVERVIEW
                    </Typography>

                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                      }}
                    >
                      CloudBill Dashboard
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: 2,
                      background: "#4f46e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CloudOutlined
                      sx={{
                        color: "#fff",
                      }}
                    />
                  </Box>
                </Stack>

                <Divider
                  sx={{
                    borderColor: "rgba(148,163,184,0.15)",
                  }}
                />

                {/* Statistics */}
                <Grid container spacing={2}>
                  {[
                    ["Total Sales", "₹1,24,500"],
                    ["Invoices", "248"],
                    ["Customers", "126"],
                    ["Products", "342"],
                  ].map(([title, value]) => (
                    <Grid item xs={6} key={title}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.04)",
                          border:
                            "1px solid rgba(148,163,184,0.08)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#94a3b8",
                            fontSize: "0.78rem",
                            mb: 0.8,
                          }}
                        >
                          {title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.15rem",
                            fontWeight: 800,
                          }}
                        >
                          {value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Analytics */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, rgba(79,70,229,0.3), rgba(99,102,241,0.08))",
                    border:
                      "1px solid rgba(129,140,248,0.2)",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background:
                          "rgba(129,140,248,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AutoGraphOutlined
                        sx={{
                          color: "#a5b4fc",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#cbd5e1",
                          fontSize: "0.8rem",
                        }}
                      >
                        SALES PERFORMANCE
                      </Typography>

                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 800,
                        }}
                      >
                        Business Analytics
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
</Box>

      {/* ================= SECURITY SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              textAlign: "center",
              maxWidth: 760,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                mx: "auto",
                mb: 3,
                borderRadius: "50%",
                background: "#eef2ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SecurityOutlined
                sx={{
                  fontSize: 36,
                  color: "#4f46e5",
                }}
              />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.7rem" },
                fontWeight: 900,
                color: "#111827",
                mb: 2,
              }}
            >
              Built for Your Business
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                mb: 4,
              }}
            >
              Manage your billing operations with a clean, centralized and
              cloud-based experience designed for everyday business needs.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/register")}
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "#4f46e5",
                  "&:hover": {
                    background: "#4338ca",
                  },
                }}
              >
                Start 30-Day Free Trial
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/pricing")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontWeight: 700,
                  color: "#4f46e5",
                  borderColor: "#a5b4fc",
                  "&:hover": {
                    borderColor: "#4f46e5",
                    background: "#eef2ff",
                  },
                }}
              >
                View Pricing
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= SUPPORT CTA ================= */}
      <Box
        sx={{
          py: { xs: 7, md: 9 },
          background: "#eef2ff",
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 5,
              textAlign: "center",
              border: "1px solid #c7d2fe",
              boxShadow: "0 15px 40px rgba(79,70,229,0.08)",
            }}
          >
            <SupportAgentOutlined
              sx={{
                fontSize: 45,
                color: "#4f46e5",
                mb: 2,
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontWeight: 900,
                color: "#111827",
                fontSize: { xs: "1.7rem", md: "2.2rem" },
                mb: 1.5,
              }}
            >
              Need Help Choosing?
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Talk to our team and understand how CloudBill can fit your
              business billing requirements.
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontWeight: 700,
                background: "#4f46e5",
                "&:hover": {
                  background: "#4338ca",
                },
              }}
            >
              Contact CloudBill
            </Button>
          </Card>
        </Container>
      </Box>

      <PublicFooter />
    </Box>
  );
};

export default Features;