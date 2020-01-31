import React, {Component} from 'react';
import LatesNews from '../components/Homecomponents/LatesNews/LatesNews';
import Data from '../components/Homecomponents/LatesNews/Data';
import Data2 from '../components/Homecomponents/IconEffect/Data2';
import IconEffect from '../components/Homecomponents/IconEffect/IconEffect';
import Partners from '../components/Homecomponents/Partners/partners';
import Mainfront from '../components/Homecomponents/Mainfront/Mainfront';
import Aboutus from '../components/Homecomponents/Aboutus/Aboutus';
import Contactinfo from '../components/Homecomponents/Contactinfo/Contactinfo';

class Home extends Component {

  
  render(){
  
    return(
        <div>
          {/*/#mainfront*/}
        <Mainfront/>
       {/*/LatesNews*/}
  <div className="feature">
     <div className="container">
        <div className="text-center">
          {
          Data2.map((Data2,i) => 
          <IconEffect delay={Data2.delay}
          icon={Data2.icon}
           title={Data2.title} 
           text={Data2.text} 
            key ={i}/>
          )
        }
      </div>
    </div>
  </div>
  <Aboutus/>
  <div className="lates">
    <div className="container">
      <div className="text-center">
        <h2>Lates News</h2>
      </div>
      
      
        {
          Data.map((Data,i) =>
          <LatesNews delay={Data.delay}
          image={Data.image}
            title={Data.title} 
             text={Data.text}
               key ={i}/>
          )
        }
        </div>
    </div>
  {/*/#partner*/}
 <Partners/>
  {/*//conatcat-info*/}
  <Contactinfo/>
  {/*//Footer*/}
</div>

        
    );
  }
}

export default Home;