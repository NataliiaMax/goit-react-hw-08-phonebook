import { useSelector,useDispatch } from 'react-redux';
import { getUser } from 'redux/users/users-selectors';
import { logout } from 'redux/users/users-operations';
// import style from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);
 const dispatch = useDispatch();

 const onLogout = () => {
   dispatch(logout());
  };
  
  return (
    <div>
      {name}, <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
