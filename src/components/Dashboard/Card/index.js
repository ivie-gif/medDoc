import React from "react";


import {Row, Col, CardPanel, Container} from 'react-materialize'



const Index = () => {
 
  return (
    <div>

    <Container>
        <div className="card-container ">
      <Row>
        <Col m={3} s={12}>
          <CardPanel className="dash-card">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="red-text">
                    102 bpm
                    </span>
                    </div>
                    <h5>Heart Rate</h5>
            <span className="black-text">
              Pulse is the most physiological indicator.
            </span>
          </CardPanel>
        </Col>
        <Col m={3} s={12}>
          <CardPanel className="dash-card">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="blue-text">
                    36,6C
                    </span>
                    </div>
                    <h5>Temperature</h5>
            <span className="black-text">
              A Temperature below 35C indicate a serious illness.
            </span>
          </CardPanel>
        </Col>
        <Col m={3} s={12}>
          <CardPanel className="dash-card blue">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="white-text">
                    120/80
                    </span>
                    </div>
                    <h5>Blood Pressure</h5>
            <span className="black-text">
              Blood Pressure can rise and fall several times a day.
            </span>
          </CardPanel>
        </Col>
        <Col m={3} s={12}>
          <CardPanel className="dash-card">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="yellow-text">
                    90 mg/dl
                    </span>
                    </div>
                    <h5>Glucose</h5>
            <span className="black-text">
              The normal cocentration of glucise is 80-120 mg/dl.
            </span>
          </CardPanel>
        </Col>
      </Row>
      </div>

      <Row>
          <div>
      <Col m={6} s={12}>
          <CardPanel className="dash-card">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="yellow-text">
                    90 mg/dl
                    </span>
                    </div>
                    <h5>Glucose</h5>
            <span className="black-text">
              The normal cocentration of glucise is 80-120 mg/dl.
            </span>
          </CardPanel>
        
          <CardPanel className="dash-card">
          <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="yellow-text">
                    90 mg/dl
                    </span>
                    </div>
                    <h5>Glucose</h5>
            <span className="black-text">
              The normal cocentration of glucise is 80-120 mg/dl.
            </span>
          </CardPanel>
        </Col>
        </div>
        <Col m={6} s={12}>

        </Col>
      </Row>
      </Container>
      
      
    </div>
  );
};

export default Index;
