import MangaItem from "./MangaItem";
import classes from "./List.module.css";

function MangaList(props) {
  return (
    <ul className={classes.list}>
      {props.mangas.map((manga) => (
        <MangaItem
          key={manga.id}
          id={manga.id}
          img={manga.thumbnail.name}
          title={manga.title}
          description={manga.description}
          /*items=items and then destructure it in the item component*/
        />
      ))}
    </ul>
  );
}

export default MangaList;
