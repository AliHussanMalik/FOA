import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Body2 from "./Body2";
import Courses from "./Courses";
import Why from "./Why";
import "../App.css";
import Gallery from "./ImageGallery";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Welcome from "../Welcome";

export default function Body() {
  return (
    <div>
      <Navbar />
      <Header />
      <Carousel />
      <Welcome />
      <Body2 />
      <Courses />
      <Why />
      <ImageGallery />
      <VideoGallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
