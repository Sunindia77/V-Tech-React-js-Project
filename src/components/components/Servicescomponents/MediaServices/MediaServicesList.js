import React from 'react';

class MediaServicesList extends React.Component {
    render(){
        var{symbol, title, text }=this.props
        return(
            <li>
            <div className="media-left">
              <i className={symbol} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{title}</h4>
                <p>{text}</p>
            </div>
          </li>
        );
    }
}

export default MediaServicesList;