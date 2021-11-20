import React from "react";
import "./styles.css";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import {About} from "./components/About";
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router} from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>

      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
      </Router>
    </div>
  )
}