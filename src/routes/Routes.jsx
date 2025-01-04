import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Content from "../components/content/content";
import ContentProduct from "../components/contentProduct/contentProduct";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Layout><Content /></Layout>} />
        <Route path="/product/:id" element={<Layout><ContentProduct /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
