import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.about__body}>
            <div className={classes.about__totalText}>
                    <h1 className={classes.about__title}>About Me</h1>
                    <div className={classes.about__paragraphs}>
                        <h2 className={classes.subtitle}>Get to know me!</h2>
                        <p className={classes.about__aboutme}>
                            I am a full-stack web developer with a degree in Finance from the Kelley School of Business. 
                            I create websites that are fast, easy to use, and built with best practices.
                        </p>
                        <p className={classes.about__aboutme}>
                            I have experience in frontend and backend web development. I enjoy building experiences that
                            make the web more accessible for the greatest amount of users.
                        </p>
                        <p className={classes.about__aboutme}>
                            In my free time I research web3 and decentralized technologies because I want to affect change in the world.
                            I believe that the decentralized web will provide individuals with stronger global property rights and eventually
                            help create a freer, more just world. 
                        </p>
                    </div>
                <div className={classes.skillbox}>
                <h2 className={classes.subtitle}>My Skills</h2>
                        <ul className={classes.skillbox__list}>
                                <li className={classes.skill}>Javascript</li>
                                <li className={classes.skill}>Semantic HTML</li>
                                <li className={classes.skill}>Responsive CSS</li>
                                <li className={classes.skill}>React</li>
                        </ul>
                </div>
                <div className={classes.title__line}></div>
            </div>
        </div>
    );
};

export default About;