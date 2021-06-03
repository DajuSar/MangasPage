import NewMangaForm from "../components/mangas/NewMangaForm";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";

function NewManga() {
  const history = useHistory();
  const storage = firebase.storage();
  function addMangaData(mangaData) {
    //We can modify the url, adding segments (tables). In this case we are creating meetups ALWAYS .json!!!
    fetch("https://mangasite-b13fa-default-rtdb.firebaseio.com/mangas.json", {
      method: "POST",
      body: JSON.stringify(mangaData), //converts to JSON format anything
      headers: { "Content-Type": "application/json" }, //some API requiere this, it just states that we are passing a JSN file
    }).then(() => {
      console.log(mangaData.img);
      const uploadTask = storage
        .ref(`mangas/${mangaData.title}/thumbnail/${mangaData.img.name}`)
        .put(mangaData.img);
      uploadTask.on(
        "state changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("mangas")
            .child(mangaData.img.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
            });
        }
      );
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add a new Manga</h1>
      <NewMangaForm addManga={addMangaData} />
    </section>
  );
}

export default NewManga;
