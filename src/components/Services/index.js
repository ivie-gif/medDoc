import React from 'react';


import {Row, Col, Container, CardPanel} from 'react-materialize'


const Index = () => {
    return (
        <div className="services-sec">

        <h6 className="grey-text center-align services-h6">OUR SERVICES</h6>
        <h3 className="blue-text center-align services-h3">Health Services <span className="black-text">We Provide</span></h3>

        <Row>
            <Col m={4} s={12}>
            
               <CardPanel className="services-card z-depth-0 ">
               <img src="./icon1.PNG" className="services-png" />
            <h5 className="center-align">General Surgery</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
            <Col m={4} s={12}>
            <CardPanel className="services-card z-depth-0">
               <img src="./icon2-2.PNG" className="services-png" />
            <h5 className="center-align">Outpatient Services</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
            <Col m={4} s={12}>
            <CardPanel className="services-card z-depth-0">
               <img src="./icon3.PNG" className="services-png" />
            <h5 className="center-align">Respiratory Therapy</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
            <Col m={4} s={12}>
            <CardPanel className="services-card z-depth-0">
               <img src="./icon4.PNG" className="services-png" />
            <h5 className="center-align">Cardiac Clinic</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
            <Col m={4} s={12}>
            <CardPanel className="services-card z-depth-0">
               <img src="./icon5.PNG" className="services-png" />
            <h5 className="center-align">Laryngological Services</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
            <Col m={4} s={12}>
            <CardPanel className="services-card z-depth-0">
               <img src="./icon6.PNG" className="services-png" />
            <h5 className="center-align">Radiology & Mammograms</h5>
      
      <p className="center-align">
               Our platform is filled with registered and licensed medical practitioners in specialised 
               fields and areas. We are waiting to have a chat with you.</p>
    </CardPanel>
            </Col>
        </Row>

        </div>
    )
}

export default Index;