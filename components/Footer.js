import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import {
  FooterContainer,
  Logo,
  ContactInfo,
  SocialMediaIcons,
  Legal,
  SocialMediaIcon,
} from './StyledFooter';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src='/path/to/your/logo.png' alt='Your Logo' />
      <ContactInfo>
        <p>Vaše Jméno</p>
        <p>123 Ulice, Město, PSČ</p>
        <p>Telefon: 123-456-789</p>
        <p>Email: email@example.com</p>
        <p>IČO: 12345678</p>
      </ContactInfo>

      <Legal>© 2023 Your Name. Všechna práva vyhrazena.</Legal>
    </FooterContainer>
  );
};

export default Footer;
