import React, { useState } from 'react';

import { navLinks } from '../../utils/navLinks';
import { NavLink } from './MobileNavbarStyles';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const boxStyles = {
    height: '100%',
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const listStyles = {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  };

  const list = () => (
    <Box sx={boxStyles} role='presentation'>
      <List sx={listStyles}>
        {navLinks.map((link) => (
          <ListItem key={link.name}>
            <NavLink
              activeClass='active'
              to={link.to}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              onClick={toggleMenu(false)}
            >
              {link.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton aria-label='menu' onClick={toggleMenu(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}
