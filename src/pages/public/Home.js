import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  ArrowForward,
  CheckCircle,
  ExpandMore,
  ReceiptLong,
  AutoGraph,
  Payments,
  PeopleAlt,
  Inventory2,
  Security,
  CloudDone,
  PhoneAndroid,
  SettingsSuggest,
  Language,
  Tune,
  Bolt,
  IntegrationInstructions,
  Description,
  SupportAgent,
  Verified,
  TrendingUp,
  BusinessCenter,
  AccountBalance,
  Calculate,
  Dashboard,
} from "@mui/icons-material";

import "./Home.css";

import PublicHeader from "../../components/public/PublicHeader";
import PublicFooter from "../../components/public/PublicFooter";
const features = [
  {
    icon: <Inventory2 />,
    title: "Easy Product Management",
    text:
      "Manage products, services, prices, taxes, stock details and customer-ready pricing from one simple catalog.",
  },
  {
    icon: <ReceiptLong />,
    title: "Efficient Billing Processes",
    text:
      "Create professional quotations and invoices quickly with GST-ready calculations, PDF generation and payment tracking.",
  },
  {
    icon: <Payments />,
    title: "Convenient Payment Handling",
    text:
      "Track payments, pending amounts and payment status while keeping your billing workflow organized.",
  },
  {
    icon: <PeopleAlt />,
    title: "Manage Customer Lifecycle",
    text:
      "Keep customer information, billing history, outstanding payments and transactions together in one place.",
  },
  {
    icon: <AutoGraph />,
    title: "Powerful Business Insights",
    text:
      "Understand sales, revenue, receivables and business performance through simple and useful reports.",
  },
];

const businessTypes = [
  "Retail Businesses",
  "Service Businesses",
  "Consulting Services",
  "Marketing Agencies",
  "Educational Institutions",
  "SaaS Businesses",
  "Small Businesses",
  "Growing Enterprises",
];

