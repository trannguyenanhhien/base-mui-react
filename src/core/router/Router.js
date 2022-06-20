import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "../../redux-toolkit/counter/Counter";
import MainLayout from "../main-layout/MainLayout";
import Products from "../../views/main/products/Products";
import CreateProducts from "../../views/main/products/CreateProduct";
import POS from "../../views/main/pos/POS";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="test" element={<MainLayout />} />
        <Route path="/products" element={<Products />}>
          <Route path="create-product" element={<CreateProducts />} />
        </Route>
        <Route path="pos" element={<POS />} />
      </Route>
    </Routes>
  );
};

export default Router;
