import React from "react";

import { Row, Col, Container } from "react-materialize";


const Index = () => {
  return (

    <div>

        <div className="dashboard-banner z-depth-2">
          <Row>
          <Col m={6} s={12}>
              <h4>
                Hello, Sheraton
              </h4>
              <h6>Have a nice day and dont forget to take care of your health.</h6>
            </Col>
            <Col m={6} s={12}>
              <img
                src="./med3.PNG"
                alt="img"
                className="dashboard-image"
              />
            </Col>
          </Row>
        </div>

    </div>
  );
};
export default Index;
