import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { TransverseLoading } from "react-loadingg";
import Particles from "react-particles-js";
import particlesConfig from '../Particles/particlesConfig';

const SingleWork = () => {

    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug]);

    if (!singlePost) {
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
            <article className="relative flex justify-center min-h-screen pt-12 lg:pt-20 px-8">
                <div className="text-lg justify-center">
                    <div>
                        <h1 className="text-3xl lg:text-6xl textColor">
                            {singlePost.title}
                        </h1>
                    </div>
                    <div className="py-2 prose lg:prose-xl max-w-full">
                        <BlockContent blocks={singlePost.body} projectId="m7sihnvj" dataset="production" className="text-white"/>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default SingleWork
