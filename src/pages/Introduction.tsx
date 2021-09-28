import { Link } from 'react-router-dom';

const Introduction = () => {
	return (
		<div className="Introduction">
			<div>
				<h1>
					Omscholen naar IT
				</h1>
				<p>
					Er zijn verschillende manieren om je om te scholen naar IT. In deze test kom je erachter welke type studie er het beste bij jou past op basis van bepaalde kenmerken. Je krijgt vragen over o.a. tijd, financieen en studie methodiek. Disclaimer: let op, deze quiz is slechts bedoeld als inspiratie! Volg vooral je hart!
				</p>
			</div>
			<div>
				<Link to='/quiz'>
					<button>
						Let's Go!
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Introduction;