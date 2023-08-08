import { FurnitureDesignContainer, ImageGrid } from "./FurnitureDesign.style";

import images from "./images";

const FurnitureDesign = () => {
  const [ woman1, woman2, ...restImages] = images;

  return (
    <FurnitureDesignContainer>
      <div>
        <h2>DISEÑO MOBILIARIO Y 3D</h2>
        <ImageGrid>
          <img src={woman1.url} key={woman1.name} />
          <img src={woman2.url} key={woman2.name} />
          <p>El proyecto se enfoca en la creación de dos prototipos de sillones, tomando como fuente de inspiración el trabajo y la estética del renombrado arquitecto Eero Saarinen.</p>
          {restImages.map(image => (
            <img src={image.url} key={image.name} />
            ))}
        </ImageGrid>
      </div>
    </FurnitureDesignContainer>
  )
}

export default FurnitureDesign