import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, my: 10 }}>
        <Grid container spacing={2} sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={3} xl={3}>
            <Typography variant="h6">Emergency Dental Care</Typography>
            <Typography variant="h6">Check Up</Typography>
            <Typography variant="h6">Treatment of personal Diseases</Typography>
            <Typography variant="h6">Tooth Extraction</Typography>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Typography variant="h6">Emergency Dental Care</Typography>
            <Typography variant="h6">Check Up</Typography>
            <Typography variant="h6">Treatment of personal Diseases</Typography>
            <Typography variant="h6">Tooth Extraction</Typography>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Typography variant="h6">Emergency Dental Care</Typography>
            <Typography variant="h6">Check Up</Typography>
            <Typography variant="h6">Treatment of personal Diseases</Typography>
            <Typography variant="h6">Tooth Extraction</Typography>
          </Grid>
          <Grid item xs={12} md={3} xl={4}>
            <Typography variant="h6">Emergency Dental Care</Typography>
            <Typography variant="h6">Check Up</Typography>
            <Typography variant="h6">Treatment of personal Diseases</Typography>
            <Typography variant="h6">Tooth Extraction</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{fontSize: 14, mt: 9, pb: 3}} variant="h6">Copyright 2021 All Right Reserved</Typography>
    </Container>
  );
};

export default Footer;
