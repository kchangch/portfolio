import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Particles from "react-tsparticles";
import particlesConfig from "../Particles/particlesConfig";
import LoadingSpinner from "../Loading/LoadingSpinner";

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
		<main className="relative md:absolute w-full min-h-screen">
			<Particles
				params={particlesConfig}
				className="bg-black absolute object-cover w-full h-full"
			/>
			<Suspense fallback={<LoadingSpinner message="Loading content..." />}>
				<article className="container mx-auto">
					<header className="relative">
						<div className="absolute h-full w-full flex items-center justify-center p-8">
							<div className="bg-white bg-opacity-75 rounded p-12">
								<h1 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
								<div className="flex justify-center text-gray-800">
									<img
										src={singlePost.authorImage}
										alt={singlePost.name}
										className="w-10 h-10 rounded-full"
									/>
									<p className="flex items-center pl-2 text-2xl">{singlePost.name}</p>
								</div>
							</div>
						</div>
						<img
							src={singlePost.mainImage.asset.url}
							alt={singlePost.title}
							className="w-full object-cover rounded-t"
							style={{ height: "400px" }}
						/>
					</header>
					<div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-white">
						<BlockContent
							blocks={singlePost.body}
							projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
							dataset="production"
						/>
					</div>
				</article>
			</Suspense>
		</main>
	);
};

export default SingleWork;
