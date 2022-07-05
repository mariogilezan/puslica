import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import { PonudaSection } from './PonudaStyles';

export default function Ponuda() {
  const [ponudaData, setPonudaData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "ponuda"] | order(red){
        _id,
        title,
        image{
          altText,
          "src": asset->url
        }
      }
    `
      )
      .then((data) => {
        setPonudaData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <PonudaSection id='ponuda'>
      <h2>Ponuda</h2>
      <div className='cardsWrapper'>
        {ponudaData &&
          ponudaData.map((ponuda) => (
            <div className='card' key={ponuda._id}>
              <img src={ponuda.image.src} alt={ponuda.image.altText} />
              <h5>{ponuda.title}</h5>
            </div>
          ))}
      </div>
    </PonudaSection>
  );
}
