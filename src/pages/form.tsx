import React, { useState, useCallback } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import dataStudents from '../mockups/dataStudents.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '20%',
      marginLeft: '40%'
    },
    paper: {
      padding: theme.spacing(1),
    }
  }),
);

const Form = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    streetNumberAndName: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    gpa: '',
  });
  
  const handleChangeFirstName= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, firstName: event.target.value });
  };

  const handleChangeLastName= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, lastName: event.target.value });
  };

  const handleChangeStreetNumberAndName= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, streetNumberAndName: event.target.value });
  };

  const handleChangeCity= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, city: event.target.value });
  };

  const handleChangeState= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, state: event.target.value });
  };

  const handleChangeZipCode= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, zipCode: event.target.value });
  };

  const handleChangePhoneNumber= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, phoneNumber: event.target.value });
  };

  const handleChangeGpa= (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, gpa: event.target.value });
  };

  const registerStudent = () => {
    const arr = [ form.firstName, form.city, form.gpa, form.lastName, form.phoneNumber, form.state, form.streetNumberAndName, form.zipCode]    

    if(arr.includes('')){
      return alert('No field can be empty')
    }
    const lastId = dataStudents.slice(-1).pop();
    const assignId = 3; // lastId + 1

    dataStudents.push({
      "idStudent": assignId,
      "firstName": form.firstName, 
      "lastName": form.lastName,
      "address": form.streetNumberAndName,
      "city": form.city,
      "number": Number(form.phoneNumber),
      "gpa": Number(form.gpa),
      "image": "https://pixabay.com/vectors/woman-women-business-woman-female-1353825/"
    })
    //console.log(dataStudents);
    return alert('The student was added!')
  }

  return (
    <div className={classes.root}>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom> Register a New Student </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={handleChangeFirstName} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={handleChangeLastName} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Street Number/Name" variant="outlined" fullWidth onChange={handleChangeStreetNumberAndName} />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="City" variant="outlined" fullWidth onChange={handleChangeCity} />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="State" variant="outlined" fullWidth onChange={handleChangeState} />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="ZipCode" variant="outlined" fullWidth onChange={handleChangeZipCode} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Phone number" variant="outlined" fullWidth onChange={handleChangePhoneNumber} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="GPA" variant="outlined" fullWidth onChange={handleChangeGpa}/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={registerStudent} fullWidth>
              Register student
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Form;