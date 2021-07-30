import React from 'react';
import Questions from '../data/questions.json';
import Answers from '../data/answers.json';

const Quiz = () => {


	const startQuiz = async () => {
		//start quiz, check state, which question is next?
	}

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		//add points to the different studie types
	}

	const nextQuestion = () => {
		//next question
	}

	const showResult = () => {
		//naar Resultaat
	}

	return (
		<div className="Quiz">
			<h1>Question 1</h1>
			<ul>
				<li>Option 1</li>
				<li>Option 2</li>
				<li>Option 3</li>
				<li>Option 4</li>
			</ul>
			<button className="start" onClick={startQuiz}>
				NEXT
			</button>
		</div>
	);
}

export default Quiz;