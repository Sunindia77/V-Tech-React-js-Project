import React from 'react';

class ourteamList extends React.Component{

  render(){
      var {delay, image, title, text}=this.props
      return(
          
        <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay={delay}>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

    );
  }
}

export default ourteamList;