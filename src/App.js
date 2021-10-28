import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import SingleWork from "./components/pages/SingleWork";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SingleWork} path="/work/:slug" />
				<Route component={Work} path="/work" />
				<Route component={Project} path="/project" />
				<Route component={Contact} path="/contact" />
			</Switch>
		</Router>
	);
}

export default App;
