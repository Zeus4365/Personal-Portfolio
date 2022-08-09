import classes from './Welcome.module.css';

const Welcome = () => {
    return (
            <div className={classes.title__body}>
                <p className={classes.title__greeting}>Hi, my name is</p>
                <h1 className={classes.title__myName}>Zach Binowitz.</h1>
                <h2 className={classes.title__subtitle}>I build things for the web.</h2>
                <p className={classes.title__introduction}>
                    I'm currently a Finance major at the Kelley School of Business, but I spend most of my free
                    time crafting digital experiences.  
                </p>
                <div className={classes.title__line}></div>
            </div>
    );
};

export default Welcome;