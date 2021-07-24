import React from 'react';

import {Row, Col, Container} from 'react-materialize'

const Index = () => {
    return (
        <div>


            <Container>
            <Row>
                <Col m={6} s={12}>
            <img src="./dashboardimg.PNG" alt="img" className="dashboard-img"/>
            </Col>
            <Col m={6} s={12}>
            <h4>
                Get amazing health tips on how to live healthy and stay fit.
            </h4>
            <h6>
                A delightful new way to stay alive, strong and healthy.
            </h6>
            </Col>
            </Row>
            </Container>
        

        </div>
    )
}
export default Index;