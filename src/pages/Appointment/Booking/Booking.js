import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info-main" }}
            variant="3"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography sx={{ my: 1 }} variant="6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="5" gutterBottom component="div">
            price: ${price}
          </Typography>
          <Typography variant="5" gutterBottom component="div">
            {space} SPACE AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            sx={{ mt: 2 }}
            variant="contained"
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        date={date}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
