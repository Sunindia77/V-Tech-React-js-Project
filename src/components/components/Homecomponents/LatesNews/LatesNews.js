import React from "react";

class LatesNews extends React.Component{

    render(){
        var {delay, image, title, text}=this.props
        return(
          
            <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay={delay}>
            <img src={image} alt="imgs" className="img-responsive" />
             <h3>{title}</h3>
             <p>{text}</p>
             
             </div>

        );
    }
}

export default LatesNews;