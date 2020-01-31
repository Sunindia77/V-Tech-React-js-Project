import React from 'react';
import CustomButton from '../../CustomButton/CustomButton'

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit(event) {
    alert('Your message has been sent. Thank you!: ' + event.target);
    event.preventDefault();
  }

  render() {
    const { displayName, email, text, message } = this.state;
    return (
  
        <section id="contact-page">
        <div className="container">
          <div className="center">
            <h2>Drop Your Message</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row contact-wrap">
            <div className="status alert alert-success" style={{display: 'none'}} />
            <div className="col-md-6 col-md-offset-3">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form  className="contactForm" onSubmit={this.handleSubmit}>>

                <div className="form-group">

                  <input type="text" 
                  name="displayName" 
                  className="form-control"
                  placeholder="Your Name" 
                  data-rule="minlen:4" 
                  data-msg="Please enter at least 4 chars"
                  value={displayName}
                  onChange={this.handleChange} 
                  required/>
                  <div className="validation" />
                </div>

                <div className="form-group">
                  <input type="email" 
                  name="email"
                  required 
                  className="form-control"
                  placeholder="Your Email" 
                  data-rule="email" 
                  data-msg="Please enter a valid email" 
                  value={email}
                  onChange={this.handleChange}/>
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <input type="text"  
                  name="subject"  
                  className="form-control"
                  placeholder="Subject" 
                  data-rule="minlen:4" 
                  data-msg="Please enter at least 8 chars of subject"
                  value={text}
                  onChange={this.handleChange} />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <textarea 
                  name="message" 
                  className="form-control"
                  label="Message"
                  rows={5} 
                  data-rule="required" 
                  data-msg="Please write something for us" 
                  placeholder="Message" 
                  value={message}
                  onChange={this.handleChange}/>
                  <div className="validation" />
                </div>
                <div className="text-center">
                <CustomButton className= "btn btn-primary btn-lg" >Submit Message </CustomButton>
                  </div>
                  
              </form>
            </div>
          </div>
          
        </div>
       
      </section>
  
    );
  }
}

export default Form;