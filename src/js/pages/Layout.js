import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { AuthProvider } from '../../context/AuthContext';

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.push('/');
  }
  render() {
    return (
      <div class="h-100">
        <Nav location={location} />
        <AuthProvider>{this.props.children}</AuthProvider>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Layout);
