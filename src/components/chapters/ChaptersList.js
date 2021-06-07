import Card from "../ui/Card";
import classes from "./ChaptersList.module.css";
function ChaptersList() {
  return (
    <section>
      <div className={classes.container}>
        <Card>
          <div>
            <h3>Lista de Capitulos</h3>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ChaptersList;
