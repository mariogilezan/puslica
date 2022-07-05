import { useState, useEffect } from 'react';
import sanityClient from '../../client';

import { FooterSection } from './FooterStyles';

import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';

import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "footer"][0]{
          adresa,
          brojTelefona
        }
      `
      )
      .then((data) => {
        setFooterData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <FooterSection id='kontakt'>
      <div className='contactWrapper'>
        <h2>
          <span>Puslica</span> MB
        </h2>
        <p>
          <BusinessIcon /> {footerData && footerData.adresa}
        </p>
        <p>
          <PhoneIcon />
          {footerData && <a href='tel:0693322010'>{footerData.brojTelefona}</a>}
        </p>
      </div>
      <div className='socialsWrapper'>
        <h5>Pratite nas na:</h5>
        <a
          href='https://www.facebook.com/puslica.vrsac/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={facebookIcon} alt='facebook icon' />
        </a>
        <a
          href='https://www.instagram.com/puslica_mb/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagramIcon} alt='instagram icon' />
        </a>
      </div>
      <div className='copyrightWrapper'>
        <p>
          &copy; {currentYear} <span>Puslica</span> MB. Sva prava zadržana.
        </p>
      </div>
    </FooterSection>
  );
}
