import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import Navbar from '../components/navbar/NavBar';
import Footers from '../components/navbar/Footer';


function Contact () {

        const sendMail = (e) => {
		e.preventDefault();
		const mrSubject = e.target.querySelector('.mr-contact-subject').value;
		const mrMessage = e.target.querySelector('.mr-contact-message').value;
		if (mrSubject && mrMessage) {
		  const link = `mailto:snehajjayaprakash@gmail.com?subject=${mrSubject}&body=${mrMessage}`;
		  window.open(link);
		  e.target.reset();
		}
	  };
	
	  return (
		<div>
			<Navbar></Navbar>
		<div className="mr-contact-container">
		  <div className="mr-contact-inner">
			<div className="hea">
			Contact Us
			</div>
			<br></br>
			<div className="topic">
			Whatever your question, we’re here to help.
			<br></br>
			<br></br>Don't be shy to contact us. We would love to hear from you! We are just an email away.<br></br>
			<br></br>Please, use the form below to get in touch. You will hear back from us within one day.
		  </div>
		  </div>
		  <form className="mr-contact-inner2" onSubmit={sendMail}>
			<input className="mr-contact-subject" type="text" placeholder="Subject" required />
			<textarea className="mr-contact-message" placeholder="Your Message" required />
			<input type="submit" value="Submit" />
			<div className="mr-contact-social">
			  <a style={{ '--color': '#00acee' }} href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' rel='nofollow noreferrer' role='button' target='_blank'>
				<FontAwesomeIcon icon={faTwitter} />
			  </a>
			  <a style={{ '--color': '#c4302b' }} href='https://www.youtube.com/' rel='nofollow noreferrer' role='button' target='_blank'>
				<FontAwesomeIcon icon={faYoutube} />
			  </a>
			  <a style={{ '--color': 'rgb(228, 64, 95)F' }} href='https://www.instagram.com/' rel='nofollow noreferrer' role='button' target='_blank'>
				<FontAwesomeIcon icon={faInstagram} />
			  </a>
			</div>
		  </form>
		</div>
		<Footers></Footers>
		</div>
	  );
	}
	export default Contact; 