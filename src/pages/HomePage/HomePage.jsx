import { motion, AnimatePresence } from 'framer-motion';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <AnimatePresence>
        <motion.h1
          className={style.title}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
        >
          Phonebook
        </motion.h1>
      </AnimatePresence>
      <p className={style.text}>
        To start working, create your account or log in to your page
      </p>
    </div>
  );
};

export default HomePage;
