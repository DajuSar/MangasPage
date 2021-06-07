import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMangaForm.module.css";
import { useState } from "react";

function NewMangaForm(props) {
  const [image, setImage] = useState(null);

  const titleRef = useRef();
  const descriptionRef = useRef();
  
  function doSubmit(event) {
    event.preventDefault();

    const givenTitle = titleRef.current.value;
    const givenDescription = descriptionRef.current.value;

    const mangaData = {
      title: givenTitle,
      img: image,
      description: givenDescription,
    };

    props.addManga(mangaData);
    //we could send the request here but it is already pretty lod, so we are doing it in NewMeetUp
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]); 
    }
  };

  return (
    <div className={classes.container}>
      <Card id="form">
        <form className={classes.form} onSubmit={doSubmit}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              id="title"
              ref={titleRef}
              placeholder="Title"
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image Thumbnail</label>
            <input type="file" onChange={handleChange}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Manga Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Manga</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMangaForm;
