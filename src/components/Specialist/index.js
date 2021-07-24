import React from 'react'

import {Row, Col, Container} from 'react-materialize'


const Index = () => {
    return (
        <div className="Specialist-style">
            <h6 className="specialist-h6 span-p center-align"> Our Team</h6>
            <h3 className="blue-text center-align services-h3">Our <span className="black-text">Specialized Doctors</span></h3>

         
            <Row>
            
            <Col
                m={4}
                s={12}
            >
                <img src="./blackdoctor.jpg" alt="docimage" className="doctors-img hoverable" />
                <h6 className="center-align black-text">Dr. Adetokunbo Fashola</h6>
                <p className="center-align blue-text">Gynaecologist</p>
            </Col>

            <Col
                m={4}
                s={12}
            >
                <img src="./singledoc2.jpg" alt="docimage" className="doctors-img hoverable" />
                <h6 className="center-align black-text">Pharm. Aboderin Solomon</h6>
                <p className="center-align blue-text">Pharmacist</p>
            </Col>

            <Col
                m={4}
                s={12}
            >
                 <img src="./female1.jpg" alt="docimage" className="doctors-img hoverable"/>
                <h6 className="center-align black-text">Dr. Ndubuisi Chinocherem</h6>
                <p className="center-align blue-text">Gynaecologist</p>
            </Col>

            <Col
                m={4}
                s={12}
            >
                <img src="./singledoc.jpg" alt="docimage" className="doctors-img hoverable"/>
                <h6 className="center-align black-text">Dr. Aina Fawaz</h6>
                <p className="center-align blue-text specialist-p">Optometrist</p>
            </Col>

            <Col
                m={4}
                s={12}
            >
                <img src="./female4.jpg" alt="docimage" className="doctors-img hoverable"/>
                <h6 className="center-align black-text">Dr. Amina Yesuf</h6>
                <p className="center-align blue-text specialist-p">Dermatologist</p>
            </Col>

            <Col
                m={4}
                s={12}
            >
                <img src="./al3.jpg" alt="docimage" className="doctors-img hoverable"/>
                <h6 className="center-align black-text">Dr. Olivia Ignatius</h6>
                <p className="center-align blue-text specialist-p">Pediatrician</p>
            </Col>

            </Row>
        
       
        </div>
    )
}
export default Index;