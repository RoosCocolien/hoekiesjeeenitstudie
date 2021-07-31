import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import Questions from '../data/questions.json';
import { shuffleArray } from '../utils';

//in future: create number arrays so you can save the results and give
//a more detailed description at the end of quiz
const TOTAL_QUESTIONS = 9;
interface Score {
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
	const [question, setQuestion] = useState<any>(Questions[quizIndex].question); //type later
	const [userOptions, setUserOptions] = useState<string[]>(Questions[quizIndex].options);
	const [answerResults, setScore] = useState<Score>({bootcamp: 0, trad: 0, online: 0, traineeship: 0, alternative: 0});
	const [endOfQuiz, setEndOfQuiz] = useState<boolean>(false);


	const selectAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		//selectAnswer save it in variable
	}

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		//add points to the different studie types
	}

	const nextQuestion = () => {
		setLoading(true);
		setQuizIndex(quizIndex + 1);
		setQuestion(Questions[quizIndex].question);
		setUserOptions(Questions[quizIndex].options);
		setLoading(false); //only necessary if I would work with a database or API
		console.log('test: ' + quizIndex);
	}

	const showResult = () => {
		setQuizIndex(0);
		setEndOfQuiz(true);
	}

	return (
		<div className="QuizPage">

			{endOfQuiz! || quizIndex < TOTAL_QUESTIONS - 1 && 
				<div className="Quiz">
					<Question 
						questionIndex={quizIndex}
						totalQuestions={TOTAL_QUESTIONS}
						question={question}
						answers={userOptions}
						userAnswer={userOptions ? userOptions[quizIndex] : undefined}
						answerResults={answerResults}
						callback={checkAnswer}
					/>
					<button className="next" onClick={nextQuestion}>
						NEXT
					</button>
				</div>
				}
			
			{quizIndex === TOTAL_QUESTIONS - 1 &&
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