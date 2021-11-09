import { Button, Container, Grid, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import chair from "../../../../images/chair.png";
import bg from "../../../../images/bg.png";
const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} style={{...verticalCenter, textAlign: 'left'}}>
            <Box>
              <Typography variant="h4">
                Your New Smile <br />
                Start Here
              </Typography>
              <Typography sx={{my: 3, color: 'gray', fontWeight: 300, fontSize: 14}} variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                culpa cumque enim! Voluptatibus aliquid expedita saepe
                accusantium itaque ducimus rem voluptas
              </Typography>
              <Button variant="contained" style={{ marginTop: "20px", backgroundColor: "#5CE7ED" }}>Get Appointment</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} style={verticalCenter}>
            <img style={{ width: 500 }} src={chair} alt="img" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
