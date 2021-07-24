import React from 'react';


import {Slider, Slide, Caption} from 'react-materialize'
import Button from '../Button/index'

const Index = () => {
    return (
        <div>

<Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 550,
    indicators: false,
    interval: 8000
  }}

>
  <Slide image={<img alt="" src="./doc1.jpg"/>} >
    <Caption placement="left">
      <h3   className="slider-css blue-text">
        Affordable Healthcare <br/>Coverage for you
      </h3>
      <h4 className="light black-text text-lighten-3 slider-css">
        Get treatment Discreetly and Urgently
      </h4>

      <a href="#services" id= "#services" >
       <Button title=" Check Our Services" className="blue hero-button" />
       </a>
    </Caption>
  </Slide>
  
</Slider>




        </div>

    )
}
export default Index;