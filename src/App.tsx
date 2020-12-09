import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import StudentsTable from './pages/studentsTable';
import Form from './pages/form';
import React from "react";
import StudentsDetails from './pages/studentsDetails';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkSpaces: {
      margin: '30px 20px',
      color: 'black',
      textDecoration: 'none'
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Router>
    <div className="links">
      <Link className={classes.linkSpaces} to="/">Form</Link>
      <Link className={classes.linkSpaces} to="/studentsTable">Student's Table</Link>
    </div>
    <div className="tabs">
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/studentsTable">
          <StudentsTable />
        </Route>
        <Route path="/:name">
          <StudentsDetails />
        </Route>
        <Route path="/">
          <Form />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
