import Image from 'next/image';
import React from 'react';

function Carousl() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            src="/1.jpg"
            alt="Carousel Image 1"
            width={1200} // Add the appropriate width
            height={500} // Add the appropriate height
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            src="/2.jpg"
            alt="Carousel Image 2"
            width={1200}
            height={500}
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            src="/p3.jpg"
            alt="Carousel Image 3"
            width={1200}
            height={500}
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            src="/p4.jpg"
            alt="Carousel Image 4"
            width={1200}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
}

export default Carousl;
