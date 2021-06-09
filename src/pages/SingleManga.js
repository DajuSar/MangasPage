import { Link, useLocation } from "react-router-dom";
import Card from "../components/ui/Card";
import ChaptersList from "../components/chapters/ChaptersList";
import classes from "./SingleManga.module.css";

function SingleManga(props) {
  const location = useLocation();
  const actualProps = location.state.data;
  
  function addChapterData(chapterData) {
    console.log(chapterData);
  }

  return (
    <section>
      <h1>{actualProps.title}</h1>
      <div className={classes.container}>
        <Card>
          <img src={location.state.imgUrl} alt={actualProps.title} />
          <div className={classes.description}>
            <p>{actualProps.description}</p>
            <br></br>
            <Link
              to={{
                pathname: "/NewChapter",
                state: {
                  data: actualProps,
                },
                data: {
                  addFunction: addChapterData,
                },
              }}
            >
              <button className={classes.button}>Add Chapter</button>
            </Link>
          </div>
        </Card>
      </div>
      <section>
        <div className={classes.container}>
          <Card>
            <div>
              <h3>Lista de Capitulos</h3>
              <ChaptersList data={actualProps}/>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}

export default SingleManga;
