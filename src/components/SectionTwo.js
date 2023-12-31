import React from "react";

import imgStandOut from "../assets/images/desktop/image-stand-out.jpg";

function SectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="left row-start-2 row-end-3 lg:col-start-1 lg:col-end-2">
        <img className="w-full h-full" src={imgStandOut} alt="stand out" />
      </div>

      <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
        <div>
          <h3 className="text-5xl" style={{fontFamily: 'Fraunces'}}> Stand out to the right audience</h3>
          <p className="text-gray-500 my-4 lg:my-8 lg:text-xl" style={{fontFamily: 'Barlow'}}>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#" className="border-b-4 hover:border-b-4 hover:border-pink-500 text-xl font-bold uppercase" style={{fontFamily: 'Fraunces'}}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;