import React from 'react';
import Dataicon from './Dataicon';
import Socialicon from './Socialicon';

const Footer= ()=>{

    return(
        <div>
         <div className="footer">
          <div className="container">
           <div className="social-icon">
            <div className="col-md-4">
              <ul className="social-network">
              
             {
              Dataicon.map((Dataicon,i) =>
              <Socialicon tooltip={Dataicon.tooltip}
              title={Dataicon.title}
              icon={Dataicon.icon}
              key ={i}
               />
              )
             }
            
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <div className="copyright">
            © V-Tech. All Rights Reserved.
            
          </div>
        </div>
      </div>
      <div className="pull-right">
        <a href="#home" className="scrollup"><i className="fa fa-angle-up fa-3x" /></a>
      </div>
    </div>
</div>
    );
}

export default Footer;