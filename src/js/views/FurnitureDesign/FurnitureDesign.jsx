import { FurnitureDesignContainer, ImageGrid } from "./FurnitureDesign.style";

import images from "./images";

const FurnitureDesign = () => {
  return (
    <FurnitureDesignContainer>
      <div>
        <h2>DISEÑO MOBILIARIO Y 3D</h2>
        <ImageGrid>
          {images.map(image => (
            <img src={image.url} key={image.name} />
            ))}
        </ImageGrid>
      </div>
    </FurnitureDesignContainer>
  )
}

export default FurnitureDesign