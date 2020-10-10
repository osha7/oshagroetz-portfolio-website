import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import {ContactFun} from './contact-fun';

class Email extends React.Component {

    state = {
        feedback: '',
        name: '',
        email: ''
    }

    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's message entered to state
      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

      //onSubmit of email form
      handleSubmit = (event) => {
        // console.log("submit worked")
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'template_h7x50c1';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
            message: this.state.feedback, 
            name: this.state.name, 
            email: this.state.email
        })

        this.setState({
            feedback: '',
            name: '',
            email: ''
        }, console.log('here', this.state.feedback, this.state.name, this.state.email)
        )
      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables) => {
          console.log("sendFeedback", variables)
        emailjs.send('zteorGahsO', templateId, variables, 'user_cGJnhpvuTC2vsoVuv9E9n')
        .then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
          
      }
    
      render() {
        return (
          <form className="test-mailing" onSubmit={this.handleSubmit}>
            <br/>
            <div style={{fontSize: "1.2rem"}}>

              {/* <h6>Send me an email directly from here:</h6> */}
                <div>
                    <label htmlFor="name">Name</label>
                    <input className="form-control email-inputs" name="user_name" type="text" 
                    id="name" onChange={this.nameChange} value={this.state.name} required/>
              
                    <label htmlFor="email">Email</label>
                    <input className="form-control email-inputs" name="user_email" type="email"
                    id="email" onChange={this.emailChange} value={this.state.email} required/>
                </div>
                <br />
                <label htmlFor="message">Message</label>
                <div>
                    <textarea
                    id="message"
                    name="message"
                    onChange={this.messageChange}
                    placeholder="Tell me about it"
                    required
                    className="email-text-area form-control"
                    rows="15"
                    cols="20"
                    value={this.state.feedback}
                    />
                </div>

            </div>

            <input type="submit" value="Submit" className="btn btn-outline-light" />
            <br /><br /><br /><br /><br />
            {/* <ContactFun /> */}
          </form>
        )
      }
}

export default Email
