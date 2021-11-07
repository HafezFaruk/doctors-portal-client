import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundColor: "rgba(180, 171, 169, 0.8)",
  backgroundBlendMode: "darken, luminosity",
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <img
            style={{ width: 400, marginTop: -115 }}
            src={doctor}
            alt="doctor/img"
          />
        </Grid>
        <Grid item xs={6} md={6} 
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'left'
            }}>
          <Box>
            <Typography style={{ color: "#5CE7ED" }} variant="h4">
              Appointment
            </Typography>
            <Typography variant="h5" style={{ color: "white", marginTop: 10 }}>
              Make an Appointment Today
            </Typography>
            <Typography
              style={{ fontSize: 16, fontWeight: 300, marginTop: 10 }}
              variant="h6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa
              cumque enim! Voluptatibus aliquid expedita saepe accusantium
              itaque ducimus rem voluptas
            </Typography>
            <Button style={{ marginTop: "20px", backgroundColor: "#5CE7ED" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
