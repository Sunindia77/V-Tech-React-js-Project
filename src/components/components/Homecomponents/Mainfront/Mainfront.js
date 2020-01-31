import React from 'react';
import  CustomButton from '../../../CustomButton/CustomButton';
const Mainfront =()=>{
    return(
        <section id="main-slider" 
        className="no-margin">
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="item active" 
        style={{backgroundImage: 'url(images/slider/bg1.jpg)'}}>
          <div className="container">
            <div className="row slide-margin">
              <div className="col-sm-6">
                <div className="carousel-content">
                  <h2 className="animation animated-item-1">Welcome <span>V-Tech</span></h2>
                  <p className="animation animated-item-2">
                    Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                    <CustomButton className= "btn-slide animation animated-item-3" >Read More </CustomButton>
                </div>
              </div>
              <div className="col-sm-6 hidden-xs animation animated-item-4">
                <div className="slider-img">
                  <img src="images/slider/img3.PNG" 
                  alt="fadeInDown" 
                  className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.item*/}
      </div>
      {/*/.carousel-inner*/}
    </div>
    {/*/.carousel*/}
  </section>

        );
}

export default Mainfront;