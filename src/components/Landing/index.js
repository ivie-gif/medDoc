import React from 'react';


import  Navbar from '../Navbar/index'
import HeroSection from '../HeroSection/index'
import About from '../About/index'
import Testimonial from '../Testimonial/index'
import Footer from '../Footer/index'
import Specialist from '../Specialist/index'
import Services from '../Services/index'


import {Icon, Row, Col, CardPanel } from 'react-materialize'
import Marquee from "react-smooth-marquee"

const Index = () => {

    return(
        <div>
            <Navbar />
            <HeroSection />

            <div className="landingcard-style">
            <Row>
            <Col
                m={4}
                s={12}
                className="landingcard"
            >
                
                <CardPanel className="cardpanel-style z-depth-0">
                    <div className="Iconcard">
                    <img src="https://img.icons8.com/fluent-systems-filled/2x/4a90e2/phone.png" alt="landing-img" className="iconcard-img" />
                <span className="black-text">
                    Call Us On <br/>
                    +234-703-445-5678
                    </span>
                    </div>
                </CardPanel>
                
            </Col>

            <Col
                m={4}
                s={12}
                className="landingcard"
            >
                <CardPanel className="cardpanel-style z-depth-0">
                <div className="Iconcard">
                    <img src="https://img.icons8.com/fluent-systems-filled/2x/4a90e2/new-post.png" alt="landing-img" className="iconcard-img" />
                <span className="black-text">
                    Send a Message <br/>
                    meddoc@yahoo.com
                    </span>
                    </div>
                </CardPanel>
            </Col>

            <Col
                m={4}
                s={12}
                className="landingcard"
            >
                <CardPanel className="cardpanel-style z-depth-0">
                <div className="Iconcard">
                    <img src="https://img.icons8.com/metro/2x/4a90e2/marker.png" alt="landing-img" className="iconcard-img" />
                <span className="black-text">
                    Visit Us <br/>
                    Lekki Axis, VI, Lagos
                    </span>
                    </div>
                </CardPanel>
            </Col>

            </Row>
            </div>

            <div id="about">
            <About />
            </div>
            {/* <div className="support-icons">
                <h6 className="center-align black-text support-icons-h6 "> Supported by: </h6>
            <Icon tiny className="support-icons-icon">
            <Marquee
             options={{
                 velocity: 0.15}}
               className="marquee"
               >
                <img src="https://img.icons8.com/ios-filled/2x/4a90e2/google-logo.png" className="support-icons-img center-align"/>
                <img src="https://img.icons8.com/cute-clipart/2x/4a90e2/zoom.png" className="support-icons-img " />
                <img src="https://img.icons8.com/fluent/2x/facebook-messenger.png" className="support-icons-img"/>
                </Marquee>
            </Icon>
            </div> */}

<div className="our-mission" id="mission">
        <div className="about-flex">
            
            <Row> 

                <Col m={6} s={12}>
                    <h6 className="span-p"> Our Mission</h6>
                    <h4 className="black-text mission-h2">We Provide <span className="blue-text" > High <br/> 
                     Solutions </span> for Your Health!</h4>
         <p className=" about-p">We are an Online platform where people 
            can anonymously get <br/> medical attention from 
             doctors all around the country without <br/> necessarily visiting the hospital due to 
             stigmatization that comes <br/> with such illnesses.
         </p>
         </Col>
        
         <Col m={6} s={12}>
         <img src="./2doc.PNG" className="image-width" />
         </Col>

         </Row>
        </div>
 
        </div>
        <div id="services">
            <Services />
        </div>

            <div id="specialist">
                <Specialist />
            </div>
            <div id="testimonial">
                <Testimonial />
            </div>
            <div className="landing-bg">
                
                <h5 className="center-align">
                <img src="https://img.icons8.com/ios-glyphs/2x/quote-right.png"alt="landing-img"  /> <br/>
                We got you covered for any illness with stigmtization.
                        Your Mental health is our responsibility irrespective of your 
                        location, place and 
                        time. Get in touch with us today and book an appointment 
                        with any of our qualified
                         specialist.</h5>
            </div>
            <div className="herocard" id= "feature">
            <h3 className="black-text center-align herocard-text">No worries for  <span className="blue-text">uncommon illnesses</span></h3>



                <Row>
                    <Col 
                    m={4}
                    s={12}
                    >
                        <Icon large>
                        <img src ="https://img.icons8.com/emoji/2x/hospital-emoji.png" alt="landing-img" className="blue-text icons-style hoverable" />
                        </Icon>
                        <p className="center-align"> We got you covered for any illness with stigmtization,
                         and you do not need to make any appearance in the hospital, our online doctors are
                         just a chat and a call away.
                        </p>
                    </Col>
                    <Col 
                    m={4}
                    s={12}
                    >
                        <Icon large>
                        <img src ="https://img.icons8.com/ios-filled/2x/wise-mind.png" alt="landing-img" className="blue-text icons-style hoverable" />
                        </Icon>
                        <p className="center-align"> We got you covered for any illness with stigmtization.
                        Your Mental health is our responsibility irrespective of your location, place and 
                        time. Get in touch with us today and book an appointment with any of our qualified
                         specialist.</p>
                    </Col>
                    <Col 
                    m={4}
                    s={12}
                    >
                        <Icon large>
                        <img src ="https://img.icons8.com/emoji/2x/woman-health-worker.png" alt="landing-img" className="blue-text icons-style hoverable" />
                        </Icon>
                        <p className="center-align"> We got you covered for any illness with stigmtization.
                        Our platform is filled with registered and licensed medical practitioners in specialised 
                        fields and areas. We are waiting to have a chat with you.</p>
                    </Col>
                </Row>
                
            </div>
            
            <div>
                <Footer />
            </div>
            
        </div>
    )
}
export default Index;