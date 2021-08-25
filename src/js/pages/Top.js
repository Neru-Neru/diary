import React from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calender";

const Top = () => {
  return (
        <div class="container">

          <div class="row h-75">
            <div class="col-md-8">
              <Calendar></Calendar>
            </div>

            <div class="col-md-4">
              <div class="h-75">
                <div class="h-100">
                    <Link to="/editor">
                        <div class="h-100 bg-light d-flex align-items-center justify-content-center">
                            <p class="size-30px"><i class="fas fa-book-open text-dark"></i></p>
                        </div>
                    </Link>
                </div>
              </div>

              <div class="h-25" style={{padding:"1em 0 0 0"}}>
                <div class="container h-100" style={{padding:"0"}}>
                    <div class="row h-100">
                        <div class="col-md-6">
                            <Link to="/">
                                <div class="h-100 bg-light d-flex align-items-center justify-content-center">
                                    <p class="size-30px"><i class="fas fa-envelope-open-text text-dark"></i></p>
                                </div>
                            </Link>
                        </div>

                        <div class="col-md-6">
                            <Link to="/user">
                                <div class="h-100 bg-light d-flex align-items-center justify-content-center">
                                    <p class="size-30px"><i class="fas fa-user text-dark"></i></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Top;