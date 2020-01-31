import React from 'react';

class Portfolioitem extends React.Component{

  render(){
      var {image, title, text }=this.props
    
      return(
        <div className="portfolio-item apps col-xs-12 col-sm-4 col-md-3">
            <div className="recent-work-wrap">
              <img className="img-responsive" src={image} alt="" />
              <div className="overlay">
                <div className="recent-work-inner">
                      <h3><a href="/">{title}</a></h3>
                       <p>{text}</p>
                  <a className="preview" href={image} rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
                </div>
              </div>
            </div>
          </div>

    );
  }
}

export default Portfolioitem;