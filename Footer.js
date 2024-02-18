// src/components/Footer/Footer.js
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import pic from "./ProfilePic.jpg";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="Content">
        <img
          src={pic}
          alt="Logo"
          className="Logo"
          style={{ width: "40px", borderRadius: "50px" }}
        />
        <p className="Purpose">We Serve You For Your High Purpose</p>
        <div className="SocialMedia">
          <HoverableIcon
            link="https://www.facebook.com/Quadribola91/"
            icon={<FaFacebook color="#4267B2" />}
            name="Facebook"
          />
          <HoverableIcon
            link="https://www.instagram.com/omobolarinwa19/"
            icon={<FaInstagram color="#E4405F" />}
            name="Instagram"
          />
          <HoverableIcon
            link="https://www.linkedin.com/in/omobolarinwa-quadri-a207b3216/"
            icon={<FaLinkedin color="#0077B5" />}
            name="LinkedIn"
          />
          <HoverableIcon
            link="https://github.com/quadribola91"
            icon={<FaGithub color="#999" />}
            name="GitHub"
          />
          <HoverableIcon
            link="https://wa.me/+2349058824643"
            icon={<FaWhatsapp color="#25D366" />}
            name="WhatsApp"
          />
        </div>
      </div>
      <div className="Copyright">
        &copy; {currentYear} <em>HighCloud Inc</em>
      </div>
    </div>
  );
}

// New HoverableIcon component
function HoverableIcon({ link, icon, name }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="HoverableIcon"
    >
      {icon}
      <span className="IconName">{name}</span>
    </a>
  );
}

export default Footer;
