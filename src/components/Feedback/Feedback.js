import React from 'react'
import './Feedback.css'
import axiosInstance from '../axios'


class Feedback extends React.Component {
    state = {
        message: '',
        messageStatus: ''
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendEmail = (event) => {

        event.preventDefault();
        var { message } = this.state;

        this.setState(() => {
            return {
                messageStatus: 'neutral'
            }
        })
        if (message !== '') {
            axiosInstance.post('/mail',{
                userEmail: 'anoopjadhav@gmail.com',
                userMessage: "Message : " + message
            }).then((response) => {

                this.setState(() => {
                    return {
                        messageStatus: 'success'
                    }
                })

                if (response.data.msg === 'success') {
                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageStatus: '',
                                message: ''
                            }
                        })
                        this.resetForm()
                    }, 3000)

                } else if (response.data.msg === 'fail') {

                    this.setState(() => {
                        return {
                            messageStatus: 'failed'
                        }
                    })

                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageStatus: ''
                            }
                        })
                    }, 3000)

                }
            }).catch(err => {
                this.setState(() => {
                    return {
                        messageStatus: 'failed'
                    }
                })

                setTimeout(() => {
                    this.setState(() => {
                        return {
                            messageStatus: ''
                        }
                    })
                }, 3000)

            })
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return <div className={"show-on-scroll col-md-7 page-1 text-left section feedback " + this.props.class}>
            <div className="section-title grey4 h2 bold">Feedback</div>
            <form id="contact-form" className="subsection" onSubmit={this.sendEmail.bind(this)} method="POST">
                {this.state.messageStatus === 'success' && <div className="default-text success-banner mb-2">Thank you for your feedback</div>}
                {this.state.messageStatus === 'failed'  && <div className="default-text error-banner mb-2">Sorry Couldn't send your message. Please try again later.</div>}
                {this.state.messageStatus === 'neutral'  && <div className="default-text neutral-banner mb-2">Submitting your feedback...</div>}

                <div className="subsection-data">
                    <div className="subsection-title body-text letterspacing-1">Please provide a constructive feedback.</div>
                    <div className="red body-text mt-2">
                        <textarea className="" type="type" name="message" placeholder={this.state.message} onChange={this.handleChange} />
                    </div>

                    <div className="text-left mt-3"><button type="submit">Send</button></div>
                </div>
            </form>
        </div>
    }

}

export default Feedback;
