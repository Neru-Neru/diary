/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBookOpen, FaRegEnvelope, FaHome } from 'react-icons/fa';
import { auth } from '../../../firebase';
import { useHistory } from 'react-router-dom';

const Nav = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut();
    history.push('/signin');
  };

  return (
    <div
      css={Navbar(
        props.location.pathname === '/' ? 20 : 12,
        props.location.pathname === '/signin' || props.location.pathname == '/howto' ? 'none' : 'block'
      )}
    >
      <Link to="/">
        <div css={NavBlock(50, 10)} style={{ display: props.location.pathname === '/' ? 'none' : 'block' }}>
          <div css={HoverDiv}>
            <img src="../../../img/nab_bl_2.png" style={{ height: '100%' }}></img>
            <p css={Text(props.location.pathname === '/' ? 16 : 12)}>トップ</p>
          </div>
        </div>
      </Link>
      <div css={NavBlock(50, 20)} style={{ display: props.location.pathname === '/' ? 'none' : 'block' }}>
        <div css={HoverDiv} onClick={handleLogout}>
          <img src="../../../img/nab_bl_1.png" style={{ height: '100%' }}></img>
          <p css={Text(props.location.pathname === '/' ? 16 : 12)}>
            ログ<br></br>アウト
          </p>
        </div>
      </div>
      <Link to="/editor">
        <div css={NavBlock(50, 60)}>
          <div css={HoverDiv}>
            <img src="../../../img/nab_bl_1.png" style={{ height: '100%' }}></img>
            <p css={Text(props.location.pathname === '/' ? 16 : 12)}>
              にっき<br></br>を<br></br>かく
            </p>
          </div>
        </div>
      </Link>
      <Link to="/mypage">
        <div css={NavBlock(props.location.pathname === '/' ? 80 : 50, 70)}>
          <div css={HoverDiv}>
            <img src="../../../img/nab_bl_2.png" style={{ height: '100%' }}></img>
            <p css={Text(props.location.pathname === '/' ? 16 : 12)}>
              じぶん<br></br>の<br></br>にっき
            </p>
          </div>
        </div>
      </Link>
      <Link to="/otherlist">
        <div css={NavBlock(50, 80)}>
          <div css={HoverDiv}>
            <img src="../../../img/nab_bl_1.png" style={{ height: '100%' }}></img>
            <p css={Text(props.location.pathname === '/' ? 16 : 12)}>
              みんな<br></br>の<br></br>にっき
            </p>
          </div>
        </div>
      </Link>
      <Link to="/news">
        <div css={NavBlock(props.location.pathname === '/' ? 80 : 50, 90)}>
          <div css={HoverDiv}>
            <img src="../../../img/nab_bl_2.png" style={{ height: '100%' }}></img>
            <p css={Text(props.location.pathname === '/' ? 16 : 12)}>おしらせ</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Navbar = (height, signin) => css`
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  width: 100%;
  height: ${height}%;
  display: ${signin};
`;

const NavBlock = (top, left) => css`
  height: 80%;
  position: absolute;
  transform: translate(-50%, -50%) rotateZ(0deg);
  top: ${top}%;
  left: ${left}%;
  z-index: 1;
  transition: all 0.75s ease-in-out;
  color: #222;
  &:hover {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
`;

const Text = (fontsize) => css`
  position: absolute;
  margin: 0;
  font-size: ${fontsize}px;
  text-decoration: none;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1120px) {
    font-size: 8px;
  }
`;

const HoverDiv = css`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

export default Nav;
