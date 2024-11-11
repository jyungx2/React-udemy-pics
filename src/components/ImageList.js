import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

// Requirements for Keys
// 1. Use whenever we have a list of elements.
// 2. Add the key to the 🌟top-most🌟 JSX element in the list.
// 3. Must be a string or number. (❌ array or object ❌)
// 4. Should be unique for this list.
// 5. Should be consistent across rerenders.
