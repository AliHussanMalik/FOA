import React from 'react'

export default function Welcome() {
  return (
    <div>
        <div className="body bg-primary">
        <div className="heading para text-white">
          <h1>Welcome to Quran Teacher</h1>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 bg-primary"
              type="search"
              placeholder="I want to learn "
              aria-label="Search"
            />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div className="dropdown-menu" aria-labelledby="arrowdown">
                <a className="dropdown-item" href="#">
                  Course 01
                </a>
                <a className="dropdown-item" href="#">
                  Course 02
                </a>
                <a className="dropdown-item" href="#">
                  Course 03
                </a>
                <a className="dropdown-item" href="#">
                  Course 04
                </a>
                <a className="dropdown-item" href="#">
                  Course 05
                </a>
                <a className="dropdown-item" href="#">
                  Course 06
                </a>
                <a className="dropdown-item" href="#">
                  Course 07
                </a>
                <a className="dropdown-item" href="#">
                  Course 08
                </a>
                <a className="dropdown-item" href="#">
                  Course 09
                </a>
                <a className="dropdown-item" href="#">
                  Course 10
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
                <div className="headings ">
                  <div className="first-container">
                  <h1>60000+</h1>
                  <p>Pass Out Students</p>
                  </div>
                  <div className="second-container">
                  <h1>49+</h1>
                  <p> Campuses</p>
                  </div>
                  <div className="third-container">
                  <h1>24000+</h1>
               <p>Enrolled Students</p>
                  </div>
                  <div className="fourth-container">
                  <h1>12+</h1>
                  <p>Years of Excellence</p>
                </div>
              </div>
        
    </div>
  )
}
