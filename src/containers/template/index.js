import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from "./header"
import Footer from "./footer"
 class Template extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <CssBaseline />
            <Header/>
            <main>{this.props.children}</main>
            <Footer/>
        </div>
      </React.Fragment>
    )
  }
}

export default Template