import { useRef } from "react";
import Card from "../ui/Card";
import classes from "../mangas/NewMangaForm.module.css";
import { useState } from "react";

function NewChapterForm(props) {
  console.log("propsForm:", props.data);
  const [images, setImages] = useState([]);

  const titleRef = useRef();
  const passwordRef = useRef();

  function doSumbit(event) {
    event.preventDefault();
    const givenTitle = titleRef.current.value;
    const givenPass = passwordRef.current.value;

    if (givenPass === "NeNpTeA") {
      const chapterData = {
        title: givenTitle,
        images: images,
      };

      props.addChapters(chapterData);
    } else {
      alert("¿Que intentas hacer?");
    }
  }

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  return (
    <div className={classes.container}>
      <Card id="form">
        <form className={classes.form} onSubmit={doSumbit}>
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
            <input type="file" multiple onChange={handleChange}></input>
            <input
              type="password"
              required
              id="password"
              ref={passwordRef}
              placeholder="Contraseña"
            ></input>
          </div>
          <div className={classes.actions}>
            <button>Add Chapter</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewChapterForm;
