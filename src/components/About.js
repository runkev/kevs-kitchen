import React from 'react'
import Navbar from './Navbar'
import brownies_tray from '../assets/brownies_tray.jpg';
import { FaInstagram } from 'react-icons/fa';


const About = () => {
  return (
    <div className=" bg-cream min-h-screen font-hk-grotesk">
      <Navbar />
      <div
        className="bg-brown flex justify-center items-center bg-cover bg-no-repeat h-52 border-solid border-cookie border-y-4"
        style={{ backgroundImage: `url(${brownies_tray})` }}
      >
        <div className="">
          <h1 className="text-4xl font-bold text-center text-white uppercase">
            About
          </h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-start pt-4 pb-2 px-2">
        <p className="text-lg">
          Welcome to my recipe website! I created this site to share some of my
          favorite recipes with you. Tired of endlessly scrolling through long
          articles before getting to the recipes? Me too! That's why I designed
          this site to provide straightforward and easy access to delicious
          recipes without the extra fluff.
        </p>
        <p className="text-lg mt-4">
          Currently, I have a few recipes posted, but I plan on adding more in
          the future. I'm open to suggestions and requests, so if there's
          something you'd like to see, feel free to let me know! I want this
          site to be a helpful resource for anyone.
        </p>
        <p className="text-lg mt-4">
          Mobile-friendliness is important to me. I understand the importance of
          having recipes easily accessible in the kitchen, so I've designed the
          site to be mobile-friendly for your convenience.
        </p>
        <p className="text-lg mt-4">
          Since this project is in its early stages, there may be some rough
          edges. I apologize for any issues you encounter. Your feedback is
          valuable to me, so please don't hesitate to reach out with any
          suggestions or improvements you'd like to see!
        </p>
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/kevinpetow"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-cookie my-4"
        >
          <FaInstagram className="inline-block w-6 h-6 mr-1" />
        </a>
      </div>
    </div>
  );
}

export default About;
