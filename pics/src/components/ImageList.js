import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ imageList }) {
  const renderedImageList = imageList.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImageList}</div>;
}

export default ImageList;
