import { Route } from 'react-router-dom';
import Welcome from '../Components/Welcome';
import Projects from '../Components/Project';
import About from '../Components/About';

const Home = () => {
    return (
        <section>
            <Route path='/Home'>
                <Welcome/>
            </Route>
        </section>
    );
};

export default Home;