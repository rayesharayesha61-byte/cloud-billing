import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// PUBLIC
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// APP
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";

import Pricing from "./pages/public/Pricing";
import Customers from "./pages/public/Customers";
import SmallBusiness from "./components/solutions/SmallBusiness";
import Retail from "./components/solutions/Retail";
import BusinessServices from "./components/solutions/BusinessServices";
import Contact from "./components/public/Contact";
import Features from "./components/public/Features";
import FAQ from "./components/public/FAQ";
// import InvoiceList from "./pages/billing/InvoiceList";
import CreateInvoice from "./pages/billing/CreateInvoice";
import Reports from "./pages/reports/Reports";
import Expenses from "./pages/expenses/Expenses";
import Subscription from "./pages/subscription/Subscription";
import Settings from "./pages/settings/Settings";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}

        <Route
          path="/"
          element={<Home />}
        />
<Route
  path="/about"
  element={<About />
  }
/>
<Route path="/pricing" element={<Pricing />} />
<Route path="/customers" element={<Customers />} />
<Route path="/solutions/small-business" element={<SmallBusiness />} />
<Route path="/solutions/retail" element={<Retail />} />
<Route path="/solutions/business-services" element={<BusinessServices />} />
<Route path="/contact" element={<Contact />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/features" element={<Features />} />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ================= PROTECTED APP ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute>
              {/* <InvoiceList /> */}
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-invoice"
          element={
            <ProtectedRoute>
              <CreateInvoice />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* UNKNOWN URL */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;