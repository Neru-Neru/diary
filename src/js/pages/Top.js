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
          <div css={Circle(11, 18.6, 33.4)} class="circle">
            <Link to="/editor">
              <div css={CircleIn('#7abf66', '#fff')} class="circle-in">
                <p css={Text(18)}>
                  つかい<br></br>かた
                </p>
              </div>
            </Link>
          </div>
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
          <div css={Circle(60, 68.5, 50)} class="circle">
            <div css={CircleIn('#fff', '#000')} class="circle-in">
              <p css={Text(18)}>ロゴ</p>
            </div>
          </div>
        </div>

        <div css={Note}>
          <p css={NoteP}>「ぶろっこりー」は、日記を通してプログラミングを学ぶWebアプリケーションです。</p>
          <p css={NoteP}>
            プログラミングと聞くと、難しいイメージを持たれがちですが、身近な日記という題材を用いて、プログラミング経験をしてみませんか？
          </p>
          <p css={NoteP}>
            まずは、にっきをかくボタンから始めてみてください。その後は、みんなのにっきを覗いてみたり、じぶんのにっきを確認してみたりしてください。
          </p>
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
  width: 30%;
  height: 40%;
  position: absolute;
  bottom: 5%;
  left: 5%;
  overflow: hidden;
  border: solid 2px #999;
  padding: 2em 1em 0 2em;
  background: #fffff0;
`;

const NoteP = css`
  border-bottom: dashed 1px #ccc;
  line-height: 1.5;
  padding: 0.5em 0 0.5em 0.5em;
  margin: 0;
  &:last-of-type {
    border-bottom: none;
  }
  &::before {
    content: '';
    position: absolute;
    border-right: dotted 10px #ddd;
    height: 90%;
    top: 0.5em;
    left: 0.5em;
  }
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