const benefits = [
  {
    icon: <Verified />,
    title: "GST Ready",
    text: "Create GST-ready invoices with organized tax information.",
  },
  {
    icon: <Tune />,
    title: "Flexible",
    text: "Configure products, customers, invoices and billing preferences.",
  },
  {
    icon: <Language />,
    title: "Business Ready",
    text: "Designed to support different business types and billing workflows.",
  },
  {
    icon: <SettingsSuggest />,
    title: "Customization",
    text: "Build a billing workflow that matches your business process.",
  },
  {
    icon: <Bolt />,
    title: "Automation",
    text: "Reduce repetitive billing work and save valuable time.",
  },
  {
    icon: <CloudDone />,
    title: "Cloud Based",
    text: "Access your billing information whenever you need it.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹299",
    description: "For small businesses getting started with digital billing.",
    features: [
      "50 invoices / month",
      "Product management",
      "Customer management",
      "Basic reports",
      "PDF invoices",
    ],
  },
  {
    name: "Professional",
    price: "₹599",
    description: "For growing businesses that need advanced billing workflows.",
    popular: true,
    features: [
      "Unlimited invoices",
      "Advanced reports",
      "Product management",
      "Customer management",
      "PDF invoices",
      "Payment tracking",
    ],
  },
  {
    name: "Business",
    price: "₹999",
    description: "For businesses requiring a complete billing solution.",
    features: [
      "Unlimited invoices",
      "Advanced analytics",
      "Customer management",
      "Payment tracking",
      "GST-ready billing",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    question: "Is CloudBill suitable for small businesses?",
    answer:
      "Yes. CloudBill is designed for small businesses as well as growing organizations that need a simple cloud-based billing workflow.",
  },
  {
    question: "Can I create GST invoices?",
    answer:
      "Yes. CloudBill is designed to support GST-ready invoice creation with customer, product, tax and billing information.",
  },
  {
    question: "Can I download invoices as PDF?",
    answer:
      "Yes. Created invoices can be generated in a professional PDF format for sharing and record keeping.",
  },
  {
    question: "Can I manage customers and products?",
    answer:
      "Yes. CloudBill provides dedicated workflows for managing customers, products and billing information.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. CloudBill provides a 30-day free trial so businesses can explore the billing workflow before choosing a plan.",
  },
  {
    question: "Can I track payments?",
    answer:
      "Yes. Payment status and outstanding billing information can be tracked from your billing workflow.",
  },
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <Box className="cloudbill-home">
  <PublicHeader />
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="cb-hero">
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            alignItems="center"
            className="cb-hero-grid"
          >
            <Grid item xs={12} md={6}>
              <div className="cb-hero-content">

                <Chip
                  icon={<CheckCircle />}
                  label="GST-ready cloud billing software"
                  className="cb-hero-chip"
                />

                <Typography
                  component="h1"
                  className="cb-hero-title"
                >
                  Simple Online Billing Software
                  <span> for Every Business</span>
                </Typography>

                <Typography className="cb-hero-description">
                  Create invoices, manage customers, track payments and
                  understand your business with powerful cloud billing
                  software designed for modern businesses.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  className="cb-hero-buttons"
                >
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    endIcon={<ArrowForward />}
                    className="cb-primary-btn"
                  >
                    Start Free Trial
                  </Button>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    className="cb-secondary-btn"
                  >
                    Request a Demo
                  </Button>
                </Stack>

                <div className="cb-trial-note">
                  <CheckCircle />
                  <span>30-day free trial • No complicated setup</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="cb-dashboard-wrapper">

                <div className="cb-dashboard-glow" />

                <Card className="cb-dashboard-card">
                  <div className="cb-dashboard-top">
                    <div>
                      <span className="cb-small-label">
                        CLOUD BILL
                      </span>

                      <Typography variant="h6">
                        Business Overview
                      </Typography>
                    </div>

                    <div className="cb-dashboard-icon">
                      <Dashboard />
                    </div>
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <div className="cb-stat-card">
                        <span>Total Revenue</span>
                        <strong>₹4,82,500</strong>
                        <small>+18.6%</small>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className="cb-stat-card">
                        <span>Invoices</span>
                        <strong>1,248</strong>
                        <small>+12.4%</small>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className="cb-stat-card">
                        <span>Customers</span>
                        <strong>384</strong>
                        <small>+9.2%</small>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className="cb-stat-card">
                        <span>Pending</span>
                        <strong>₹38,450</strong>
                        <small>12 invoices</small>
                      </div>
                    </Grid>
                  </Grid>

                  <div className="cb-chart">
                    <div className="cb-chart-heading">
                      <span>Revenue Overview</span>
                      <span>Last 6 Months</span>
                    </div>

                    <div className="cb-bars">
                      <span style={{ height: "38%" }} />
                      <span style={{ height: "54%" }} />
                      <span style={{ height: "46%" }} />
                      <span style={{ height: "68%" }} />
                      <span style={{ height: "60%" }} />
                      <span style={{ height: "86%" }} />
                      <span style={{ height: "74%" }} />
                      <span style={{ height: "94%" }} />
                    </div>
                  </div>

                  <div className="cb-dashboard-footer">
                    <div>
                      <CheckCircle />
                      GST-ready invoices
                    </div>

                    <div>
                      <CloudDone />
                      Cloud secured
                    </div>
                  </div>
                </Card>

              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* =========================================================
          BUSINESS TYPES
      ========================================================= */}

      <section className="cb-business-section">
        <Container maxWidth="xl">

          <Typography className="cb-section-overline">
            BUILT FOR MODERN BUSINESSES
          </Typography>

          <Typography className="cb-section-title center">
            One billing platform for every business
          </Typography>

          <Typography className="cb-section-description center">
            From small businesses to growing enterprises, CloudBill helps
            simplify everyday billing and financial operations.
          </Typography>

          <div className="cb-business-grid">
            {businessTypes.map((item, index) => (
              <div className="cb-business-item" key={index}>
                <CheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* =========================================================
          CORE FEATURES
      ========================================================= */}

      <section className="cb-features-section">
        <Container maxWidth="xl">

          <div className="cb-section-heading">
            <Typography className="cb-section-overline">
              POWERFUL BILLING
            </Typography>

            <Typography className="cb-section-title">
              Master your billing.
              <span> Grow your business.</span>
            </Typography>

            <Typography className="cb-section-description">
              Everything you need to manage products, invoices, customers,
              payments and business reports from one connected platform.
            </Typography>
          </div>

          <div className="cb-feature-list">

            {features.map((feature, index) => (
              <div
                className={`cb-feature-row ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
                key={index}
              >

                <div className="cb-feature-content">

                  <div className="cb-feature-icon">
                    {feature.icon}
                  </div>

                  <Typography className="cb-feature-number">
                    0{index + 1}
                  </Typography>

                  <Typography className="cb-feature-title">
                    {feature.title}
                  </Typography>

                  <Typography className="cb-feature-text">
                    {feature.text}
                  </Typography>

                  <Link to="/features" className="cb-feature-link">
                    Explore feature
                    <ArrowForward />
                  </Link>

                </div>

                <div className="cb-feature-visual">
                  {index === 0 && (
                    <div className="cb-product-preview">
                      <div className="preview-header">
                        <span>Products</span>
                        <button>+ Add Product</button>
                      </div>

                      {["Office Chair", "Laptop Stand", "Premium Desk"].map(
                        (product, i) => (
                          <div className="preview-row" key={i}>
                            <div className="preview-product-icon">
                              <Inventory2 />
                            </div>

                            <div>
                              <strong>{product}</strong>
                              <small>Available product</small>
                            </div>

                            <b>₹{[4500, 2200, 7800][i]}</b>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="cb-invoice-preview">
                      <div className="invoice-head">
                        <div>
                          <strong>INVOICE</strong>
                          <span>#CB-2026-1048</span>
                        </div>

                        <CheckCircle />
                      </div>

                      <div className="invoice-customer">
                        <span>Bill To</span>
                        <strong>ABC Enterprises</strong>
                        <small>Chennai, Tamil Nadu</small>
                      </div>

                      <Divider />

                      <div className="invoice-item">
                        <span>Professional Service</span>
                        <b>₹25,000</b>
                      </div>

                      <div className="invoice-item">
                        <span>GST</span>
                        <b>₹4,500</b>
                      </div>

                      <div className="invoice-total">
                        <span>Total</span>
                        <strong>₹29,500</strong>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="cb-payment-preview">
                      <div className="payment-icon">
                        <Payments />
                      </div>

                      <strong>Payment Received</strong>

                      <Typography>
                        ₹48,500
                      </Typography>

                      <span>
                        Transaction completed successfully
                      </span>

                      <div className="payment-status">
                        <CheckCircle />
                        Paid
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="cb-customer-preview">
                      <div className="customer-top">
                        <PeopleAlt />
                        <div>
                          <strong>Customer Management</strong>
                          <span>384 active customers</span>
                        </div>
                      </div>

                      <div className="customer-stat-grid">
                        <div>
                          <small>Total</small>
                          <strong>384</strong>
                        </div>

                        <div>
                          <small>Active</small>
                          <strong>352</strong>
                        </div>

                        <div>
                          <small>Pending</small>
                          <strong>32</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 4 && (
                    <div className="cb-report-preview">
                      <div className="report-top">
                        <div>
                          <span>Business Report</span>
                          <strong>₹8.42L</strong>
                        </div>

                        <TrendingUp />
                      </div>

                      <div className="report-chart">
                        <span style={{ height: "40%" }} />
                        <span style={{ height: "56%" }} />
                        <span style={{ height: "48%" }} />
                        <span style={{ height: "72%" }} />
                        <span style={{ height: "65%" }} />
                        <span style={{ height: "90%" }} />
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* =========================================================
          GST SECTION
      ========================================================= */}

      <section className="cb-gst-section">
        <Container maxWidth="xl">

          <div className="cb-gst-card">

            <div className="cb-gst-content">

              <Chip
                icon={<Verified />}
                label="GST READY"
                className="cb-gst-chip"
              />

              <Typography className="cb-gst-title">
                Go digital with
                <span> GST-ready invoicing</span>
              </Typography>

              <Typography className="cb-gst-text">
                Create professional invoices with clear tax information,
                customer details and business information while keeping
                your billing process organized.
              </Typography>

              <Stack spacing={2} className="cb-check-list">

                <div>
                  <CheckCircle />
                  GST-ready invoice format
                </div>

                <div>
                  <CheckCircle />
                  Clear tax calculations
                </div>

                <div>
                  <CheckCircle />
                  Professional PDF invoices
                </div>

                <div>
                  <CheckCircle />
                  Easy invoice sharing
                </div>

              </Stack>

              <Button
                component={Link}
                to="/features"
                endIcon={<ArrowForward />}
                className="cb-white-btn"
              >
                Explore Billing Features
              </Button>

            </div>

            <div className="cb-gst-visual">

              <div className="cb-gst-invoice">
                <div className="gst-invoice-top">
                  <div>
                    <small>TAX INVOICE</small>
                    <strong>CLOUDBILL</strong>
                  </div>

                  <div className="gst-verified">
                    <CheckCircle />
                    GST READY
                  </div>
                </div>

                <Divider />

                <div className="gst-business">
                  <span>Invoice To</span>
                  <strong>ABC Technologies</strong>
                  <small>GSTIN: 33ABCDE1234F1Z5</small>
                </div>

                <div className="gst-table">
                  <div>
                    <span>Professional Service</span>
                    <b>₹25,000</b>
                  </div>

                  <div>
                    <span>CGST</span>
                    <b>₹2,250</b>
                  </div>

                  <div>
                    <span>SGST</span>
                    <b>₹2,250</b>
                  </div>
                </div>

                <div className="gst-total">
                  <span>Total Amount</span>
                  <strong>₹29,500</strong>
                </div>
              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =========================================================
          BUSINESS EXPERIENCE
      ========================================================= */}

      <section className="cb-experience-section">
        <Container maxWidth="xl">

          <div className="cb-section-heading center-heading">

            <Typography className="cb-section-overline">
              CUSTOMER EXPERIENCE
            </Typography>

            <Typography className="cb-section-title">
              Strengthen your brand.
              <span> Build lasting relationships.</span>
            </Typography>

            <Typography className="cb-section-description">
              Give customers a professional billing experience from invoice
              creation to payment and communication.
            </Typography>

          </div>

          <Grid container spacing={3}>

            <Grid item xs={12} md={4}>
              <Card className="cb-experience-card">
                <div className="experience-icon">
                  <PeopleAlt />
                </div>

                <Typography>
                  Customer Management
                </Typography>

                <p>
                  Keep customer information, transactions and billing history
                  organized in one place.
                </p>

                <div className="experience-mini-ui">
                  <span>Active Customers</span>
                  <strong>384</strong>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="cb-experience-card">
                <div className="experience-icon">
                  <Description />
                </div>

                <Typography>
                  Professional Invoices
                </Typography>

                <p>
                  Create clean, professional invoices that are easy to
                  understand and share.
                </p>

                <div className="experience-mini-ui">
                  <span>Invoices This Month</span>
                  <strong>248</strong>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="cb-experience-card">
                <div className="experience-icon">
                  <Payments />
                </div>

                <Typography>
                  Easy Payments
                </Typography>

                <p>
                  Keep payment records organized and easily identify paid
                  and outstanding invoices.
                </p>

                <div className="experience-mini-ui">
                  <span>Collected</span>
                  <strong>₹4.82L</strong>
                </div>
              </Card>
            </Grid>

          </Grid>

        </Container>
      </section>

      {/* =========================================================
          MOBILE
      ========================================================= */}

      <section className="cb-mobile-section">

        <Container maxWidth="xl">

          <Grid
            container
            spacing={6}
            alignItems="center"
          >

            <Grid item xs={12} md={6}>

              <div className="cb-mobile-device">

                <div className="mobile-notch" />

                <div className="mobile-screen">

                  <div className="mobile-app-head">
                    <div>
                      <small>CloudBill</small>
                      <strong>Dashboard</strong>
                    </div>

                    <Dashboard />
                  </div>

                  <div className="mobile-revenue">
                    <small>Total Revenue</small>
                    <strong>₹4,82,500</strong>
                    <span>
                      <TrendingUp />
                      18.6%
                    </span>
                  </div>

                  <div className="mobile-cards">
                    <div>
                      <ReceiptLong />
                      <strong>248</strong>
                      <small>Invoices</small>
                    </div>

                    <div>
                      <PeopleAlt />
                      <strong>384</strong>
                      <small>Customers</small>
                    </div>
                  </div>

                  <div className="mobile-chart">
                    <span style={{ height: "35%" }} />
                    <span style={{ height: "58%" }} />
                    <span style={{ height: "46%" }} />
                    <span style={{ height: "74%" }} />
                    <span style={{ height: "62%" }} />
                    <span style={{ height: "88%" }} />
                  </div>

                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6}>

              <Typography className="cb-section-overline">
                BILLING ON THE GO
              </Typography>

              <Typography className="cb-section-title">
                Your billing.
                <span> Anywhere, anytime.</span>
              </Typography>

              <Typography className="cb-section-description">
                Access your billing information, customers, invoices and
                business insights whenever you need them.
              </Typography>

              <div className="cb-mobile-points">

                <div>
                  <PhoneAndroid />
                  <div>
                    <strong>Mobile friendly</strong>
                    <span>Works smoothly across mobile devices.</span>
                  </div>
                </div>

                <div>
                  <CloudDone />
                  <div>
                    <strong>Cloud access</strong>
                    <span>Keep your billing data available online.</span>
                  </div>
                </div>

                <div>
                  <Security />
                  <div>
                    <strong>Secure workflow</strong>
                    <span>Designed with business data protection in mind.</span>
                  </div>
                </div>

              </div>

            </Grid>

          </Grid>

        </Container>

      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="cb-benefits-section">
        <Container maxWidth="xl">

          <div className="cb-section-heading center-heading">

            <Typography className="cb-section-overline">
              WHY CLOUDBILL
            </Typography>

            <Typography className="cb-section-title">
              Billing made
              <span> simpler and smarter</span>
            </Typography>

          </div>

          <div className="cb-benefits-grid">

            {benefits.map((benefit, index) => (
              <div className="cb-benefit-card" key={index}>

                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <Typography>
                  {benefit.title}
                </Typography>

                <p>
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="cb-testimonial-section">

        <Container maxWidth="lg">

          <Typography className="cb-section-overline center-text">
            CUSTOMER STORIES
          </Typography>

          <Typography className="cb-section-title center">
            Built for businesses that
            <span> want simpler billing</span>
          </Typography>

          <div className="cb-testimonial-card">

            <div className="quote-mark">“</div>

            <Typography className="testimonial-text">
              CloudBill gives our team a much simpler way to manage
              invoices, customers and payment information. Everything
              is organized in one place.
            </Typography>

            <Divider />

            <div className="testimonial-user">
              <div className="testimonial-avatar">
                MK
              </div>

              <div>
                <strong>Business Customer</strong>
                <span>CloudBill User</span>
              </div>
            </div>

          </div>

        </Container>

      </section>

      {/* =========================================================
          INTEGRATIONS
      ========================================================= */}

      <section className="cb-integration-section">

        <Container maxWidth="xl">

          <div className="cb-integration-card">

            <div>

              <Typography className="cb-section-overline">
                CONNECT YOUR WORKFLOW
              </Typography>

              <Typography className="cb-section-title">
                Bring your billing
                <span> workflow together</span>
              </Typography>

              <Typography className="cb-section-description">
                CloudBill is designed to fit naturally into your existing
                business workflow and help keep billing operations connected.
              </Typography>

              <Button
                component={Link}
                to="/contact"
                endIcon={<ArrowForward />}
                className="cb-primary-btn"
              >
                Talk to Our Team
              </Button>

            </div>

            <div className="cb-integrations-grid">

              {[
                { icon: <BusinessCenter />, name: "CRM" },
                { icon: <AccountBalance />, name: "Accounting" },
                { icon: <Payments />, name: "Payments" },
                { icon: <Calculate />, name: "GST" },
                { icon: <Description />, name: "Invoices" },
                { icon: <IntegrationInstructions />, name: "Apps" },
              ].map((item, index) => (
                <div className="integration-item" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}

            </div>

          </div>

        </Container>

      </section>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <section className="cb-pricing-section">

        <Container maxWidth="xl">

          <div className="cb-section-heading center-heading">

            <Typography className="cb-section-overline">
              SIMPLE PRICING
            </Typography>

            <Typography className="cb-section-title">
              Plans that grow
              <span> with your business</span>
            </Typography>

            <Typography className="cb-section-description">
              Start with a 30-day free trial and choose a plan that fits
              your business requirements.
            </Typography>

          </div>

          <div className="cb-pricing-grid">

            {pricingPlans.map((plan, index) => (

              <Card
                className={`cb-pricing-card ${
                  plan.popular ? "popular" : ""
                }`}
                key={index}
              >

                {plan.popular && (
                  <div className="popular-label">
                    MOST POPULAR
                  </div>
                )}

                <Typography className="pricing-name">
                  {plan.name}
                </Typography>

                <div className="pricing-price">
                  <strong>{plan.price}</strong>
                  <span>/ month</span>
                </div>

                <p className="pricing-description">
                  {plan.description}
                </p>

                <Divider />

                <div className="pricing-features">

                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <CheckCircle />
                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                <Button
                  component={Link}
                  to="/register"
                  fullWidth
                  className={
                    plan.popular
                      ? "cb-primary-btn"
                      : "cb-outline-btn"
                  }
                >
                  Start Free Trial
                </Button>

              </Card>

            ))}

          </div>

          <Typography className="pricing-note">
            All plans include a 30-day free trial.
          </Typography>

        </Container>

      </section>

      {/* =========================================================
          SUPPORT
      ========================================================= */}

      <section className="cb-support-section">

        <Container maxWidth="lg">

          <div className="cb-support-card">

            <div className="support-icon">
              <SupportAgent />
            </div>

            <Typography className="support-title">
              Need help getting started?
            </Typography>

            <Typography className="support-text">
              Our team is ready to help you understand CloudBill and
              choose the right billing workflow for your business.
            </Typography>

            <Button
              component={Link}
              to="/contact"
              endIcon={<ArrowForward />}
              className="cb-white-btn"
            >
              Contact Us
            </Button>

          </div>

        </Container>

      </section>

      {/* =========================================================
          SECURITY
      ========================================================= */}

      <section className="cb-security-section">

        <Container maxWidth="xl">

          <Grid
            container
            spacing={5}
            alignItems="center"
          >

            <Grid item xs={12} md={6}>

              <Typography className="cb-section-overline">
                SECURITY & PRIVACY
              </Typography>

              <Typography className="cb-section-title">
                Your business data.
                <span> Our priority.</span>
              </Typography>

              <Typography className="cb-section-description">
                CloudBill is designed to provide a secure and reliable
                environment for managing business billing information.
              </Typography>

              <div className="security-points">

                <div>
                  <Security />
                  <span>Secure cloud-based access</span>
                </div>

                <div>
                  <Verified />
                  <span>Business-focused data protection</span>
                </div>

                <div>
                  <CloudDone />
                  <span>Reliable online billing workflow</span>
                </div>

              </div>

            </Grid>

            <Grid item xs={12} md={6}>

              <div className="cb-security-visual">

                <div className="security-lock">
                  <Security />
                </div>

                <Typography>
                  Protected Billing Environment
                </Typography>

                <div className="security-line">
                  <CheckCircle />
                  Secure Access
                </div>

                <div className="security-line">
                  <CheckCircle />
                  Cloud Based
                </div>

                <div className="security-line">
                  <CheckCircle />
                  Business Data Protection
                </div>

              </div>

            </Grid>

          </Grid>

        </Container>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="cb-faq-section">

        <Container maxWidth="md">

          <div className="cb-section-heading center-heading">

            <Typography className="cb-section-overline">
              FAQ
            </Typography>

            <Typography className="cb-section-title">
              Have questions?
              <span> We have answers.</span>
            </Typography>

          </div>

          <div className="cb-faq-list">

            {faqs.map((faq, index) => (

              <Accordion
                key={index}
                expanded={faqOpen === index}
                onChange={() =>
                  setFaqOpen(
                    faqOpen === index ? null : index
                  )
                }
                className="cb-faq-item"
              >

                <AccordionSummary
                  expandIcon={<ExpandMore />}
                >
                  <Typography>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>

              </Accordion>

            ))}

          </div>

        </Container>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="cb-final-cta">

        <Container maxWidth="lg">

          <div className="cb-final-card">

            <div className="final-shape shape-one" />
            <div className="final-shape shape-two" />

            <Typography className="final-overline">
              START TODAY
            </Typography>

            <Typography className="final-title">
              Make billing simple.
              <br />
              Grow with CloudBill.
            </Typography>

            <Typography className="final-text">
              Start your 30-day free trial and experience a simpler
              way to manage your business billing.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >

          <div className="cb-hero-buttons">
  <Button
    component={Link}
    to="/register"
    endIcon={<ArrowForward />}
    className="cb-white-btn large"
  >
    Start Free Trial
  </Button>

  <Button
    component={Link}
    to="/contact"
    className="cb-transparent-btn"
  >
    Request a Demo
  </Button>
</div>

            </Stack>

          </div>

        </Container>

      </section>

      <PublicFooter />
    </Box>
  );
}

export default Home;