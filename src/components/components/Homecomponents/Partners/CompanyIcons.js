import React from "react";

class CompanyIcons extends React.Component{

    render(){
        var {image,delay}=this.props
        return(
        
            <li> <a href="/"><img className="img-responsive wow fadeInDown"
             alt="fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay={delay}
               src={image} /></a></li>
        

        );
    }
}

export default CompanyIcons;