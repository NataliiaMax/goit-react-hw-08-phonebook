import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from 'components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
