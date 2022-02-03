import {createContext,useState} from 'react';

const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupID)=>{},
    itemIsFavorite:(meetupID)=>{}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function AddFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.concat(favoriteMeetup);
    });
  }
  function RemoveFavoriteHandler(meetupID) {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.filter((meetup) => meetup.id != meetupID);
    });
  }
  function itemIsFavoriteHandler(meetupID) {
      return userFavorites.some(meetup=>meetup.id===meetupID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:AddFavoriteHandler,
    removeFavorite:RemoveFavoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext
