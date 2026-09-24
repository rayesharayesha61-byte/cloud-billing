import React from "react";

import {
  Box,
  Grid,
  Paper,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  TrendingUp,
  ReceiptLong,
  People,
  AccountBalanceWallet,
} from "@mui/icons-material";

const cards = [
  {
    title: "Total Sales",
    value: "₹1,25,450",
    change: "+12.5%",
    icon: <TrendingUp />,
  },
  {
    title: "Invoices",
    value: "248",
    change: "+8.2%",
    icon: <ReceiptLong />,
  },
  {
    title: "Customers",
    value: "156",
    change: "+5.4%",
    icon: <People />,
  },
  {
    title: "Outstanding",
    value: "₹32,800",
    change: "Pending",
    icon: <AccountBalanceWallet />,
  },
];

const Dashboard = () => {
  const invoices = [
    {
      number: "INV-1001",
      customer: "ABC Traders",
      amount: "₹12,500",
      status: "Paid",
    },
    {
      number: "INV-1002",
      customer: "RK Enterprises",
      amount: "₹8,750",
      status: "Pending",
    },
    {
      number: "INV-1003",
      customer: "Sri Stores",
      amount: "₹15,200",
      status: "Paid",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 1 }}
      >
        Dashboard
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Welcome back. Here is your business overview.
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={card.title}
          >
            <Paper
              sx={{
                p: 2.5,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  color="text.secondary"
                >
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    color: "primary.main",
                  }}
                >
                  {card.icon}
                </Box>
              </Box>

              <Typography
                variant="h5"
                fontWeight={700}
              >
                {card.value}
              </Typography>

              <Typography
                variant="body2"
                color="success.main"
                sx={{ mt: 1 }}
              >
                {card.change}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        sx={{
          mt: 4,
          p: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Recent Invoices
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.number}>
                  <TableCell>
                    {invoice.number}
                  </TableCell>

                  <TableCell>
                    {invoice.customer}
                  </TableCell>

                  <TableCell>
                    {invoice.amount}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={invoice.status}
                      size="small"
                      color={
                        invoice.status === "Paid"
                          ? "success"
                          : "warning"
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Dashboard;