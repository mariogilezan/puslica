import React from 'react';

import { GallerySection } from './GalleryStyles';

import img1 from '../../assets/gallery/img-1.jpg';
import img2 from '../../assets/gallery/img-2.jpg';
import img3 from '../../assets/gallery/img-3.jpg';
import img4 from '../../assets/gallery/img-4.jpg';
import img5 from '../../assets/gallery/img-5.jpg';
import img6 from '../../assets/gallery/img-6.jpg';
import img7 from '../../assets/gallery/img-7.jpg';
import img8 from '../../assets/gallery/img-8.jpg';
import img9 from '../../assets/gallery/img-9.jpg';

const images = [
  { src: img1, altText: 'img1' },
  { src: img2, altText: 'img2' },
  { src: img3, altText: 'img3' },
  { src: img4, altText: 'img4' },
  { src: img5, altText: 'img5' },
  { src: img6, altText: 'img6' },
  { src: img7, altText: 'img7' },
  { src: img8, altText: 'img8' },
  { src: img9, altText: 'img9' },
];

export default function Gallery() {
  return (
    <GallerySection id='galerija'>
      <h2>Galerija</h2>
      <div className='imagesWrapper'>
        {images.map((image) => (
          <div key={image.altText} className='imageWrapper'>
            <img src={image.src} alt={image.altText} />
          </div>
        ))}
      </div>
    </GallerySection>
  );
}
