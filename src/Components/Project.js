import classes from './Project.module.css';
import portfolio_Img from '../images/Portfolio_Img.JPG';

const Project = () => {
    return (
        <div className={classes.project__main}>
            <h1 className={classes.project__title}>Featured Work</h1>
            <section className={classes.project__section}>
                    <div className={classes.portfolio__text__left}>
                        <a><h2 className={classes.projects__name}>Portfolio Website</h2></a>
                        <p className={classes.projects__paragraph}>
                            This was the first large scale project I built outside a web development course.
                            I built the site using <div className={classes.bold}>ReactJS</div> and <div className={classes.bold}>vanilla css</div>. The site is compatible with most
                            mobile web browsers and desktop browsers. I used <div className={classes.bold}>react router v5</div> to handle page
                            routing and am hosting the site on <div className={classes.bold}>GitHub pages</div>.  
                        </p>
                    </div>
                    <div className={classes.portfolio__imageslinks}>
                        <img className={classes.portfolio_img} src={portfolio_Img}></img>
                        <div className={classes.portfolio__links}>
                            <div className={classes.portfolio__github}>
                                <a className={classes.portfolio__linkdecoration} href='https://github.com/Zeus4365/Personal-Portfolio'>
                                    <h3 className={classes.portfolio__linktitle}>GitHub</h3>
                                </a>
                            </div>
                            <div className={classes.portfolio__livelink}>
                                <a className={classes.portfolio__linkdecoration} href='https://github.com/Zeus4365/Personal-Portfolio'>
                                    <h3 className={classes.portfolio__linktitle}>Live Link</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.title__line}></div>
            </section>
                
        </div>
    );
};

export default Project;