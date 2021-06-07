import NewMangaForm from "../components/mangas/NewMangaForm";
import firebase from "firebase/app";

function NewManga() {
  const storage = firebase.storage();

  function writeThumbnail(img, id) {
    firebase
      .database()
      .ref("mangas/" + id + "/thumbnail")
      .set({
        name: img.name,
        type: img.type,
      });
  }

  function addMangaData(mangaData) {
    //We can modify the url, adding segments (tables). In this case we are creating meetups ALWAYS .json!!!
    fetch("https://mangasite-b13fa-default-rtdb.firebaseio.com/mangas.json", {
      method: "POST",
      body: JSON.stringify(mangaData), //converts to JSON format anything
      headers: { "Content-Type": "application/json" }, //some API requiere this, it just states that we are passing a JSN file
    }).then(() => {
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
              alert(url);
            });
        }
      );

      fetch("https://mangasite-b13fa-default-rtdb.firebaseio.com/mangas.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          const posted = meetups[meetups.length - 1];
          const id = posted.id;
          writeThumbnail(mangaData.img, id);
        });

      alert("Manga uploaded");
      // history.replace("/");
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
