import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about__body}>
            <div className={classes.about__totalText}>
                    <h1 className={classes.about__title}>About Me</h1>
                    <div className={classes.about__paragraphs}>
                        <h2 className={classes.subtitle}>Get to know me!</h2>
                        <p className={classes.about__aboutme}>
                            I am a full-stack web developer with a degree in Finance from the <div className={classes.bold}>Kelley School of Business</div>. 
                        </p>
                        <p className={classes.about__aboutme}>
                            For the past two years I've been obsessed with <div className={classes.bold}>Web3</div> and <div className={classes.bold}>Decentralized Finance</div>, so much so that I started
                            to teach myself web development.   
                        </p>
                        <p className={classes.about__aboutme}>
                            Most of my web development knowledge was gained through <div className={classes.bold}>Udemy</div> courses and <div className={classes.bold}>freeCodeCamp</div>, however, my major required
                            that I take a formal course on database management. I'm always to eager to learn about new technologies and develop my skillset.
                        </p>
                    </div>
                <div className={classes.skillbox}>
                    <h2 className={classes.subtitle}>My Skills</h2>
                        <ul className={classes.skillbox__list}>
                                <li className={classes.skill}>Javascript</li>
                                <li className={classes.skill}>Semantic HTML</li>
                                <li className={classes.skill}>CSS3</li>
                                <li className={classes.skill}>React</li>
                                <li className={classes.skill}>GitHub</li>
                                <li className={classes.skill}>Git</li>
                                <li className={classes.skill}>Firebase</li>
                                <li className={classes.skill}>Responsive Web Design</li>
                                <li className={classes.skill}>VS Code</li>
                        </ul>
                </div>
                <div className={classes.title__line}></div>
            </div>
        </div>
    );
};

export default About;