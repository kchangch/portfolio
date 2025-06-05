import React, { useEffect, useState, Suspense } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import particlesConfig from "../Particles/particlesConfig";
import FadeIn from "react-fade-in";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Work = () => {
  const [postData, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[_type == "post"]{
					title,
					slug,
					mainImage{
						asset->{
							_id,
							url
						},
						alt
					}
				}`
      )
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="relative md:absolute w-full min-h-screen flex justify-center items-center">
        <Particles
          params={particlesConfig}
          className="bg-black absolute object-cover w-full h-full"
        />
        <div className="text-red-500 text-xl">
          Error loading work experience. Please try again later.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner message="Loading work experience..." />;
  }

  return (
    <main className="relative md:absolute w-full min-h-screen">
      <Particles
        params={particlesConfig}
        className="bg-black absolute object-cover w-full h-full"
      />
      <section className="container mx-auto justify-center relative pt-20">
        <FadeIn transitionDuration={600} delay={200}>
          <h1 className="text-2xl md:text-4xl lg:text-6xl flex justify-center textColor">
            Where I have Worked
          </h1>
        </FadeIn>
        <FadeIn transitionDuration={600} delay={500}>
          <h2 className="text-base p-3 md:text-xl lg:text-xl text-white flex justify-center pt-5">
            Some places where I had great experiences
          </h2>
        </FadeIn>
        <Suspense fallback={<LoadingSpinner message="Loading work items..." />}>
          <section className="grid lg:grid-cols-3 gap-8 p-8 lg:p-15">
            {postData &&
              postData.map((post, index) => (
                <FadeIn
                  key={post.slug.current}
                  transitionDuration={600}
                  delay={800}
                >
                  <article>
                    <Link
                      to={"/work/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span
                        className="block h-60 relative rounded shadow leading-snug bg-white lg:bg-gray-400 hover:bg-white justify-center flex items-center"
                        key={index}
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          className="w-full h-full rounded-r object-cover absolute"
                          style={{ height: "auto", maxWidth: "90%" }}
                        />
                      </span>
                    </Link>
                  </article>
                </FadeIn>
              ))}
          </section>
        </Suspense>
      </section>
    </main>
  );
};

export default Work;
