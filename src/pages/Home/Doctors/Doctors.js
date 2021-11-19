import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Doctor from "../Doctors/Doctor.js";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://powerful-crag-99739.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <h2>Our Doctors: {doctors.length}</h2>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
