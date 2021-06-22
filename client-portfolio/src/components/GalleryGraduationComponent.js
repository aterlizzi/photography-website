import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";
import g8 from "../images/g8.jpg";
import g9 from "../images/g9.jpg";
import g10 from "../images/g10.jpg";
import g11 from "../images/g11.jpg";
import g12 from "../images/g12.jpg";
import g13 from "../images/g13.jpg";


function GalleryGraduationComponent({ scrollPosition }) {
  return (
    <section className="photo-container center">
      <div className="wrapper-grid">
        <div className="grid-one grid">
          <LazyLoadImage
            effect="blur"
            src={g1}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g2}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g3}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g4}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g13}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-two grid">
          <LazyLoadImage
            effect="blur"
            src={g5}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g6}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g7}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g8}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-three grid">
          <LazyLoadImage
            effect="blur"
            src={g9}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g10}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g11}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={g12}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
        </div>
      </div>
    </section>
  );
}

export default trackWindowScroll(GalleryGraduationComponent);
