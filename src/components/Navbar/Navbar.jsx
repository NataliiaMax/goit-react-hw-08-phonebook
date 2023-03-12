import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/users/users-selectors';
import NavbarContact from './NavbarContact/NavbarContact';
import style from './Navbar.module.css';

import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={style.navbar}>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      {isLogin && <NavLink to="/contacts">Contacts</NavLink>}
      {/* {!isLogin ? <UserMenu /> : <NavbarContact />} */}
      {!isLogin && <NavbarContact />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;
