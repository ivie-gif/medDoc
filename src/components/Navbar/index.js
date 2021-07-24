import React from 'react';
import 'materialize-css'

import {Navbar, Icon, Dropdown, Divider, Row, Col, Container } from 'react-materialize';
import {NavLink} from 'react-router-dom'
import {Button, Modal} from 'react-materialize'

import Input from '../TextInput/index';
import But from '../Button/index'

const Index = () => {
    return (
        <div>
<Container>
<Navbar
  alignLinks="right"
  brand={<a className="brand-logo black-text" href="/">MedDoc</a>}
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
    preventScrolling: true,
    fixed: true
  }}
  className=" z-depth-0 nav-wrapper"
  
>
    
<NavLink to="/" className="black-text">
    Home
  </NavLink>
  <a href="#about" id ="#about" className="black-text">
    About
  </a>
  <Dropdown
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: false,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!" className="black-text">Specialists {' '}<Icon right>arrow_drop_down</Icon></a>}
  >
    <a href="#feature" id ="#feature" >
      General Surgery
    </a>
    <Divider />
    <a href="#specialist" id ="#specialist" >
    Opthalmology Procedures
    </a>
    <Divider />
    <a href="#testimonial" id ="#testimonial" >
      Outpatient Services
    </a>
    <Divider />
    <a href="">
      Radiology & Mammograms
    </a>
    <a href="">
      Respiratory
    </a>
    <a href="">
      Counselling
    </a>
  </Dropdown>
  <Dropdown
    id="Dropdown_7"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: false,
      container: null,
      coverTrigger: false,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!" className="black-text">Contact{' '}<Icon right>arrow_drop_down</Icon></a>}
  >
    <p className="contact-margin"> Call us on:  +2347082341785</p>
    
    <p className="contact-margin"> WhatsApp: +2347083456777</p>
    
    <p className="contact-margin"> Email: <br/>
        meddoc@yahoo.com</p>
    </Dropdown>
  <NavLink to="/login" className="black-text">
    Login
  </NavLink>
  {/* <NavLink to="/signup"  className="black-text">
    SignUp
  </NavLink> */}
<div>
  <Button
    className="modal-trigger"
    href="#modal1"
    node="button"
  >
     SignUp 
  </Button>

  <Modal
    bottomSheet={false}
    fixedFooter={false}
    header="Create an Account"
    id="modal1"
    open={false}
    fab={true}
    options={{
      dismissible: true,
      endingTop: '10%',
      inDuration: 50,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      opacity: 0.5,
      autoTrigger: true,
      outDuration: 50,
      preventScrolling: true,
      startingTop: '4%',
      hoverEnabled: true
    }}
    className="center-align"
    // root={[object HTMLBodyElement]}
  >
      <p className="center-align">Signup with your social media accounts or email address</p>
      <div className="modal-signup">
      <div className="div-signup-icon">
                    <img src="https://img.icons8.com/color/2x/4a90e2/google-logo.png" alt="google" className="signup-icon" />
                    <img src="https://img.icons8.com/windows/2x/4a90e2/facebook-f.png" alt="google" className="signup-icon" />
                    <img src="https://img.icons8.com/fluent/2x/4a90e2/twitter.png" alt="google" className="signup-icon" />
                    </div>
     </div> 
     <br/> or 

     <form >
                <div className="signup">
                    <NavLink to ="/" className="signup-title">MedDoc</NavLink>
                    {/* {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''} */}
                    
                    <p><img src="https://img.icons8.com/material/2x/person-male.png" alt="user-image" className="user-icon" /> FullName</p>
                    <Input
                     placeholder="Enter FullName"
                     type="text" 
                    
                    //  name="fullname"
                    //  value={fullname}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    />

<p><img src="https://img.icons8.com/metro/2x/forgot-password.png" alt="user-image" className="user-icon" /> Password </p>
                   <Input
                     placeholder="Enter Email Address"
                     type="email" 
                    
                    //  name="email"
                    //  value={email}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorEmail}
                   />

                    <p><img src="https://img.icons8.com/metro/2x/forgot-password.png" alt="user-image" className="user-icon" /> Password </p>
                    <Input
                     placeholder="Enter Password"
                     type="password" 
                     
                    //  name="password"
                    //  value={password}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorPassword}
                    />
                    <Button  className="buttonsignup-form green" >
                        SignUp
                    </Button>
                
                    <p className="center-align">Already have an account? <a href = "/login">Log in</a></p>
                    
                </div>
            </form>
     
          
 </Modal>
 
</div>

</Navbar>
</Container>

        </div>

    )
}
export default Index;