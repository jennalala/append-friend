import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Developers from "./containers/Developers/Developers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/developers" component={Developers} />
        <Footer/>
      </Switch>
    </Router>
  );
}

export default App;
