import React from "react";
import { Box, Grid } from "@mui/material";
import ProductItem from "../../../components/ProductItem";

const POS = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          Để tính toán
        </Grid>
      </Grid>
    </Box>
  );
};

export default POS;
