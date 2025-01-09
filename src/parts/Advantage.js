/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Fade from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Technology Stack!</h1>
          <p className="font-light text-lg text-gray-400 text-center mb-16 sm:mb-10 xl:mb-12">
            Technologies we use to build your dream software.
          </p>
        </Fade>

        <div className="flex flex-wrap justify-center gap-[70px]">
          {data.flat().map((item, index) => (
            <Fade bottom triggerOnce delay={500 * index} key={index}>
              <div className="flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl shadow-lg border-none border-light-theme-purple transform transition duration-500 hover:scale-105 w-[256px] h-[150px]">
                <img src={item.imageUrl} alt={item.title} className={item.style} />
                <h2 className="text-theme-blue text-lg mb-2">{item.title}</h2>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
