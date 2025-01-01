import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <div className="top bg-dark">
        ِ<div className="para text-white">
        <p>
          اَلْحَمْدُ لِلّٰہِ رَبِّ الْعٰلَمِیْنَ وَ الصَّلٰوۃُ وَالسَّلَامُ علٰی
          سَیِّدِ الْمُرْسَلِیْنَ اَمَّا بَعْدُ فَاَعُوْذُ بِاللّٰہِ مِنَ
          الشَیْطٰنِ الرَّجِیْمِ ؕ بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّ حِیْمِ
        </p>{" "}
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.quranteacher.net/web_assets/img/logo.jpeg"
            alt="logo"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                New Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Smart Admission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Donation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <img src="https://www.quranteacher.net/web_assets/images/cap_icon.png"></img>
                Student Login
              </a>
              {/* <div>
                <img
                  src="https://www.quranteacher.net/web_assets/images/logo-color.png"
                  style={{ width: "300px", height: "200px" }}
                ></img>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
