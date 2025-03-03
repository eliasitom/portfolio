import { useTranslation } from "react-i18next";
import "../stylesheets/ContactCard.css"

import { FaPhone, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



export const ContactCard = () => {
	const {t} = useTranslation()
	return (
		<div className="contact-me-card">
			<div className="about-me-header">
				<FaPhone />
				<h1>{t("common:contactMe.title")}</h1>
			</div>
			<p className="contact-me-description">
			{t("common:contactMe.description")}
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
			</div>
		</div>
	)
}