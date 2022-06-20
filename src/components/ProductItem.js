import React from "react";
import { Box, Divider, Grid, Input, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
    boxShadow: '0px 0px 2px #808080',
  },
  textField: {
    paddingRight: 10,
    margin: 10,
  },
}));

const ProductItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={2} md={2} lg={2}>
          hình ảnh
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Grid container>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <div className={classes.textField}>QUẦN ÁO GIÀY DÉP</div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <small style={{ color: "gray" }}>
                <div className={classes.textField}>STU20277724042</div>
              </small>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              alignItems="center"
              container
              xs={12}
              sm={4}
              md={4}
              lg={4}
            >
              <Grid>
                <span className={classes.textField}>Số lượng:</span>
              </Grid>
              <Grid>
                <TextField
                  className={classes.textField}
                  size="small"
                  type="number"
                  variant="standard"
                  defaultValue="1"
                  inputProps={{
                    min: 1,
                    max: 100,
                    style: { textAlign: "center" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}></Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className={classes.textField}>
                Giá: <del style={{ color: "red" }}>530.000đ</del>{" "}
                <span style={{ fontSize: 22 }}>400.000đ</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className={classes.textField}>Tổng cộng: 1.000.000đ</div>
            </Grid>
          </Grid>
          <Grid>
            <div className={classes.textField}>
              Ghi chú: <Input />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductItem;
