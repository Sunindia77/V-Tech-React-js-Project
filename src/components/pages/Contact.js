import React from 'react';
import Form from '../components/Contactcomponents/Form';

const Contact=()=>{
return(<div>
    <div id="breadcrumb">
      <div className="container">
        <div className="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li>Contact</li>
        </div>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.008781851497!2d73.87222351392674!3d18.528505287404347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05916a244b1%3A0x429e4d0f8ccc2a82!2sPune%20Station!5e0!3m2!1sen!2sin!4v1578747668169!5m2!1sen!2sin" title='maps' width="100%" height={380} frameBorder={0} style={{border: 0}} allowFullScreen />
    </div>
   <Form/>
   
  </div>
  
);
}

export default Contact;