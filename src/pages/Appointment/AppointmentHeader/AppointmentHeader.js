import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date, setDate}) => {
    return (
       <Container sx={{my: 5}}>
           <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
               </Grid>
               <Grid item xs={12} md={6}>
                    <img style={{width: 600}} src={chair} alt="img"/>
               </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentHeader;