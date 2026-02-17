import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {Linkedin, Twitter, Github, Globe} from 'lucide-react';

const LOGO_URL =
  'https://github.com/sheridanwendt/docs.advantagelabs.ai/blob/main/public/logo%20Advantage%20Labs.webp?raw=true';

const footerLinks = [
  {label: 'Getting Started', to: '/docs/intro'},
  {label: 'Onboarding', to: '/docs/onboarding/google-business-profile'},
];

const socialLinks: {label: string; href: string; icon: ReactNode}[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/advantagelabs',
    icon: <Linkedin />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/advantagelabs',
    icon: <Twitter />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sheridanwendt',
    icon: <Github />,
  },
  {
    label: 'Website',
    href: 'https://advantagelabs.ai',
    icon: <Globe />,
  },
];

export default function Footer(): ReactNode {
  return (
    <footer className="custom-footer">
      {/* Top glow line */}
      <div className="custom-footer__glow" />

      <div className="custom-footer__container">
        {/* Left: Logo + Links */}
        <div className="custom-footer__left">
          <img
            src={LOGO_URL}
            alt="Advantage Labs"
            className="custom-footer__logo"
            loading="lazy"
          />
          <nav className="custom-footer__links">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="custom-footer__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Social Icons */}
        <div className="custom-footer__right">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="custom-footer__social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="custom-footer__bottom">
        Copyright &copy; {new Date().getFullYear()} Advantage Labs. Built with
        Docusaurus.
      </div>
    </footer>
  );
}
