import MangaItem from "./MangaItem";
import classes from "./MangaItem";

function MangaList(props) {
  return (
    <ul className={classes.list}>
      {props.mangas.map((manga) => (
        <MangaItem
          key={manga.id}
          id={manga.id}
          image={manga.image}
          title={manga.title}
          description={manga.description}
          /*items=items and then destructure it in the item component*/
        />
      ))}
    </ul>
  );
}

export default MangaList;
