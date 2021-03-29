import React from 'react'
import './Contact.css'
import axios from 'axios'
import ContactIcons from '../ContactIcons/ContactIcons'

class Contact extends React.Component {
    state = {
        email: '',
        message: '',
        messageSent: false,
        messageFailure: false
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendEmail = (event) => {

        event.preventDefault();
        var { email, message } = this.state;

        if (email !== '' && message !== '') {

            axios({
                method: "post",
                url: "/mail",
                data: {
                    userName: email,
                    userEmail: 'anoopjadhav@gmail.com',
                    userMessage: "User Email ID : " + email + "  Message : " + message
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }

            }).then((response) => {

                this.setState(() => {
                    return {
                        messageSent: true
                    }
                })

                if (response.data.msg === 'success') {
                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageSent: false
                            }
                        })
                        this.resetForm()
                        this.setState(() => {
                            return {
                                email: '',
                                message: ''
                            }
                        })
                    }, 3000)

                } else if (response.data.msg === 'fail') {

                    this.setState(() => {
                        return {
                            messageFailure: true
                        }
                    })

                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageFailure: false
                            }
                        })
                    }, 3000)


                    alert("Message failed to send.");
                }
            })
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return <div className={"show-on-scroll col-md-7 page-1 text-left section contactme " + this.props.class}>
            <div className="section-title grey4 h2 bold">Contact Details</div>

            <div className="subsection">
                <div>Reach out to me on Email/LinkedIn or checkout some of my work on Instagram/Github -</div>
                <ContactIcons data={this.props.dbData}/>
            </div>

        </div>
    }

}

export default Contact;