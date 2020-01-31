import React from 'react';
import Portfolioitem from '../components/Portfoliocomponents/Portfolioitem/Portfolioitem';
import Portfolioitemdata from '../components/Portfoliocomponents/Portfolioitem/Portfolioitemdata';

const Portfolio=()=>{
return(
    <div>
  <div id="breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li>Portfolio</li>
      </div>
    </div>
  </div>
  <section id="portfolio">
    <div className="container">
      <div className="center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
      </div>
      <ul className="portfolio-filter text-center">
        <li><a className="btn btn-default active" href="/" data-filter="*">All Works</a></li>
        <li><a className="btn btn-default" href="/" data-filter=".bootstrap">Creative</a></li>
        <li><a className="btn btn-default" href="/" data-filter=".html">Photography</a></li>
        <li><a className="btn btn-default" href="/" data-filter=".wordpress">Web Development</a></li>
      </ul>
      {/*/#portfolio-filter*/}
    </div>
    <div className="container">
      <div className>
        <div className="portfolio-items">
           {/*/.portfolio-item*/}
        {
          Portfolioitemdata.map((Portfolioitemdata,i) => 
          <Portfolioitem 
          image={Portfolioitemdata.image}
           title={Portfolioitemdata.title} 
           text={Portfolioitemdata.text} 
            key ={i}/>
          )
        }
         
        </div>
      </div>
    </div>
  </section>
  {/*/#portfolio-item*/}
  
</div>

);
}
export default Portfolio;