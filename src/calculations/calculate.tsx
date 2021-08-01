import Answers from '../data/answers.json'

const calculatePoints = (userAnswers: number[], study: string) => {
	let currStudy;
	let points;
	let index;
	let insideIndex;

	console.log('calc points');
	index = 0;
	points = 0;
	if (study === 'bootcamp') {
		currStudy = Answers.bootcamp;
	} else if (study === 'trad') {
		currStudy = Answers.trad;
	} else if (study === 'online') {
		currStudy = Answers.online;
	} else if (study === 'traineeship') {
		currStudy = Answers.traineeship;
	} else {
		currStudy = Answers.alternative;
	}
	console.log('calc points 2');
	while (index < userAnswers.length) {
		console.log('test 1');
		insideIndex = 0;
		while (insideIndex < currStudy[index].answers.length) {
			console.log('test 2');
			if (userAnswers[index] === currStudy[index].answers[insideIndex]) {
				points++;
			}
			insideIndex++;
		}
		index++;
	}
	return (Math.round(points / 9 * 100));
};

export { calculatePoints };
