import React from 'react'


import {Row, Col, TextInput, Button, Icon} from 'react-materialize'

const Index = () => {
    return (
        <div>
        <div className="footer">

        <Row>
            <Col m={4} s={12}> 

                <div className="footer-logo">
                <img src="./icon1.PNG" className="footer-img"/>
                <h6 className="black-text">
                    MedDoc<br/>
                   <span className="footer-span"> We Care</span>
                    </h6>
                    </div>
                    
                    <br/>
                <p>Weekdays: 08:00am - 08:00pm</p>
                <p>Weekends: 10:00am - 06:00pm</p>
                <br/>
                <br/>
                <div className="socials">
                <p className="socials-p">Get Socials </p>
                <img src="https://img.icons8.com/material/2x/facebook-f.png" className="socials-icon" />
                <img src="https://img.icons8.com/fluent-systems-filled/2x/github.png" className="socials-icon" />
                <img src="https://img.icons8.com/material/2x/twitter-squared.png" className="socials-icon" />
                <img src="https://img.icons8.com/material-sharp/2x/google-logo.png" className="socials-icon" />
                </div>
            </Col>

            <Col m={4} s={12}>
                <h5 className="div-h5">CONTACT</h5>
                <br/>
                <div className="footer-icon">
                <img src="https://img.icons8.com/material/2x/26e07f/worldwide-location.png" className="footericon-icon" /> 
                <p>27th Lane, lekki pennisula
                    <br/> lagos, Nigeria.
                </p>
                </div>
                <br/>
                <div className="footer-icon">
                <img src="https://img.icons8.com/metro/2x/26e07f/phone.png" className="footericon-icon" /> 
                <p>+234-708-443-678</p>
                </div>
                <br/>
                <div className="footer-icon">
                <img src="https://img.icons8.com/fluent-systems-regular/2x/26e07f/new-post.png" className="footericon-icon" /> 
                <p>meddoc@yahoo.com</p>
                </div>
            </Col>
            <Col m={4} s={12}>
            <h5 className="div-h5">NEWSLETTER</h5>
            <br/>
            <p className="newsletter-p">Subscribe to our newsletter to receive weekly news, updates,
                 special offers, and exclusive discounts.</p>
                 <br/>
                 <TextInput
                    email
                    id="TextInput-4"
                    label="Enter your e-mail"
                    required={true}
                    /> <Button
                    node="button"
                    type="submit"
                    waves="light"
                    className="button-icon"
                  > 
                    <Icon right className="send-icon">
                      <img src="https://img.icons8.com/dotty/2x/filled-sent.png" className="sendicon-icon"/>
                    </Icon>
                  </Button>
            </Col>
        </Row>
</div>

        <div className="second-footer">
            <Row>
                <Col m={4} s={12}>
                <p className="grey-text">© 2020 MedDoc.  All rights reserved.</p>
                </Col>
                <Col m={4} s={12} className="secondfooter-icon">
                <img src="https://img.icons8.com/wired/2x/card-in-use.png" className="second-footericon" />
                <img src="https://img.icons8.com/ios/2x/paypal.png" className="second-footericon" />
                <img src="https://img.icons8.com/ios-filled/2x/mastercard-logo.png" className="second-footericon" />
                </Col>
                <Col m={4} s={12}>
                <h6 className="grey-text privacy">Privacy Policy</h6>
                </Col>
            </Row>
        </div>

</div>


    )
}
export default Index;