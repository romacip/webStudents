import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import dataStudents from '../mockups/dataStudents.json';
import { Route, useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

type student = {
  firstName: string,
  lastName: string,
  phNumber: number,
  gpa: number,
}

const StudentsDetails = () => {
  const classes = useStyles();

  const getStudent = dataStudents.filter(student => student.firstName === window.location.pathname.substring(1));
  console.log(getStudent, window.location)
  return (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="avatar" src="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {getStudent[0].firstName} {getStudent[0].lastName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Street Number/Name: {getStudent[0].address}
              </Typography>
              <Typography variant="body2" gutterBottom>
                City: {getStudent[0].city}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Phone Number: {getStudent[0].number}
              </Typography>
              <Typography variant="body2" gutterBottom>
                GPA: {getStudent[0].gpa}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
}

export default StudentsDetails;