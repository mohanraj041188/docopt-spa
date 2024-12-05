import { Link } from "@remix-run/react";
import "./footer.scss";

import { MailIcon, TwitterIcon, InstagramIcon } from "../../icons";

const socialLinks = [
  {
    href: "#",
    icon: MailIcon,
    label: "Sign In",
  },
  {
    href: "#",
    icon: TwitterIcon,
    label: "Twitter",
  },
  {
    href: "#",
    icon: InstagramIcon,
    label: "Instagram",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navigations">
        <p className="footer__copyright--text">© 2024 Doctor Opt.</p>
        <Link to="/terms" className="footer__navigations--items">
          <span className="footer__navigations--items_text">Terms of Use</span>
        </Link>
      </div>
      <div className="footer__navigations">
        {socialLinks.map((link, index) => (
          <Link
            to={link.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__navigations--items"
          >
            <span className="footer__navigations--items_text sr-only">
              {link.label}
            </span>
            <link.icon className="w-8 h-8" />
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
