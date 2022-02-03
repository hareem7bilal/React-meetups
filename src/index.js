import { BrowserRouter}from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FavoritesContextProvider} from './store/favourites-context';


ReactDOM.render(<FavoritesContextProvider><BrowserRouter><App /></BrowserRouter></FavoritesContextProvider>,
document.getElementById('root'));

