import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import {
  ExpandMore,
  Search,
  Help,
  ReceiptLong,
  CreditCard,
  Security,
  SupportAgent,
  ArrowForward,
  EmailOutlined,
} from "@mui/icons-material";

import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
const faqData = [
  {
    category: "Getting Started",
    icon: <Help />,
    questions: [
      {
        question: "What is CloudBill?",
        answer:
          "CloudBill is a cloud-based billing software that helps businesses create invoices, manage customers and products, track billing activities and simplify everyday business operations.",
      },
      {
        question: "Who can use CloudBill?",
        answer:
          "CloudBill is designed for small businesses, retailers, service businesses, freelancers and other businesses that need a simple online billing solution.",
      },
      {
        question: "How can I get started with CloudBill?",
        answer:
          "You can create an account using the Free Trial option. After registration, you can set up your business details and start using CloudBill for your billing requirements.",
      },
      {
        question: "Do I need to install CloudBill?",
        answer:
          "No. CloudBill is a cloud-based application, so you can access your billing system through a supported web browser without installing traditional desktop billing software.",
      },
    ],
  },

  {
    category: "Billing & Invoicing",
    icon: <ReceiptLong />,
    questions: [
      {
        question: "Can I create professional invoices?",
        answer:
          "Yes. CloudBill allows you to create professional invoices with your business information, customer details, products or services, quantities, prices and applicable tax information.",
      },
      {
        question: "Can I download or print invoices?",
        answer:
          "Yes. Invoices can be prepared for PDF generation and printing so you can share or maintain them for your business records.",
      },
      {
        question: "Can I manage customers?",
        answer:
          "Yes. CloudBill provides customer management functionality so you can maintain customer information and use those details while creating invoices.",
      },
      {
        question: "Can I manage products and services?",
        answer:
          "Yes. You can maintain your products or services and use them while preparing invoices.",
      },
    ],
  },

  {
    category: "Plans & Payments",
    icon: <CreditCard />,
    questions: [
      {
        question: "Does CloudBill offer a free trial?",
        answer:
          "Yes. CloudBill provides a 30-day free trial with access to selected billing features. The trial plan can be changed later based on your business requirements.",
      },
      {
        question: "What happens when my free trial ends?",
        answer:
          "When your trial period ends, your trial access will expire. You can choose an available subscription plan to continue using CloudBill.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Yes. You can change your subscription plan based on your business requirements and the features available with each plan.",
      },
      {
        question: "Are the pricing plans monthly?",
        answer:
          "CloudBill currently provides monthly subscription options. You can check the Pricing page for the latest plan details and available features.",
      },
    ],
  },

  {
    category: "Security",
    icon: <Security />,
    questions: [
      {
        question: "Is my business information secure?",
        answer:
          "CloudBill is designed with security in mind. Access to account functionality is protected through authentication, and business information is handled through the application's secured backend infrastructure.",
      },
      {
        question: "Is CloudBill cloud based?",
        answer:
          "Yes. CloudBill is designed as a cloud billing platform so your billing application can be accessed through the web instead of depending on a single local computer.",
      },
      {
        question: "Can multiple business details be managed?",
        answer:
          "CloudBill is designed around business account management, allowing your account to maintain the business information required for billing and invoicing.",
      },
    ],
  },

  {
    category: "Support",
    icon: <SupportAgent />,
    questions: [
      {
        question: "How can I contact CloudBill support?",
        answer:
          "You can contact the CloudBill team through the Contact page. Send your requirement or question using the contact form and the support team can assist you.",
      },
      {
        question: "Can I get help while setting up my account?",
        answer:
          "Yes. If you need assistance with account setup, business details, products, customers or billing, you can contact the CloudBill support team.",
      },
      {
        question: "Where can I find pricing information?",
        answer:
          "You can visit the Pricing page to view the available CloudBill plans and their features.",
      },
    ],
  },
];

