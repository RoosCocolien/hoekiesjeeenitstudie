import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="Home">
			<h1>Hoe kies je een IT-Studie?</h1>
			<Link to='/introduction'>
				<button>
					Start
				</button>
			</Link>
		</div>
	);
}

export default Home;