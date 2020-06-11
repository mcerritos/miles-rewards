import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const type = "Image";

const Image = ({ image, index, moveImage }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: type,
        hover(item) {
            if (!ref.current) {
                return;
              }
              const dragIndex = item.index;
              const hoverIndex = index;
              if (dragIndex === hoverIndex) { 
                return;
              }
              moveImage(dragIndex, hoverIndex);
              item.index = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type, id: image.id, index },
        collect: monitor => ({
        isDragging: monitor.isDragging()
        })
    });
  
    drag(drop(ref));

    return (
      <div ref={ref} className="file-item"
      style={{ opacity: isDragging ? 0 : 1 }} >

        <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
      </div>
    );
  };
  
  // ImageList Component
  const ImageList = ({ images }) => {
    
    // render each image by calling Image component
    const renderImage = (image, index) => {
      return (
        <Image
          image={image}
          key={`${image.id}-image`}
        />
      );
    };
  
    // Return the list of files
    return <section className="file-list">{images.map(renderImage)}</section>;
  };
  
  export default ImageList;