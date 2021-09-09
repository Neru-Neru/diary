import { Names } from 'blockly';
import React from 'react';

const News = () => {
  return (
    <div style={{ height: '150px' }}>
      <div class="row h-100 my-2 border-top border-bottom">
        <div class="col-2 h-100 d-flex align-items-center justify-content-center">
          <div
            class="border d-flex align-items-center justify-content-center bg-success"
            style={{ width: '100px', height: '100px', 'border-radius': '50%' }}
          >
            <p class="m-0" style={{ 'text-align': 'center', 'line-height': '50%', 'font-size': '30px' }}>
              <i class="fas fa-glasses"></i>
            </p>
          </div>
        </div>
        <div class="col-10 h-100 p-3">
          <div class="h-75">
            <h4>先生からのコメント</h4>
            <p>
              サッカーでは3点もきめたんだね！せんせいも一回プレーを見てみたいな。<br></br>
              テストべんきょうもがんばってて、とてもえらいね！
            </p>
          </div>
          <p class="text-muted text-end">2021/09/17</p>
        </div>
      </div>

      <div class="row h-100 my-2 border-top border-bottom">
        <div class="col-2 h-100 d-flex align-items-center justify-content-center">
          <div
            class="border d-flex align-items-center justify-content-center bg-success"
            style={{ width: '100px', height: '100px', 'border-radius': '50%' }}
          >
            <p class="m-0" style={{ 'text-align': 'center', 'line-height': '50%', 'font-size': '30px' }}>
              <i class="fas fa-glasses"></i>
            </p>
          </div>
        </div>
        <div class="col-10 h-100 p-3">
          <div class="h-75">
            <h4>先生からのコメント</h4>
            <p>
              あさはやく起きられてすごいね！<br></br>
              夜ごはんはハンバーガーだったんだ。おいしいよね。せんせいも大好きだよ。
            </p>
          </div>
          <p class="text-muted text-end">2021/09/10</p>
        </div>
      </div>
    </div>
  );
};

export default News;
