import { NavLink } from "react-router-dom";
// import {style} from '../NavbarContact.module.css'

const NavbarContact = () => {
    return (
        <div>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log in</NavLink>
        </div>
    )
}

export default NavbarContact;