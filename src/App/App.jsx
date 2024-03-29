import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { current } from 'redux/users/users-operations';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Layout from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './App.module.css';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPages/LoginPages'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home"></Navigate>} />
            <Route path="home" element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}
