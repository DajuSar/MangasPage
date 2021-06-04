import MangaList from "../components/mangas/MangaList";
import { useState, useEffect } from "react";
import firebase from "firebase";

function AllMangas() {
  const [loading, isLoading] = useState(true);
  const [loadedMangas, setloadedMangas] = useState([]);
  function modifyLoaded(value) {
    setloadedMangas(value);
  }

  async function deletemangaData(id) {
    console.log("Ingresaste a eliminar manga data Allmetups");
    firebase
      .database()
      .refFromURL("https://mangasite-b13fa-default-rtdb.firebaseio.com/mangas")
      .child(id)
      .remove();
    alert("Post has been deleted please reload");
  }

  useEffect(() => {
    isLoading(true);
    fetch("https://mangasite-b13fa-default-rtdb.firebaseio.com/mangas.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const mangas = [];

        for (const key in data) {
          const manga = {
            id: key,
            ...data[key],
          };
          mangas.push(manga);
        }
        isLoading(false);
        modifyLoaded(mangas);
        
      });
  }, []); //The dependencies section must have an external value ex: props, the useState can be omitted

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <section>
      <h1>All mangas</h1>
      <MangaList mangas={loadedMangas} deleteManga={deletemangaData} />
    </section>
  );
}

export default AllMangas;
