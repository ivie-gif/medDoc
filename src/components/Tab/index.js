import React from 'react'


import{Tabs, Tab, Container, Icon, CardTitle, Card, Row, Col} from 'react-materialize'

const Index = () => {
    return (
<div className="about-style">
    <h3 className="center-align who-we-are green-text">Who we are</h3>
        <Container>

<Tabs className=" z-depth-0 container-tab ">
  <Tab
     
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true
    }}
    className="black-text"
    title="About" 
  >
    <div>
    <h2> <Icon medium className="red-text">
    healing 
</Icon> About Us </h2>
 <p className="tab-text"> We are an Online platform where people can anonymously get medical attention from 
             doctors all around the country without necessarily visiting the hospital due to 
             stigmatization that conmes with such illnesses.
             As if being sick weren't bad enough, some diseases come with a social stigma 
             that can make sufferers hide their illness.
             We are here to help you get all the necessary medical help and attention you need 
             from the comfort of your home.
  </p>
  <br/>
</div><img src ="./singledoc.jpg" className="tab-pics" />
  </Tab>
  <Tab
 
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Specialists" className="tab-frame"
  >
    <div>
    <h2> <Icon medium className="red-text">
    people 
</Icon> Specialists </h2>
 <p className="tab-text"> A brand is the promise of an experience. 
   We have the right medical practisioners on board <br/>
   to give you the necessary and required care.
  </p>
  <br/>
</div>
    <img src="https://media.istockphoto.com/photos/group-of-doctors-with-face-masks-looking-at-camera-corona-virus-picture-id1208116440?b=1&k=6&m=1208116440&s=170667a&w=0&h=ARJ0wMTQJsZYi7oWThI2Gyyrjo7n2fbI9asKwvtRwsQ=" className="tab-pics" />
  </Tab>
  <Tab

    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Categories" className='text-red'
  >
    <div>
    <h2> <Icon medium className="red-text">
    queue
</Icon> Categories </h2>
 <p className="tab-text"> A brand is the promise of an experience. 
   Our services ranges from online chat and calls <br/>
   with the medical practitioners and possible one on one physical sessions.
  </p>
  <br/>
</div>
    <img src="./blackdoctor.jpg" className="tab-pics" />
  </Tab>
  {/* <Tab

    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 4"
  >
  </Tab> */}
</Tabs>
        </Container>


</div>


    )
}

export default Index;