import React from "react";
import classes from "./ShowImage.module.css";
import { useState, useEffect } from "react";

function ShowImage(props) {
  console.log(props.images);
  const [images, setImages] = useState([]);
  const [loading, isLoading] = useState(true);

  function modify(params) {
    setImages(params);
  }

  useEffect(() => {
    const values = [];
    for (let i = 0; i < props.images.length; i++) {
      const image = props.images[i];
      values.push(image);
    }
    modify(values);
    isLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading Images...</h1>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.imagesContainer}>
        {images.map((slide, index) => {
          {
            return (
              <img src={slide.url} alt="image 01" className={classes.image} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ShowImage;
