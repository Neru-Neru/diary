import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Calendar from './Calender';

const Top = () => {
  return (
    <div class="container" style={{ height: '100%' }}>
      <div class="row h-75">
        <div class="col-md-8">
          <Link to="/editor">
            <div class="h-100 d-flex align-items-center justify-content-center bluebell">
              <p class="size-30px">
                <i class="fas fa-book-open text-dark"></i>
              </p>
            </div>
          </Link>
        </div>

        <div class="col-md-4">
          <div class="h-75">
            <div class="h-100">
              <Link to="/otherlist">
                <div class="h-100 d-flex align-items-center justify-content-center bluebell">
                  <p class="size-30px">
                    <i class="fas fa-user-friends text-dark"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div class="h-25 pt-2">
            <div class="row h-100">
              <div class="col-md-6">
                <Link to="/news">
                  <div class="h-100 d-flex align-items-center justify-content-center bluebell">
                    <p class="size-30px">
                      <i class="fas fa-envelope-open-text text-dark"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div class="col-md-6">
                <Link to="/mypage">
                  <div class="h-100 d-flex align-items-center justify-content-center bluebell">
                    <p class="size-30px">
                      <i class="fas fa-user text-dark"></i>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
