import { Link } from "react-router-dom";
import classes from "./ChapterItem.module.css";

function ChapterItem(props){

    return <div className={classes.container}>
        <Link to={{
            pathname: "/ShowChapter",
            state: {
              data: props.title,
            },
            data: {
                images: props.images
            }
          }} className={classes.link}>
            <strong>{props.title}</strong>
        </Link>
    </div>
}

export default ChapterItem;