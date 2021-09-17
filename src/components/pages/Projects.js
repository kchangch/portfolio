import React, { useState, useEffect } from 'react'
import sanityClient from "../../client";
import { TransverseLoading } from "react-loadingg";
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';

const Projects = () => {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    if (!projectData) {
        return (
            <div className="min-h-screen p-12 flex justify-center items-center">
                <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
                <TransverseLoading color={'#15cdfc'} size={'large'}/>
            </div>
        )
    }

    return (
        <main className="relative md:absolute w-full min-h-screen">
            <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/>
            <section className="container mx-auto justify-center relative pt-20">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl flex justify-center textColor">Things I've Built</h1>
                    <h2 className="text-base p-3 md:text-xl lg:text-xl text-white flex justify-center pt-5">Here are some of my projects I've worked along my career</h2>
                    <section className="grid lg:grid-cols-3 gap-8 p-8 lg:p-15">
                        { projectData && projectData.map((project, index) => (
                            <article className="relative rounded-lg bg-gray-400 p-5 hover:bg-white">
                                <h3 className="text-black text-3xl font-bold mb-2">
                                    <a 
                                        href={project.link} 
                                        alt={project.title} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>:{" "}
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <a 
                                        href={project.link} 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        className="textColor font-bold hover:underline hover:textColor text-xl"
                                    >
                                        View the Project{" "}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </section>
                </section>
        </main>
    )
}

export default Projects