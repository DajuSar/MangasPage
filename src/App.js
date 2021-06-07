import { Route, Switch } from "react-router-dom";
import AllMangas from "./pages/AllMangas";
import ShowChapter from "./components/chapters/ShowChapter";
import SingleManga from "./pages/SingleManga";
import NavigationBar from './components/layout/NavigationBar'
import NewManga from "./pages/NewManga";
import NewChapter from "./components/chapters/NewChapter";

function App() {
  return (
    <div>
      <NavigationBar />
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
        <Route path="/AddManga">
          <NewManga />
        </Route>
        <Route path="/NewChapter">
          <NewChapter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
