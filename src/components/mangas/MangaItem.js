import Card from "../ui/Card";
import classes from "./Item.module.css";

function print() {
  alert("No he añadido los capítulos, que pena joven jeje")
}

function MangaItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image} onClick={print}>
          <img src={props.image} alt={props.title} />
          <div className={classes.title}>{props.title}</div>
        </div>
      </Card>
    </li>
  );
}

export default MangaItem;
