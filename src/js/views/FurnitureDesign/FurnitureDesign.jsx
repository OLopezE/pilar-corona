import react, { useState } from 'react';

import { FurnitureDesignContainer, ImageGrid } from "./FurnitureDesign.style";

import images from "./images";

const FurnitureDesign = () => {
  const [prototype, setPrototype] = useState('prototype1');

  return (
    <FurnitureDesignContainer>
      <div>
        <h2>DISEÑO MOBILIARIO Y 3D</h2>
        <button
          onClick={() => setPrototype(prototype === 'prototype1' ? 'prototype2' : 'prototype1')}
        >
          Ver {prototype === 'prototype1' ? 'prototipo B' : 'prototipo A'}
        </button>
        <ImageGrid>
          <img src={images[prototype].ladies[0]} alt="señorita sentada" />
          <img src={images[prototype].ladies[1]} alt="señorita sentada" />
          <p>El proyecto se enfoca en la creación de dos prototipos de sillones, tomando como fuente de inspiración el trabajo y la estética del renombrado arquitecto Eero Saarinen.</p>
          {images[prototype].renders?.map(image => (
            <img src={image} />
            ))}
        </ImageGrid>
      </div>
    </FurnitureDesignContainer>
  )
}

export default FurnitureDesign