import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { NavContainer, Nav } from './NavbarStyles';

import { getWidth } from '../../utils/getWidth';
import { navLinks } from '../../utils/navLinks';
import MobileNavbar from '../MobileNavbar';

export default function Navbar() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Nav>
      <NavContainer>
        <Link
          to='home'
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className='logo'
        >
          <img src={logo} alt='logo' />
        </Link>
        {width > 600 ? (
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <MobileNavbar />
        )}
      </NavContainer>
    </Nav>
  );
}
