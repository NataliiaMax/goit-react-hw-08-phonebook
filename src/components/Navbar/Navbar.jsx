import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarContact from './NavbarContact/NavbarContact';
import UserMenu from './UserMenu/UserMenu';
import styles from './Navbar.module.css';
import { isUserLogin } from 'redux/users/users-selectors';
import items from './items';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>{elements}</ul>
      {!isLogin && <NavbarContact />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;
