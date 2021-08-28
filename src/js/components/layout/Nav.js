import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaBookOpen, FaRegEnvelope, FaHome } from "react-icons/fa"

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    return (
    <nav class="navbar navbar-expand fixed-top bluebell p-3" role="navigation">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" onClick={this.toggleCollapse.bind(this)}><a class="navbar-brand gray-char">海街Diary</a></Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/mypage" onClick={this.toggleCollapse.bind(this)}><a class="nav-link"><FaUserAlt size={30} color={'#f2f2f2'}/></a></Link>
              </li>
              <li class="nav-item d-flex align-items-center">
                <Link to="/editor" onClick={this.toggleCollapse.bind(this)}><a class="nav-link"><FaBookOpen size={30} color={'#f2f2f2'}/></a></Link>
              </li>
              <li class="nav-item d-flex align-items-center">
                <Link to="" onClick={this.toggleCollapse.bind(this)}><a class="nav-link"><FaRegEnvelope size={30} color={'#f2f2f2'}/></a></Link>
              </li>
              <li class="nav-item d-flex align-items-center">
                <Link to="/" onClick={this.toggleCollapse.bind(this)}><a class="nav-link"><FaHome size={30} color={'#f2f2f2'}/></a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}