import { useLocation } from "react-router-dom";
import Card from "../components/ui/Card";
import ShowChapter from "./ShowChapter";
import classes from "./SingleManga.module.css";

function SingleManga(props) {
  const location = useLocation();
  const actualProps = location.state.data;

  return (
    <section>
      <h1>{actualProps.title}</h1>
      <div className={classes.container}>
        <Card>
          <img src={location.state.imgUrl} alt={actualProps.title} />
          <div className={classes.description}>
            <p>{actualProps.description}</p>
            <br></br>
            <p>Capitulos:</p>
          </div>
        </Card>
      </div>
      <div>
        <ShowChapter />
      </div>
    </section>
  );
}

export default SingleManga;
