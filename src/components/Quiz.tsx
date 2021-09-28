import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import Questions from '../data/questions.json';
// import { shuffleArray } from '../utils';
import { calculatePoints } from '../calculations/calculate';


//in future: create number arrays so you can save the results and give
//a more detailed description at the end of quiz
const TOTAL_QUESTIONS = 9;
export interface Score {
	bootcamp: number,
	trad: number,
	online: number,
	traineeship: number,
	alternative: number
}

const Quiz = () => {
	//create states
	const [loading, setLoading] = useState<boolean>(false); //start with false
	const [quizIndex, setQuizIndex] = useState<number>(0); //start at zero
	const [question, setQuestion] = useState<any>(Questions[quizIndex]); //type later
	const [userOptions, setUserOptions] = useState<number[]>([]);
	const [answerResults, setAnswerResults] = useState<Score>({bootcamp: 0, trad: 0, online: 0, traineeship: 0, alternative: 0});
	const [endOfQuiz, setEndOfQuiz] = useState<boolean>(false);
	const [currAnswer, setCurrAnswer] = useState<number>();


	const selectAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		// if (!endOfQuiz) {
			// 	// get user answer
			// 	console.log('quizIndex = ' + quizIndex + ' e is ' + e.currentTarget.value);
			// }
		//select and save current answer
		setCurrAnswer(parseInt(e.currentTarget.value, 10));
		//activate next button
		// (document.getElementById("nextBtn") as HTMLInputElement).disabled = false;
	}

	const nextQuestion = () => {
		//if selected answer
		//add selected answer to userOptions
		setLoading(true);
		if (currAnswer !== undefined) {
			console.log('test2');
			console.log('curr answer is: ' + currAnswer + ' of question ' + quizIndex);
			let newArray: number[] = [...userOptions];
			newArray.push(currAnswer);
			setCurrAnswer(undefined);
			setUserOptions(newArray);
		}
		setQuestion(Questions[quizIndex + 1]);
		setQuizIndex(quizIndex + 1);
		setLoading(false); //only necessary if I would work with a database or API
		// (document.getElementById("nextBtn") as HTMLInputElement).disabled = true;
	}

	const assignPoints = (points: any) => {
		console.log('test 2 assigngPoints');
		points.bootcamp = calculatePoints(userOptions, 'bootcamp');
		points.trad = calculatePoints(userOptions, 'trad');
		points.online = calculatePoints(userOptions, 'online');
		points.traineeship = calculatePoints(userOptions, 'traineeship');
		points.alternative = calculatePoints(userOptions, 'alternative');
		console.log(points);
		return (points);
	}

	const showResult = () => {
		//calculate
		let index = 0;
		while (index < userOptions.length) {
			console.log('index: ' + index + ' userOption: ' + userOptions[index]);
			index++;
		}
		console.log('test 1 before assignPoints');
		let points = assignPoints({bootcamp: 0, trad: 0, online: 0, traineeship: 0, alternative: 0});
		console.log('test 1 after assignPoints');
		setAnswerResults(points);
		setQuizIndex(0);
		setEndOfQuiz(true);
	}

	return (
		<div className="QuizPage">

			{endOfQuiz! || quizIndex !== TOTAL_QUESTIONS && 
				<div className="Quiz">
					<Question 
						questionIndex={quizIndex}
						totalQuestions={TOTAL_QUESTIONS}
						question={question.question}
						answers={question.options}
						answerResults={answerResults}
						callback={selectAnswer}
					/>
				</div>
			}
			{currAnswer !== undefined &&
				<div className="nextButton">
					<button id="nextBtn" className="next" onClick={nextQuestion}>
						NEXT
					</button>
				</div>
			}

			{quizIndex === TOTAL_QUESTIONS &&
					<div className="Quiz">
						<h1>
							Goed gedaan!
						</h1>
						<p>
							Je hebt het einde behaald!
							<button className="result" onClick={showResult}>
								RESULTAAT
							</button>
						</p>
					</div>
			}

			{endOfQuiz &&
				<Result 
					answerResults={answerResults}
				/>
			}
		</div>
	);
}

export default Quiz;