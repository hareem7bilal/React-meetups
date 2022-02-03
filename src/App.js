import { Route,Routes}from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavMeetupsPage from './pages/FavMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/FavMeetups" exact element={<FavMeetupsPage />} />
        <Route path="/NewMeetups" exact element={<NewMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
