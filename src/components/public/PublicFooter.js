import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";

import {
  CloudQueue,
  LinkedIn,
  Facebook,
  Instagram,
  KeyboardArrowRight,
} from "@mui/icons-material";

import "./PublicFooter.css";

function PublicFooter() {
  const navigate = useNavigate();

  /* =========================
     NAVIGATION
  ========================= */

  const goHomeSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <Box className="public-footer">
      <Container maxWidth="xl">

        {/* =========================
            MAIN FOOTER
        ========================= */}

        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 5 }}
          className="footer-grid"
        >

          {/* =========================
              BRAND
          ========================= */}

          <Grid item xs={12} sm={12} md={5}>
            <Box className="footer-brand">

              <Box className="footer-logo-icon">
                <CloudQueue />
              </Box>

              <Typography className="footer-logo">
                Cloud<span>Bill</span>
              </Typography>

            </Box>

            <Typography className="footer-description">
              Powerful cloud billing software designed to
              simplify invoicing, customers, payments and
              everyday business management.
            </Typography>

            {/* SOCIAL MEDIA */}

            <Stack
              direction="row"
              spacing={1}
              className="footer-social"
            >

              <IconButton
                className="footer-social-button"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>

              <IconButton
                className="footer-social-button"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>

              <IconButton
                className="footer-social-button"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>

            </Stack>
          </Grid>


          {/* =========================
              PRODUCT
          ========================= */}

          <Grid item xs={12} sm={4} md={2.3}>
            <Typography className="footer-heading">
              Product
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goHomeSection("features")}
            >
              <KeyboardArrowRight />
              Features
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/pricing")}
            >
              <KeyboardArrowRight />
              Pricing
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goHomeSection("invoicing")}
            >
              <KeyboardArrowRight />
              Invoicing
            </Typography>
          </Grid>


          {/* =========================
              COMPANY
          ========================= */}

          <Grid item xs={12} sm={4} md={2.3}>
            <Typography className="footer-heading">
              Company
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/about")}
            >
              <KeyboardArrowRight />
              About Us
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/contact")}
            >
              <KeyboardArrowRight />
              Contact
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/faq")}
            >
              <KeyboardArrowRight />
              FAQ
            </Typography>
          </Grid>


          {/* =========================
              LEGAL
          ========================= */}

          <Grid item xs={12} sm={4} md={2.3}>
            <Typography className="footer-heading">
              Legal
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/privacy-policy")}
            >
              <KeyboardArrowRight />
              Privacy Policy
            </Typography>

            <Typography
              className="footer-link"
              onClick={() => goToPage("/terms")}
            >
              <KeyboardArrowRight />
              Terms & Conditions
            </Typography>
          </Grid>

        </Grid>


        {/* =========================
            DIVIDER
        ========================= */}

        <Divider className="footer-divider" />


        {/* =========================
            BOTTOM FOOTER
        ========================= */}

        <Box className="footer-bottom">

          <Typography className="footer-copyright">
            © {new Date().getFullYear()} CloudBill.
            All rights reserved.
          </Typography>

          <Typography className="footer-secure">
            <CloudQueue />
            Secure Cloud Billing Platform
          </Typography>

        </Box>

      </Container>
    </Box>
  );
}

export default PublicFooter;