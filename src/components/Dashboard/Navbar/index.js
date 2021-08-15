import React from 'react';
import 'materialize-css'

import {NavLink} from 'react-router-dom'
import {Navbar, Icon} from 'react-materialize'

const Index = () => {
    return (
        <div>

<Navbar
  alignLinks="right"
  brand={<a className="brand-logo blue-text" href="#">MedDoc</a>}
  id="mobile-nav"
  menuIcon={<Icon className="nav-icon">menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  className=" z-depth-0 nav-wrapper"
>
    
<NavLink to="/" className="black-text">
    Welcome
  </NavLink>
  <NavLink to="/profile" className="black-text">
    Profile
  </NavLink>
  <NavLink to="/logout" className="black-text">
    Logout
  </NavLink>


</Navbar>

        </div>

    )
}
export default Index;