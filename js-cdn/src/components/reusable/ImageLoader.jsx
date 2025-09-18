import { useState, useEffect } from "https://esm.sh/react@^18.3.1";
import PropTypes from "https://esm.sh/prop-types@^15.8.1?deps=react@^18.3.1,react-dom@^18.3.1";
import RLLI from "https://esm.sh/react-lazy-load-image-component@^1.6.2?deps=react@^18.3.1,react-dom@^18.3.1";
const { LazyLoadImage } = RLLI;
function ImageLoader({ src, alt, loading, width, height, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log("Image has loaded."); // Debugging line
    setImageLoaded(true);
  };

  useEffect(() => {
    console.log("Component rendered. Image loaded state:", imageLoaded);
  }, [imageLoaded]);

  return (
    <div className="relative">
      {!imageLoaded && (
        <div
          className={`bg-gray-200 border shadow-sm animate-pulse ${className}`}
          style={{ width: width, height: height }}
        >
          {/* <p>Loading...</p> */}
        </div>
      )}

      {/* <div style={{ display: imageLoaded ? "block" : "none" }}> */}
      {/* <img
                    className={className}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                    onLoad={handleImageLoad}
                /> */}
      <LazyLoadImage
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {/* </div> */}
    </div>
  );
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  loading: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default ImageLoader;
