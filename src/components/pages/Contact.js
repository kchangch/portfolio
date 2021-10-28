import React from 'react';
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';
import { SocialIcon } from "react-social-icons"
import FadeIn from 'react-fade-in';

const Contact = () => {
    return (
        <main className="relative md:absolute w-full min-h-screen">
            <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
            <section className="relative lg:flex justify-center pt-20">
                <div className="text-lg flex flex-col justify-center">
                    <FadeIn transitionDuration={600} delay={200}>
                        <div className="flex justify-center">
                            <h1 className="text-2xl md:text-4xl lg:text-6xl textColor">
                                Get In Touch{" "}
                            </h1>
                        </div>
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={500}>
                    <div className="mt-10 mx-auto flex justify-center text-center text-sm lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            Although I am not currently looking for any new opportunities, my inbox is always open.
                        </p>
                    </div>
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={800}>
                    <div className="pt-5 mx-auto flex justify-center text-sm text-center lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            Whether you have a question or just want to say hi, I will do my best to get back to you!
                        </p>
                    </div>
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={1100}>
                    <div className="pt-5 mx-auto flex justify-center text-center text-sm lg:text-2xl text-white leading-relaxed lg:leading-snug">
                        <p>
                            You can find me on any of these sources:
                        </p>
                    </div>
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={1400}>
                        <div className="flex flex-row justify-center align-center p-10">
                            <div className="mb-5 mr-5 lg:mr-10 flex justify-center">
                                <SocialIcon url="https://github.com/kchangch/" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 60, width: 60}} />
                            </div>
                            <div className="mb-5 mr-5 lg:mr-10 flex justify-center">
                                <SocialIcon url="https://www.linkedin.com/in/kidjouchang/" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 60, width: 60}} />
                            </div>
                            <div className="flex justify-center">
                                <SocialIcon url="mailto: kidjou1990@hotmail.com" target="_blank" bgColor="#fff" fgColor="#000" style={{height: 60, width: 60}} />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    )
}

export default Contact
