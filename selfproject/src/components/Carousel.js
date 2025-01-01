import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/embrace.jpeg?v=2.0.7" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/madani_qaida.jpeg?v=2.0.7" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/hifz_quran.jpeg?v=2.0.7" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/islamic_scholor.jpeg?v=2.0.7" alt="Sixth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/namaz_course.jpeg?v=2.0.7" alt="Sixth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.quranteacher.net/public_html/banner_images/prayer_times_application_banner.jpeg?v=2.0.7" alt="Seventh slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" visually-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" visually-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </div>
  )
}
