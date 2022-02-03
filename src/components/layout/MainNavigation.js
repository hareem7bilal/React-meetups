import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import {useContext} from 'react'
import FavoritesContext from '../../store/favourites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/FavMeetups'>Favourite Meetup <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
          <li>
            <Link to='/NewMeetups'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;