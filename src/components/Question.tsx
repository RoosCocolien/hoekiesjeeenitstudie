import React from 'react';
//Interface
import { Score } from './Quiz';
// import { shuffleArray } from '../utils';

//Functional Component Question
type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	questionIndex: number;
	totalQuestions: number;
	answerResults: Score;
};

const Question: React.FC<Props> = ({question, answers, callback, /*userAnswer,*/ questionIndex, totalQuestions}) => (
	<div className='question'>
		<div className='quizQuestion'>
			<h1>{question}</h1>
			<p>Vraag: {questionIndex + 1} van {totalQuestions}</p>
		</div>
		<div className="quizAnswer">
			<p>
				{answers.map((answer: string, index: number) =>
					<button value={index} onClick={callback} key={index} className="optionButton">
						{answer}
					</button>
				)}
			</p>
		</div>
	</div>
);

export default Question;