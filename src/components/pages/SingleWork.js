import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Particles from "react-tsparticles";
import particlesConfig from "../Particles/particlesConfig";
import LoadingSpinner from "../Loading/LoadingSpinner";
import FadeIn from "react-fade-in";

const SingleWork = () => {
	const [singlePost, setSinglePost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		setIsLoading(true);
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
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
				}`
			)
			.then((data) => {
				setSinglePost(data[0]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError(err);
				setIsLoading(false);
			});
	}, [slug]);

	if (error) {
		return (
			<div className="relative md:absolute w-full min-h-screen flex justify-center items-center">
				<Particles
					params={particlesConfig}
					className="bg-black absolute object-cover w-full h-full"
				/>
				<div className="text-red-500 text-xl">
					Error loading work details. Please try again later.
				</div>
			</div>
		);
	}

	if (isLoading) {
		return <LoadingSpinner message="Loading work details..." />;
	}

	if (!singlePost) {
		return (
			<div className="relative md:absolute w-full min-h-screen flex justify-center items-center">
				<Particles
					params={particlesConfig}
					className="bg-black absolute object-cover w-full h-full"
				/>
				<div className="text-white text-xl">
					Work experience not found.
				</div>
			</div>
		);
	}

	return (
		<main className="relative md:absolute w-full h-screen overflow-hidden">
			<Particles
				params={particlesConfig}
				className="bg-black absolute object-cover w-full h-full"
			/>
			<Suspense fallback={<LoadingSpinner message="Loading content..." />}>
			<article className="relative flex justify-center min-h-screen pt-12 lg:pt-20 px-8">
				<div className="text-lg justify-center">
					<FadeIn transitionDuration={600} delay={200}>
						<div>
							<h1 className="text-3xl lg:text-6xl textColor">
								{singlePost.title}
							</h1>
						</div>
					</FadeIn>
					<FadeIn transitionDuration={600} delay={500}>
						<div className="py-2 prose lg:prose-xl max-w-full">
							<BlockContent
								blocks={singlePost.body}
								projectId="m7sihnvj"
								dataset="production"
								className="text-white"
							/>
						</div>
					</FadeIn>
				</div>
			</article>
			</Suspense>
		</main>
	);
};

export default SingleWork;
