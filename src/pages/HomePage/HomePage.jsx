import style from './HomePage.module.css';
import 'animate.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title} class="animate__animated animate__fadeInDown">
        Phonebook
      </h1>
      <p className={style.text}>
        To start working, create your account or log in to your page
      </p>
    </div>
  );
};

export default HomePage
