import React from 'react'
import Auth from '../../lib/Auth'

import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = { }



  }




  render() {

    return(
      <nav className="navbar">



        {!Auth.isAuthenticated() && <Link to="/register" className="nav-item nav-one">Register</Link>}
        {!Auth.isAuthenticated() && <Link to="/login" className="nav-item nav-two">Log In</Link>}
        {Auth.isAuthenticated() && <Link to="/" className="nav-item nav-four" onClick={() => Auth.logout()}>Log Out</Link>}
        {Auth.isAuthenticated() && <Link to="/submit" className="nav-item nav-four">Submit a Haiku</Link>}
        <Link to="/" className="nav-item nav-three">The Haikus</Link>



      </nav>
    )
  }
}

export default withRouter(Nav)
