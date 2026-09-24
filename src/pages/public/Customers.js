import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";

import {
  Add,
  Search,
  Edit,
  Delete,
  People,
  Email,
  Phone,
  Close,
} from "@mui/icons-material";

const initialCustomers = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@gmail.com",
    phone: "9876543210",
    company: "Arun Traders",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9876501234",
    company: "Priya Enterprises",
    status: "Active",
  },
  {
    id: 3,
    name: "Karthik Raj",
    email: "karthik@gmail.com",
    phone: "9988776655",
    company: "KR Solutions",
    status: "Inactive",
  },
];

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddCustomer = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company
    ) {
      return;
    }

    const newCustomer = {
      id: customers.length + 1,
      ...formData,
      status: "Active",
    };

    setCustomers([...customers, newCustomer]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });

    setOpen(false);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.phone} ${customer.company}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFC",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              mb: 0.5,
            }}
          >
            Customers
          </Typography>

          <Typography sx={{ color: "#64748B" }}>
            Manage your customers and their details
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#4F46E5",
            color: "#FFFFFF",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 2,
            px: 3,
            py: 1.3,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#4338CA",
              boxShadow: "none",
            },
          }}
        >
          Add Customer
        </Button>
      </Box>

      {/* Summary Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          mb: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: "1px solid #E2E8F0",
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              sx={{
                backgroundColor: "#EEF2FF",
                color: "#4F46E5",
              }}
            >
              <People />
            </Avatar>

            <Box>
              <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                Total Customers
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#0F172A" }}
              >
                {customers.length}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: "1px solid #E2E8F0",
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography sx={{ color: "#64748B", fontSize: 14 }}>
            Active Customers
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#16A34A", mt: 1 }}
          >
            {customers.filter((customer) => customer.status === "Active")
              .length}
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: "1px solid #E2E8F0",
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography sx={{ color: "#64748B", fontSize: 14 }}>
            Inactive Customers
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#DC2626", mt: 1 }}
          >
            {customers.filter((customer) => customer.status === "Inactive")
              .length}
          </Typography>
        </Paper>
      </Box>

      {/* Customers List */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E2E8F0",
          borderRadius: 3,
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#0F172A" }}
          >
            Customer List
          </Typography>

          <TextField
            size="small"
            placeholder="Search customers..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            sx={{
              width: { xs: "100%", sm: 280 },
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#64748B" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Divider />

        {filteredCustomers.length === 0 ? (
          <Box sx={{ p: 5, textAlign: "center" }}>
            <Typography sx={{ color: "#64748B" }}>
              No customers found
            </Typography>
          </Box>
        ) : (
          <Box sx={{ overflowX: "auto" }}>
            {filteredCustomers.map((customer) => (
              <Box
                key={customer.id}
                sx={{
                  minWidth: { xs: 650, md: "auto" },
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1.3fr 1.5fr 1.2fr 1.2fr 0.8fr 100px",
                  },
                  alignItems: "center",
                  gap: 2,
                  px: 3,
                  py: 2.5,
                  borderBottom: "1px solid #F1F5F9",
                  "&:hover": {
                    backgroundColor: "#F8FAFC",
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    sx={{
                      backgroundColor: "#EEF2FF",
                      color: "#4F46E5",
                      fontWeight: 700,
                    }}
                  >
                    {customer.name.charAt(0).toUpperCase()}
                  </Avatar>

                  <Box>
                    <Typography
                      sx={{ fontWeight: 600, color: "#0F172A" }}
                    >
                      {customer.name}
                    </Typography>

                    <Typography
                      sx={{ fontSize: 13, color: "#64748B" }}
                    >
                      {customer.company}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Email sx={{ fontSize: 18, color: "#64748B" }} />
                  <Typography sx={{ color: "#475569", fontSize: 14 }}>
                    {customer.email}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone sx={{ fontSize: 18, color: "#64748B" }} />
                  <Typography sx={{ color: "#475569", fontSize: 14 }}>
                    {customer.phone}
                  </Typography>
                </Stack>

                <Typography sx={{ color: "#475569", fontSize: 14 }}>
                  {customer.company}
                </Typography>

                <Chip
                  label={customer.status}
                  size="small"
                  sx={{
                    width: "fit-content",
                    backgroundColor:
                      customer.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                    color:
                      customer.status === "Active" ? "#166534" : "#991B1B",
                    fontWeight: 600,
                  }}
                />

                <Stack direction="row" spacing={0.5}>
                  <IconButton
                    size="small"
                    sx={{
                      color: "#4F46E5",
                      "&:hover": {
                        backgroundColor: "#EEF2FF",
                      },
                    }}
                  >
                    <Edit fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() => handleDelete(customer.id)}
                    sx={{
                      color: "#DC2626",
                      "&:hover": {
                        backgroundColor: "#FEE2E2",
                      },
                    }}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            ))}
          </Box>
        )}
      </Paper>

      {/* Add Customer Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 700,
          }}
        >
          Add Customer

          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Customer Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              color: "#64748B",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleAddCustomer}
            sx={{
              backgroundColor: "#4F46E5",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#4338CA",
              },
            }}
          >
            Save Customer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Customers;