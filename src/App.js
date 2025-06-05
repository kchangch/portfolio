import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/Loading/LoadingSpinner";

// Lazy load route components
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Project = lazy(() => import("./components/pages/Projects"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Work = lazy(() => import("./components/pages/Work"));
const SingleWork = lazy(() => import("./components/pages/SingleWork"));

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<BrowserRouter>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<Suspense fallback={<LoadingSpinner message="Loading page..." />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/work/:slug" element={<SingleWork />} />
					<Route path="/work" element={<Work />} />
					<Route path="/project" element={<Project />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
