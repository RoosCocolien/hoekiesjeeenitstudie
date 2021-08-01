import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="Navigation">
			<Link to='/'>
				<button>
					Home
				</button>
			</Link>
			<Link to='/contact'>
				<button>
					Contact
				</button>
			</Link>
		</div>
	);
}

export default Navigation;