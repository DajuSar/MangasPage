import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShowImage from "./ShowImage";

function ShowChapter(props) {
  const [loading, isLoading] = useState(true);
  const [loadedImages, setloadedImages] = useState([]);
  const location = useLocation();
  const actualProps = location.state.data;

  function modifyLoaded(value) {
    setloadedImages(value);
  }

  useEffect(() => {
    const images = location.data.images;
    //console.log("What is Images:", images);
    var result = new Map(images.map((obj) => [obj.key, obj.url]));
    var mapAsc = new Map(
      [...result].sort((a, b) => String(a[0]).localeCompare(b[0]))
    );
    let i = 0;
    const toUpload = [];
    mapAsc.forEach((element) => {
      const image = {
        key: i,
        url: element,
      };
      toUpload.push(image);
      i++;
    });
    modifyLoaded(toUpload);
    isLoading(false);
  }, []); //The dependencies section must have an external value ex: props, the useState can be omitted

  if (loading) {
    return (
      <section>
        <h1>Loading Images...</h1>
      </section>
    );
  }
  return (
    <div>
      <h1>{actualProps}</h1>
      <ShowImage images={loadedImages}/>
    </div>
  );
}

export default ShowChapter;
