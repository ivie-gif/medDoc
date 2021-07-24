import React from 'react';


import {Row, Col} from 'react-materialize'
import Button from '../Button/index'


const Index = () => {
    return (
        <div className="who-we-are">
        <div className="about-flex">
           
            <Row>
            <Col m={6} s={12}>
         <img src="./AllDoct.PNG" className="image-width" />
         </Col> 

                <Col m={6} s={12}>
                    <h6 className="span-p"> About Us</h6>
                    <h2 className="blue-text about-h2">We Are Happy To <br/> Serve You!</h2>
         <p className=" about-p">We are an Online platform where people 
            can anonymously get <br/> medical attention from 
             doctors all around the country without <br/> necessarily visiting the hospital due to 
             stigmatization that comes <br/> with such illnesses.
         </p>
         <div className="about-button">
         <a href="#testimonial" id ="#testimonial" >
         <Button title=" Testimonials" className="blue feature-button" />
    </a>
         <a href="#specialist" id = "#specialist" >
         <Button title=" Our Doctors" className="green feature-button" />
         </a>
         </div>
         </Col>
        
         </Row>
        </div>
 
        </div>
    )
}
export default Index;