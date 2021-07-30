import React from 'react';
import Questions from '../data/questions.json';
import Answers from '../data/answers.json';

const Quiz = () => {
	let quizIndex = 0;

	// const startQuiz = async () => {
	// 	//start quiz, check state, which question is next?
	// }

	const checkAnswer = (e: React.MouseEvent<HTMLLIElement>) => {
		//add points to the different studie types
	}

	const nextQuestion = () => {
		quizIndex += 1;
		console.log('test: ' + quizIndex);
	}

	const showResult = () => {
		//naar Resultaat
	}

	return (
		<div className="Quiz">
			<div className='quizQuestion'>
				<h1>{Questions[quizIndex].question}</h1>
			</div>
			<div className="quizAnswer">
				<p>
					{Questions[quizIndex].options.map((option: string, index: number) =>
						<button key={index} className="optionButton">
							{option}
						</button>
					)}
				</p>
			</div>
			<button className="next" onClick={nextQuestion}>
				NEXT
			</button>
		</div>
	);
}

export default Quiz;