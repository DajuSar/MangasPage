import { Route, Switch } from "react-router-dom";
import AllMangas from "./pages/AllMangas";
import ShowChapter from "./pages/ShowChapter";
import SingleManga from "./pages/SingleManga";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <AllMangas />
        </Route>
        <Route path="/SingleManga">
          <SingleManga />
        </Route>
        <Route path="/ShowChapter">
          <ShowChapter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
