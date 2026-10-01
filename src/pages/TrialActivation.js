import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  CheckCircle,
  RocketLaunch,
  Business,
  ReceiptLong,
  People,
  Inventory2,
  Assessment,
  ArrowForward,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function TrialActivation() {
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("Your Business");
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const businessData = localStorage.getItem("businessDetails");

    if (!businessData) {
      navigate("/business-details");
      return;
    }

    try {
      const data = JSON.parse(businessData);
      setBusinessName(data.businessName || "Your Business");
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  const handleStartTrial = () => {
    const startDate = new Date();

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 30);

    const subscriptionData = {
      trialStartDate: startDate.toISOString(),
      trialEndDate: endDate.toISOString(),
      subscriptionStatus: "TRIAL",
      plan: "FREE_TRIAL",
      trialDays: 30,
      subscriptionEndDate: null,
    };

    localStorage.setItem(
      "subscription",
      JSON.stringify(subscriptionData)
    );

    setActivated(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  const features = [
    {
      icon: <ReceiptLong />,
      title: "Create Invoices",
      text: "Create professional invoices for your customers.",
    },
    {
      icon: <Inventory2 />,
      title: "Product Management",
      text: "Manage products, prices and stock.",
    },
    {
      icon: <People />,
      title: "Customer Management",
      text: "Store and manage customer information.",
    },
    {
      icon: <Assessment />,
      title: "Basic Reports",
      text: "View your sales and invoice reports.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 3, sm: 5 },
        px: 1.5,
        background:
          "radial-gradient(circle at top left, rgba(79,70,229,0.12), transparent 35%), #f8fafc",
      }}
    >
      <Container maxWidth="md">

        {/* Header */}

        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 62,
              height: 62,
              mx: "auto",
              mb: 1.5,
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              background:
                "linear-gradient(135deg,#4f46e5,#6366f1)",
              boxShadow:
                "0 12px 30px rgba(79,70,229,0.22)",
            }}
          >
            <RocketLaunch sx={{ fontSize: 32 }} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 24, sm: 31 },
              fontWeight: 800,
              color: "#111827",
            }}
          >
            Your Free Trial Is Ready!
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#64748b",
              fontSize: 15,
            }}
          >
            Start managing your business with Cloud Billing
          </Typography>
        </Box>

        {/* Business */}

        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            p: 2,
            mb: 2,
            borderRadius: "15px",
            border: "1px solid #e2e8f0",
          }}
        >
          <Box
            sx={{
              width: 45,
              height: 45,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eef2ff",
              color: "#4f46e5",
              flexShrink: 0,
            }}
          >
            <Business />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                color: "#94a3b8",
              }}
            >
              Business
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: "#1e293b",
              }}
            >
              {businessName}
            </Typography>
          </Box>
        </Paper>

        {/* Trial Card */}

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: "22px",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >

          {/* Badge */}

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.7,
              px: 1.5,
              py: 0.7,
              borderRadius: "50px",
              background: "#ecfdf5",
              color: "#059669",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            <CheckCircle sx={{ fontSize: 18 }} />
            30 DAYS FREE
          </Box>

          <Typography
            sx={{
              mt: 2,
              fontSize: 27,
              fontWeight: 800,
              color: "#111827",
            }}
          >
            Free Trial
          </Typography>

          <Typography
            sx={{
              maxWidth: 600,
              mx: "auto",
              mt: 1,
              fontSize: 14,
              lineHeight: 1.7,
              color: "#64748b",
            }}
          >
            Explore Cloud Billing Software with access to
            essential billing features for your business.
          </Typography>

          {/* Price */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 0.7,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 38, sm: 44 },
                fontWeight: 800,
                color: "#4f46e5",
              }}
            >
              ₹0
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                color: "#64748b",
              }}
            >
              / 30 days
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Included */}

          <Typography
            sx={{
              textAlign: "left",
              fontSize: 17,
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            What's included
          </Typography>

          <List sx={{ mt: 0.5 }}>

            {features.map((feature, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  py: 1.2,
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 48,
                    color: "#4f46e5",
                    pt: 0.5,
                  }}
                >
                  {feature.icon}
                </ListItemIcon>

                <ListItemText
                  primary={feature.title}
                  secondary={feature.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                  secondaryTypographyProps={{
                    fontSize: 12,
                    color: "#64748b",
                    mt: 0.3,
                  }}
                />
              </ListItem>
            ))}

          </List>

          {/* Button */}

          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={handleStartTrial}
            disabled={activated}
            sx={{
              mt: 2,
              height: 52,
              borderRadius: "10px",
              background: activated
                ? "#10b981"
                : "#4f46e5",
              textTransform: "none",
              fontSize: 15,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": {
                background: activated
                  ? "#10b981"
                  : "#4338ca",
                boxShadow: "none",
              },
            }}
          >
            {activated
              ? "Trial Activated"
              : "Start 30-Day Free Trial"}
          </Button>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 12,
              color: "#94a3b8",
            }}
          >
            No payment required to start your free trial.
          </Typography>

        </Paper>

        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            fontSize: 12,
            color: "#64748b",
          }}
        >
          You can upgrade to a paid plan anytime from
          your subscription settings.
        </Typography>

      </Container>
    </Box>
  );
}

export default TrialActivation;