import { Route } from 'react-router-dom';
import About from '../Components/About';

const Abouts = () => {
    return (
        <section>
            <Route path='/About'>
                <About/>
            </Route>
        </section>
    );
};

export default Abouts;