import { useEffect, useState } from 'react';
import { client } from '../../client';

import { GallerySection } from './GalleryStyles';

export default function Gallery() {
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "galerija"][0]{
        imageGallery{
          images[]{
            "id": asset->assetId,
            altText,
            "src": asset->url
          }
        }
      }
    `
      )
      .then((data) => {
        setGalleryData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <GallerySection id='galerija'>
      <h2>Galerija</h2>
      <div className='imagesWrapper'>
        {galleryData?.imageGallery.images &&
          galleryData?.imageGallery.images.map((image) => (
            <div key={image.altText} className='imageWrapper'>
              <img src={image.src} alt={image.altText} />
            </div>
          ))}
      </div>
    </GallerySection>
  );
}
