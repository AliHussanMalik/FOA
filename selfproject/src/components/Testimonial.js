import React from "react";

export default function Testimonial() {
  return (
    <div>
      <div className="bar bg-primary para text-white">
        <h1>Testimonial</h1>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="d-block">
              A brilliant service and personally I’ve learned the reading of
              Quran with proper Arabic accent and pronunciation by taking
              admission in the Nazra Quran (Quran Reading) Course. The person
              who teaches me Quran is very knowledgeable and explains each and
              every point of recitation in an efficient manner.
            </p>
          </div>
          <div className="carousel-item">
            <p className="d-block">
              I just completed Arabic Grammar course and I must say the
              individuals who are teaching online are extremely professional and
              knowledgeable persons. They elaborate every doubt of your mind and
              put it in front of you in a very simple manner so we can
              understand it quickly.
            </p>
          </div>
          <div className="carousel-item">
            <p className="d-block">
              I am in my 30’s right now but unfortunately I could not recite the
              holy Quran few months back but now by the grace of Allah now I can
              read many chapters of Holy Quran with respect to Arabic
              pronunciation and Insha’Allah I will soon complete my Quran.
            </p>
          </div>
          <div className="carousel-item">
            <p className="d-block">
              I am doing Faizan-e-Namaz course for few months and get to know
              about many mistakes which I was making in my Namaz and now I have
              learned Namaz in a proper manner as prescribed by Sharia.
            </p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}
