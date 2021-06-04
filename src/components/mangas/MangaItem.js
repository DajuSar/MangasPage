import Card from "../ui/Card";
import classes from "./Item.module.css";
import firebase from "firebase/app";
import { useState } from "react";
import { Link } from "react-router-dom";

function MangaItem(props) {
  const [url, setUrl] = useState("");

  function obtainImage() {
    firebase
      .storage()
      .ref("mangas/" + props.title + "/thumbnail/" + props.img)
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      });
  }

  return (
    <li className={classes.item} upload={obtainImage()}>
      <Card>
        <Link
          className={classes.link}
          to={{
            pathname: "/SingleManga",
            state: {
              data: props,
              imgUrl: url
            },
          }}
        >
          <div className={classes.image}>
            <img src={url} alt={props.title} />
            <div className={classes.title}>{props.title}</div>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default MangaItem;
