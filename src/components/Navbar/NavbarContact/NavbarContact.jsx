import { NavLink } from "react-router-dom";
import style from './NavbarContact.module.css'

const NavbarContact = () => {
    return (
      <div>
        <NavLink className={style.link} to="/register">
          Sign up
        </NavLink>
        <NavLink className={style.link} to="/login">
          Log in
        </NavLink>
      </div>
    );
}

export default NavbarContact;