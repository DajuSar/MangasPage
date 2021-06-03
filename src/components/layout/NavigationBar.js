import { Link } from "react-router-dom";
import classes from './NavegationBar.module.css'

function NavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Mangas</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/MyBookmarks">Marcadores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
