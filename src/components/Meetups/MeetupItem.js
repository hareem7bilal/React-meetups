import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favourites-context';

function MeetupItem(prop) {
  const favoritesCtx=useContext(FavoritesContext);
  const itemIsFavorite=favoritesCtx.itemIsFavorite(prop.id);
  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(prop.id);
    }
    else{
      favoritesCtx.addFavorite({
        id:prop.id,
        title: prop.title,
        description: prop.description,
        image: prop.image,
        address: prop.address
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={prop.image} alt={prop.title} />
        </div>
        <div className={classes.content}>
          <h3>{prop.title}</h3>
          <address>{prop.address}</address>
          <p>{prop.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite?'Remove From Favorites':'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;