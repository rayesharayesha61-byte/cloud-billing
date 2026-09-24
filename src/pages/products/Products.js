import React, { useEffect, useMemo, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  InputAdornment,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import {
  getProducts,
  deleteProduct,
} from "../../services/productApi";

import ProductForm from "./ProductForm";

const Products = () => {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [formOpen, setFormOpen] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProducts();

      setProducts(response.products || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const value = search
      .trim()
      .toLowerCase();

    if (!value) {
      return products;
    }

    return products.filter((product) =>
      [
        product.product_name,
        product.sku,
        product.barcode,
        product.hsn_sac,
        product.category,
      ]
        .filter(Boolean)
        .some((field) =>
          String(field)
            .toLowerCase()
            .includes(value)
        )
    );
  }, [products, search]);

  const handleAdd = () => {
    setSelectedProduct(null);
    setFormOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleteLoading(true);

      await deleteProduct(id);

      setSuccess(
        "Product deleted successfully."
      );

      await loadProducts();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to delete product."
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          gap: 2,
          mb: 3,
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 0.5 }}
          >
            Products
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Manage your products, pricing and stock.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          onClick={handleAdd}
          sx={{
            minHeight: 44,
            px: 2.5,
          }}
        >
          Add Product
        </Button>
      </Box>

      {/* Error */}
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}

      {/* Main Card */}
      <Card
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <CardContent>
          {/* Toolbar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            <TextField
              size="small"
              placeholder="Search products..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              sx={{
                width: {
                  xs: "100%",
                  sm: 350,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon
                      fontSize="small"
                    />
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Inventory2OutlinedIcon
                color="primary"
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {filteredProducts.length} Products
              </Typography>
            </Box>
          </Box>

          {/* Table */}
          {loading ? (
            <Box
              sx={{
                minHeight: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : filteredProducts.length === 0 ? (
            <Box
              sx={{
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 1,
              }}
            >
              <Inventory2OutlinedIcon
                sx={{
                  fontSize: 48,
                  color: "text.secondary",
                }}
              />

              <Typography
                variant="h6"
                fontWeight={600}
              >
                No products found
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Add your first product to get started.
              </Typography>

              <Button
                variant="contained"
                startIcon={<AddOutlinedIcon />}
                onClick={handleAdd}
                sx={{ mt: 1 }}
              >
                Add Product
              </Button>
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Product</strong>
                    </TableCell>

                    <TableCell>
                      <strong>SKU</strong>
                    </TableCell>

                    <TableCell>
                      <strong>Category</strong>
                    </TableCell>

                    <TableCell align="right">
                      <strong>Purchase</strong>
                    </TableCell>

                    <TableCell align="right">
                      <strong>Selling</strong>
                    </TableCell>

                    <TableCell align="right">
                      <strong>GST</strong>
                    </TableCell>

                    <TableCell align="right">
                      <strong>Stock</strong>
                    </TableCell>

                    <TableCell align="center">
                      <strong>Actions</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredProducts.map(
                    (product) => (
                      <TableRow
                        key={product.id}
                        hover
                      >
                        <TableCell>
                          <Typography
                            fontWeight={600}
                          >
                            {product.product_name}
                          </Typography>

                          {product.barcode && (
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Barcode:{" "}
                              {product.barcode}
                            </Typography>
                          )}
                        </TableCell>

                        <TableCell>
                          {product.sku || "-"}
                        </TableCell>

                        <TableCell>
                          {product.category || "-"}
                        </TableCell>

                        <TableCell align="right">
                          ₹
                          {Number(
                            product.purchase_price
                          ).toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          ₹
                          {Number(
                            product.selling_price
                          ).toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          {Number(
                            product.gst_percent
                          )}%
                        </TableCell>

                        <TableCell align="right">
                          <Typography
                            fontWeight={600}
                          >
                            {Number(
                              product.stock_quantity
                            )}{" "}
                            {product.unit}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <IconButton
                            color="primary"
                            onClick={() =>
                              handleEdit(product)
                            }
                            disabled={deleteLoading}
                          >
                            <EditOutlinedIcon />
                          </IconButton>

                          <IconButton
                            color="error"
                            onClick={() =>
                              handleDelete(
                                product.id
                              )
                            }
                            disabled={deleteLoading}
                          >
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      {/* Product Form */}
      <ProductForm
        open={formOpen}
        product={selectedProduct}
        onClose={() => {
          setFormOpen(false);
          setSelectedProduct(null);
        }}
        onSaved={loadProducts}
      />

      {/* Success */}
      <Snackbar
        open={Boolean(success)}
        autoHideDuration={3000}
        onClose={() => setSuccess("")}
      >
        <Alert severity="success">
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;