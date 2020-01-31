import React from 'react';
import MediaServicesData from './MediaServicesData'
import MediaServicesList from './MediaServicesList'


const MediaComponent=()=>{

    return(
        <div className="media">
          <ul>
          {
              MediaServicesData.map((MediaServicesData,i) =>
              <MediaServicesList tooltip={MediaServicesData.tooltip}
              title={MediaServicesData.title}
              text={MediaServicesData.text}
              key ={i}
               />
              )
             }
          </ul>
        </div>
    )
}

export default MediaComponent;