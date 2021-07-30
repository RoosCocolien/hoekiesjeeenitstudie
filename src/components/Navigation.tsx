import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="Navigation">
			<Link to='/'>
				<button>
					HOME
				</button>
			</Link>
			<Link to='/contact'>
				<button>
					CONTACT
				</button>
			</Link>
		</div>
	);
}

export default Navigation;