function FAQ() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredCategories = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    if (!search) {
      return faqData;
    }

    return faqData
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (item) =>
            item.question.toLowerCase().includes(search) ||
            item.answer.toLowerCase().includes(search)
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [searchText]);

  return (
    <>
      {/* ================= HEADER ================= */}

      <PublicHeader />

      {/* ================= PAGE ================= */}

      <Box
        sx={{
          background: "#ffffff",
          color: "#111827",
          overflow: "hidden",
        }}
      >
        {/* ================= HERO ================= */}

        <Box
          sx={{
            position: "relative",
            py: { xs: 8, md: 11 },
            px: 2,
            background:
              "radial-gradient(circle at 15% 20%, rgba(79,70,229,0.13), transparent 30%), radial-gradient(circle at 85% 70%, rgba(99,102,241,0.10), transparent 30%), #f8faff",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                textAlign: "center",
                mx: "auto",
              }}
            >
              {/* Icon */}

              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                  mb: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "18px",
                  background: "#eef2ff",
                  color: "#4f46e5",
                }}
              >
                <Help sx={{ fontSize: 34 }} />
              </Box>

              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  color: "#4f46e5",
                }}
              >
                CLOUD BILL FAQ
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 38,
                    sm: 46,
                    md: 58,
                  },
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: -1.8,
                  color: "#111827",
                  mb: 2,
                }}
              >
                Frequently Asked Questions
              </Typography>

              <Typography
                sx={{
                  maxWidth: 680,
                  mx: "auto",
                  fontSize: {
                    xs: 15,
                    md: 18,
                  },
                  lineHeight: 1.8,
                  color: "#6b7280",
                }}
              >
                Find answers to common questions about CloudBill,
                billing, invoices, subscriptions and getting started.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* ================= SEARCH ================= */}

        <Box
          sx={{
            mt: { xs: -4, md: -5 },
            position: "relative",
            zIndex: 2,
            px: 2,
          }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1.5, md: 2 },
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                background: "#ffffff",
                boxShadow:
                  "0 15px 40px rgba(17,24,39,0.08)",
              }}
            >
              <TextField
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search your question..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search
                        sx={{
                          color: "#4f46e5",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "11px",
                    background: "#f8fafc",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#e5e7eb",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#a5b4fc",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#4f46e5",
                  },
                }}
              />
            </Paper>
          </Container>
        </Box>

        {/* ================= FAQ CONTENT ================= */}

        <Box
          sx={{
            py: { xs: 8, md: 11 },
            px: 2,
            background: "#ffffff",
          }}
        >
          <Container maxWidth="md">
            {filteredCategories.length === 0 ? (
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  textAlign: "center",
                  border: "1px solid #e5e7eb",
                  borderRadius: "18px",
                  background: "#f8fafc",
                }}
              >
                <Search
                  sx={{
                    fontSize: 42,
                    color: "#9ca3af",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 21,
                    fontWeight: 700,
                    color: "#111827",
                    mb: 1,
                  }}
                >
                  No questions found
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",
                  }}
                >
                  Try searching with a different keyword.
                </Typography>
              </Paper>
            ) : (
              filteredCategories.map((category, categoryIndex) => (
                <Box
                  key={category.category}
                  sx={{
                    mb:
                      categoryIndex ===
                      filteredCategories.length - 1
                        ? 0
                        : 6,
                  }}
                >
                  {/* Category Header */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        minWidth: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        background: "#eef2ff",
                        color: "#4f46e5",
                      }}
                    >
                      {category.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 21,
                          md: 24,
                        },
                        fontWeight: 800,
                        color: "#111827",
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Stack>

                  {/* Questions */}

                  {category.questions.map((item, index) => {
                    const panelId = `${category.category}-${index}`;

                    return (
                      <Accordion
                        key={item.question}
                        expanded={expanded === panelId}
                        onChange={handleAccordionChange(panelId)}
                        disableGutters
                        elevation={0}
                        sx={{
                          mb: 1.5,
                          border:
                            expanded === panelId
                              ? "1px solid #a5b4fc"
                              : "1px solid #e5e7eb",
                          borderRadius:
                            "13px !important",
                          background: "#ffffff",
                          overflow: "hidden",

                          "&:before": {
                            display: "none",
                          },

                          "&:hover": {
                            borderColor: "#c7d2fe",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMore
                              sx={{
                                color: "#4f46e5",
                              }}
                            />
                          }
                          sx={{
                            minHeight: 64,
                            px: {
                              xs: 2,
                              md: 2.5,
                            },

                            "& .MuiAccordionSummary-content":
                              {
                                my: 1.5,
                              },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: 15,
                                md: 16,
                              },
                              fontWeight: 700,
                              color: "#1f2937",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.question}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                          sx={{
                            px: {
                              xs: 2,
                              md: 2.5,
                            },
                            pt: 0,
                            pb: 2.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 14.5,
                              lineHeight: 1.8,
                              color: "#6b7280",
                              maxWidth: 760,
                            }}
                          >
                            {item.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Box>
              ))
            )}
          </Container>
        </Box>

        {/* ================= QUICK HELP ================= */}

        <Box
          sx={{
            py: { xs: 8, md: 10 },
            px: 2,
            background: "#f8fafc",
            borderTop: "1px solid #eef0f4",
            borderBottom: "1px solid #eef0f4",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                maxWidth: 750,
                mx: "auto",
                textAlign: "center",
                mb: 5,
              }}
            >
              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: "#4f46e5",
                }}
              >
                NEED MORE HELP?
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: {
                    xs: 30,
                    md: 38,
                  },
                  fontWeight: 800,
                  letterSpacing: -0.7,
                  color: "#111827",
                }}
              >
                We're Here to Help
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#6b7280",
                }}
              >
                Can't find the answer you're looking for?
                Contact our team and we'll help you with your
                CloudBill questions.
              </Typography>
            </Box>

            <Grid
              container
              spacing={3}
              justifyContent="center"
            >
              {/* Contact */}

              <Grid item xs={12} sm={6} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    background: "#ffffff",
                    transition: "0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c7d2fe",
                      boxShadow:
                        "0 12px 30px rgba(17,24,39,0.07)",
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
                      justifyContent: "center",
                      borderRadius: "13px",
                      background: "#eef2ff",
                      color: "#4f46e5",
                    }}
                  >
                    <EmailOutlined />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#111827",
                        mb: 0.5,
                      }}
                    >
                      Contact Support
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#6b7280",
                      }}
                    >
                      Get help from our support team.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Support */}

              <Grid item xs={12} sm={6} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    background: "#ffffff",
                    transition: "0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c7d2fe",
                      boxShadow:
                        "0 12px 30px rgba(17,24,39,0.07)",
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
                      justifyContent: "center",
                      borderRadius: "13px",
                      background: "#eef2ff",
                      color: "#4f46e5",
                    }}
                  >
                    <SupportAgent />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#111827",
                        mb: 0.5,
                      }}
                    >
                      Product Support
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#6b7280",
                      }}
                    >
                      Get assistance with CloudBill.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ================= FINAL CTA ================= */}

        <Box
          sx={{
            py: { xs: 8, md: 10 },
            px: 2,
            background: "#ffffff",
          }}
        >
          <Container maxWidth="lg">
            <Paper
              elevation={0}
              sx={{
                maxWidth: 1050,
                mx: "auto",
                p: {
                  xs: 4,
                  md: 5,
                },
                borderRadius: "20px",
                border: "1px solid #dfe3eb",
                background:
                  "linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)",
              }}
            >
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} md={7}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: {
                        xs: 24,
                        md: 29,
                      },
                      fontWeight: 800,
                      color: "#111827",
                    }}
                  >
                    Ready to simplify your billing?
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#6b7280",
                      maxWidth: 600,
                    }}
                  >
                    Start using CloudBill and manage your
                    invoices, customers and products from one
                    simple cloud platform.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={1.5}
                    justifyContent={{
                      xs: "stretch",
                      md: "flex-end",
                    }}
                  >
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      onClick={() => navigate("/pricing")}
                      sx={{
                        minHeight: 46,
                        px: 2.5,
                        borderRadius: "9px",
                        textTransform: "none",
                        fontWeight: 700,
                        color: "#4f46e5",
                        borderColor: "#4f46e5",
                        "&:hover": {
                          borderColor: "#3730a3",
                          background: "#eef2ff",
                        },
                      }}
                    >
                      View Pricing
                    </Button>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      onClick={() => navigate("/register")}
                      sx={{
                        minHeight: 46,
                        px: 2.5,
                        borderRadius: "9px",
                        textTransform: "none",
                        fontWeight: 700,
                        background: "#4f46e5",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#3730a3",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Start Free Trial
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      </Box>

      {/* ================= FOOTER ================= */}

      <PublicFooter />
    </>
  );
}

export default FAQ;