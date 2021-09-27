import React from 'react';
import bootcamp from '../images/bootcamp_no_text.png';
import online from '../images/online_no_text.png';
import trad from '../images/trad_no_text.png';
import traineeship from '../images/traineeship_no_text.png';
import alternative from '../images/alternative_no_text.png';
import { ResultWrapper } from '../App.styles';

//functional component result
type Props = {
	answerResults: any;
}

const Result: React.FC<Props> = ({answerResults}) => {
	let percentage = {
		bootcamp : answerResults.bootcamp,
		online : answerResults.online,
		trad : answerResults.trad,
		traineeship : answerResults.traineeship,
		alternative : answerResults.alternative
	}
	function animatePercentage(object: number, start: number, end: number, duration: number) {
		let startTimestamp : number = -1;
		const step = (timestamp : number) => {
			if (startTimestamp < 0) startTimestamp = 0;
			const progress : number = Math.min((timestamp - startTimestamp) / duration, 1);
			let numberPrint : number = Math.floor(progress * (end - start) + start);
			console.log(numberPrint);
			// object.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	const bootcampElement: HTMLElement | null = document.getElementById('bootcamp');
	animatePercentage(0, 0, percentage.bootcamp, 5000);
	return (
		<ResultWrapper>
			<h1>Resultaat</h1>
				<section className="container">
					<div className="row">
						<div className="col-2 col-md-12">
							<img src={bootcamp} alt="bootcamp icon"/>
							<br/>
							<div id="bootcamp"></div>
							{/* <div id="bootcamp">{percentage.bootcamp}%</div> */}
						</div>
						<div className="col-2 col-md-12">
							<img src={online} alt="zelfstudie icon"/>
							<br/>
							<div id="online">{percentage.online}%</div>
						</div>
						<div className="col-2 col-md-12">
							<img src={trad} alt="traditioneel onderwijs icon"/>
							<br/>
							<div id="trad">{percentage.trad}%</div>
						</div>
						<div className="col-2 col-md-12">
							<img src={traineeship} alt="traineeship icon"/>
							<br/>
							<div id="traineeship">{percentage.traineeship}%</div>
						</div>
						<div className="col-2 col-md-12">
							<img src={alternative} alt="alternatief onderwijs icon"/>
							<br/>
							<div id="alternative">{percentage.alternative}%</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
							</p>
						</div>
					</div>
				</section>

			{/* Onderstaande code kan ik ook in een component stoppen.
			En dan kan je met pijltjes naar de volgende onderdelen (slideshow idee) */}
			<div className="Result">

				<div className="ResultBootcamp">
					<img src={bootcamp} alt="bootcamp icon"/>
					<h2>Bootcamp</h2>
					<h3>{percentage.bootcamp}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultOnline">
					<img src={online} alt="zelfstudie icon"/>
					<h2>Zelfstudie</h2>
					<h3>{percentage.online}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultTrad">
					<img src={trad} alt="traditioneel onderwijs icon"/>
					<h2>Traditioneel onderwijs</h2>
					<h3>{percentage.trad}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultTraineeship">
					<img src={traineeship} alt="traineeship icon"/>
					<h2>Traineeship</h2>
					<h3>{percentage.traineeship}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultAlternative">
					<div className="ResultImage">
						<img src={alternative} alt="alternatief onderwijs icon"/>
					</div>
					<h2>Alternatief onderwijs</h2>
					<h3>{percentage.alternative}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
			</div>
		</ResultWrapper>
	)
};

export default Result;