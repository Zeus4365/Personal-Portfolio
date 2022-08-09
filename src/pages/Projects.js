import { Route } from 'react-router-dom';
import Project from '../Components/Project';

const Projects = () => {
    return (
        <section>
            <Route path='/Projects'>
                <Project/>
            </Route>
        </section>
    );
};

export default Projects;