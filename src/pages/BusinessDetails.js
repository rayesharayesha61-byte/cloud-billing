import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,

  Alert,
} from "@mui/material";
import {
  Business,
  CloudUpload,
  ArrowForward,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./BusinessDetails.css";

const businessTypes = [
  "Retail",
  "Wholesale",
  "Manufacturing",
  "Service",
  "Restaurant",
  "Supermarket",
  "Pharmacy",
  "Other",
];

const states = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Delhi",
  "Other",
];

function BusinessDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    mobile: "",
    email: "",
    address: "",
    gstNumber: "",
    panNumber: "",
    businessType: "",
    state: "",
    invoicePrefix: "INV",
  });

  const [logo, setLogo] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogo(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.businessName ||
      !formData.ownerName ||
      !formData.mobile ||
      !formData.email ||
      !formData.address ||
      !formData.businessType ||
      !formData.state
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");

    // Temporary local storage
    localStorage.setItem(
      "businessDetails",
      JSON.stringify(formData)
    );

    if (logo) {
      localStorage.setItem("businessLogo", logo.name);
    }

    // Continue to dashboard
    navigate("/trial-activation");
  };

  return (
    <Box className="business-page">
      <Container maxWidth="md">

        <Box className="business-header">
          <Box className="brand-icon">
            <Business />
          </Box>

          <Typography className="business-title">
            Set Up Your Business
          </Typography>

          <Typography className="business-subtitle">
            Tell us about your business to get started with Cloud Billing
          </Typography>
        </Box>

        <Paper className="business-card" elevation={0}>

          {error && (
            <Alert severity="error" className="business-alert">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>

            {/* Business Information */}
            <Typography className="form-section-title">
              Business Information
            </Typography>

            <Grid container spacing={2.5}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Name *"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="ABC Traders"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Owner Name *"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="John Kumar"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mobile Number *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  inputProps={{
                    maxLength: 10,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="business@example.com"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Business Address *"
                  name="address"
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete business address"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Business Type *"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  {businessTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="State *"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

            </Grid>

            {/* Tax Information */}
            <Typography className="form-section-title tax-title">
              Tax Information
            </Typography>

            <Grid container spacing={2.5}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="GST Number"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  placeholder="22AAAAA0000A1Z5"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="PAN Number"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  placeholder="AAAAA0000A"
                />
              </Grid>

            </Grid>

            {/* Invoice Settings */}
            <Typography className="form-section-title tax-title">
              Invoice Settings
            </Typography>

            <Grid container spacing={2.5}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Invoice Prefix"
                  name="invoicePrefix"
                  value={formData.invoicePrefix}
                  onChange={handleChange}
                  placeholder="INV"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Box className="logo-upload">

                  <input
                    type="file"
                    accept="image/*"
                    id="business-logo"
                    hidden
                    onChange={handleLogo}
                  />

                  <label htmlFor="business-logo">
                    <Button
                      component="span"
                      variant="outlined"
                      startIcon={<CloudUpload />}
                    >
                      Upload Logo
                    </Button>
                  </label>

                  {logo && (
                    <Typography className="logo-name">
                      {logo.name}
                    </Typography>
                  )}

                </Box>
              </Grid>

            </Grid>

            {/* Submit */}
            <Box className="submit-area">

              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForward />}
                className="continue-button"
              >
                Save & Continue
              </Button>

            </Box>

          </form>
        </Paper>

        <Typography className="trial-note">
          🎉 Your free trial will start after completing your business setup.
        </Typography>

      </Container>
    </Box>
  );
}

export default BusinessDetails;