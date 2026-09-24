import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import {
  addProduct,
  updateProduct,
} from "../../services/productApi";

const initialForm = {
  product_name: "",
  sku: "",
  barcode: "",
  hsn_sac: "",
  category: "",
  purchase_price: "",
  selling_price: "",
  gst_percent: "",
  discount: "",
  stock_quantity: "",
  unit: "PCS",
};

const ProductForm = ({
  open,
  onClose,
  product,
  onSaved,
}) => {
  const [formData, setFormData] =
    useState(initialForm);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isEdit = Boolean(product);

  useEffect(() => {
    if (product) {
      setFormData({
        product_name: product.product_name || "",
        sku: product.sku || "",
        barcode: product.barcode || "",
        hsn_sac: product.hsn_sac || "",
        category: product.category || "",
        purchase_price:
          product.purchase_price ?? "",
        selling_price:
          product.selling_price ?? "",
        gst_percent:
          product.gst_percent ?? "",
        discount:
          product.discount ?? "",
        stock_quantity:
          product.stock_quantity ?? "",
        unit: product.unit || "PCS",
      });
    } else {
      setFormData(initialForm);
    }

    setError("");
  }, [product, open]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!formData.product_name.trim()) {
      setError("Product name is required.");
      return;
    }

    try {
      setLoading(true);

      const data = {
        product_name:
          formData.product_name.trim(),

        sku: formData.sku.trim(),

        barcode:
          formData.barcode.trim(),

        hsn_sac:
          formData.hsn_sac.trim(),

        category:
          formData.category.trim(),

        purchase_price:
          Number(formData.purchase_price) || 0,

        selling_price:
          Number(formData.selling_price) || 0,

        gst_percent:
          Number(formData.gst_percent) || 0,

        discount:
          Number(formData.discount) || 0,

        stock_quantity:
          Number(formData.stock_quantity) || 0,

        unit:
          formData.unit || "PCS",
      };

      if (isEdit) {
        await updateProduct(product.id, data);
        setSuccess(
          "Product updated successfully."
        );
      } else {
        await addProduct(data);
        setSuccess(
          "Product added successfully."
        );
      }

      onSaved();
      onClose();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to save product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={loading ? undefined : onClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 700,
            }}
          >
            <Inventory2OutlinedIcon
              color="primary"
            />

            {isEdit
              ? "Edit Product"
              : "Add Product"}
          </Box>
        </DialogTitle>

        <Divider />

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <DialogContent sx={{ pt: 3 }}>
            {error && (
              <Alert
                severity="error"
                sx={{ mb: 3 }}
              >
                {error}
              </Alert>
            )}

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Product Name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="SKU"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Barcode"
                  name="barcode"
                  value={formData.barcode}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="HSN / SAC"
                  name="hsn_sac"
                  value={formData.hsn_sac}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <FormControl fullWidth>
                  <InputLabel>
                    Unit
                  </InputLabel>

                  <Select
                    name="unit"
                    value={formData.unit}
                    label="Unit"
                    onChange={handleChange}
                  >
                    <MenuItem value="PCS">
                      Pieces
                    </MenuItem>

                    <MenuItem value="KG">
                      Kilogram
                    </MenuItem>

                    <MenuItem value="G">
                      Gram
                    </MenuItem>

                    <MenuItem value="LTR">
                      Litre
                    </MenuItem>

                    <MenuItem value="ML">
                      Millilitre
                    </MenuItem>

                    <MenuItem value="MTR">
                      Meter
                    </MenuItem>

                    <MenuItem value="BOX">
                      Box
                    </MenuItem>

                    <MenuItem value="SET">
                      Set
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="Purchase Price"
                  name="purchase_price"
                  value={formData.purchase_price}
                  onChange={handleChange}
                  inputProps={{
                    min: 0,
                    step: "0.01",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="Selling Price"
                  name="selling_price"
                  value={formData.selling_price}
                  onChange={handleChange}
                  inputProps={{
                    min: 0,
                    step: "0.01",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="GST %"
                  name="gst_percent"
                  value={formData.gst_percent}
                  onChange={handleChange}
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: "0.01",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="Discount %"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: "0.01",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  type="number"
                  label="Stock Quantity"
                  name="stock_quantity"
                  value={formData.stock_quantity}
                  onChange={handleChange}
                  inputProps={{
                    min: 0,
                    step: "0.001",
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 2.5 }}>
            <Button
              variant="outlined"
              startIcon={
                <CloseOutlinedIcon />
              }
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              startIcon={
                loading ? (
                  <CircularProgress
                    size={18}
                    color="inherit"
                  />
                ) : (
                  <SaveOutlinedIcon />
                )
              }
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : isEdit
                ? "Update Product"
                : "Save Product"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Snackbar
        open={Boolean(success)}
        autoHideDuration={3000}
        onClose={() => setSuccess("")}
      >
        <Alert severity="success">
          {success}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductForm;