import { Link } from "react-router-dom";
import classes from "./NavegationBar.module.css";

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
      <nav className={classes.responsiveNav}>
        <div className={classes.buttonContainer}>
          <li className={classes.responsiveButton}>
            <i class="fas fa-bars"></i>
          </li>
        </div>
        <div className={classes.responsiveContainer}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/MyBookmarks">Marcadores</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
