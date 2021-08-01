import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="Footer">
			<p>
				Made by Roos Cocolien, click
				<Link to='/info'>
					<button>
						here
					</button>
				</Link>
				 for more info.
			</p>
		</div>
	);
}

export default Footer;