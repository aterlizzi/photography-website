import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import sport1 from "../images/sport1.jpg";
import sport2 from "../images/sport2.jpg";
import sport3 from "../images/sport3.jpg";
import sport4 from "../images/sport4.jpg";
import sport5 from "../images/sport5.jpg";
import sport6 from "../images/sport6.jpg";
import sport7 from "../images/sport7.jpg";
import sport8 from "../images/sport8.jpg";
import sport9 from "../images/sport9.jpg";
import sport10 from "../images/sport10.jpg";
import sport11 from "../images/sport11.jpg";
import sport12 from "../images/sport12.jpg";
import sport13 from "../images/sport13.jpg";
import sport14 from "../images/sport14.jpg";
import sport15 from "../images/sport15.jpg";
import sport16 from "../images/sport16.jpg";
import sport17 from "../images/sport17.jpg";
import sport18 from "../images/sport18.jpg";
import sport19 from "../images/sport19.jpg";

function GallerySportComponent({ scrollPosition }) {
  return (
    <section className="photo-container center">
      <div className="wrapper-grid">
        <div className="grid-one grid">
          <LazyLoadImage
            effect="blur"
            src={sport1}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport2}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport3}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport4}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport5}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport6}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-two grid">
          <LazyLoadImage
            effect="blur"
            src={sport7}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport8}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport9}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport10}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport11}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport12}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-three grid">
          <LazyLoadImage
            effect="blur"
            src={sport13}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport14}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport15}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport16}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport17}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport18}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={sport19}
            width={300}
            height={200}
            scrollPosition={scrollPosition}
          />
        </div>
      </div>
    </section>
  );
}

export default trackWindowScroll(GallerySportComponent);
