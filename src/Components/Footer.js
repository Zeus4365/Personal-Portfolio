import classes from './Footer.module.css';

const Footer = () => {
    return (
            <div className={classes.footer__body}>
                <div className={classes.footer__set}>
                    <div className={classes.icon__combo}>
                        <i className='fa fa-google'></i> 
                        <a href='mailto: zbinowitz@gmail.com'><h3 className={classes.footer_brandName}>Gmail</h3></a>
                    </div>
                    <p className={classes.footer__description}>Want to reach out to me? Shoot me an email and I'll get back to you as soon as possible.</p>
                </div>
                <div className={classes.footer__set}>
                    <div className={classes.icon__combo}>
                        <i className='fa fa-github'></i>
                        <a href='https://github.com/Zeus4365'><h3 className={classes.footer_brandName}>GitHub</h3></a>
                    </div>
                    <p className={classes.footer__description}>Follow me and keep up to date with my repositories!</p>
                </div>
                <div className={classes.footer__set}>
                    <div className={classes.icon__combo}>
                        <i className='fa fa-linkedin'></i>
                        <a href="https://www.linkedin.com/in/iu-zachary-binowitz-ksb"><h3 className={classes.footer_brandName}>LinkedIn</h3></a>
                    </div>
                    <p className={classes.footer__description}>Let's connect on LinkedIn!</p>
                </div>
                <div className={classes.footer__set}>
                    <div className={classes.icon__combo}>
                        <i className='fa fa-twitter'></i>
                        <a href="https://twitter.com/ZachBinowitz?ref_src=twsrc%5Etfw"><h3 className={classes.footer_brandName}>Twitter</h3></a>
                    </div>
                    <p className={classes.footer__description}>Follow for web3 and defi content!</p>
                </div>
                <p className={classes.footer__copyright}>Copyright <span>&#169;</span> 2022 Zachary Binowitz</p>
            </div>
    );
};

export default Footer;