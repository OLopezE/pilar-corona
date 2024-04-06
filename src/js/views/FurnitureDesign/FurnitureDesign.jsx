import react, { useState } from 'react';

import {
  FurnitureDesignContainer,
  Content,
  Description,
  ImageGrid
} from "./FurnitureDesign.style";

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
        <Content>
          <Description>
            <p>
              El proyecto se enfoca en la creación de dos
              prototipos de sillones, tomando como fuente
              de inspiración el trabajo y la estética del
              renombrado arquitecto Eero Saarinen.
            </p>

            <p>
              Sus diseños en muebles se
              adaptaban a las formas del
              cuerpo humano, es por eso que se tomo como
              inspiración crear un diseño
              ergonómico y comódo, el
              cuál implementara el uso de
              curvas y arcos.
            </p>
          </Description>

          <ImageGrid>
            <img src={images[prototype].ladies[0]} alt="señorita sentada" />

            <img src={images[prototype].ladies[1]} alt="señorita sentada" />

            {images[prototype].renders?.map(image => (
              <img src={image} />
              ))}
          </ImageGrid>
        </Content>
      </div>
    </FurnitureDesignContainer>
  )
}

export default FurnitureDesign