import React from "react";

class IconEffect extends React.Component{

    render(){
        var {delay, icon, title, text}=this.props
        return(
            
                <div className="col-md-3">
             <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay={delay} justify-content="center">
            <i className= {icon} />
             <h3>{title}</h3>
             <p>{text}</p>
             </div>
             </div>
             
            
             
             
              
               

        );
    }
}

export default IconEffect;