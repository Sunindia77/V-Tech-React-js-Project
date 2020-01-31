import React from 'react';
import ImgData from './ImgData';
import CompanyIcons from './CompanyIcons';
const Partners =()=>{
    return(
        <section id="partner">
        <div className="container">
          <div className="center wow fadeInDown">
            <h2>Our Partners</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className="partners">
            <ul>
            {
          ImgData.map((ImgData,i) =>
          <CompanyIcons image={ImgData.image}
          delay={ImgData.delay}
          key ={i}
               />
          )
        }
            </ul>
          </div>
        </div>
        {/*/.container*/}
      </section>
    );
}

export default Partners;