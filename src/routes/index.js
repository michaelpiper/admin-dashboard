import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Dashboard from "../containers/dashboard/Dashboard"
import Home from "../containers/pages/home"
import About from "../containers/pages/about"
import Contact from "../containers/pages/contact"
import Page404 from "../containers/pages/404"
import SignIn from "../containers/pages/signin"
import SignUp from "../containers/pages/signup"
import Template from "../containers/template/"
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {

    return ( 
        <Router>
            <Switch>
                
                <Route path="/signin"  component={SignIn}/>
                <Route path="/signup"  component={SignUp}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/*">
                    <Template>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/*" component={Page404} /> 
                        </Switch> 
                    </Template>
                </Route>
            </Switch> 
        </Router>
    )
  }
}


export default Routes