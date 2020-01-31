import React from 'react';
import  CompanyServices from'../components/Servicescomponents/CompanyServices/CompanyServices'
import MediaComponent from  '../components/Servicescomponents/MediaServices/MediaComponent'
const Navbar=()=>{
return(
    <div>
  <div id="breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li>Services</li>
      </div>
    </div>
  </div>
  <div className="services">
    <div className="container">
    <h3>Company Services</h3>
        <hr />
       {/*Company services*/}
     <CompanyServices/>

     {/*mediaServices */}
      <div className="col-md-6">
        <MediaComponent/>
      </div>
    </div>
  </div>
  <div className="sub-services">
    <div className="container">
      <div className="col-md-6">
        <div className="media">
          <ul>
         <MediaComponent/>
          </ul>
        </div>
      </div>
      {/*Company services 2*/}
      <CompanyServices/>
    </div>
  </div>
  
</div>

);
}
export default Navbar;