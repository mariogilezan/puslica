import React from 'react';
import { PonudaSection } from './PonudaStyles';
import torteImg from '../../assets/torte.jpg';
import kolaciImg from '../../assets/kolaci.jpg';
import pecivaImg from '../../assets/peciva.jpg';

export default function Ponuda() {
  return (
    <PonudaSection id='ponuda'>
      <h2>Ponuda</h2>
      <div className='cardsWrapper'>
        <div className='card'>
          <img src={torteImg} alt='torte' />
          <h5>Torte</h5>
        </div>
        <div className='card'>
          <img src={kolaciImg} alt='kolaci' />
          <h5>Kolači</h5>
        </div>
        <div className='card'>
          <img src={pecivaImg} alt='peciva' />
          <h5>Slana Peciva</h5>
        </div>
      </div>
    </PonudaSection>
  );
}
