import React from 'react';
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';

const Home = () => {

    return (
        <main className="relative md:absolute w-full min-h-screen">
            <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
            <section className="relative flex-col justify-center min-h-screen pt-48 sm:flex-shrink lg:pt-64 px-8 text-center">
                <div className="w-3/5 lg:w-2/5 mx-auto flex justify-center text-sm lg:text-xl textColor font-bold leading-relaxed lg:leading-snug">
                    <p>Hello, my name is</p>
                </div>
                <div className="w-full lg:w-2/5 mx-auto flex justify-center text-2xl lg:text-6xl text-gray-200 font-bold leading-relaxed lg:leading-snug">
                    <p>Argenis Chang.</p>
                </div>
                <div className="w-full lg:w-3/5 mx-auto flex justify-center text-2xl lg:text-6xl text-gray-500 font-bold leading-relaxed lg:leading-snug">
                    <p>I build things for the web.</p>
                </div>
            </section>
        </main>
    )
}

export default Home
