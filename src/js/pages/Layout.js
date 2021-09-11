import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { AuthProvider } from '../../context/AuthContext';

const Layout = (props) => {
  const location = useLocation();
  return (
    <div class="h-100" style={{ position: 'relative', overflow: 'hidden' }}>
      <Nav location={location} />
      <AuthProvider>{props.children}</AuthProvider>
      {/*<Footer></Footer>*/}
    </div>
  );
};

export default Layout;
