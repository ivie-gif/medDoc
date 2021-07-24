import React from 'react';


import {CardPanel, Icon, CardTitle, Row, Col, Card, Container} from 'react-materialize'

const Index = () => {
    return (
        <div className="services-sec">

        <h6 className="grey-text center-align services-h6">WHAT CLIENT SAYS</h6>
        <h3 className="blue-text center-align services-h3">Happy <span className="black-text">Patients</span></h3>

   <Row className="testimonial">
       <Col m={3} s={12}>
    <Card className="testimonial-card z-depth-0">
        <img src =" ./singledoc.jpg" />
        <p>  <img src="https://img.icons8.com/material/2x/quote-right.png" /> <br/>
        Prompt and effective responses from the Doctors.
        I partcularly enjoyed every session of the interactive meeting.
        Thank you Reviving my Health.</p>
        <h6>Aderonke Augustine</h6>
    </Card>

    </Col>

    <Col m={3} s={12}>
    <Card className=" testimonial-card z-depth-0 ">
        <img src ="./zoomdoc.jpg" />
        <p> <img src="https://img.icons8.com/material/2x/quote-right.png" /> <br/>
        You Guys Rock! I couldnt believe I could have first-hand access to 
        dicreet treatment until I got to kmow about your platform. I love the 
        responses of the Doctors and how they pay close attention to details.
        Thank you for coming up with this brilliant idea.</p>
        <h6>Theophilus Adolphus</h6>
    </Card>
    </Col>

    <Col m={3} s={12}>
    <Card className=" testimonial-card z-depth-0">
        <img src ="./patient.jpg" />
        <p>  <img src="https://img.icons8.com/material/2x/quote-right.png" /> <br/>
        I didnt know that your platform existed until recently 
        when a friend introdced me to the platform.
        I have been too ashamed to go to the hospital to sick medical
         help due to stigmatization that comes with my disease. Thanks to 
         the doctors for allowing me to book a personal appointment dtate and time.
         This is much easier and confidential. Thank you </p>
        <h6>Augustina Imonikebi</h6>
    </Card>
    </Col>
    <Col m={3} s={12}>
    <Card className="testimonial-card z-depth-0">
        <img src ="./homedoc.jpg"/>
        <p> <img src="https://img.icons8.com/material/2x/quote-right.png" /> <br/>
        Thank you Reviving health for this brilliant and great
         opportunity to have discreet conversations with an appointed doctor. 
         its feels really good being able to talk to a doctor and not go through 
         the stress of going to the hospital and get stigmatized.
         I am very grateful for this platform. Cheers  </p>
        <h6>Sabina Aire</h6>
    </Card>
    </Col>


    </Row>

        </div>
    )
}
export default Index;