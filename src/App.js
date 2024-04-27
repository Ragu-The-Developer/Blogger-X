import React from 'react';
import Navbar from "./components/navbar";
import HeadSection from './components/headsection';
import PostSection from './components/postsection';
import JoinSection from './components/joinsection';
import Profile from './components/profile';
import Footer from './components/footer';
import './App.css';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<HeadSection />
			<PostSection />
			<JoinSection />
			<Profile />
			<Footer />
		</React.Fragment>

	);
}

export default App;