import React from 'react';

class ourteamList extends React.Component{

  render(){
      var {title, color, value, stylepercent,  widthpercent }=this.props
      
      return(
        <div className="progress-wrap">
          <h3>{title}</h3>
            <div className="progress">
              <div className= {color} 
                role="progressbar"
                aria-valuenow={value} 
                aria-valuemin={0} 
                aria-valuemax={100} 
                style={{width:stylepercent }}>
            <span className="bar-width">{widthpercent}</span>
              </div>
            </div>
          </div>

    );
  }
}

export default ourteamList;