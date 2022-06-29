import { HeroSection } from './HeroStyles';
import heroImage from '../../assets/hero.jpg';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <HeroSection id='home'>
      <div className='heroImageWrapper'>
        <img src={heroImage} alt='hero img' />
      </div>
      <div className='heroDetails'>
        <div className='heroText'>
          <h1>Puslica</h1>
          <h4>Torte • Kolači • Slana Peciva</h4>
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
