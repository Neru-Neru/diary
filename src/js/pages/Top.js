/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase';

const Top = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  if (!user) {
    return <Redirect to="/signin"></Redirect>;
  } else {
    return (
      <div css={Background} style={{ height: '100%' }}>
        <div css={Plate}>
          <img src="../../img/nab_bl_3.png" style={{ width: '100%' }}></img>
          <div css={Circle(11, 31.5, 52.2)} class="circle">
            <Link to="/editor">
              <div css={CircleIn('#988ccc', '#fff')} class="circle-in">
                <p css={Text(18)}>
                  にっき<br></br>を<br></br>つくる
                </p>
              </div>
            </Link>
          </div>
          <div css={Circle(11, 35.5, 66.8)} class="circle">
            <Link to="/mypage">
              <div css={CircleIn('#40e0d0', '#fff')} class="circle-in">
                <p css={Text(18)}>
                  じぶん<br></br>の<br></br>にっき
                </p>
              </div>
            </Link>
          </div>
          <div css={Circle(11, 61.3, 64.4)} class="circle">
            <Link to="/otherlist">
              <div css={CircleIn('#d8a474', '#fff')} class="circle-in">
                <p css={Text(18)}>
                  みんな<br></br>の<br></br>にっき
                </p>
              </div>
            </Link>
          </div>
          <div css={Circle(11, 46, 82.3)} class="circle">
            <Link to="/news">
              <div css={CircleIn('#fd7777', '#fff')} class="circle-in">
                <p css={Text(18)}>おしらせ</p>
              </div>
            </Link>
          </div>
        </div>

        <div css={Souce}>
          <img src="../../img/nab_bl_4.png" style={{ width: '100%' }}></img>
        </div>

        <div css={Note}>
          <img src="../../img/nab_bl_5.png" style={{ width: '100%', height: '100%' }}></img>
        </div>
      </div>
    );
  }
};

const Background = css`
  width: 100%;
  height: 90%;
  background-color: #8ac7de;
`;

const Plate = css`
  width: 90%;
  position: absolute;
  top: 5%;
  right: 20%;
  overflow: hidden;
`;

const Souce = css`
  width: 20%;
  position: absolute;
  bottom: -5%;
  right: 5%;
  overflow: hidden;
`;

const Note = css`
  width: 20%;
  height: 40%;
  position: absolute;
  bottom: 5%;
  left: 5%;
  overflow: hidden;
`;

const Circle = (width, top, left) => css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${top}%;
  left: ${left}%;
  width: ${width}%;
`;

const CircleIn = (bgcolor, hover) => css`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: ${bgcolor};
  color: #fff;
  transition: all 0.5s;
  &:hover {
    background-color: ${hover};
    color: ${bgcolor};
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
`;

export default Top;
