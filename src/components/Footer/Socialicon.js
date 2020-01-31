import React from "react";

class socialicon extends React.Component{

    render(){
        var {tooltip, title, icon}=this.props
        return(<li>
                   <a href="/" className={tooltip} title={title}> 
                       <i className={icon} />
                    </a>
                </li>
        );
    }
}

export default socialicon;