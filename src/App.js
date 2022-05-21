import './App.css';
import Movies from './component/pages/movies';
import Search from './component/pages/search';
import MovieForm from './component/pages/movieForm';
import Profile from './component/pages/profile';
import Register from './component/pages/register';
import Saved from './component/pages/saved';
import { Switch } from 'react-router-dom';
import {Route}  from 'react-router-dom';
import NavBar from './component/navbar';
import MovieDetails from './component/pages/movieDetails';
import NotFound from './component/pages/notFound';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <main className='container'>
      <NavBar />

      <div className='content'>
        <Switch>
        <Route path='/search' component={Search} />
        <Route path='/add/:id?' component={MovieForm} />
        <Route path='/saved' component={Saved} />
        <Route path='/profile/:name?/:pro?' render={(props) => <Profile name="ikram" {...props} />} />
        <Route path='/register' component={Register} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route path='/movies' component={Movies} />
        <Route path='/' exact component={Movies} />
        <Route path='/not-found'  component={NotFound} />
        <Redirect to="/not-found"/>

        </Switch>
        
      
      </div>
    </main>
  );
}

export default App;
