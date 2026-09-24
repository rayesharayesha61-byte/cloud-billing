import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {

  ArrowForward,
  RocketLaunchOutlined,
  WorkspacePremiumOutlined,
  BusinessCenterOutlined,
 
} from "@mui/icons-material";



import PublicHeader from "../../components/public/PublicHeader";
import PublicFooter from "../../components/public/PublicFooter";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "BASIC",
      price: "₹299",
      description:
        "Essential billing tools for small businesses getting started.",
      icon: <RocketLaunchOutlined />,
      features: [
        "GST invoice creation",
        "Product management",
        "Customer management",
        "PDF invoice",
        "Basic reports",
        "Invoice history",
      ],
      button: "Start Basic Plan",
      popular: false,
    },
    {
      name: "PROFESSIONAL",
      price: "₹599",
      description:
        "Advanced billing features for growing businesses.",
      icon: <WorkspacePremiumOutlined />,
      features: [
        "Everything in Basic",
        "Advanced reports",
        "Unlimited customers",
        "Unlimited products",
        "Invoice PDF download",
        "WhatsApp invoice sharing",
        "Email invoice sharing",
        "Business dashboard",
      ],
      button: "Start Professional",
      popular: true,
    },
    {
      name: "BUSINESS",
      price: "₹999",
      description:
        "Complete billing solution for established businesses.",
      icon: <BusinessCenterOutlined />,
      features: [
        "Everything in Professional",
        "Advanced business reports",
        "Sales analytics",
        "Customer insights",
        "Inventory management",
        "Priority support",
        "Business performance dashboard",
        "Multiple business workflows",
      ],
      button: "Start Business Plan",
      popular: false,
    },
  ];

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <PublicHeader />

      {/* =====================================================
          HERO
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(135deg, #eef2ff 0%, #f8faff 55%, #ffffff 100%)",

          py: {
            xs: 8,
            md: 11,
          },

          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Background Glow */}

        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",

            background:
              "rgba(79,70,229,0.10)",

            filter: "blur(90px)",

            top: -220,
            left: -180,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",

            background:
              "rgba(99,102,241,0.10)",

            filter: "blur(90px)",

            right: -150,
            bottom: -180,
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Typography
              sx={{
                color: "#4f46e5",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.8,
                mb: 2,
              }}
            >
              SIMPLE & TRANSPARENT PRICING
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 38,
                  sm: 48,
                  md: 60,
                },

                lineHeight: 1.08,

                fontWeight: 800,

                letterSpacing: "-2px",

                color: "#111827",

                mb: 2,
              }}
            >
              Choose the Right Plan
              <br />
              for Your Business
            </Typography>

            <Typography
              sx={{
                maxWidth: 680,
                mx: "auto",

                color: "#6b7280",

                fontSize: {
                  xs: 15,
                  md: 18,
                },

                lineHeight: 1.8,
              }}
            >
              Start with the plan that fits your business
              today. Upgrade whenever your business grows.
            </Typography>

            {/* FREE TRIAL */}

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",

                mt: 3,

                px: 2.5,
                py: 1,

                borderRadius: 10,

                background: "#ffffff",

                border: "1px solid #c7d2fe",

                boxShadow:
                  "0 5px 18px rgba(79,70,229,0.08)",
              }}
            >
              

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#374151",
                }}
              >
                30-Day Free Trial Available
              </Typography>
            </Box>
          </div>
        </Container>
      </Box>

      {/* =====================================================
          PRICING SECTION
      ===================================================== */}

      <Box
        sx={{
          background: "#ffffff",

          py: {
            xs: 7,
            md: 10,
          },
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },

              gap: 3,

              alignItems: "stretch",
            }}
          >

            {plans.map((plan, index) => (
              <div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                style={{
                  height: "100%",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",

                    minHeight: 650,

                    display: "flex",
                    flexDirection: "column",

                    position: "relative",

                    overflow: "visible",

                    borderRadius: 3,

                    border: plan.popular
                      ? "2px solid #4f46e5"
                      : "1px solid #e5e7eb",

                    background: "#ffffff",

                    boxShadow: plan.popular
                      ? "0 20px 50px rgba(79,70,229,0.16)"
                      : "0 10px 35px rgba(15,23,42,0.06)",

                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      transform:
                        "translateY(-7px)",

                      boxShadow:
                        "0 20px 45px rgba(15,23,42,0.12)",
                    },
                  }}
                >

                  {/* POPULAR BADGE */}

                  {plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",

                        top: -15,

                        left: "50%",

                        transform:
                          "translateX(-50%)",

                        zIndex: 5,
                      }}
                    >
                      <Chip
                        label="MOST POPULAR"
                        sx={{
                          height: 30,

                          px: 1,

                          borderRadius: 10,

                          background:
                            "#4f46e5",

                          color: "#ffffff",

                          fontSize: 11,

                          fontWeight: 800,

                          letterSpacing: 0.5,

                          boxShadow:
                            "0 6px 15px rgba(79,70,229,0.25)",
                        }}
                      />
                    </Box>
                  )}

                  {/* CARD CONTENT */}

                  <Box
                    sx={{
                      p: 3.5,

                      display: "flex",
                      flexDirection: "column",

                      height: "100%",
                    }}
                  >

                    {/* ICON */}

                    <Box
                      sx={{
                        width: 54,
                        height: 54,

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                          "center",

                        borderRadius: 2,

                        background:
                          plan.popular
                            ? "#eef2ff"
                            : "#f8fafc",

                        color:
                          "#4f46e5",

                        mb: 2.5,
                      }}
                    >
                      {plan.icon}
                    </Box>

                    {/* PLAN NAME */}

                    <Typography
                      sx={{
                        fontSize: 14,

                        fontWeight: 800,

                        letterSpacing: 1.3,

                        color:
                          "#4f46e5",

                        mb: 1,
                      }}
                    >
                      {plan.name}
                    </Typography>

                    {/* PRICE */}

                    <Box
                      sx={{
                        display: "flex",

                        alignItems: "baseline",

                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: 40,
                            md: 46,
                          },

                          fontWeight: 800,

                          letterSpacing: "-1.5px",

                          color: "#111827",
                        }}
                      >
                        {plan.price}
                      </Typography>

                      <Typography
                        sx={{
                          ml: 1,

                          fontSize: 14,

                          color: "#6b7280",

                          fontWeight: 600,
                        }}
                      >
                        / month
                      </Typography>
                    </Box>

                    {/* DESCRIPTION */}

                    <Typography
                      sx={{
                        minHeight: 55,

                        fontSize: 14,

                        lineHeight: 1.7,

                        color: "#6b7280",

                        mb: 2.5,
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Divider
                      sx={{
                        mb: 2.5,
                        borderColor:
                          "#eef0f4",
                      }}
                    />

                    {/* FEATURES */}

                    <Typography
                      sx={{
                        fontSize: 14,

                        fontWeight: 800,

                        color: "#111827",

                        mb: 1.8,
                      }}
                    >
                      What's included
                    </Typography>

                    <Stack
                      spacing={1.4}
                      sx={{
                        flex: 1,
                      }}
                    >
                      {plan.features.map(
                        (feature) => (
                          <Box
                            key={feature}
                            sx={{
                              display:
                                "flex",

                              alignItems:
                                "flex-start",

                              gap: 1.2,
                            }}
                          >
                       

                            <Typography
                              sx={{
                                fontSize: 14,

                                color:
                                  "#4b5563",

                                lineHeight:
                                  1.5,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        )
                      )}
                    </Stack>

                    {/* BUTTON */}

                    <Button
                      fullWidth
                      variant={
                        plan.popular
                          ? "contained"
                          : "outlined"
                      }
                      endIcon={
                        <ArrowForward />
                      }
                      onClick={() =>
                        navigate(
                          `/register?plan=${plan.name.toLowerCase()}`
                        )
                      }
                      sx={{
                        mt: 3.5,

                        minHeight: 50,

                        borderRadius: 1.5,

                        textTransform:
                          "none",

                        fontWeight: 700,

                        fontSize: 14,

                        ...(plan.popular
                          ? {
                              background:
                                "#4f46e5",

                              boxShadow:
                                "0 8px 20px rgba(79,70,229,0.20)",

                              "&:hover": {
                                background:
                                  "#4338ca",
                              },
                            }
                          : {
                              color:
                                "#4f46e5",

                              borderColor:
                                "#4f46e5",

                              "&:hover": {
                                background:
                                  "#eef2ff",

                                borderColor:
                                  "#4338ca",
                              },
                            }),
                      }}
                    >
                      {plan.button}
                    </Button>

                  </Box>
                </Card>
              </div>
            ))}

          </Box>
        </Container>
      </Box>

      {/* =====================================================
          FREE TRIAL SECTION
      ===================================================== */}

      <Box
        sx={{
          background: "#f8fafc",

          borderTop:
            "1px solid #eef0f4",

          borderBottom:
            "1px solid #eef0f4",

          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Container maxWidth="md">

          <Box
            sx={{
              textAlign: "center",
            }}
          >

            <Typography
              sx={{
                fontSize: {
                  xs: 27,
                  md: 34,
                },

                fontWeight: 800,

                color: "#111827",

                mb: 1.5,
              }}
            >
              Start With a 30-Day Free Trial
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                fontSize: 15,

                lineHeight: 1.8,

                maxWidth: 650,

                mx: "auto",

                mb: 3,
              }}
            >
              Explore CloudBill and experience
              simple, GST-ready billing before
              choosing a paid plan.
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() =>
                navigate("/register")
              }
              sx={{
                minHeight: 50,

                px: 3.5,

                borderRadius: 1.5,

                textTransform: "none",

                fontWeight: 700,

                background: "#4f46e5",

                "&:hover": {
                  background: "#4338ca",
                },
              }}
            >
              Start Free Trial
            </Button>

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          FAQ CTA
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 6,
            md: 8,
          },

          background: "#ffffff",
        }}
      >
        <Container maxWidth="md">

          <Card
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 4,
              },

              textAlign: "center",

              border:
                "1px solid #e5e7eb",

              borderRadius: 3,

              background:
                "linear-gradient(135deg, #f8faff, #eef2ff)",
            }}
          >

           

            <Typography
              sx={{
                fontSize: 24,

                fontWeight: 800,

                color: "#111827",

                mb: 1,
              }}
            >
              Have Questions About Pricing?
            </Typography>

            <Typography
              sx={{
                fontSize: 14,

                color: "#6b7280",

                mb: 2.5,
              }}
            >
              Check our frequently asked questions
              or contact our team.
            </Typography>

            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              onClick={() =>
                navigate("/faq")
              }
              sx={{
                minHeight: 46,

                px: 2.8,

                borderRadius: 1.5,

                textTransform: "none",

                fontWeight: 700,

                color: "#4f46e5",

                borderColor: "#4f46e5",

                "&:hover": {
                  background: "#eef2ff",
                },
              }}
            >
              Visit FAQ
            </Button>

          </Card>

        </Container>
      </Box>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <PublicFooter />
    </>
  );
};

export default Pricing;