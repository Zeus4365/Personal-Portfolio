import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import logo from '../images/Zach Binowitz.jpg';
import { useState } from 'react';
import Hamburger from 'hamburger-react'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <header className={classes.header}>
            <div className={classes.burger}>
                <Hamburger size={48} direction='right' toggled={isOpen} toggle={setOpen} type='Tilt'></Hamburger>
            </div>
            <nav className={classes.nav}>
                <div className={classes.logo__wrapper}>
                    <NavLink to='/Home' className={classes.header__logo}>        
                            <img src={logo}></img>
                    </NavLink>
                </div>     
            
                <ul className={classes.nav__links}>
                    <li className={classes.nav__link}>
                        <NavLink className={classes.nav__link__item} to='/Home'>Home</NavLink>
                    </li>
                    <li className={classes.nav__link}>
                        <NavLink className={classes.nav__link__item} to='/Projects'>Projects</NavLink>
                    </li>
                    <li className={classes.nav__link}>
                        <NavLink className={classes.nav__link__item} to='/About'>About</NavLink>
                    </li>
                    <li className={classes.nav__link}>
                        <a href='mailto: zbinowitz@gmail.com' className={classes.nav__link__item__btn}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;