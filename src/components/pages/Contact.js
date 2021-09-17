import React from 'react';
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';
import { SocialIcon } from "react-social-icons"

const Contact = () => {
    return (
        <main className="relative md:absolute w-full min-h-screen">
            <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
            <section className="relative lg:flex justify-center pt-20">
                <div className="text-lg flex flex-col justify-center">
                    <div className="flex justify-center">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl textColor">
                            Get In Touch{" "}
                        </h1>
                    </div>
                    <div className="mt-10 mx-auto flex justify-center text-center text-sm lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            Although I’m not currently looking for any new opportunities, my inbox is always open.
                        </p>
                    </div>
                    <div className="pt-5 mx-auto flex justify-center text-sm text-center lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            Whether you have a question or just want to say hi, I’ll do my best to get back to you!
                        </p>
                    </div>
                    <div className="pt-5 mx-auto flex justify-center text-center text-sm lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            You can find me on any of these sources:
                        </p>
                    </div>
                    <div className="flex flex-row justify-center align-center p-10">
                        <SocialIcon url="https://github.com/kchangch/" className="mr-20" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 100, width: 100}} />
                        <SocialIcon url="https://www.linkedin.com/in/kidjouchang/" className="mr-20" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 100, width: 100}} />
                        <SocialIcon url="mailto: kidjou1990@hotmail.com" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 100, width: 100}} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
