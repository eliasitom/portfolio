import "../stylesheets/ContactCard.css"

import { FaPhone, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



export const ContactCard = () => {
	return (
		<div className="contact-me-card">
			<div className="about-me-header">
				<FaPhone />
				<h1>Contact me</h1>
			</div>
			<p className="contact-me-description">
				If you are intrested in hiring me, call me, email me or connect and chat with me via LinkedIn!
			</p>
			<div className="contact-me-methods">
				<div>
					<FaLinkedin />
					<p>Elias Espondaburu</p>
				</div>
				<div>
					<MdEmail />
					<p>eliasespondaburucontacto0@gmail.com</p>
				</div>
				<div>
					<FaPhone />
					<p>+59897221999</p>
				</div>
			</div>
		</div>
	)
}