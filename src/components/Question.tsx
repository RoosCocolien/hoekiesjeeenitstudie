import React from 'react';
// import { shuffleArray } from '../utils';

//Functional Component Question
type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionIndex: number;
	totalQuestions: number;
	answerResults: object;
};

const Question: React.FC<Props> = ({question, answers, callback, userAnswer, questionIndex, totalQuestions}) => (
	<div className='question'>
		<div className='quizQuestion'>
			<h1>{question}</h1>
			<p>Question: {questionIndex + 1}</p>
		</div>
		<div className="quizAnswer">
			<p>
				{answers.map((answer: string, index: number) =>
					<button onClick={callback} key={index} className="optionButton">
						{answer}
					</button>
				)}
			</p>
		</div>
	</div>
);

export default Question;