import React, { useEffect, useState } from 'react'
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { TransverseLoading } from "react-loadingg";
import FadeIn from 'react-fade-in';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = () => {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) {
        return (
            <div className="relative md:absolute w-full min-h-screen flex justify-center items-center">
                <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
                <TransverseLoading color={'#15cdfc'} size={'large'}/>
            </div>
        )
    }
        
    return (
        <main className="relative md:absolute w-full min-h-screen">
            <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
            <section className="relative lg:flex justify-center pt-20">
                <FadeIn transitionDuration={600} delay={200}>
                    <div className="flex justify-center pl-8 lg:pl-0 pb-5">
                        <img 
                            src={urlFor(author.authorImage).url()} 
                            className="rounded-md w-1/3 h-1/3 lg:w-60 lg:h-60 mr-8 border-2"
                            style={{borderColor: "#15cdfc"}} 
                            alt={author.name}
                        />
                    </div>
                </FadeIn>
                <div className="text-lg flex flex-col justify-center">
                    <FadeIn transitionDuration={600} delay={400}>
                        <div className="flex justify-center">
                            <h1 className="text-2xl md:text-4xl lg:text-6xl" style={{color:"#0281A1"}}>
                                Hey there. I am{" "}
                                <span style={{color:"#86E5FD"}}>Argenis Chang</span>
                            </h1>
                        </div>
                    </FadeIn>
                    <FadeIn transitionDuration={600} delay={700}>
                        <div className="p-5 lg:pl-0 prose lg:prose-xl text-white text-justify flex justify-center self-center">
                            <p>
                                I am a recent graduate from <span style={{color:"#15cdfc", fontWeight:'bold'}}>Simon Fraser University</span>. 
                                I am currently working at{" "} 
                                <a className="textColor font-bold hover:underline hover:textColor" href="https://www.rainforestautomation.com/" style={{color:"#15cdfc", fontWeight:'bold', textDecoration:'none'}} target="_blank" rel="noreferrer">Rainforest Automation</a> 
                                {" "}as a <span style={{color:"#15cdfc", fontWeight:'bold'}}>Software Developer</span>. 
                                I am always excited to learn new technologies and take on challenges in this evolving industry. <br/><br/>
                                My main focus these days is <span style={{color:"#15cdfc", fontWeight:'bold'}}>building scalable applications </span>
                                that allows users to have a great experience with ease to navigate and use all the features. <br/><br/>
                                I have recently <span style={{color:"#15cdfc", fontWeight:'bold'}}>built and launched my personal portfolio</span> as 
                                a side project using React, Sanity.io, and Netlify. <br/><br/>
                                Here are a few technologies I have been working with recently: <br/>
                                <FadeIn transitionDuration={600} delay={900}>
                                    <div className="flex flex-row">
                                        <div className="mr-10 lg:mr-20">
                                            <ul>
                                                <li>JavaScript (ES6+)</li>
                                                <li>React/React Native</li>
                                                <li>Node.js</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>C++</li>
                                                <li>Python</li>
                                            </ul>
                                        </div>
                                    </div>
                                </FadeIn>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    )
}

export default About
