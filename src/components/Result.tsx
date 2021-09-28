import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import bootcamp from '../images/bootcamp_no_text.png';
import online from '../images/online_no_text.png';
import trad from '../images/trad_no_text.png';
import traineeship from '../images/traineeship_no_text.png';
import alternative from '../images/alternative_no_text.png';
import { ResultWrapper } from '../App.styles';

//Styling
// transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
// transition: transform 1s;
const Logo = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

const AnimatedDiv = styled.div`
	transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
	transition: transform 1s;
`

//functional component result typescript
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

	const [show, doShow] = useState({
		itemBootcamp: false,
		itemOnline: false,
		itemTrad: false,
		itemTraineeship: false,
		itemAlternative: false
	});

	const bootcampRef = useRef(null),
		onlineRef = useRef(null),
		tradRef = useRef(null),
		traineeshipRef = useRef(null),
		alternativeRef = useRef(null);

	useLayoutEffect(() => {
		const topPosition = (element : any) => element.getBoundingClientRect().top;

		const bootcampPos = topPosition(bootcampRef.current),
			onlinePos = topPosition(onlineRef.current),
			tradPos = topPosition(tradRef.current),
			traineeshipPos = topPosition(traineeshipRef.current),
			alternativePos = topPosition(alternativeRef.current);
		
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;
			if (bootcampPos < scrollPos) {
				doShow(state => ({...state, itemBootcamp: true}));
			} else if (onlinePos < scrollPos) {
				doShow(state => ({...state, itemOnline: true}));
			} else if (tradPos < scrollPos) {
				doShow(state => ({...state, itemTrad: true}));
			} else if (traineeshipPos < scrollPos) {
				doShow(state => ({...state, itemTraineeship: true}));
			} else if (alternativePos < scrollPos) {
				doShow(state => ({...state, itemAlternative: true}));
			};
		};

			window.addEventListener('scroll', onScroll);
			return () => window.removeEventListener('scroll', onScroll); //cleanup function
		}, []); //no dependecies

	return (
		<>
		<ResultWrapper>
			<h1>Resultaat</h1>
				<section className="container">
					<div className="row">
						<div className="col-2 col-md-12">
							{/* <img src={bootcamp} alt="bootcamp icon"/> */}
							<AnimatedDiv animate={show.itemBootcamp} ref={bootcampRef}>
								<Logo src={bootcamp} alt="bootcamp logo"/>
								<br/>
								<CountUp end={percentage.bootcamp} duration={2}/>%
							</AnimatedDiv>
						</div>
						<div className="col-2 col-md-12">
							<Logo src={online} alt="zelfstudie icon"/>
							<br/>
							<CountUp end={percentage.online} duration={2}/>%
						</div>
						<div className="col-2 col-md-12">
							<Logo src={trad} alt="traditioneel onderwijs icon"/>
							<br/>
							<CountUp end={percentage.trad} duration={2}/>%
						</div>
						<div className="col-2 col-md-12">
							<Logo src={traineeship} alt="traineeship icon"/>
							<br/>
							<CountUp end={percentage.traineeship} duration={2}/>%
						</div>
						<div className="col-2 col-md-12">
							<Logo src={alternative} alt="alternatief onderwijs icon"/>
							<br/>
							<CountUp end={percentage.alternative} duration={2}/>%
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
			<div className="Result">
				<div className="ResultBootcamp">
					<Logo src={bootcamp} alt="bootcamp icon"/>
					<h2>Bootcamp</h2>
					<h3>{percentage.bootcamp}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultOnline">
					<Logo src={online} alt="zelfstudie icon"/>
					<h2>Zelfstudie</h2>
					<h3>{percentage.online}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultTrad">
					<Logo src={trad} alt="traditioneel onderwijs icon"/>
					<h2>Traditioneel onderwijs</h2>
					<h3>{percentage.trad}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultTraineeship">
					<Logo src={traineeship} alt="traineeship icon"/>
					<h2>Traineeship</h2>
					<h3>{percentage.traineeship}%</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
						<br/>
						Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
					</p>
				</div>
				<div className="ResultAlternative">
					<Logo src={alternative} alt="alternatief onderwijs icon"/>
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
		</>
	)


};

export default Result;