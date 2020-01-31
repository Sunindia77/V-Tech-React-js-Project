import React from 'react';
import OurteamList from '../components/Aboutcomponents/Ourteam/OurteamList'
import OurteamData from '../components/Aboutcomponents/Ourteam/OurteamData'
import OurcompanyInfo from '../components/Aboutcomponents/OurcompanyInfo/OurcompanyInfo'
import OurSkill from '../components/Aboutcomponents/OurSkill/OurSkill'
import OurskillData from '../components/Aboutcomponents/OurSkill/OurskillData'
const About = ()=>{
    return(
        <div>
  <div id="breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li>About Us</li>
      </div>
    </div>
  </div>
  <div className="aboutus">
    <div className="container">
      <h3>Our company information</h3>
      <hr />
      <OurcompanyInfo/>
      <div className="col-md-5 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
        <div className="skill">
          <h2>Our Skills</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {
            OurskillData.map((OurskillData,i)=>
            <OurSkill title={OurskillData.title}
            color={OurskillData.color}
            value={OurskillData.value}
            stylepercent={OurskillData.stylepercent}
            widthpercent={OurskillData.widthpercent}
            key={i}
            />
            )
          }
        
        </div>
      </div>
    </div>
  </div>
  <div className="our-team">
    <div className="container">
      <h3>Our Team</h3>
      <div className="text-center">
        {OurteamData.map((OurteamData,i) =>
        <OurteamList
        delay={OurteamData.delay}
        image={OurteamData.image}
        title={OurteamData.title}
        text={OurteamData.text}
        key={i} />
        )
        }
      </div>
    </div>
  </div>
  
</div>
 
    );
}

export  default About;