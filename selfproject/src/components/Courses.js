import React from "react";

export default function Courses() {
  return (
    <>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <div className="card-img">
              <img src="https://www.quranteacher.net/public_html/course_images/27nazra-quran.jpg"></img>
            </div>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src="https://www.quranteacher.net/public_html/course_images/16hifz-e-quran1.jpg"></img>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src="https://www.quranteacher.net/public_html/course_images/Aalim_course.jpg"></img>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
            <img src="https://www.quranteacher.net/public_html/course_images/40tarjama-quran.jpg"></img>
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* card */}

      <div className="bar bg-primary para text-white">
        <h1>Courses</h1>
      </div>
      <h1>Courses for Brothers</h1>
      <div className="Courses">
        <img src="https://www.quranteacher.net/public_html/course_images/27nazra-quran.jpg"></img>
        <h1>Madani Qaida-o-Nazra Course</h1>
        <p>
          Learn Quran Online with Quran Nazra (Quran reading) and become a
          reciter of Quran with proper pronunciation and correct origins. Being
          a Muslim, it is our religious duty to learn to read Quran and not just
          that we should read it as per its commandments and that is what you
          will learn in this course. If you have any doubts that your Quran
          recitation is not up to mark then take admission to learn the holiest
          book of Almighty.
        </p>
        <button className="button bg-primary para text-white">
          View Details
        </button>
      </div>
      <div className="Courses">
        <img src="https://www.quranteacher.net/public_html/course_images/16hifz-e-quran1.jpg"></img>
        <h1>Hifz Quran (Quran Memorization Course)</h1>
        <p>
          You can learn Quran and memorize it (Hifz e Quran) by sitting at home
          and taking admission in this online Quran teaching system. Quran
          teacher will teach you the proper recitation of Quran and will make
          you memorize complete Quran in a proper manner with respect to Arabic
          phonology. So, that you not only memorize Quran but can understand
          every word of it.
        </p>
        <button className="button bg-primary para text-white">
          View Details
        </button>
      </div>
      <div className="Courses">
        <img src="https://www.quranteacher.net/public_html/course_images/Aalim_course.jpg"></img>
        <h1>Aalim Course</h1>
        <p>
          Darse Nizami a course for those persons who has a desire to become
          Islamic scholar and serve the Ummah of Beloved Prophet (peace and
          blessings be upon him) and now, you can take admission in this noble
          course by sitting at home and from any corner of the globe.
        </p>
        <button className="button bg-primary para text-white">
          View Details
        </button>
      </div>
      <div className="Courses">
        <img src="https://www.quranteacher.net/public_html/course_images/40tarjama-quran.jpg"></img>
        <h1>Tarjamat ul Quran Course (Quran Translation)</h1>
        <p>
          An opportunity to learn Quran translation (Quran Tarjuma) and get to
          know the rulings and commandments of Almighty mentioned in the Holy
          Book because if we only recite Quran in Arabic surely, we attain
          rewards but we wouldn’t be able to understand the meanings.
        </p>
        <button className="button bg-primary para text-white">
          View Details
        </button>
      </div>
      <h1>Courses for Sisters</h1>
    </>
  );
}
