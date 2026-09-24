import React, { useEffect, useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Alert,
  CircularProgress,
  Divider,
} from "@mui/material";

import {
  BusinessOutlined,
  PersonOutline,
  PhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
  ReceiptLongOutlined,
  SaveOutlined,
} from "@mui/icons-material";

import {
  getBusiness,
  saveBusiness,
} from "../../services/businessApi";

const businessTypes = [
  "Retail",
  "Wholesale",
  "Manufacturing",
  "Service",
  "Trading",
  "Restaurant",
  "Freelancer",
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
  "Gujarat",
  "Rajasthan",
  "West Bengal",
  "Other",
];

const BusinessDetails = () => {
  const [formData, setFormData] = useState({
    business_name: "",
    owner_name: "",
    mobile: "",
    email: "",
    address: "",
    gst_number: "",
    pan_number: "",
    business_type: "",
    state: "",
    logo: "",
    invoice_prefix: "INV",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  /*
    Load business details
  */
  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const response = await getBusiness();

        if (response.business) {
          setFormData({
            business_name:
              response.business.business_name || "",

            owner_name:
              response.business.owner_name || "",

            mobile:
              response.business.mobile || "",

            email:
              response.business.email || "",

            address:
              response.business.address || "",

            gst_number:
              response.business.gst_number || "",

            pan_number:
              response.business.pan_number || "",

            business_type:
              response.business.business_type || "",

            state:
              response.business.state || "",

            logo:
              response.business.logo || "",

            invoice_prefix:
              response.business.invoice_prefix || "INV",
          });
        }
      } catch (error) {
        console.error(error);

        setMessage({
          type: "error",
          text:
            error.response?.data?.message ||
            "Failed to load business details.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadBusiness();
  }, []);

  /*
    Input change
  */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
    Save
  */
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    if (
      !formData.business_name.trim() ||
      !formData.owner_name.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim()
    ) {
      setMessage({
        type: "error",
        text:
          "Please fill all required fields.",
      });

      return;
    }

    try {
      setSaving(true);

      const response = await saveBusiness(
        formData
      );

      setMessage({
        type: "success",
        text:
          response.message ||
          "Business details saved successfully.",
      });
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to save business details.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        p: { xs: 2, md: 3 },
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#0F172A",
            mb: 0.5,
          }}
        >
          Business Details
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#64748B",
          }}
        >
          Add and manage your business information
          used for billing and invoices.
        </Typography>
      </Box>

      {/* Message */}
      {message.text && (
        <Alert
          severity={message.type}
          sx={{ mb: 3 }}
          onClose={() =>
            setMessage({
              type: "",
              text: "",
            })
          }
        >
          {message.text}
        </Alert>
      )}

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E2E8F0",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 3 },
            background:
              "linear-gradient(135deg, #EFF6FF, #EEF2FF)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2563EB",
                color: "#fff",
              }}
            >
              <BusinessOutlined />
            </Box>

            <Box>
              <Typography
                fontWeight={700}
                color="#0F172A"
              >
                Business Information
              </Typography>

              <Typography
                variant="body2"
                color="#64748B"
              >
                This information will appear on
                your invoices.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: { xs: 2, md: 4 },
          }}
        >
          {/* Business Information */}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              mb: 2.5,
              color: "#0F172A",
            }}
          >
            Business Information
          </Typography>

          <Grid
            container
            spacing={2.5}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                required
                label="Business Name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Enter business name"
                InputProps={{
                  startAdornment: (
                    <BusinessOutlined
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                required
                label="Owner Name"
                name="owner_name"
                value={formData.owner_name}
                onChange={handleChange}
                placeholder="Enter owner name"
                InputProps={{
                  startAdornment: (
                    <PersonOutline
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                required
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                InputProps={{
                  startAdornment: (
                    <PhoneOutlined
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                required
                type="email"
                label="Business Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter business email"
                InputProps={{
                  startAdornment: (
                    <EmailOutlined
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
              }}
            >
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Business Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete business address"
                InputProps={{
                  startAdornment: (
                    <LocationOnOutlined
                      sx={{
                        mr: 1,
                        mt: 0.5,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>
          </Grid>

          {/* Tax Information */}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              mt: 4,
              mb: 2.5,
              color: "#0F172A",
            }}
          >
            Tax & Business Information
          </Typography>

          <Grid
            container
            spacing={2.5}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                label="GST Number"
                name="gst_number"
                value={formData.gst_number}
                onChange={handleChange}
                placeholder="Enter GST number"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                label="PAN Number"
                name="pan_number"
                value={formData.pan_number}
                onChange={handleChange}
                placeholder="Enter PAN number"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                select
                fullWidth
                label="Business Type"
                name="business_type"
                value={formData.business_type}
                onChange={handleChange}
              >
                {businessTypes.map(
                  (type) => (
                    <MenuItem
                      key={type}
                      value={type}
                    >
                      {type}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                select
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                {states.map(
                  (state) => (
                    <MenuItem
                      key={state}
                      value={state}
                    >
                      {state}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Grid>
          </Grid>

          {/* Invoice Settings */}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              mt: 4,
              mb: 2.5,
              color: "#0F172A",
            }}
          >
            Invoice Settings
          </Typography>

          <Grid
            container
            spacing={2.5}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <TextField
                fullWidth
                label="Invoice Prefix"
                name="invoice_prefix"
                value={formData.invoice_prefix}
                onChange={handleChange}
                placeholder="INV"
                helperText="Example: INV-1001"
                InputProps={{
                  startAdornment: (
                    <ReceiptLongOutlined
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
              }}
            >
              <TextField
                fullWidth
                label="Logo URL"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                placeholder="Enter logo URL"
                helperText="Logo upload can be added with cloud storage later."
              />
            </Grid>
          </Grid>

          {/* Save */}

          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={saving}
              startIcon={
                saving ? (
                  <CircularProgress
                    size={18}
                    color="inherit"
                  />
                ) : (
                  <SaveOutlined />
                )
              }
              sx={{
                minWidth: 180,
                py: 1.3,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #2563EB, #4F46E5)",
                boxShadow:
                  "0 8px 20px rgba(37, 99, 235, 0.20)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1D4ED8, #4338CA)",
                },
              }}
            >
              {saving
                ? "Saving..."
                : "Save Business Details"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BusinessDetails;