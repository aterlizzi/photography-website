import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";
import p9 from "../images/p9.jpg";
import p10 from "../images/p10.jpg";
import p11 from "../images/p11.jpg";
import p12 from "../images/p12.jpg";
import p13 from "../images/p13.jpg";
import p14 from "../images/p14.jpg";
import p15 from "../images/p15.jpg";
import p16 from "../images/p16.jpg";
import p17 from "../images/p17.jpg";
import p18 from "../images/p18.jpg";
import p19 from "../images/p19.jpg";
import p20 from "../images/p20.jpg";
import p21 from "../images/p21.jpg";
import p22 from "../images/p22.jpg";
import p23 from "../images/p23.jpg";
import p24 from "../images/p24.jpg";
import p25 from "../images/p25.jpg";
import p26 from "../images/p26.jpg";
import p27 from "../images/p27.jpg";
import p28 from "../images/p28.jpg";
import p29 from "../images/p29.jpg";

function GalleryGraduationComponent({ scrollPosition }) {
  return (
    <section className="photo-container center">
      <div className="wrapper-grid">
        <div className="grid-one grid">
          <LazyLoadImage
            effect="blur"
            src={p1}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p2}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p3}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p4}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p5}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p6}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p20}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p21}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p22}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p23}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-two grid">
          <LazyLoadImage
            effect="blur"
            src={p7}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p8}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p9}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p10}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p11}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p12}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p24}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p25}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p26}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p29}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
        </div>
        <div className="grid-three grid">
          <LazyLoadImage
            effect="blur"
            src={p13}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p14}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p15}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p16}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p17}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p18}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p19}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p27}
            width={300}
            height={450}
            scrollPosition={scrollPosition}
          />
          <LazyLoadImage
            effect="blur"
            src={p28}
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
