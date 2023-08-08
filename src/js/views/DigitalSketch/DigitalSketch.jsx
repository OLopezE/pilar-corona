import images from './images';
import { DigitalSketchLayout, ImageGrid } from './DigitalSketch.style';

const DigitalSketch = () => {
  return (
    <DigitalSketchLayout>
      <div>
        <h2>POSTER SKETCH DIGITAL</h2>
        <ImageGrid>
          {images.map(image => (
            <img src={image.url} key={image.name} />
            ))}
        </ImageGrid>
      </div>
    </DigitalSketchLayout>
  )
}

export default DigitalSketch