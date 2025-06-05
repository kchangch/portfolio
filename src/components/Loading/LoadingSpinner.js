import React from 'react';
import { PulseLoader } from 'react-spinners';
import Particles from "react-tsparticles";
import particlesConfig from "../Particles/particlesConfig";

const LoadingSpinner = ({ message }) => {
  return (
    <div className="relative md:absolute w-full min-h-screen flex flex-col justify-center items-center">
      <Particles
        params={particlesConfig}
        className="bg-black absolute object-cover w-full h-full"
      />
      <PulseLoader color="#15cdfc" size={15} margin={2} />
      {message && (
        <p className="text-white mt-4 text-lg">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 