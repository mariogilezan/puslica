import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { client } from '../../client';

import { HeroSection } from './HeroStyles';

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "hero"][0]{
        heading,
        subheading,
        image{
          altText,
          "src": asset->url
        }
      }
    `
      )
      .then((data) => {
        setHeroData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <HeroSection id='home'>
      <div className='heroImageWrapper'>
        {heroData && (
          <img
            src={`${heroData.image.src}?blur=50`}
            alt={heroData.image.altText}
          />
        )}
      </div>
      <div className='heroDetails'>
        <div className='heroText'>
          <h1>{heroData && heroData.heading}</h1>
          <h4>{heroData && heroData.subheading}</h4>
        </div>
        <div className='heroCtaButtons'>
          <Link
            to='cenovnik'
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Cenovnik
          </Link>
          <Link
            to='kontakt'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </HeroSection>
  );
}
