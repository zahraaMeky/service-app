"use client";
import { useEffect } from "react";

export function CarouselDefault() {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative mt-5 padding-container"
      data-twe-carousel-init
      data-twe-ride="carousel"
      
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <img src="/Slider1.png" className="block w-full h-[350px] object-cover" alt="Wild Landscape" />
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
        >
          <img src="/Slider23.png" className="block w-full h-[350px] object-cover" alt="Camera" />
        </div>
      </div>
    </div>
  );
}
