import { ColorRing } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.loader}>
    <ColorRing type="Rings" color="#2196f3" height={100} width={100} />
  </div>
);

export default Loader;
