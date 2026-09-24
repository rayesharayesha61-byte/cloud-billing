import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Stack,
  Divider,
  Alert,
} from "@mui/material";

import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  SendOutlined,
  ArrowForward,
  SupportAgentOutlined,
  ScheduleOutlined,
  RocketLaunchOutlined,
  WhatsApp,
} from "@mui/icons-material";



import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

const Contact = () => {
  const navigate = useNavigate();

  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim()) {
      if (
        !/^\+?\d{10,15}$/.test(
          formData.phone.replace(/\s/g, "")
        )
      ) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    return newErrors;
  };

  /* =========================================================
     WHATSAPP SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError(
        "Please check the highlighted fields."
      );
      return;
    }

    setErrors({});
    setSubmitError("");

    const phoneNumber = "919876543210";

    const text = `
Hello CloudBill Team,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    const url =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(text);

    window.open(url, "_blank");
  };

  /* =========================================================
     CONTACT INFORMATION
  ========================================================= */

  const contactInfo = [
    {
      title: "Email",
      value: "support@cloudbill.com",
      description:
        "Send us your questions anytime.",
      icon: <EmailOutlined />,
    },
    {
      title: "Phone",
      value: "+91 98765 43210",
      description:
        "Monday to Friday, 9 AM – 6 PM.",
      icon: <PhoneOutlined />,
    },
    {
      title: "Office",
      value: "Chennai, Tamil Nadu",
      description:
        "Serving businesses across India.",
      icon: <LocationOnOutlined />,
    },
  ];

  /* =========================================================
     SUPPORT CARDS
  ========================================================= */

  const supportCards = [
    {
      title: "Product Support",
      description:
        "Get help with invoices, customers, products, reports and account settings.",
      icon: <SupportAgentOutlined />,
    },
    {
      title: "Easy Getting Started",
      description:
        "Our team can guide you through setting up CloudBill for your business.",
      icon: <RocketLaunchOutlined />,
    },
    {
      title: "Quick Response",
      description:
        "Send us your requirements and our team will respond as soon as possible.",
      icon: <ScheduleOutlined />,
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
            md: 12,
          },

          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        {/* Background Glow */}

        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",

            background:
              "rgba(79,70,229,0.10)",

            filter: "blur(80px)",

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

            background:
              "rgba(99,102,241,0.10)",

            filter: "blur(80px)",

            right: -120,
            bottom: -180,
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#4f46e5",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1.8,
                  mb: 2,
                }}
              >
                CONTACT CLOUDBILL
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "40px",
                    sm: "50px",
                    md: "62px",
                  },

                  lineHeight: 1.08,

                  fontWeight: 800,

                  letterSpacing: "-2px",

                  color: "#111827",

                  mb: 2.5,
                }}
              >
                We're Here to Help
              </Typography>

              <Typography
                sx={{
                  maxWidth: 720,
                  mx: "auto",

                  color: "#6b7280",

                  fontSize: {
                    xs: 15,
                    md: 18,
                  },

                  lineHeight: 1.8,
                }}
              >
                Have a question about CloudBill?
                Our team is ready to help you with
                billing, invoicing, account setup and
                everything you need to manage your
                business.
              </Typography>
            </Box>
          </div>
        </Container>
      </Box>

      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <Box
        sx={{
          background: "#ffffff",
          py: {
            xs: 7,
            md: 11,
          },
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.15fr",
              },

              gap: {
                xs: 5,
                md: 7,
              },

              alignItems: "start",
            }}
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <Box>

              <Typography
                sx={{
                  color: "#4f46e5",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  mb: 1.5,
                }}
              >
                GET IN TOUCH
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 30,
                    md: 38,
                  },

                  lineHeight: 1.2,

                  fontWeight: 800,

                  color: "#111827",

                  mb: 2,
                }}
              >
                Let's Talk About Your Business
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",

                  fontSize: 16,

                  lineHeight: 1.8,

                  mb: 4,
                }}
              >
                Whether you're getting started with
                CloudBill or already using the platform,
                we're here to answer your questions and
                help you get the most from your billing
                software.
              </Typography>

              {/* CONTACT CARDS */}

              <Stack spacing={2}>

                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: 2.2,

                        border:
                          "1px solid #e5e7eb",

                        borderRadius: 2.5,

                        display: "flex",

                        alignItems: "center",

                        gap: 2,

                        background:
                          "#ffffff",

                        boxShadow:
                          "0 5px 18px rgba(15,23,42,0.035)",

                        transition:
                          "all 0.25s ease",

                        "&:hover": {
                          borderColor:
                            "#c7d2fe",

                          boxShadow:
                            "0 15px 35px rgba(15,23,42,0.08)",
                        },
                      }}
                    >

                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          minWidth: 50,

                          display: "flex",

                          alignItems: "center",

                          justifyContent:
                            "center",

                          borderRadius: 2,

                          background:
                            "#eef2ff",

                          color:
                            "#4f46e5",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#6b7280",
                            mb: 0.3,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: "#111827",
                            mb: 0.3,
                          }}
                        >
                          {item.value}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 12.5,
                            color: "#9ca3af",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>

                    </Card>
                  </div>
                ))}

              </Stack>

            </Box>

            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <Card
              elevation={0}
              sx={{
                width: "100%",

                boxSizing: "border-box",

                p: {
                  xs: 2.5,
                  sm: 4,
                },

                border:
                  "1px solid #e5e7eb",

                borderRadius: 3,

                background: "#ffffff",

                boxShadow:
                  "0 15px 45px rgba(15,23,42,0.08)",
              }}
            >

              {/* FORM HEADER */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    minWidth: 52,

                    display: "flex",

                    alignItems: "center",

                    justifyContent:
                      "center",

                    borderRadius: 2,

                    background:
                      "#4f46e5",

                    color: "#ffffff",

                    boxShadow:
                      "0 8px 20px rgba(79,70,229,0.22)",
                  }}
                >
                  <SendOutlined />
                </Box>

                <Box>

                  <Typography
                    sx={{
                      fontSize: 23,
                      fontWeight: 800,
                      color: "#111827",
                      mb: 0.4,
                    }}
                  >
                    Send Us a Message
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13.5,
                      color: "#6b7280",
                      lineHeight: 1.6,
                    }}
                  >
                    Fill out the form and our team
                    will get back to you shortly.
                  </Typography>

                </Box>

              </Box>

              <Divider
                sx={{
                  my: 3.5,
                  borderColor: "#eef0f4",
                }}
              />

              {/* ERROR */}

              {submitError && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 2.5,
                    borderRadius: 1.5,
                  }}
                >
                  {submitError}
                </Alert>
              )}

              {/* FORM */}

              <Box
                component="form"
                onSubmit={handleSubmit}
              >

                <Box
                  sx={{
                    display: "grid",

                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 1fr",
                    },

                    gap: 2.2,
                  }}
                >

                  {/* NAME */}

                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    error={!!errors.name}
                    helperText={errors.name}
                  />

                  {/* EMAIL */}

                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    error={!!errors.email}
                    helperText={errors.email}
                  />

                  {/* PHONE */}

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />

                  {/* COMPANY */}

                  <TextField
                    fullWidth
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />

                  {/* SUBJECT */}

                  <TextField
                    fullWidth
                    required
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    error={!!errors.subject}
                    helperText={errors.subject}
                    sx={{
                      gridColumn: {
                        xs: "auto",
                        sm: "1 / -1",
                      },
                    }}
                  />

                  {/* MESSAGE */}

                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={5}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    error={!!errors.message}
                    helperText={errors.message}
                    sx={{
                      gridColumn: {
                        xs: "auto",
                        sm: "1 / -1",
                      },
                    }}
                  />

                </Box>

                {/* SUBMIT */}

                <Box
                  sx={{
                    mt: 2.5,

                    display: "flex",

                    alignItems: {
                      xs: "stretch",
                      sm: "center",
                    },

                    justifyContent:
                      "space-between",

                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    gap: 2,
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: 12.5,
                      color: "#9ca3af",
                      textAlign: {
                        xs: "center",
                        sm: "left",
                      },
                    }}
                  >
                    We usually respond within
                    one business day.
                  </Typography>

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      minHeight: 50,

                      px: 3,

                      borderRadius: 1.5,

                      textTransform:
                        "none",

                      fontWeight: 700,

                      background:
                        "#4f46e5",

                      boxShadow:
                        "0 8px 20px rgba(79,70,229,0.22)",

                      "&:hover": {
                        background:
                          "#4338ca",

                        transform:
                          "translateY(-2px)",
                      },

                      transition:
                        "all 0.25s ease",
                    }}
                  >
                    Send Message
                  </Button>

                </Box>

              </Box>

            </Card>

          </Box>
        </Container>
      </Box>

      {/* =====================================================
          WHY CONTACT US
      ===================================================== */}

      <Box
        sx={{
          background: "#f8fafc",

          borderTop:
            "1px solid #eef0f4",

          borderBottom:
            "1px solid #eef0f4",

          py: {
            xs: 7,
            md: 10,
          },
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >

            <Typography
              sx={{
                color: "#4f46e5",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.5,
                mb: 1.5,
              }}
            >
              WHY CONTACT US
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 30,
                  md: 38,
                },

                fontWeight: 800,

                color: "#111827",

                mb: 1.5,
              }}
            >
              Support When You Need It
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",

                fontSize: 16,

                lineHeight: 1.8,
              }}
            >
              From setup to everyday billing,
              our team is here to make your
              CloudBill experience simple.
            </Typography>

          </Box>

          {/* SUPPORT CARDS */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
              },

              gap: 3,
            }}
          >

            {supportCards.map(
              (item, index) => (
                <div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",

                      minHeight: 230,

                      p: 3.5,

                      display: "flex",

                      flexDirection:
                        "column",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      textAlign:
                        "center",

                      border:
                        "1px solid #e5e7eb",

                      borderRadius: 2.5,

                      background:
                        "#ffffff",

                      transition:
                        "all 0.25s ease",

                      "&:hover": {
                        borderColor:
                          "#c7d2fe",

                        boxShadow:
                          "0 18px 40px rgba(15,23,42,0.08)",
                      },
                    }}
                  >

                    <Box
                      sx={{
                        width: 60,
                        height: 60,

                        display: "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        borderRadius: 2,

                        background:
                          "#eef2ff",

                        color:
                          "#4f46e5",

                        mb: 2,

                        "& svg": {
                          fontSize: 29,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 18,

                        fontWeight: 800,

                        color: "#111827",

                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        maxWidth: 290,

                        fontSize: 14,

                        lineHeight: 1.7,

                        color: "#6b7280",
                      }}
                    >
                      {item.description}
                    </Typography>

                  </Card>
                </div>
              )
            )}

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          FAQ CTA
      ===================================================== */}

      <Box
        sx={{
          background: "#ffffff",
          py: {
            xs: 6,
            md: 9,
          },
        }}
      >
        <Container maxWidth="lg">

          <Card
            elevation={0}
            sx={{
              maxWidth: 1050,

              mx: "auto",

              p: {
                xs: 3,
                md: 5,
              },

              display: "flex",

              alignItems: "center",

              justifyContent:
                "space-between",

              gap: 3,

              flexDirection: {
                xs: "column",
                md: "row",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },

              border:
                "1px solid #dfe4ee",

              borderRadius: 3,

              background:
                "linear-gradient(135deg, #f8faff, #eef2ff)",
            }}
          >

            <Box
              sx={{
                maxWidth: 620,
              }}
            >

              <Typography
                sx={{
                  fontSize: 27,

                  fontWeight: 800,

                  color: "#111827",

                  mb: 1,
                }}
              >
                Looking for Quick Answers?
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",

                  fontSize: 15,

                  lineHeight: 1.7,
                }}
              >
                Find answers to common questions
                about CloudBill, billing, invoices
                and subscriptions.
              </Typography>

            </Box>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >

              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                onClick={() =>
                  navigate("/faq")
                }
                sx={{
                  minHeight: 46,

                  px: 2.5,

                  borderRadius: 1.5,

                  textTransform:
                    "none",

                  fontWeight: 700,

                  color: "#4f46e5",

                  borderColor:
                    "#4f46e5",

                  "&:hover": {
                    background:
                      "#eef2ff",

                    borderColor:
                      "#4338ca",
                  },
                }}
              >
                Visit FAQ
              </Button>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() =>
                  navigate("/pricing")
                }
                sx={{
                  minHeight: 46,

                  px: 2.5,

                  borderRadius: 1.5,

                  textTransform:
                    "none",

                  fontWeight: 700,

                  background:
                    "#4f46e5",

                  "&:hover": {
                    background:
                      "#4338ca",
                  },
                }}
              >
                View Pricing
              </Button>

            </Stack>

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

export default Contact;