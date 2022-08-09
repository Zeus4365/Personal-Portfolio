import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Abouts from './pages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Home'/>
          </Route>
          <Route path='/Home'>
            <Home/>
          </Route>
          <Route path='/Projects'>
            <Projects/>
          </Route>
          <Route path='/About'>
            <Abouts/>
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
