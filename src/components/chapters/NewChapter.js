import { useLocation } from "react-router-dom";
import NewChapterForm from "./NewChapterForm";
import firebase from "firebase/app";

function NewChapter(props) {

  const location = useLocation();
  const actualProps = location.state.data;
  const storage = firebase.storage();

  function addChapters(chaptersData) {
    //console.log(chaptersData.images);
    //console.log("ref:", storage.ref());
    //console.log("actualTitle:", actualProps.title);
    //console.log("chaptersTitle:", chaptersData.title);
    for (let i = 0; i < chaptersData.images.length; i++) {
      const currentImage = chaptersData.images[i];
      //console.log("image Name:", currentImage.name);
      const uploadTask = storage
        .ref(
          `mangas/${actualProps.title}/chapters/${chaptersData.title}/${currentImage.name}`
        )
        .put(currentImage);
      uploadTask.on(
        "state changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("mangas")
            .child(currentImage.name)
            .getDownloadURL()
            .then((url) => {});
        }
      );
    }
    alert("All Images uploaded succesfully");
  }

  return (
    <section>
      <h1>Add a new Chapter for {actualProps.title}</h1>
      <NewChapterForm data={actualProps} addChapters={addChapters} />
    </section>
  );
}

export default NewChapter;
