import classes from "./ChaptersList.module.css";
import { useState, useEffect } from "react";
import firebase from "firebase/app";
import ChapterItem from "./ChapterItem";

function ChaptersList(props) {
  const [loading, isLoading] = useState(true);
  const [loadedChapters, setloadedChapters] = useState([]);
  const storage = firebase.storage();

  function modifyLoaded(value) {
    setloadedChapters(value);
  }

  useEffect(() => {
    isLoading(true);
    console.log("title:", props.data.title);
    const listImages = storage.ref(`mangas/${props.data.title}/chapters`);
    //`mangas/${props.title}/chapters/`
    listImages.listAll().then(function (res) {
      const chapters = [];
      res.prefixes.forEach(function (folderRef) {
        console.log("Prefix:", folderRef.name);
        const images = [];
        folderRef.listAll().then(function (res) {
          res.items.forEach(function (item) {
            item.getDownloadURL().then((url) => {
              const image = {
                key: item.name,
                url: url,
                name: item.name
              }
              images.push(image)
            })
          });
        });
        const chapter = {
          key: folderRef.name,
          title: folderRef.name,
          images: images,
        };
        chapters.push(chapter);
      });
      isLoading(false)
      modifyLoaded(chapters)
    });
  }, []); //The dependencies section must have an external value ex: props, the useState can be omitted

  if (loading) {
    return (
      <section>
        <h3>Loading Chapters...</h3>
      </section>
    );
  }
  return (
    <ul className={classes.list}>
      {loadedChapters.map((chapter) => (
        <ChapterItem
          key={chapter.title}
          title={chapter.title}
          images={chapter.images}
        />
      ))}
    </ul>
  );
}

export default ChaptersList;
