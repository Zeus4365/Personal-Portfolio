import classes from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = () => {
    return (
        <div className={classes.modal__backdrop}>
            <div className={classes.modal__whitespace}>
                <div className={classes.modal__nav}>
                    <div className={classes.activeline}>
                        <NavLink className={classes.modal__navdecoration} to='/Home'>
                            <h3>Home</h3>
                        </NavLink>
                        <div className={classes.modal__line}></div>
                    </div>
                    <div className={classes.activeline}>
                        <NavLink className={classes.modal__navdecoration} to='/Projects'><h3>Projects</h3></NavLink>
                        <div className={classes.modal__line}></div>
                    </div>
                    <div className={classes.activeline}>
                        <NavLink className={classes.modal__navdecoration} to='/About'><h3>About</h3></NavLink>
                        <div className={classes.modal__line}></div>
                    </div>
                </div>
                <div className={classes.modal__contactbtn}>
                    <a><h3>Get In Touch</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Modal;