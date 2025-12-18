"use client";

import React, { useState, useRef } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tab,
  Tabs,
  IconButton,
} from "@mui/material";
import { Download, Eye, Edit3, Plus, Trash2 } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const invoiceRef = useRef(null);
  const [invoiceData, setInvoiceData] = useState({
    clientName: "Olivia Smith",
    company: "Really Great Company",
    email: "hello@reallygreatsite.com",
    invoiceNumber: "012345",
    date: "12.06.2024",
    items: [
      { description: "Item 1", unitPrice: 100, qty: 1 },
      { description: "Item 2", unitPrice: 100, qty: 1 },
      { description: "Item 3", unitPrice: 100, qty: 1 },
      { description: "Item 4", unitPrice: 100, qty: 1 },
      { description: "Item 5", unitPrice: 100, qty: 1 },
    ],
    taxRate: 10,
    bankName: "Emirates NBD",
    accountNumber: "0959033887701",
    iban: "AE980260000959033887701",
    swift: "EBILAEAD",
    branchAddress: "Emirates NBD Building, Al Barsha 2, Dubai BD",
  });

  const calculateSubtotal = () => {
    return invoiceData.items.reduce(
      (sum, item) => sum + item.unitPrice * item.qty,
      0
    );
  };

  const calculateTax = () => {
    return (calculateSubtotal() * invoiceData.taxRate) / 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleInputChange = (field, value) => {
    setInvoiceData({ ...invoiceData, [field]: value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index][field] =
      field === "description" ? value : Number(value) || 0;
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [
        ...invoiceData.items,
        {
          description: `Item ${invoiceData.items.length + 1}`,
          unitPrice: 0,
          qty: 1,
        },
      ],
    });
  };

  const removeItem = (index) => {
    if (invoiceData.items.length > 1) {
      const newItems = invoiceData.items.filter((_, i) => i !== index);
      setInvoiceData({ ...invoiceData, items: newItems });
    }
  };

  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;

    const element = invoiceRef.current;
    if (!element) return;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `Invoice_${invoiceData.invoiceNumber}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const PreviewInvoice = React.forwardRef((props, ref) => (
    <Box
      ref={ref}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#fff",
        fontFamily: "'Arial', sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        minHeight: "auto",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: { xs: 1.5, md: 2 },
          // border:"1px solid black"
        }}
      >
        <Box
          sx={{
            width: { xs: 180, sm: 180, md: 180 },
            height: { xs: 150, sm: 150, md: 150 },
            // border: "2px solid #333",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="DSILVA FZE"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              p: 1,
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 24, md: 28 },
                fontWeight: "bold",
                letterSpacing: { xs: 2, md: 4 },
                color: "#333",
              }}
            >
              DSILVA FZE
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 8, sm: 10, md: 11 },
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#333",
              }}
            >
              Management Solution
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Header - Issued To & Invoice No */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          justifyContent: "space-between",
          mb: { xs: 3, md: 5 },
          gap: { xs: 2, sm: 0 },
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 10, md: 11 },
              fontWeight: "bold",
              letterSpacing: 1,
              mb: 1,
              color: "#333",
            }}
          >
            ISSUED TO:
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 13, md: 14 }, mb: 0.5, color: "#333" }}
          >
            {invoiceData.clientName}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 13, md: 14 }, mb: 0.5, color: "#333" }}
          >
            {invoiceData.company}
          </Typography>
          <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#333" }}>
            {invoiceData.email}
          </Typography>
        </Box>
        <Box sx={{ textAlign: { xs: "right", sm: "right" } }}>
          <Typography
            sx={{
              fontSize: { xs: 10, md: 11 },
              fontWeight: "bold",
              letterSpacing: 1,
              mb: 1,
              color: "#333",
            }}
          >
            INVOICE NO:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              fontWeight: "bold",
              mb: 0.5,
              color: "#333",
            }}
          >
            #{invoiceData.invoiceNumber}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 13, md: 14 }, mt: 1, color: "#333" }}
          >
            {invoiceData.date}
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: "#333", borderWidth: 1, mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pb: 2,
          borderBottom: "1px solid #333",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 10, md: 11 },
            fontWeight: "bold",
            letterSpacing: 1,
            width: "40%",
            color: "#333",
          }}
        >
          DESCRIPTION
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 10, md: 11 },
            fontWeight: "bold",
            letterSpacing: 1,
            width: "20%",
            textAlign: "center",
            color: "#333",
          }}
        >
          UNIT PRICE
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 10, md: 11 },
            fontWeight: "bold",
            letterSpacing: 1,
            width: "15%",
            textAlign: "center",
            color: "#333",
          }}
        >
          QTY
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 10, md: 11 },
            fontWeight: "bold",
            letterSpacing: 1,
            width: "25%",
            textAlign: "right",
            color: "#333",
          }}
        >
          TOTAL
        </Typography>
      </Box>

      {/* Items */}
      {invoiceData.items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: { xs: 1.5, md: 2 },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 13, md: 14 }, width: "40%", color: "#333" }}
          >
            {item.description}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              width: "20%",
              textAlign: "center",
              color: "#333",
            }}
          >
            {item.unitPrice}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              width: "15%",
              textAlign: "center",
              color: "#333",
            }}
          >
            {item.qty}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              width: "25%",
              textAlign: "right",
              color: "#333",
            }}
          >
            ${item.unitPrice * item.qty}
          </Typography>
        </Box>
      ))}

      {/* Divider */}
      <Divider sx={{ borderColor: "#333", borderWidth: 1, mt: 2, mb: 3 }} />

      {/* Total Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          pb: 2,
          borderBottom: "1px solid #333",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, md: 14 },
            fontWeight: "bold",
            color: "#333",
          }}
        >
          TOTAL
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            fontWeight: "bold",
            color: "#333",
          }}
        >
          ${calculateSubtotal()}
        </Typography>
      </Box>

      {/* Summary */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Box sx={{ width: { xs: "35%", sm: 250 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#333" }}>
              Total
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#333" }}>
              ${calculateSubtotal()}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#333" }}>
              Tax
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#333" }}>
              {invoiceData.taxRate}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Amount due
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: "bold",
                color: "#333",
              }}
            >
              ${calculateTotal()}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bank Details and Signature Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mt: { xs: 4, md: 5 },
        }}
      >
        {/* Bank Details */}
        <Box sx={{ flex: "0 0 auto", maxWidth: { xs: "55%", sm: "60%" } }}>
          <Typography
            sx={{
              fontSize: { xs: 8, sm: 10, md: 11 },
              fontWeight: "bold",
              letterSpacing: 1,
              mb: { xs: 1, md: 2 },
              color: "#333",
            }}
          >
            BANK DETAILS
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 9, sm: 12, md: 13 },
              lineHeight: { xs: 1.6, md: 1.8 },
              color: "#333",
              wordBreak: "break-word",
            }}
          >
            Bank: {invoiceData.bankName}
            <br />
            Account Number: {invoiceData.accountNumber}
            <br />
            IBAN: {invoiceData.iban}
            <br />
            SWIFT/BIC: {invoiceData.swift}
            <br />
            Branch Address: {invoiceData.branchAddress}
          </Typography>
        </Box>

        {/* Thank You Signature */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: "0 0 auto",
          }}
        >
          <Box
            component="img"
            src="/signature.png"
            alt="Thank You"
            sx={{
              width: { xs: 300, sm: 300, md: 300 },
              height: "auto",
              objectFit: "contain",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          {/* <Typography
            sx={{
              display: "none",
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
              fontSize: { xs: 24, sm: 36, md: 48 },
              fontStyle: "italic",
              color: "#333",
              textAlign: "right",
            }}
          >
            thank you
          </Typography> */}
        </Box>
      </Box>
    </Box>
  ));

  PreviewInvoice.displayName = "PreviewInvoice";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Paper
          elevation={3}
          sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: { xs: 2, md: 4 },
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
            }}
          >
            DSILVA MANAGEMENT SOLUTION
          </Typography>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  minHeight: { xs: 48, md: 56 },
                },
              }}
            >
              <Tab
                label="Edit Invoice"
                icon={<Edit3 size={18} />}
                iconPosition="start"
              />
              <Tab
                label="Preview"
                icon={<Eye size={18} />}
                iconPosition="start"
              />
            </Tabs>
          </Box>

          {/* Edit Tab */}
          {activeTab === 0 && (
            <>
              <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  >
                    CLIENT INFORMATION
                  </Typography>
                  <TextField
                    fullWidth
                    label="Client Name"
                    value={invoiceData.clientName}
                    onChange={(e) =>
                      handleInputChange("clientName", e.target.value)
                    }
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Company"
                    value={invoiceData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={invoiceData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  >
                    INVOICE DETAILS
                  </Typography>
                  <TextField
                    fullWidth
                    label="Invoice Number"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) =>
                      handleInputChange("invoiceNumber", e.target.value)
                    }
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Date"
                    value={invoiceData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Tax Rate (%)"
                    type="number"
                    value={invoiceData.taxRate}
                    onChange={(e) =>
                      handleInputChange("taxRate", Number(e.target.value))
                    }
                    size="small"
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: { xs: 2, md: 4 } }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                  }}
                >
                  ITEMS
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Plus size={16} />}
                  onClick={addItem}
                  sx={{ fontSize: { xs: "0.7rem", md: "0.875rem" } }}
                >
                  Add Item
                </Button>
              </Box>

              {/* Mobile-friendly items */}
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                {invoiceData.items.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={1}
                    sx={{ p: 2, mb: 2, backgroundColor: "#fafafa" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                        Item {index + 1}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => removeItem(index)}
                        disabled={invoiceData.items.length === 1}
                        sx={{ color: "error.main" }}
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    </Box>
                    <TextField
                      fullWidth
                      label="Description"
                      value={item.description}
                      onChange={(e) =>
                        handleItemChange(index, "description", e.target.value)
                      }
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="Price"
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) =>
                            handleItemChange(index, "unitPrice", e.target.value)
                          }
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="Qty"
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            handleItemChange(index, "qty", e.target.value)
                          }
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="Total"
                          value={`$${item.unitPrice * item.qty}`}
                          size="small"
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Box>

              {/* Desktop table */}
              <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Description
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Unit Price
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Qty</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="right">
                        Total
                      </TableCell>
                      <TableCell sx={{ width: 50 }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoiceData.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <TextField
                            size="small"
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "unitPrice",
                                e.target.value
                              )
                            }
                            sx={{ width: 100 }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="number"
                            value={item.qty}
                            onChange={(e) =>
                              handleItemChange(index, "qty", e.target.value)
                            }
                            sx={{ width: 70 }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ fontWeight: 500 }}>
                            ${item.unitPrice * item.qty}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            size="small"
                            onClick={() => removeItem(index)}
                            disabled={invoiceData.items.length === 1}
                            sx={{ color: "error.main" }}
                          >
                            <Trash2 size={16} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Box sx={{ width: { xs: "100%", sm: 300 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography>Subtotal</Typography>
                    <Typography>${calculateSubtotal()}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography>Tax ({invoiceData.taxRate}%)</Typography>
                    <Typography>${calculateTax()}</Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Amount Due
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      ${calculateTotal()}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: { xs: 2, md: 4 } }} />

              <Typography
                variant="subtitle2"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", md: "0.875rem" },
                }}
              >
                BANK DETAILS
              </Typography>

              <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Bank Name"
                    value={invoiceData.bankName}
                    onChange={(e) =>
                      handleInputChange("bankName", e.target.value)
                    }
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Account Number"
                    value={invoiceData.accountNumber}
                    onChange={(e) =>
                      handleInputChange("accountNumber", e.target.value)
                    }
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="IBAN"
                    value={invoiceData.iban}
                    onChange={(e) => handleInputChange("iban", e.target.value)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SWIFT/BIC"
                    value={invoiceData.swift}
                    onChange={(e) => handleInputChange("swift", e.target.value)}
                    sx={{ mb: 2 }}
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Branch Address"
                    value={invoiceData.branchAddress}
                    onChange={(e) =>
                      handleInputChange("branchAddress", e.target.value)
                    }
                    multiline
                    rows={3}
                    size="small"
                  />
                </Grid>
              </Grid>
            </>
          )}

          {/* Preview Tab */}
          {activeTab === 1 && (
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <PreviewInvoice ref={invoiceRef} />
            </Box>
          )}

          {/* Download Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 4 },
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              onClick={downloadPDF}
              sx={{
                px: { xs: 4, md: 6 },
                py: 1.5,
                backgroundColor: "#333",
                fontSize: { xs: "0.875rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              Download Invoice
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
